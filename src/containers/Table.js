import axios from 'axios';
import numeral from 'numeral'
import "./Table.css";
import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { TabCasses } from '../redux/actions/productActions';

const Table = () => {
    const products = useSelector((state) => state.allProducts.products);
   const dispatch = useDispatch();
  const fetchCasess= async () => {
       try {
           const response = await axios.get("https://disease.sh/v3/covid-19/countries")
           console.log(response.data);
        dispatch(TabCasses(response.data));
           
       } catch (error) {
           console.log(error);
           
       }
        
    };
    useEffect(() => {
       fetchCasess();
    }, [])
    return (
        <div>
       
            <div className="table">
             <h1>Live Cases by Country</h1>
      {products.map((product) => (
        <tr>
          <td>{product.country}</td>
          <td>
            <strong>{numeral(product.cases).format("0,0")}</strong>
          </td>
        </tr>
      ))}
    </div>
        </div>
    )
}

export default Table

