import React from 'react';
import Cartitem from './Cartitem';


class Cart extends React.Component{
    constructor(){
        super();
        this.state={ 
            products: [{
                title:'Watch',
                price:999,
                quantity:1,
                image:'',
                id:1
    
            },
            {
                title:'Phone',
                price:10999,
                quantity:1,
                image:'',
                id:2
    
            },
            {
                title:'Laptop',
                price:45900,
                quantity:1,
                image:'',
                id:3
    
            },
        ]
        }
        
    }
    onincreasequantity = (product) => {
        console.log("hey increase quantity of : " , product);
        const{products} = this.state;
        const index = products.indexOf(product);
        console.log(index);
        products[index].quantity += 1;
        this.setState({
            products : products
    })
    
    }
    ondecquantity = (product) => {
     const{products}   = this.state;
     const index = products.indexOf(product);
     if(products[index].quantity>1){
     products[index].quantity -= 1;
     this.setState({
        products:products
     })
    }
    }
    ondelproduct=(id)=>{
        const {products} = this.state;
        const items = products.filter((item)=> item.id !== id);
        this.setState({
            products : items 
        })
    }
render(){
    const {products} = this.state;
    return(<>
    {products.map((product) => {
        return <Cartitem product={product} key={product.id} onincreasequantity={this.onincreasequantity} ondecquantity={this.ondecquantity} ondelproduct={this.ondelproduct}/>
    })}
        
        
    </>
        
    );

}
    
}


export default Cart;