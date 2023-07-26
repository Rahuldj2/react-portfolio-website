import react, { useRef, useState } from 'react'
import './styles/Navbar.css'
import {Link} from 'react-router-dom'
import menuIcon from './assets/list.svg'

const Navbar=({aboutRef,skillRef})=>
{
    const handleSkill=()=>{
        skillRef.current.scrollIntoView({ behavior: 'smooth',block:'start' });
    }
    const handleClick = () => {
        // console.log("hello")
        //using useRef hook
        aboutRef.current.scrollIntoView({ behavior: 'smooth',block:'start' });

        //correct code using dom
            //         const aboutElement = document.getElementById('about');
            // aboutElement.scrollIntoView({
            //     behavior: 'smooth',
            //     block: 'start', // Adjust this value if you want the component to align differently after scrolling.
            // });
      };

      const[isOpen,toggle]=useState(null);

      const change=()=>{
        if (isOpen==null)
        {
            toggle(true);
        }
        else
        {
            toggle(!(isOpen))
        }
        console.log(isOpen)
        
      }



    return<>
        <div className='nav-parent'>
            <div>
                    
                <button onClick={change} className='mobile-menu'>
                    <img src={menuIcon}>
                    </img>
                </button>
            </div>
            <nav id='Nav'className={`Nav${isOpen?'active':''}`}>
                <ul>
                    <div>
                        <li>
                            {/* <Link to='/'> */}
                            <a className='home-link' href='/' style={{textDecoration:'none',color:'white' }}>
                                
                                Home
                            </a>
                            {/* </Link> */}
                        </li>
                    </div>
                    
                    <div>
                        
                        <li onClick={()=>{
                            handleClick()
                        }}>
                            {/* <Link to='/'> */}
                
                                About
                        
                            {/* </Link> */}
                        </li>
                    </div>
                    
                <div>
                        
                    <li onClick={handleSkill}>
                        Skills
                    </li>
                </div>

                    {/* <li>
                                Contact
                        
                    </li> */}
                </ul>
            </nav>
        </div>
    </>
    
}

export default Navbar