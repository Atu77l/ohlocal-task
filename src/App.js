import React from 'react';
import doc from './file.json';
import Navbar from './component/Navbar';
import './App.css';
import Header from './component/Header';
import Card from './component/Card';

const App = ()=> {
  return (
    <>
    <div><Navbar/></div>
    <div className="cmp1">
    <img src={doc.heading.svg} alt="hello" className="img_head"/>
    <div className="cmp12">
    <div className="head1">{doc.heading.heading}</div>
    <div className="head2">{doc.heading.sub_heading}</div>
    </div>
    </div>
    <Header/>
    {/* <div className="cmp3">
    <Card/>
    <Card/>
    <Card/>
    </div> */}
    <div className="cmp3">
    {
      
      doc.bids.map((item) =>
      <div className="card">
            <div className="address_photo">
            <div className="address">
            <div>{item.shop_address}</div>
            <div className="price">Rs. {item.offer_price}</div>
            </div>
            <div className="image">
            <img src={item.shop_image} alt="hello"/>
            </div>
            </div>
            <div className="line">
            <div className="delivery">Delivery & Services</div>
            <div className="place">{item.shop_name}</div>
            </div>
            <div className="detail">
            <div className="express">
            <img src={item.express_delivery_icon} alt="hello"/>
             <div className="exp">
                <p className="para">Express delivery</p>
                <p className="para1">(delivery in 1 hour)</p>
             </div>
            </div>
            <div className="express">
            <img src={item.express_delivery_icon} alt="hello"/>
             <div className="exp">
                <p className="para">Express delivery</p>
             </div>
            </div>
            <div className="offer">
            <img src={item.extra_offer_icon} alt="hello"/>
             Extra Offer
            </div>
            <div>{item.product_name}</div>
            </div>
            <div className="button">
              Buy Now
            </div>
           
            <div className="size">Alternate Product</div>
            <div className="alternate">
            <img src={item.alternate_product_details.online_price_icon} alt="hello" className="img2"/>
            <div className="detail1">
            <div className="product">{item.alternate_product_details.product_name}</div>
            <div className="sect1">
            <img className="img1" src={item.alternate_product_details.online_price_icon} alt="hello"/>
            <s className="price1">{item.alternate_product_details.online_price}</s>
            <div className="prod_detail">{item.alternate_product_details.offer_price}</div>
            <div className="order">Order now</div>
            </div>
            </div>
            </div>
            </div>
    )
   
    }
    </div>
   
    </>
  )
}

export default App