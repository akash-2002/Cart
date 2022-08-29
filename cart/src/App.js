import React from 'react';
import './App.css';
import Cart from './cart';
import Navbar from './navbar.js';
// import * as firebase from 'firebase';
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import db from './index.js';
 class App extends React.Component {
  constructor(){
    super();
    this.state={ 
        products: [],
        loading:true
    }

    
}
componentDidMount(){
  db
  .collection('products')
  .get()
  .then((snapshot)=>{
    
    const product = snapshot.docs.map((doc)=>{
      const data=doc.data();
      data['id'] = doc.id;
      return data;
    })
    this.setState({
      products:product,
      loading:false,
    })
  })
  
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
    products:products,
    
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
    const {products, loading}=this.state;
    return (
      <div className="App">
        <Navbar count={this.totalcount()} price={this.totalprice()}/>
        <Cart
          onincreasequantity={this.onincreasequantity} 
          ondecquantity={this.ondecquantity} 
          ondelproduct={this.ondelproduct}
          products = {products}
        />
        {loading && <h1>loading data.....</h1>}
      </div>
      
    );
  }
}

export default App;
