import react, { useRef, useState } from 'react'
import './styles/Navbar.css'
import {Link} from 'react-router-dom'

const Navbar=({aboutRef,skillRef})=>
{
    const handleSkill=()=>{
        skillRef.current.scrollIntoView({ behavior: 'smooth',block:'start' });
    }
    const handleClick = () => {
        // console.log("hello")
        aboutRef.current.scrollIntoView({ behavior: 'smooth',block:'start' });

        //correct code
            //         const aboutElement = document.getElementById('about');
            // aboutElement.scrollIntoView({
            //     behavior: 'smooth',
            //     block: 'start', // Adjust this value if you want the component to align differently after scrolling.
            // });
      };

    return<>
        <div style={{display:'flex',flexDirection:'row',justifyContent:'center',backgroundColor:'#1a1d21'}}>
            
            <nav className='Nav'>
                <ul>
                    <li>
                        {/* <Link to='/'> */}
                        <a className='home-link' href='/' style={{textDecoration:'none',color:'white' }}>
                            
                            Home
                        </a>
                        {/* </Link> */}
                    </li>

                    <li onClick={()=>{
                        handleClick()
                    }}>
                        {/* <Link to='/'> */}
            
                            About
                    
                        {/* </Link> */}
                    </li>

                    <li onClick={handleSkill}>
                        Skills
                    </li>

                    {/* <li>
                                Contact
                        
                    </li> */}
                </ul>
            </nav>
        </div>
    </>
    
}

export default Navbar