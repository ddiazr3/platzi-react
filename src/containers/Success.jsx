import React,{ useContext} from 'react';
import AppContext from "../context/AppContext";
import Map from "../components/Map";
import '../styles/components/Success.css';
import useGoogleAddress from "../hooks/useGoogleAddress";
const Success = () => {
    const {state} = useContext(AppContext)
    const { buyer } = state
    // como enviarle la direccion al custom hooks
    //const location = useGoogleAddress(buyer.length ? buyer[0].address:'')
    //const location = useGoogleAddress();
    const location = {
        lat: 14.305234116585888,
        lng: -90.35731179326335
    }
    return (
    <div className={'Success'}>
      <div className={'Success-content'}>
          {buyer.map((b) => (
              <h2>{`${b.name}, Gracias por tu compra`}</h2>
          ))}

        <span>Tu pedido llegara en 3 dias a tu direccion:</span>
        <div className={'Success-map'}>
            <Map data={location}/>
        </div>
      </div>
    </div>
  );
};

export default Success;
