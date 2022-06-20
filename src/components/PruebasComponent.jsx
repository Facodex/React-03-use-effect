import React, {useEffect, useState} from 'react'
import { AvisoComponent } from './AvisoComponent';

export const PruebasComponent = () => {

    const [usuario, setUsuario ] = useState ("Facodex");
    const [contador, setContador] = useState (0);
    

    const modUsuario = e =>{
        setUsuario(e.target.value);
    }
    
    //si lo dejamos vacio se ejecutará una vez y si le damos una variable que cambia su estado
    //se ejecutará cada vez que esa variable cambie su estado
    useEffect(()=>{
        console.log("Se ha ejecutado useEffect");
    },[usuario]);

    useEffect(()=>{
        setContador(contador + 1);
        console.log("Se ha modicicado el contador " + contador + " veces");
    },[usuario]);
    

  return (
    <div>

        <h1>El efecto - useEfect</h1>
        <strong className={contador >=20 ? 'label label-green' : 'label'}>{usuario}</strong>
        <form>
            <input
                type='text'
                onChange={modUsuario}
                placeholder='Cambia el nombre'
            />
        </form>
        {usuario == "Facundo" && <AvisoComponent></AvisoComponent>}

    </div>
  )
}

