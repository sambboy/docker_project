import React, { useEffect, useState } from 'react'
import NavBar from '../NavBar'
import CarouselB from "../CarouselB"
import HomeProduct from '../HomeProduct'
import FooterB from '../FooterB'
import axios from 'axios'

function Home() {
  const [data,setData] = useState([])
  useEffect(()=>{
      axios.get("http://127.0.0.1:8000/api/product/limit").then(resp => {
          setData(resp.data.Produits)
      }).catch((err) => console.log(err))
  },[])

  return (
     <div className=''> 
     <NavBar/>
    <div className='container-fluid p-0 m-0'>
    <div className='row w-100 m-0 p-0'>
      <div className='col-12 p-0 m-0' ><CarouselB/></div>
    </div>
      <div className='row m-0 d-flex justify-content-center align-content-center p-0 mt-3 '>
      <HomeProduct data={data} /> 
      </div>
    </div>
    <FooterB/>


    </div>
  )
}

export default Home