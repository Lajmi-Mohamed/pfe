import React,{useState} from 'react'
import NavApp from "../nav-app/NavApp";
import Footer from "../footer/Footer";
import BackToTop from "../Back-to-top/BackTop";
import {connect} from "react-redux"
import StarRatingComponent from 'react-star-rating-component';
import "./details.css"
import { FaRegThumbsUp } from 'react-icons/fa'
import { FaRegThumbsDown } from 'react-icons/fa'

function Details(props) {
    const[searchstar,setSearchstar]=useState({rating:5})
    console.log(props)
    const onStarClicktwo = (nextValue, prevValue, name)=> {
        setSearchstar({rating: nextValue});
      }
      const Star = ({ starId, rating, onMouseEnter, onMouseLeave, onClick }) => {
        let styleClass = "star-rating-blank";
        if (rating && rating >= starId) {
          styleClass = "star-rating-filled";
        }}
      
    return (
        <div style={{ backgroundColor: "rgb(241, 240, 240)", marginTop: -19 }}>
      <NavApp navEvent={props.location.pathname} />
<div style={{height:"300vh"}}>
<div className="container py-5">
           {/*img*/} 
           <div className="row">
           <div className="col-12" >
           <img src={props.details.img} className="img-fluid" alt="event"
           style={{height:"280px",width:"1600px",marginTop:"55px",marginLeft:"30px",borderRadius:"10px"}}/>
           </div>
           </div>
            {/* end img*/} 
              {/*title and type*/} 
           <div className="row">
           <div className="col-xs-4 col-md-4 col-sm-4 " >
           <div className=" text-center text-slanted text-blue my-2">
    <h1 style={{fontFamily: "permanent Marker, cursive",letterSpacing: "0.3rem",textTransform:"uppercase"}}>
        {props.details.title}</h1>     
           </div>
           </div>
           <div className="col-xs-4 col-md-4 col-sm-4 " >
           <h2 style={{backgroundColor:"#f82249",color:"white",width:"120px",marginTop:"10px"
       ,marginLeft:"210px",textAlign:"center",borderRadius:"10px" }}>
        {props.details.type}</h2> 
           </div>
           <div className="col-xs-4 col-md-4 col-sm-4">
           <StarRatingComponent
           style={{marginTop:"20px"}}
          className="x"
          name="rate1" 
          starCount={10}
          value={searchstar.rating}
          onStarClick={onStarClicktwo.bind(setSearchstar)}
          starDimension="400rempx"
        />
           </div>
           </div>
            {/* end title and type*/} 
            {/*date*/} 
            <div className="row">
            <div className="col-12 ">
    <h5 style={{color:"grey",marginLeft:"50px"}}>{props.details.date}</h5>
    </div>
    <div className="col-7"style={{backgroundColor:"grey",height:"0.3px",marginLeft:"55px"}}>
    
    </div>

            </div>
            {/*end date*/} 
            <div className="row">
            <div className="col-12">
            <p className="text-capitalize font-weight-bold "style={{marginLeft:"55px",marginTop:"10px"}}>
        Description :
    </p>
    </div>
    </div>
    <div className="row">
        <div className="text-muted lead col-xs-12 col-md-6 col-lg-6">
    <p  style={{marginLeft:"55px",marginTop:"30px"}}>{props.details.info}</p>
    </div>
    <div className=" col-xs-12 col-md-6 col-lg-6">
    <img src={props.details.imgmap} className="img-fluid" alt="map"
           style={{height:"280px",width:"420px",borderRadius:"10px",marginLeft:"150px",marginTop:"40px"
           }}/>
    </div>
    </div>
    <div className="row">
    <FaRegThumbsUp size="2rem" style={{marginLeft:"75px"}}/>
    <FaRegThumbsDown size="2rem" style={{marginLeft:"20px"}} />
    </div>
           <div className="row">
<textarea className="form-control" placeholder="Add a new comment"
style={{marginLeft:'70px',width:"500px",marginTop:"30px"}}> </textarea>
<button style={{marginLeft:'10px',backgroundColor:"#f82249",color:"white",borderRadius:"10px",
borderColor:"transparent",marginTop:"30px"}}>comment</button>
           </div>
            </div>
            </div>
        



      
   
      <Footer />
      <BackToTop />
    </div>
    )
}
const mapStateToProps=state=>{
    return{
   
  details:state.DetailsReducer,
  }}
export default connect(mapStateToProps)(Details)
