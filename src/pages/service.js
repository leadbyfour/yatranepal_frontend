import Providebox from 'components/Providebox';
import React from 'react'
import Navbar from "../components/Navbar/navbar";
import service from "../images/service.png";
import "../styles/service.css";

const provideData=[
    {
        id:1,
        title:"Periodic Service",
        bg:"red"
    },
    {
        id:2,
        title:"Minor & Major Repairs",
        bg:"grey"
    },
    {
        id:3,
        title:"Accidental Repairs",
        bg:"red"
    },
    {
        id:4,
        title:"Battery Service",
        bg:"grey"

    },
    {
        id:5,
        title:"Pickup & Drop",
        bg:"red"

    },
    {
        id:6,
        title:"Breakdown Service",
        bg:"grey"

    },
    {
        id:7,
        title:"Value Added Services",
        bg:"red"

    },

    {
        id:8,
        title:"Recondition",
        bg:"grey"

    }
]

const serviceData=[
    {
        id:1,
        title:"1.Periodic Services",
        image:"../image/perodicimage.png",
        discription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

        },
    {
        id:2,
        title:"2.Periodic Services",
        image:"../image/perodicimage.png",
        discription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
        id:3 ,
        title:"3.Periodic Services",
        image:"../image/perodicimage.png",
        discription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
   
]

const Service = () => {
  return (
    <>
    <Navbar/>
    <div className='banner-2'>
    <img src={service} className="img-fluid" alt='services'/>
    </div>

    <div className='banner-3 padtb'>
        <div className='container'>
            <h1 className='my-5'>What We Provide?</h1>
            <div className='row gy-5'>
{provideData.map((provideusdata)=>(

<Providebox
title={provideusdata.title}
color={provideusdata.bg}/>

))}
            </div>
        </div>
    </div>

    <div className='banner-4 padtb'>
        <div className='container'>
            <div className='row'>
{serviceData.map((props)=>(
    <div className='col-lg-12 padtb'>
                <h3 className='mb-5'>{props.title}</h3>
                <div className='services-box d-flex justify-content-between'>
        <div className='service-image'>
        <img src={props.image} className="img-fluid"/>
        </div>
        <div className='service-description'>
        <p>{props.discription}</p>
        </div>
    </div>
    </div>
))}

            </div>
        </div>
 </div>
    </>
  )
}

export default Service;