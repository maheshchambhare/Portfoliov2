import React from 'react'
import Footer from './Footer'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import "./about.css"
import portrait from "../assets/portrait02.png"

export default function About() {

    const ButtonStyle = styled.div`
  margin-top: 2rem;
  .button {
    font-size: 2.2rem;
    /* background-color: gray; */
    padding: 0.7em 2em;
    border: 2px solid gray;
    border-radius: 8px;
    display: inline-block;
    
    text-decoration: none;
    transition: 0.5s ease-in-out;

    :hover {
        background-color: gray;
        color: black;
    }
  }

  .button-about{
      font-size: 1.5rem;
    padding: 0.7em 2em;
    border: 2px solid gray;
    border-radius: 8px;
    display: inline-block;
    text-decoration: none;
    transition: 0.5s ease-in-out;

    :hover {
        background-color: gray;
        color: black;
    }
  }
  @media only screen and (max-width: 768px) {
    .button {
      font-size: 1rem;
    }
    .button-about{
      font-size: 0.7rem;
    }
  }
`;


    return (
			<div className='about-main'>
				<div className='container'>
					<div className='info'>
						<p>
							Hi, I am <span>Mahesh Chambhare</span>
						</p>
						<h1>A freelance Web/App developer</h1>
						<p>
							I am from Surat, India 🇮🇳. A place of beauty and nature.
							Since my childhood, i love art and design. I always try to design
							stuff with my unique point of view. I also love to create things
							that can be usefull to others. <br/><br/>Coding is an art for me. I love it and now I
							have the opportunity to design along with the coding. I find it
							really interesting and I enjoyed the process a lot. <br/><br/>My vision is
							to make the world a better place. Now almost everything is
							becoming better than ever. It is time for us to create more good
							stuff that helps the world to become a better place.
						</p>
                        <h1>Skills</h1>
                        <div className="skill">
                          <ul>
                            <li>React</li>
                            <li>React Native</li>
                            <li>JavaScript</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>SCSS</li>
                            <li>Figma</li>
                            <li>Node</li>
                            <li>Firebase</li>
                          </ul>
                        </div>
                           <ButtonStyle className="button-wrapper">
                            <Link className="button-about" to="/about">
                                Download CV
                            </Link>
                            </ButtonStyle>
					</div>
					<div className='image'>
						<img src={portrait} alt='Proffile' />
					</div>
				</div>
				<Footer />
			</div>
		);
}
