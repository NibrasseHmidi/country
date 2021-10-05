import React, { useEffect } from 'react'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux'
import ProductComponent from './ProductComponent';
import { setProducts } from '../redux/actions/productActions';
import Table from './Table';


const ProductListing = () => {
    const products = useSelector(state => state);
    const dispatch = useDispatch();

    const fetchProduct = async () => {
       try {
           const response = await axios.get("https://disease.sh/v3/covid-19/countries")
           console.log(response.data);
        dispatch(setProducts(response.data));
           
       } catch (error) {
           console.log(error);
           
       }
        
    };
    useEffect(() => {
        fetchProduct();
    }, [])
    return (
      <div style={{display:"flex" , width:"1000px"}}>
        <div className="ui grid container " style={{margin:85}} >
       
       
            <ProductComponent />
          
           
        </div>
            <Table/>
            </div> 
    )
}

export default ProductListing
