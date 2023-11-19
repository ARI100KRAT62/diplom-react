import { useEffect, useState } from "react"
import { Card } from "../items/cart"
import { RestService } from "../services/rest"
import { useParams } from "react-router-dom"

export function Info() {
    const { cid } = useParams()
    const [items, setItems] = useState([])
    useEffect(() => {
        RestService.getInfo(cid).then(result => {
            setItems(result)
        })
    }, [cid])
    return (
        <div class="content">
            <div className="product-info">
                <div className="product-image">
                    <div class="thumb-image">
                        <img src={"/images/" + items[0]?.img + ".jpg"} data-imagezoom="true" class="img-responsive" draggable="false" />
                    </div>
                </div>
                <div className="product-price-info">
                    <div className="product-catrgory-pagenation">
                        <ul>
                            <li><h3>Categories :</h3></li>
                            <li className="active3"><a href="#">Productname</a></li>
                            <li><a href="#">Product2</a></li>
                            <li><a href="#">Product3</a></li>
                        </ul>
                    </div>
                    <div className="product-value">
                        <h4>Product-Complete Details With Value</h4>
                        <ul>
                            <li><h2>Price :</h2></li>
                            <li><h5>{items[0]?.price}</h5></li>
                            <li><a href="#">Instock</a></li>
                        </ul>
                        <ul>
                            <li><h3>Not rated</h3></li>
                            <li><h5>No reviews</h5></li>
                        </ul>
                    </div>
                    <div className="product-shipping">
                        <span>Shipping :</span>
                        <p><lable>FREE</lable> - Flat Rate Courier - Delivery anywhere in </p>
                        <div className="clear"> </div>
                    </div>
                    <div className="product-payments">
                        <span>Payments: :</span>
                        <p><lable>paypal</lable> - (Credit card, EMI, Debit card, Online Bank Transfer), PaisaPay COD  </p>
                        <div className="clear"> </div>
                    </div>
                    <div className="product-description">
                        <h3>Description :</h3>
                        <p>{items[0]?.description}</p>
                        <a href="#">Addcart</a>
                    </div>
                    <div className="product-share">
                        <h3>share on:</h3>
                        <ul>
                            <li><a href="#"><img src="images/facebook.png" title="facebook" />Facebook</a></li>
                            <li><a href="#"><img src="images/twitter.png" title="Twitter" />Twitter</a></li>
                            <li><a href="#"><img src="images/rss.png" title="Rss" />Rss</a></li>
                            <li><a href="#"><img src="images/gpluse.png" title="Googlepluse" />Google+</a></li>
                        </ul>
                    </div>
                </div>
                <div className="clear"> </div>
            </div>
        </div>
    )
}