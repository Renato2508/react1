import './product.css';
import React, { useState } from 'react';
import Vignette from './Vignette'

const Product = function Product({data}){ 
    //console.log("DONNEES RECUES PRODUCT: ");
    //console.log(data);  
    const [img, setImg] = useState(data.img);
    const [stock, setStock] = useState(data.stock);

    let price = data.price;
    //console.log("LISTE D'IMAGES");
    //console.log(data["img"]);
    function setToMainImage(index){
        console.log("INDEX: "+index);
        console.log('IMG initiale');
        console.log(img);
        let img2 = img.slice(0);
        let temp = img2[0];
        img2[0] = img2[index];
        img2[index] = temp;
        console.log('IMG FINAL: ');
        setImg(img2);
        console.log(img);

    }

    function updateStock(){
        if(stock > 0)
            setStock(stock=>stock-1);
        else 
            alert("Rupture de stock");
    }

    return (
        <div className="product">
            <div className="product_img1">
                <img src={img[0]} alt="Image principale" />
            </div>
            <div className="product_vignette">
                {
                    img.slice(1).map(
                        (item, index)=>(
                            <Vignette index={index+1} src ={item} stmi={setToMainImage}/>
                        )
                    )
                }
                
            </div>
            <div className="product_info">
               <p>Price: {price}</p> 
               <p>Stock: {stock}</p> 
               <p><button onClick={updateStock}>Add</button></p> 
            </div>
        </div>
    );
  }
  
export default Product;