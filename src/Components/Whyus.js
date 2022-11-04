import React from 'react'
import chain from "../Components/asset/chain.png";
import Box2 from './icons/Box2';
import Box3 from './icons/Box3';
import Box1 from "../Components/icons/Box1";

const Whyusdata=[
    {
    id:1,
    image:<Box3/>,
    title:"lorem ipsum",
    discription:"It is a long established fact that a reader will be distracted. And for whaterver reason. It Is."
},
{
    id:2,
    image:<Box1/>,
    title:"lorem ipsum",
    discription:"It is a long established fact that a reader will be distracted. And for whaterver reason. It Is."
},
{
    id:3,
    image:<Box2/>,
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
            <img src={chain} className="img-fluid" alt='chain'/>
          </div>
        </div>
      </div>
  )
}

export default whyus;