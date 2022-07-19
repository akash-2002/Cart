import React from 'react';

class Cartitem extends React.Component{
    

    render(){
        const {title, price, quantity, image,id } = this.props.product;
        return(
            <div className='cart-item'>
            <div className='left-block'>
                <img style={styles.image} src={image} alt=""/>
            </div>
            <div className='right-block'>
                <div style={{fontSize:25, weight:3}}>{title}</div>
                <div style={{color:'#777'}}>Rs {price}</div>
                <div style={{color:'#777'}}>QUANTITY: {quantity}</div>
                <div className='cart-item-actions'>
                    {/* buttons */}
                    <img 
                    alt='increase by one' 
                    className='action-icons' 
                    src='https://cdn-icons-png.flaticon.com/512/992/992651.png'
                    onClick={() => this.props.onincreasequantity(this.props.product)}
                    />
                    <img 
                    alt='decrease by one'  
                    className='action-icons' 
                    src='https://cdn-icons-png.flaticon.com/512/992/992683.png'
                    onClick={() => this.props.ondecquantity(this.props.product)}

                    />
                    <img 
                    alt='delete' 
                    className='action-icons' 
                    src='https://cdn-icons-png.flaticon.com/512/3096/3096750.png'
                    onClick={()=> this.props.ondelproduct(id)}

                    />
                </div>
            </div>

            </div>
        );
    }
}
const styles = {
    image:{
        height:110,
        width:110,
        borderRadius:7,
        background:'#ccc',
    }
}
export default Cartitem;