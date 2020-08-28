import React from 'react';
import './Footer.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Courses from '../Courses/Courses';


const Footer = (props) => {



    return (
        <div className="CoursesArea">
            <div className="card-deck">
                <div className="card">
                     <img className="card-img-top" src={props.user.img} alt="img"/>
            <div className="card-body">
                     <h5 className="card-title">{props.user.CourseName}</h5>
                     <p>{props.user.CourseBy}</p>
                     <p>$ {props.user.price}</p>
                    <button onClick={()=> props.AddCourse(props.product)} className ="btn btn-info mb-2">Enrool Now</button>
                <div className="card-footer">
                         <small className="text-muted">Last updated 3 mins ago</small>
                </div>
            </div>
                </div>
            </div>


            


            
            
            
        </div>
    );
};

export default Footer;