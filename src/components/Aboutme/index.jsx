import React from 'react';
import '../Aboutme/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import photo from '../../assets/photo.png';

const AboutMe = () => {
    return (
        <div className='container-about-me'>
            <div className='div1'>
                <figure className='pic-profile'>
                    <img
                        className='photo'
                        src={photo}
                        alt='profile'
                    />
                    <div></div>
                </figure>
            </div>
            <div className='div2'>
                <h2>I'm Natalia Rojas</h2>
                <h3>FullStack Developer | Business Manager</h3>
                <p>
                    <span>I'm a FullStack Developer and Business Management passionate about new technologies and continuos learning,</span>
                    <br />
                    <span>with solid knowledge in React, Node, Bootstrap, PostgreSQL</span>
                    <br />
                    <span>and experience in purchasing analyst, sales and customer service.</span>
                    <br />
                    <span>In addition, I am passionate about languages, so I am Intermediate English B2</span>
                    <br />
                    <span>and I study German in my free time (I'm beginner).</span>
                    <br />
                    <span>I invite you to look at my projects!!</span>
                </p>
            </div>
        </div>
    );
};

export default AboutMe;
