import React, { Component } from 'react';
import Title from "./Title";


export default class ProductList extends Component{
    render(){
        return(
            <React.Fragment>
                 <div className="py-5">
                    <div className="container">
                    <Title name="our" title="products"/>
                       <div className="grid grid-cols-3">
                         {/* <ProductConsumer>
                             {value=>{
                               return value.products.map(product =>{
                                   return <Product key={product.id} product={product} />;
                               });
                             }}
                         </ProductConsumer> */}
                       </div>
                       </div> 
                    </div>
            </React.Fragment> 
        )
    }
}