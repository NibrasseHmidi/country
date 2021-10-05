import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);
    const renderList = products.map((product) => {
        const {
          id,
          country,
          countryInfo,
          cases,
          todayCases,
            
          } = product;
          
        return (

            <div className="four wide column" key={id}>
        <Link to={`/product/${country}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
            <img src={ countryInfo.flag} alt="..." />
          <div className="corona">
            <div className="covid_cases"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/SARS-CoV-2_without_background.png/1200px-SARS-CoV-2_without_background.png" alt="" style={{width:"20px", height:"20px"}} /> <p>Coronavirus Cases</p></div>
            <div className="cas_corona"> <span className="span">+{todayCases} Cases</span>
        <span className="spanTotal">{cases} Total</span></div>
        
           </div>
           

         
              </div>
              <div className="content">
                <div className="header">{country}</div>
                <div className="meta price">  </div>
                <div className="meta"></div>
              </div>
            </div>
          </div>
        </Link>
      </div>
        )
    });
    return (
        <> {renderList}  </>
    );


}

export default ProductComponent
