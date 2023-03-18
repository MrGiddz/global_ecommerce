import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import List from '../../components/List';
import useFetch from '../../hooks/useFetch';
import './style.scss'

const Products = () => {

  const {id} = useParams();
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState()
  const [selectedSubCategories, setselectedSubCategories] = useState([])


  const {data, loading, error} = useFetch(`/subcategories?[filters][categories][id][$eq]=${id}`)
  const {data: category, loading: loadingCategory, error: categoryError} = useFetch(`/categories?[filters][id]=${id}&populate=*`)
  
  console.log({category})


  const handleChange = (e) => {
    const value = e.target.value
    const isChecked = e.target.checked;

    setselectedSubCategories(isChecked ? [...selectedSubCategories, value] : selectedSubCategories.filter(item => item != value))
  }

  console.log(selectedSubCategories)

  return (
    <div className="products">
        <div className="left">
            <div className="filterItem">
                <h2>Product Categories</h2>
                {
                  data?.map(item => 
                    <div className="inputItem" key={item.id}>
                        <input type="checkbox" id={item.id} value={item.id} onChange={handleChange}/>
                        <label htmlFor="1">{item.attributes.title}</label>
                    </div>
                  )
                }
  
            </div> 
            <div className="filterItem">
                <h2>Filter by Price</h2>
                <div className="inputItem">
                    <span>0</span>
                    <input 
                      type="range" 
                      name="" 
                      id="" 
                      min={0} 
                      max={1000}
                      onChange={(e) => setMaxPrice(e.target.value)}
                    />
                    <span>{maxPrice}</span>
                </div>
            </div>
            <div className="filterItem">
                <h2>Sort By</h2>
                <div className="inputItem">
                    <input type="radio" name="price" value="asc" id="asc" onChange={e => setSort("asc")} />
                    <label htmlFor="asc">Price (Lowest First)</label>
                </div>
                <div className="inputItem">
                    <input type="radio" name="price" value="desc" id="desc" onChange={e => setSort("desc")}/>
                    <label htmlFor="desc">Price (Highest First)</label>
                </div>
            </div>
        </div>
        <div className="right">
            <img className='catImg' src={process.env.REACT_APP_UPLOAD_URL + category?.map(item => item.attributes?.img?.data?.attributes?.url)} alt="" />
            <List catId={id} maxPrice={maxPrice} sort={sort} subCats={selectedSubCategories}/>
        </div>
    </div>
  )
}

export default Products