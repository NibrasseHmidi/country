import { FormControl, MenuItem, Select } from '@material-ui/core'
import axios from 'axios'
import React, { useEffect } from 'react'
import "./Header.css";

import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { filterProductsCategory } from '../redux/actions/productActions'

const Header = () => {
const products = useSelector((state) => state.allProducts.products);
   const dispatch = useDispatch();
  const fetchCountry= async () => {
       try {
           const response = await axios.get("https://disease.sh/v3/covid-19/countries")
           console.log(response.data);
        dispatch(filterProductsCategory(response.data));
           
       } catch (error) {
           console.log(error);
           
       }
        
    };
    useEffect(() => {
        fetchCountry();
    }, [])
    return (
        <div style={{backgroundColor:"white"}} className="ui fixed menu">
            <div className="app__header">
            <Link to="/"><h1 className="app__h1">COVID-19 2021</h1></Link>
                
                
               <FormControl className="app__dropdown">
            <Select variant="outlined">
              <MenuItem value="worldwide">Worldwide</MenuItem>
               
              { products.map((product) =>(

           <Link to={`/product/${product.country}`}>   

           <MenuItem value={product.country}>{product.country}</MenuItem>
           </Link> 
              ))} 
              
            </Select>
          </FormControl>
                </div>
        </div>
    )
}

export default Header
