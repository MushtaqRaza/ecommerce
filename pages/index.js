import React from 'react'
import { client } from '../lib/client';
import {Product, FooterBanner, HeroBanner} from '../components'

// reviewed the data from below funtion in form of products and bannerData

export const Home = ({products, bannerData}) => (
  <>
    
    <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>
    

    <div className='products-heading'>
      <h2>Best Selling Products</h2>
      <p>Speakers of many Variations</p>
    </div>

    <div className='products-container'>
      {products?.map((product) => <Product key={product._id} product={product}/>)}
    </div>

    
    <FooterBanner footerBanner={bannerData && bannerData[0]}/>

  </>
);
// get all the data from sanity through the following queries
export const getServerSideProps = async () =>{
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    // now will send this as props to Home to show on UI
    props:{products, bannerData}
  }
}

export default Home;

