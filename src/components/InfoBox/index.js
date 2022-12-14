import classNames from "classnames";
import "./style.css";

const Infobox=({title,description,image,color})=>{
    return(
        
        <div className="col-lg-4">
          <div className= {classNames("box-1 text-white",
          {'background-grey':color==='grey',
          'background-red':color==='red'
        })}>
            <div className="box1-img text-center">
 {image}
 </div>
 <div className="box-text p-5">
 <h3 className="text-center">{title}</h3>
 <p className='mt-4'>{description}</p>
 </div>
 </div>
 </div>
    )
}
export default Infobox;