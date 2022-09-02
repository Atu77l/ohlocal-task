import React from 'react'
import doc from '../file.json';
import './Card.css'
function Card() {
  return (
    <>
          <div className="card">
            <div className="address_photo">
            <div className="address">
            <div>{doc.bids[0].shop_address}</div>
            <div className="price">Rs. {doc.bids[0].offer_price}</div>
            </div>
            <div className="image">
            <img src={doc.bids[0].shop_image} alt="hello"/>
            </div>
            </div>
            <div className="line">
            <div className="delivery">Delivery & Services</div>
            <div className="place">Louis Vuitton</div>

            </div>
            <div className="detail">
            <div className="express">
            <img src={doc.bids[0].express_delivery_icon} alt="hello"/>
             <div className="exp">
                <p className="para">Express delivery</p>
                <p className="para1">(delivery in 1 hour)</p>
             </div>
            </div>
            <div className="express">
            <img src={doc.bids[0].express_delivery_icon} alt="hello"/>
             <div className="exp">
                <p className="para">Express delivery</p>
             </div>
            </div>
            <div className="offer">
            <img src={doc.bids[0].extra_offer_icon} alt="hello"/>
             Extra Offer
            </div>
            <div>{doc.bids[0].product_name}</div>
            </div>
            <div className="button">
              Buy Now
            </div>
           
            <div className="size">Alternate Product</div>
            <div className="alternate">
            <img src={doc.bids[0].alternate_product_details.online_price_icon} alt="hello" className="img2"/>
            <div className="detail1">
            <div className="product">{doc.bids[0].alternate_product_details.product_name}</div>
            <div className="sect1">
            <img className="img1" src={doc.bids[0].alternate_product_details.online_price_icon} alt="hello"/>
            <s className="price1">{doc.bids[0].alternate_product_details.online_price}</s>
            <div className="prod_detail">{doc.bids[0].alternate_product_details.offer_price}</div>
            <div className="order">Order now</div>
            </div>
            </div>
            </div>
            </div>
    </>
  )
}

export default Card