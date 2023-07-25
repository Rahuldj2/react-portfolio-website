import portfolioImg from './assets/portfolioImg.jpeg'
import './styles/Head.css'



const Head=()=>
{
    return<>
        <header className="App-header">
        <img src={portfolioImg}className='dp'>

        </img>
        <h1>
          Hi! I am Rahul
        </h1>
      </header>
    </>
}
export default Head;