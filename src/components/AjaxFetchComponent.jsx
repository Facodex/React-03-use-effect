import React, { useEffect, useState } from 'react'

export const AjaxFetchComponent = () => {

    const [users, setUsers] = useState([]);

    const getUsers = () =>{
        fetch('https://reqres.in/api/users?page=2')
            .then(respuesta => respuesta.json())
            .then(
                resultado_final =>{
                    setUsers(resultado_final.data)
                },
                error => {
                    console.log(error);
                }
            );
    }

    useEffect(()=>{
        getUsers();
    }, []);

  return (

    <div>
        <h2>Aqui hare una petición con .fetch</h2>
        <ol>
            {
                users.map(user=>{
                    return <li key={user.id}>{user.first_name}</li>
                })
            }
        </ol>
    </div>
  )
}
//1 Lo que hicimos aca fue crear users y darle la posibilidad de cambiar de estado con useState
//2 Pedir atraves de una funcion y usando fetch, datos a una url y con esos datos rellenar users gracias a useState
//3 Con el useEffect lanzar esa funcion
//4 recorres usuarios y mostrarlos en pantalla

