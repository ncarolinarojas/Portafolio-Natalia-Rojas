import React from 'react';
import '../Aboutme/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import photo from '../../assets/photo.png';

const AboutMe = () => {
    return (
        <div className='container-about-me'>
            <div className='div1'>
                <figure>
                    <img
                        className='photo'
                        src={photo}
                        alt='profile'
                    />
                    <div></div>
                </figure>
            </div>
            <div className='div2'>
                <h2>Natalia Rojas</h2>
                <h3>FullStack Developer | Business Manager</h3>
                <p>
                    <span>Full Stack Developer and Business Management passionate about new technologies </span>
                    <br />
                    <span>with solid knowledge in React, Node, Bootstrap, PostgreSQL</span>
                    <br />
                    <span>and experience in purchasing analyst, sales and customer service.</span>
                    <br />
                    <span>Passionate about electronic commerce as a fusion of both careers</span>
                    <br />
                    <span>I invite you to look at my projects!!</span>
                </p>
            </div>
        </div>
    );
};

export default AboutMe;
