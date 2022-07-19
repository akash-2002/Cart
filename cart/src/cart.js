import React from 'react';
import Cartitem from './Cartitem';


class Cart extends React.Component{
render(){
    const {products} = this.props;
    return(<>
    {products.map((product) => {
        return <Cartitem product={product} key={product.id} onincreasequantity={this.props.onincreasequantity} ondecquantity={this.props.ondecquantity} ondelproduct={this.props.ondelproduct}/>
    })}
        
        
    </>
        
    );

}
    
}


export default Cart;