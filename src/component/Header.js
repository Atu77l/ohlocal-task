import React from 'react'
import doc from '../file.json';
import './Header.css';

function header() {
  return (
    <>
    <div className="cmp2">
     <img src={doc.main_product.main_product_svg} alt="hello"/>
     <div className="cmp22">
     <div className="title">{doc.main_product.product_title}</div>
     <div className="price11">
     <img className="img12" src={doc.main_product.online_price_icon} alt="hello"/> 
     Rs.<s className="price3">{doc.main_product.online_price}</s>
      </div>
     <div>{doc.main_product.product_pipeline}</div>
     <div className="qty">Qty: 2</div>
     <div className="detail"><u>All Details</u></div>
     </div>
     <div className="status">
     <div className="st1">
     <div className="st">
        Status
     </div>
     <img src={doc.main_product.status_icon} alt="hello"/>
     </div>
     <div className="st2">
        Time Remaining
     </div>
     <div className="st3">
     {doc.main_product.time_remaining} minutes
     </div>
     
    <div className="st4"><div className="bids">BIDS PLACED  |</div><div className="num">{doc.main_product.bid_placed}</div></div>
     </div>
     </div>
    </>
  )
}

export default header