import React from "react";
import './styles/About.css'

const About=()=>
{
    return <>
        <section className="about-section">
            <div className='h1-cont'style={{textAlign:'center'}}>
                <h1>
                    ABOUT
                </h1>
            </div>

            <div className="about-cont">
                <article className="about-content">
                    <p>
                        I am an aspiring Computer Science Student, zealous about new and upcoming technologies.
                        I have a strong understanding of various kinds of Data Structures And Algorithms and I am Passionate about
                        Competitive Programming as well.
                    </p>
                </article>
            </div>
            
        </section>
    </>
}

export default About;