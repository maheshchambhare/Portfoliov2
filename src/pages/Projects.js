import React from 'react'
import "./projects.css"

import GHgif from "../assets/projects/Github-thumbnail.gif"
import GHT1 from "../assets/projects/github-thumbnail01.png"

import NCP from "../assets/projects/netflix clone.png"
import NCG from "../assets/projects/netflix clone.gif"

import WP from "../assets/projects/Wheather-thumbnail01.png"
import WG from "../assets/projects/wheathergif.gif"

import AS from "../assets/projects/admin-screens.svg"
import AHOEG from "../assets/projects/HOEG.gif"

import styled from 'styled-components';
import Footer from './Footer';



import { Link } from 'react-router-dom';

export default function Projects() {


    const Project = (props) => {

          const ImageCont = styled.div`
			display: flex;
			justify-content: center;
            height: 500px;
			width: 70%;
            margin-left: auto;
            margin-right: auto;
			background-color: transparent;
			border-radius: 10px;
			cursor: pointer;
            overflow: hidden;
			transition: all 0.5s ease-in-out;

           

			img {
				margin: 50px;
				background-color: rgb(255, 255, 255);
				border-radius: 10px;
				// border: 10px solid gray;
				padding: 15px;
				height: 400px;
				margin-right: auto;
				margin-left: auto;
				cursor: pointer;
				transition: all 1s ease;

			}
			img:first-child {
				display: none;
				transition: all 0.5 ease;
			}
			img:last-child {
				display: block;
				transition: all 0.5 ease;
			}
			&::before {
				content: "${props.number}";
				font-size: 5rem;
				padding: 0px;
				opacity: 0;
				color: rgb(255, 255, 255);
				border-radius: 0px 50px 50px 0px;
				transition: all 0.5s ease-in-out;
			}

			&:hover {
				img:last-child {
					display: none;
				}
				img:first-child {
					display: block;
					opacity: 0.8;
				}
				box-shadow: 0 0 10px rgba(255, 255, 255, 0.137);

				&::before {
					content:"${props.number}";
					font-size: 5rem;
					padding: 30px;
					opacity: 0.5;
					background-color: rgba(255, 255, 255, 0.46);
					color: rgb(0, 0, 0);
                   box-shadow: 0 0 10px #ffffff55;
					// transform: scaleX(1);
				}
			}
            @media (max-width: 768px){
                width: 90%;
                height: auto;
                img {
                    width: 100%;
                    height: 100%;
                    max-width: 300px;

                }
                img:last-child{
                    display: none;
                }
                img:first-child{
                    display: block;
                }
                &::before{
                    opacity: 1;
                    color: #000000;
                    position: absolute;
                    right: 70%;
                            padding: 50px;
                }

                &:hover {
                 box-shadow: none;
                 border: none;
                 
                 &::before{
                    background-color: transparent;
                    box-shadow: none;
                    padding: 10px;
                    opacity: 1;
                    color: gray;
                 }
                 /* display: none; */
                }

                }
            
          `


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
            <div className="main-container">
                    <h1>{props.title}</h1>
                <ImageCont>
                <img src={props.gif} alt="Project Thumbnail"/>
                <img src={props.src} alt="Project Thumbnail"/>
                </ImageCont>
                <div className="info">
                <p>{props.desc}</p>
                <div className="buttons">
                         <ButtonStyle className="button-wrapper">
                             {props.next ? 
                            <Link className="button-about" to="/Projects/HariomElectricals">
                                {props.button1}
                            </Link>
                            :
                            <a className="button-about" 
                            target="_blank"
                            href={props.bottun1Link}>
                                {props.button1}
                            </a> 
                             }
                            </ButtonStyle>
                                 <ButtonStyle className="button-wrapper">
                           
                            <a className="button-about" 
                            target="_blank"
                            href={props.bottun2Link}>
                                {props.button2}
                            </a> 
                            </ButtonStyle>
                </div>
                </div>
            </div>
        )
    }


    return (
        <div className="container">
            <h1>Projects</h1>
            <Project gif={AHOEG} src={AS} title="Hariom Electricals" number="01" 
             button1="Read More"
            button2="Download Apk"
            next={true}
            bottun2Link="https://firebasestorage.googleapis.com/v0/b/hariom-electricals.appspot.com/o/hariom%20files%2FHariOmElectricals.apk?alt=media&token=616fa39e-92d3-4230-a7dc-535cf889d0b2"
            desc={["Hariom Electricals is a app which is helping the people who work at, ",<span>BRTS</span>,
            " which is an integrated bus rapid transit and public bus transport system for Surat, Gujarat, India🇮🇳,",
            <br/>,
            <br/>,
            "This app is Responsible for handling their day to day ",<span>Tasks</span>," like",
            <ul>
                <li>Live location of Employee</li>
                <li>Calculating Distance covered by Employee</li>
                <li>Accessing Daily work of Employee using image and text like post</li>
                <li>Posting work by Employee daily</li>
                <li>Applying for leave by Employee</li>
                <li>Leave approved or Decline by Admin</li>
                <li>Task given by Admin</li>
                <li>Given task completed or declined by Employee</li>
            </ul>
            ,"To know more Click on Read more"
        
        ]}
            />
            <Project 
            gif={NCG} 
            src={NCP}
             bottun2Link="#"
             bottun1Link="https://github.com/Leo-mahesh/TMDB-API-PopularShows"
            button1="Source Code"
            button2="Live Demo"
            title="Shows Finder" 
            number="02" 
            desc={["This project is using "," ",<span>TMDB API </span>,"   "," And ", "  ",<span>Youtube Api</span>," " ," for gathering data,",<br/>,<br/>,
            "What can this peoject Do ?",
            <ul>
                <li>Find the Trending Shows</li>
                <li>Find whats Trending on Netflix</li>
                <li>Find shows by genre</li>
                <li>Watch trailer of that show using Youtube Api by clicking on show</li>
            </ul>
            ]}
            />

            <Project gif={GHgif} 
            src={GHT1} 
             button1="Source Code"
            button2="Live Demo"
              bottun2Link="#"
              bottun1Link="https://github.com/Leo-mahesh/github-api-project"
            title="Github Profile Finder"
             number="03" 
             desc={["This project is using ","",<span>Github API </span> ,<br/>,<br/>,
            "What can this peoject Do ?",
            <ul>
                <li>Find user by Searching for username</li>
                <li>Loading Avatar of that User</li>
                <li>Loading Bio of that User</li>
                <li>Loading Name of that User</li>
                <li>Loading Followers of that User</li>
                <li>Loading Following of that User</li>
                <li>Button for following that user</li>
            </ul>
            ]}
             />

            <Project gif={WG} 
            src={WP} 
             button1="Source Code"
            button2="Live Demo"
              bottun2Link="#"
              bottun1Link="https://github.com/Leo-mahesh/Weather-react-project-using-api"
            title="Weather Search By City" 
            number="04" 
            desc={["This project is using ","",<span>Open Weather API </span>," ","And"," ",<span>Unsplash API </span>,"",<br/>,<br/>,
            "What can this peoject Do ?",
            <ul>
                <li>Get Weather by City Name</li>
                <li>Getting Photo of that City Name</li>
                <li>Getting Temperature of that City Name</li>
                <li>Getting Humidity of that City Name</li>
                <li>Getting Cloud Status of that City Name</li>
                <li>Getting Air speed of that City Name</li>
                
            </ul>
            ]}
            />
            <Footer />
        </div>
    )
}
