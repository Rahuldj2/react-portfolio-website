import react, { useState } from 'react'
import './styles/Navbar.css'
import {Link} from 'react-router-dom'
const Navbar=()=>
{

    return<>
        <div style={{display:'flex',flexDirection:'row',justifyContent:'center',backgroundColor:'#1a1d21'}}>
            
            <nav className='Nav'>
                <ul>
                    <li>
                        {/* <Link to='/'> */}
                            Home
                        {/* </Link> */}
                    </li>

                    <li>
                        {/* <Link to='/'> */}
                                About
                        {/* </Link> */}
                    </li>

                    <li>
                        {/* <Link to='/contact'> */}
                                Contact
                        {/* </Link> */}
                    </li>
                </ul>
            </nav>
        </div>
    </>
    
}

export default Navbar