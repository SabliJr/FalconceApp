import React from "react";
import "./TheFooter.css";

//Icons
import { SiFalcon } from "react-icons/si";
import { BsTwitter, BsGithub, BsInstagram } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io";

const TheFooter = () => {
  let date = new Date();
  let thisYear = date.getFullYear();

  return (
    <>
      <hr
        style={{
          marginTop: "5rem",
        }}
      />
      <footer className='footer'>
        <article className='BrandArt'>
          <div className='FooterLogoDiv'>
            <SiFalcon className='FooterIcon' />
            <h1 className='FooterLogo'>Falconce</h1>
          </div>
          <p> &copy;Falconce&nbsp;{thisYear}</p>
        </article>
        <article className='mailSubs'>
          <h3>Subscribe for latest news and events.</h3>
          <input
            type='email'
            placeholder='Your Email Address'
            className='NewsSubs'
            required
          />
          <button type='submit' className='signBtn'>
            Sing Up
          </button>
        </article>
        <article className='socialArt'>
          <h3>Stay in touch:</h3>
          <div className='socialIcon'>
            <a
              href='https://twitter.com/sablijr'
              target='_blank'
              rel='noreferrer'>
              <BsTwitter />
            </a>
            <a
              href='https://www.youtube.com/channel/UCBJO1_fNXbltDULhDNma0yA'
              target='_blank'
              rel='noreferrer'>
              <IoLogoYoutube />
            </a>
            <a
              href='https://github.com/SabliJr'
              target='_blank'
              rel='noreferrer'>
              <BsGithub />
            </a>
            <a
              href='https://www.instagram.com/sabli.jr/'
              target='_blank'
              rel='noreferrer'>
              <BsInstagram />
            </a>
          </div>
        </article>
      </footer>
    </>
  );
};

export default TheFooter;
