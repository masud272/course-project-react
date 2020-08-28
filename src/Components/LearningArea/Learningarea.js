import React from 'react';
import './Learningarea.css'
import pic from '../../logos/Salesforce.png'

const Learningarea = () => {
    return (
        <div className="mainBody">
            <div className="firstPart">
                <div className="firstPartpara">
                    <p><b>Home / path</b> Salesforce</p>
                    <h2>Your Course to Success</h2>
                    <p>Build skills with courses, certificates, and degrees online from world-class universities and companies</p>
                    <button className="btn btn-info font-weight-bold" type="button">Join For Free</button>
                </div>                   
                <div>
                    <img src={pic} alt=""/>
                </div>
            </div>
              <div className="secondPart">
                  <h3>Achieve your goals with Ours</h3>
             </div>         
        </div>
    );
};

export default Learningarea;