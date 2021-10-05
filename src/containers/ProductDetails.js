import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
import GoogleMapReact from 'google-map-react';
import "./Details.css";
import { useDispatch, useSelector } from 'react-redux';
import { selecteProducts, removeSelectedProducts } from '../redux/actions/productActions';
const ProductDetails = () => {
    const product = useSelector((state) => state.product);
      
    const {cases, deaths, recovered, countryInfo ,critical,population,continent} = product;
  const {country} = useParams();
    const dispatch = useDispatch();


    const fetchProductDetail = async () => {
 try {
           const response = await axios.get(`https://disease.sh/v3/covid-19/countries/${country}`)
           console.log(response.data);
        dispatch(selecteProducts(response.data));
           
       } catch (error) {
           console.log(error);
           
       }


       
       
    }
    useEffect(() => {
        if (country && country !== "") fetchProductDetail();
        return () => {
            dispatch(removeSelectedProducts());
        }

    }, [country])
    return (
       <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
       <div class="header">
  <div id="title" class="title">COVID-19 STATISTICS</div>

<div className="flex">

<div className="img">
<img src={countryInfo.flag} alt="..." />
<div className="details"><h2>{country}</h2>
<span> <h5>Population:</h5> <p>{population}</p></span>
<span> <h5>Region:</h5> <p>{continent}</p></span>
</div>

</div>
<div className="flex-carde">
  <div id="total" class="carde">
    <div class="stats">
    <i class="fas fa-user-friends fa-3x"></i>
     <h5>Confirmed Cases</h5> 
      <div class="number">{cases}</div>
   
    </div>    
  </div>
  <div id="recover" class="carde">
    <div class="stats">
  
    <i class="fas fa-check-circle fa-3x"></i>
      <h5>Recovered</h5>
      <div class="number">{recovered}</div>
     
    </div> 
  </div>
     <div id="sick" class="carde">
    <div class="stats">
<i class="fas fa-bed fa-3x"></i>
            <h5>Critical Cases</h5>

      <div class="number">{critical}</div>
      
    </div> 
  </div>
 
  
  <div id="dead" class="carde">
    <div class="stats">
<i class="fas fa-heart-broken fa-3x"></i>
            <h5>Total Deaths</h5>

      <div class="number">{deaths}</div>
     
    </div> 
  </div>

 </div>
  </div>
   <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact bootstrapURLKeys={{ key: "AIzaSyD1APX0FGpcFEElHcd27OOQS2L4aMRzCXI" }}
          defaultCenter={{ lat: 59.95,
      lng: 30.33}}
          defaultZoom={10}
        >
          <div lat={59.955413} lng={30.337844}>My Marker</div>
        </GoogleMapReact>
      </div>
</div>

      )}
    </div>    )
}

export default ProductDetails
