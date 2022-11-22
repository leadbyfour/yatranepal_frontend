import classNames from "classnames";
import facebook from "images/facebook.png";
import instagram from "images/instagram.png";
import twitter from "images/twitter.png";
import "./style.css";

const Teambox=({title,post,description,image,color})=>{
    return(
        
        <div className="col-lg-4">
          <div className= {classNames("box-1 text-white",
          {'background-grey':color==='grey',
          'background-red':color==='red'
        })}>
            <div className="team-img text-center p-3">
 <img src={image} className="img-fluid"/>
 </div>
 <div className="box-text p-2">
 <h3 className="text-center">{title}</h3>
 <h5 className="text-center">{post}</h5>
 <p className='mt-4 text-center'>{description}</p>
<div className="social-links text-center my-3">
    <img src={facebook} className="img-fluid"/>
    <img src={instagram} className="img-fluid ms-3"/>
    <img src={twitter} className="img-fluid ms-3"/>
</div>
 </div>
 </div>
 </div>
    )
}
export default Teambox;