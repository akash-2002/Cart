import React from 'react';
import './App.css';
import Cart from './cart';
import Navbar from './navbar.js';
 class App extends React.Component {
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
        {
            title:'Earbuds',
            price:1900,
            quantity:1,
            image:'',
            id:4

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
totalcount=()=>{
  const{products} = this.state;
  let count =0;
  products.forEach((product)=>{
    count+= product.quantity;
  });
  return count;

}
totalprice=()=>{
  const{products}=this.state;
  let price=0;
  products.forEach((product)=>{
    price+=(product.quantity*product.price);
  })
  return price;
}
  render(){
    const {products}=this.state;
    return (
      <div className="App">
        <Navbar count={this.totalcount()} price={this.totalprice()}/>
        <Cart
          onincreasequantity={this.onincreasequantity} 
          ondecquantity={this.ondecquantity} 
          ondelproduct={this.ondelproduct}
          products = {products}
        />
      </div>
    );
  }
}

export default App;
