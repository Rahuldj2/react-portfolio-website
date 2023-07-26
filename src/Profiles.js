import React from "react";
import './styles/Profiles.css'
import leet from './assets/LeetLogo.png'
import gitt from './assets/GitHubLogo.png'
import cf from './assets/codeForceLogo.webp'

const Profiles=()=>{
    return <>
        <div className="coding-container">
            <div>
                <h1>
                    CODING PROFILES
                </h1>
            </div>

            <div className="coding-content">
                <div>
                    <a href="https://leetcode.com/RahulDj_2/" target="_blank"> 
                        <div>
                            <img src={leet}></img>
                        <h2>
                            Leetcode
                        </h2>
                        </div>
                        
                    </a>
                </div>

                <div>
                    <a href="https://codeforces.com/profile/rahuldj_br2" target="_blank">
                        <div>
                        <img style={{width:'100px'}} src={cf}></img>
                        <h2>    
                        Codeforces
                        </h2>
                        </div>
                    
                    </a>
                    
                </div>

                <div>
                    <a href="https://github.com/Rahuldj2" target="_blank">
                        <div>
                        <img src={gitt}></img>
                            <h2>    
                            GitHub 
                            </h2>
                        </div>

                    </a>
                </div>
            </div>
        </div>      
    </>
}

export default Profiles