import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ProudPartner = () => {

    const [list, setList] = useState([]);
    const [token, setToken] = useState("");

    const getCategory = (jwt) => {
        // let mounted = true;

        axios.get("http://34.254.97.212:8080/api/partners/allpartner", {headers: {'Authorization': jwt}}).then((res)=>{
        // axios.get("http://34.254.97.212:8080/api/marine-professional/1").then((res)=>{
            // console.log("cat", res.data);
             console.log(res.data)
            setList((list) => [...list, ...res.data]);
        })
    }

    useEffect (() => {
        setToken(localStorage.getItem("token"))
        if(token){
            getCategory(token)
        }
    }, [token])


  return (
    <div className='proud_partner'>
        <div className="container">
            <h1 className='headin-2'>Proud Partner Organizations</h1>
            <ul className='client-logo'>
            {list.map((item) => (
                <li>
                <a href={item.url}>
                    <img className='img-fluid' src={`http://34.254.97.212:8080/${item.logo}`} alt="" />
                </a>
                </li>
            ))}
            </ul>
        </div>
    </div>
  )
}

export default ProudPartner

