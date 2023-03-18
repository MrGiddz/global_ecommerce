import React, { useEffect } from 'react';
import Card from '../Card';
import "./style.scss"
import useFetch from '../../hooks/useFetch';

const FeaturedProducts = ({type}) => {

    const {data, loading, error} = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`)

    return (
        <div className="featuredProducts">
            <div className="top">
                <h1>{type} Products</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore quasi, 
                    quaerat ratione mollitia itaque laudantium ut doloribus nemo dicta aliquid consectetur deleniti repellat neque fugit id tempora sequi consequuntur magni?
                    Autem doloribus enim consectetur eaque illum commodi,
                </p>
            </div>
            <div className="bottom">
               {error ? "Something went wrong!!!"
                : (loading
                ? "loading"
                : data?.map(item => <Card item={item} key={item.id} />))}
            </div>
        </div>
    )
}

export default FeaturedProducts