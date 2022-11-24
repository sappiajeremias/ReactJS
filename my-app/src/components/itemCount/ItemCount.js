import './itemCount.css';

import { useState, useEffect } from 'react';
import { GrSubtract, GrAdd } from 'react-icons/gr';

const ItemCount = ({stock}) => {
  
  const [add, setAdd] = useState(0);

  const buttonSumar = () => {
    setAdd(add + 1);
  };
  const buttonRestar = () => {
    setAdd(add - 1);
  };

  useEffect(() => {
    console.log('Se creo el ítem');
  }, []);

  return (
    <div className='containerCantidad'>
      <button disabled={add<=0} className="botonRestar" onClick={buttonRestar}>
        <GrSubtract className='icono'/>
      </button>
      <h1>{add}</h1>
      <button disabled={add>=stock} className="botonSumar" onClick={buttonSumar}>
        <GrAdd className='icono'/>
      </button>
    </div>
  );
};

export default ItemCount;
