import React, {useContext} from 'react';
import {useNavigate} from "react-router-dom";
//import { PayPalButton} from "react-paypal-button-v2";
import AppContext from "../context/AppContext";
import '../styles/components/Payment.css';

const Payment = () => {
    const {state, addNewOrder} = useContext(AppContext)
    const {buyer, cart} = state
    const navigate = useNavigate()

    // const paypalOption = {
    //     clientId: 'sb',
    //     intent: 'capture',
    //     currency: 'USD'
    // }
    //
    // const handleSumTotal = () => {
    //     const reducer = (acumulator, currentValue) => acumulator + currentValue.price;
    //     const sum = cart.reduce(reducer, 0)
    //     return sum
    // }
    //
    //
    // const buttonStyle = {
    //     layout:'vertical',
    //     shape:'rect'
    // }

    const handlePaymentSuccess = () => {
        //  console.log(data)
        // if(data.status === 'COMPLITED'){
        // Commo utilizar paypal
        // <PayPalButton
        //     options={paypalOption}
        //     style={buttonStyle}
        //     amount={handleSumTotal()}
        //     createOrder={() => console.log('Start Payment')}
        //     onSuccess={data => handlePaymentSuccess(data)}
        //     onError={error => console.log(error)}
        //     onCancel={data => console.log(data)}
        // >
        // </PayPalButton>

           const newOrder = {
               buyer,
               product: cart,
               payment: {}
           }

           addNewOrder(newOrder)
           navigate('/checkout/success')
     //  }
    }



  return (
    <div className={'Payment'}>
      <div className={'Payment-content'}>

        <h3>Resumen del pedido:</h3>
          {cart.map((item) =>(
              <div className={"Payment-item"} key={item.title}>
                  <div className={"Payment-element"}>
                      <h4>{item.title}</h4>
                      <span>
                          $
                          {' '}{item.price}
                      </span>
                  </div>
              </div>
          ))}

        <div className={'Payment-button'}>
            <button type={"button"} onClick={handlePaymentSuccess}>Pago Finaliza</button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
