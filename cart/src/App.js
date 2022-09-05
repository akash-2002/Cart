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
  //we can add queres and write multiple to combine them
  // .where('price','>',10000)
  // .where('quantity','==',1)
  .orderBy('price', 'desc')
  // used to arrange data in acending or decending
  .onSnapshot((snapshot)=>{
    
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
// addpro(){
//   db.collection('products')
//   .add({
//     quantity:1,
//     image:'https://www.digitaltrends.com/wp-content/uploads/2021/08/dell-xps-15-oled-2021-laptop.jpg?fit=720%2C720&p=1',
//     title:'Laptop',
//     price:79999,
//   })
//   .then((snapshot)=>{
// console.log(snapshot);
// alert('product has been added');

//   }).catch((error)=>
//   {console.log(error)

//   })
// }
onincreasequantity = (product) => {
    //console.log("hey increase quantity of : " , product);
    const{products} = this.state;
    const index = products.indexOf(product);
//     console.log(index);
//     products[index].quantity += 1;
//     this.setState({
//         products : products
// })
const proref = db.collection('products').doc(products[index].id);
proref.update({
  quantity:products[index].quantity+1,

}).then(()=>{
  console.log(product)
}).catch((error)=>{
  console.log(error);
})

}
ondecquantity = (product) => {
 const{products}   = this.state;
 const index = products.indexOf(product);
 
//  if(products[index].quantity>1){
//  products[index].quantity -= 1;
//  this.setState({
//     products:products,
    
//  })
// }
if(products[index].quantity>1){
  const proref = db.collection('products').doc(products[index].id);
proref.update({
  quantity: products[index].quantity - 1,
})
.then(()=>{
  console.log(product);
}).catch((error)=>console.log(error))
}


}
ondelproduct=(id)=>{
    const {products} = this.state;
    // const items = products.filter((item)=> item.id !== id);
    // this.setState({
    //     products : items 
    // })
    //const index = products.indexOf(product);
    const proref = db.collection('products').doc(id);
    proref
    .delete()
    .then(()=>{
      console.log("dleted succesfully");
    }).catch((error)=>console.log(error))
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
        {/* <button onClick={this.addpro}>Add a product</button> */}
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
