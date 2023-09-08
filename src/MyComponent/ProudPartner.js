import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ProudPartner = () => {

    // const getPartner = () => {
    //     axios.get("http://34.254.97.212:8080/api/partners/allpartner").then((res)=>{
    //         console.log("list", res);
    //     })
    // }

   

    // useEffect(() => {
    //     axios.get("http://34.254.97.212:8080/api/partners/allpartner").then((res)=>{
    //         console.log("list", res);
    //     })
    // }, []);
    
    // useEffect (() => {
    //     axios.get('http://34.254.97.212:8080/api/marine-professional/all', {
    //         headers: {
    //             'Authorization': '',
    //             'Content-Type': 'application/json',
    //         },
    //         })
    //         .then(response => {
    //             console.log(response);
    //         })
    //         .catch(error => {
    //             console.error('Axios request error:', error);
    //         });
    //     // alert('wake up ')
    //     // async function getData(){
    //     //     const res = await axios.get('http://34.254.97.212:8080/api/partners/allpartner');
    //     //     console.log(res);
    //     // }
    //     // getData();
    // },);

    const [list, setList] = useState([]);

    function getCategory () {
        // let mounted = true;

        axios.get("http://34.254.97.212:8080/api/partners/allpartner").then((res)=>{
        // axios.get("http://34.254.97.212:8080/api/marine-professional/1").then((res)=>{
            // console.log("cat", res.data);
             console.log(res.data)
            setList((list) => [...list, ...res.data]);
        })
    }

    useEffect (() => {
        getCategory();
    }, [])

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

