import React, { useEffect } from 'react'

export const AvisoComponent = () => {

    useEffect(()=>{
        //cuando se monta
        alert("Se ha montado el AvisoComponent");
        //cuando se desmonta
        return () =>{
            alert('se ha desmontado el AvisoComponent')
        }
    },[]);

    const saludar = () => {
        alert("hola Facundo");
    }

  return (
    <div>
        <h3>Saludos Facundo!!!!!!!</h3>
        <button onClick={saludar}>Mostrar alerta</button>
    </div>
  )
}

// este componente sera llamado desde otro componente
// ademas con useEffect dara un mensaje cuando es montado y desmontado
