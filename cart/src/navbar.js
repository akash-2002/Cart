import React from 'react';
import Cartitem from './Cartitem';


const Navbar =(props)=>{

    return(
        <div style={styles.nav}>
            <div style={styles.cartIconContainer}>
            <span style={styles.total}>Total: {props.price}</span>
                <img src='https://cdn-icons-png.flaticon.com/512/3144/3144456.png' style={styles.cartIcon} alt='cart-icon'/>

                <span style={styles.cartCount}>{props.count}</span>
            </div>
        </div>

    )
    
}
const styles = {
  total:{
    fontSize: 35,
    paddingRight:35,
  },
    cartIcon: {
      height: 32,
      marginRight: 20
    },
    nav: {
      height: 70,
      background: '#4267b2',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    cartIconContainer: {
      position: 'relative'
    },
    cartCount: {
      background: 'yellow',
      borderRadius: '50%',
      padding: '4px 8px',
      position: 'absolute',
      right: 0,
      top: -9
    }
  };
  
  
export default Navbar;