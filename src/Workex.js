import React from "react";
import  { useEffect, useRef, useState } from "react";
import TimelineObserver from "react-timeline-animation";
import "./styles/Workex.css";
import ing from './assets/ingLogo.jpg'
import gdsc from './assets/gdscLogo.png'
import snu from './assets/snuLogo.png'


const Timeline = ({ setObserver, callback }) => {
  const [message1, setMessage1] = useState("");
  const [message2, setMessage2] = useState("");
  const [message3, setMessage3] = useState("");

  const timeline1 = useRef(null);
  const timeline2 = useRef(null);
  const timeline3 = useRef(null);
  const circle1 = useRef(null);
  const circle2 = useRef(null);
  const circle3 = useRef(null);

  const someCallback = () => {
    setMessage1(<section>
        <article>
            
        <img src={ing}></img>
        </article>
        <div>
            <h3>
            Junior Software Engineer
            </h3>

            <p>
            Working on Developing various <br></br>ReactJS applications
            </p>
        </div>
    </section>);
    callback();
  };

  const someCallback2 = () => {
    setMessage2(<section>
        <article>
            
        <img src={gdsc}></img>
        </article>
        <div>
            <h3>
            Competitive Programmer
            </h3>

            <p>
            Participated in Codeforces Contests<br>
            </br> and solved over 100 problems on Leetcode
            </p>
        </div>
    </section>);
  };

  const someCallback3 = () => {
    setMessage3(<section>
        <article>
            
        <img src={snu}></img>
        </article>
        <div>
            <h3>
            LASC Tutor- Data Structures
            </h3>

            <p>
                Worked with Learning and Academic Support <br></br>Center 
                of Shiv Nadar University as a part time <br>
                </br>Tutor for Data Structures course
            </p>
        </div>
    </section>);
    // fireConfetti();
  };

  useEffect(() => {
    setObserver(timeline1.current);
    setObserver(timeline2.current);
    setObserver(timeline3.current);
    setObserver(circle1.current, someCallback);
    setObserver(circle2.current, someCallback2);
    setObserver(circle3.current, someCallback3);
  }, []);

  return (
    <div className="wrapper">
      <div id="timeline1" ref={timeline1} className="timeline" />
      <div className="circleWrapper">
        <div id="circle1" ref={circle1} className="circle">
          
        </div>
        <div id='msg-1'className="message">
            {message1}
        </div>
      </div>
      <div id="timeline2" ref={timeline2} className="timeline" />
      <div className="circleWrapper">
        
      <div id='msg-2'className="message">{message2}</div>
        <div id="circle2" ref={circle2} className="circle">
          
        </div>
      </div>
      <div id="timeline3" ref={timeline3} className="timeline" />
      <div className="circleWrapper">
        <div id="circle3" ref={circle3} className="circle">
          
        </div>
        <div id='msg-3' className="message">{message3}</div>
      </div>
    </div>
  );
};


const Workex=()=>{
    const [message, setMessage] = useState("");

    const onCallback = () => {
      console.log("awesome");
    };
  
    return (
      <div className="workex-cont">
        <h1>WORK EXPERIENCE</h1>
        <TimelineObserver
          initialColor="black"
          fillColor="white"
          handleObserve={(setObserver) => (
            <Timeline
              callback={onCallback}
              className="timeline"
              setObserver={setObserver}
            />
          )}
        />
        <div className="stub2">{message}</div>
      </div>
    );
}

export default Workex