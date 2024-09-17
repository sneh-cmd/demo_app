import React from "react";
import Flexi from "./Flexi";
const Flexiapp=()=>{
    return(
        <>
            <div className="app">
                <div className="box1">
                    <h1>hello</h1>
                    <p><b>Office Address :</b>150 feet ring road <br/>
                    b/h alap green city raiya road rajkot-360005</p>
                    <p><b>Call us :</b>(+91) 9998003879</p>
                </div>
                <div className="box2">
                    <h1>this is map</h1>
                    <Flexi />
                </div>
            </div>
        </>
    )
}
export default Flexiapp