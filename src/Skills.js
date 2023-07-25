import React from "react";
import cLogo from './assets/cLogo.png'
import htmlLogo from './assets/htmlLogo1.png'
import javaLogo from './assets/javaLogo.jpg'
import cssLogo from './assets/cssLogo.jpg'
import jsLogo from './assets/jsLogo.png'
import pyLogo from './assets/pyLogo.avif'
import reactLogo from './assets/reactLogo.png'
import './styles/Skills.css'

const Skills=()=>
{
    return <>
    <div className="body-cont"style={{backgroundColor:'#22262b'}}>
        <div >
            <h1 style={{color:'white',textAlign:'center',fontSize:'50px'}}>
                SKILLS
            </h1>
        </div>
    <div className="gallery">
            <img src={cLogo}></img>
            <img src={javaLogo}></img>
            <img src={htmlLogo}></img>
            <img src={pyLogo}></img>
            <img src={reactLogo}></img>
            <img src={jsLogo}></img>
            <img src={cssLogo}></img>
        </div>
    </div>

    </>
}

export default Skills;