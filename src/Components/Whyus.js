import React from 'react'
import Chain from "../Components/asset/chain.png";
import Vector2 from './icons/Vector2';
import Vector3 from './icons/Vector3';
import Vector1 from "./icons/Vector1";

const Whyusdata=[
    {
    id:1,
    image:<Vector3/>,
    title:"lorem ipsum",
    discription:"It is a long established fact that a reader will be distracted. And for whaterver reason. It Is."
},
{
    id:2,
    image:<Vector1/>,
    title:"lorem ipsum",
    discription:"It is a long established fact that a reader will be distracted. And for whaterver reason. It Is.",
    bg:"red"
},
{
    id:3,
    image:<Vector2/>,
    title:"lorem ipsum",
    discription:"It is a long established fact that a reader will be distracted. And for whaterver reason. It Is."
},
]
const whyus = () => {
  return (
<div className="banner-3 mt-5">
<div className="container">
 <h2 className="text-center">Why Us?</h2>
          <div className="row mt-5">
            {Whyusdata.map((props)=>(
 <div className="col-lg-4">
 <div className="box-1 text-white">
 <div className="box1-img text-center">
 {props.image}
 </div>
 <div className="box-text p-5">
 <h3 className="text-center">{props.title}</h3>
 <p className='mt-4'>{props.discription}</p>
 </div>
 </div>
 </div>
            ))}
           
          </div>
          <div className="text-center mt-5">
            <img src={Chain} className="img-fluid" alt='chain'/>
          </div>
        </div>
      </div>
  )
}

export default whyus;