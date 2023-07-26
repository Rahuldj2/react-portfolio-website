import { useEffect, useState } from 'react'
import portfolioImg from './assets/portfolioImg.jpeg'
import './styles/Head.css'



const Head=()=>
{
  const[heading,Display]=useState(" ");


  useEffect(() => {
    const timer = setTimeout(() => {
        Display(<h1> Hi! I am Rahul</h1>)
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

    return<>
        <header className="App-header">
        <img src={portfolioImg}className='dp'>

        </img>
        {heading}
      </header>
    </>
}
export default Head;