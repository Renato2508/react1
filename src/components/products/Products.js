import './products.css'
import Product from './Product'


const Products = function Products({data}){
    //console.log("DONNEES RECUES: ");
    //console.log(data);
    return(
        <div>
            <div className='products_title'>
                <h2>All Products</h2>
            </div>
            <div className='products_panel'>
                {data.map(
                    (item, index)=>(
                        <Product key={index} data ={item}/>
                    )
                )}
            </div>
        </div>
    );   
}

export default Products;