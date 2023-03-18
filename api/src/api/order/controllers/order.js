'use strict';
const stripe = require('stripe')(process.env.STRIPE_KEY);

/**
 * order controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::order.order', ({strapi}) => ({
    async create(ctx){
        const {products} = ctx.request.body;
        const line_items = await Promise.all(
            products.map(async product => {
                const item = await strapi.service("api::product.product").findOne(product.id);
            
                console.log(product.img)
                return {
                    price_data: {
                        currency: "usd",
                        product_data: {
                            name: item.title,
                            images: ["https://images.pexels.com/photos/13959117/pexels-photo-13959117.jpeg?auto=compress&cs=tinysrgb&w=800"]
                        },
                        unit_amount: item.price*100
                    },
                    quantity: product.quantity
                }
            })
        )
        // console.log({line_items}) 
        try {
            const session = await stripe.checkout.sessions.create({
                line_items,
                mode: 'payment',
                success_url: `${process.env.CLIENT_URL}?success=true`,
                cancel_url: `${process.env.CLIENT_URL}?success=false`,
                shipping_address_collection: {allowed_countries: ['US', 'CA', 'FR', 'NG']},
                payment_method_types: ['card']
              });

              console.log({session})

              await strapi.service("api::order.order").create({data: {
                products,
                stripeid: session.id
              }});
              return {stripeSession: session}
        } catch (error) {
            ctx.response.status = 500
            console.log(error)
            return error
        }
    }
}));
