import React, { useEffect, useState } from 'react'

export const AjaxAsAwComponent = () => {

    const [users, setUsers] = useState([]);
    const [cargando, setCargando] = useState(true);

    const getUsers = async() =>{

        try{
            const peticion = await fetch('https://reqres.in/api/users?page=2');
            const {data} = await peticion.json();

            setUsers(data);
            setCargando(false);
        }catch{
            console.log("se ha producido un error");
        }
        
    }

    useEffect(()=>{
        getUsers()
    }, []);

    if(cargando === true){
        return (
            <div>
                <h1>Cargando datos...</h1>
            </div>
        )
    }else{
        return (

            <div>
                <h2>Petición con async-await</h2>
                <ol>
                    {
                        users.map(user=>{
                            return <li key={user.id}>
                                        <img src={user.avatar} width="80" alt=''/>
                                        {user.first_name}
                                    </li>
                        })
                    }
                </ol>
            </div>
        
          )
    }
}

//1) Lo que hicimos aca fue crear users y darle la opcion de cambiar su estado con useState
//2) Luego crear la funcion que tendra un fetch para pedirle datos a una api y rellenar users
//3) Y cabe recalcar que lo hicimos con el async y await
//4) Y luego con el useEffect llamamos a esa funcion :)

//5) Por otro lado hemos creado el efecto de cargando, con un if-else sencillo, cambiando el valor del cargando asi se deja de mostrar una vez la promesa se cumple correctamente