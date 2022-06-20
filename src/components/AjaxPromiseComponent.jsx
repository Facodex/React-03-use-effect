import React, {useEffect, useState} from 'react'

export const AjaxPromiseComponent = () => {
    
    const [users, setUsers] = useState([]);

    const getUsers = () =>{
        setUsers([
            {
                id: 1,
                nombre: "Facundo"
            },
            {
                id: 2,
                nombre: "Miguel"
            },
            {
                id: 3,
                nombre: "Jose"
            }

        ]);
    }
    
    useEffect(()=>{
        getUsers();
    }, []);


  return (

    <div>
        <h2>Trayendo un listado con una promesa</h2>
        <ol>
            {
                users.map(user=>{
                    return <li key={user.id}>{user.nombre}</li>
                })
            }
        </ol>
    </div>
  )
}

//Lo que hicimos fue 
//1 Crear un array vacio para users e inicializarlo con useState
//2 Solicitar el relleno con 3 objetos para users
//3 Iniciar el relleno con useEffect
//4 recorrerlo imprimiendolo en pantalla en una lista

