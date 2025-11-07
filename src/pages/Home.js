import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../styles/Home.css';
import profile from '../assets/profile.png'; // Import the profile image

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <img 
          src={profile} 
          alt="Profile" 
          className="profile-picture"
        />
        <h2>Hi, I'm Shivprasad</h2>
        <p>Web and UIUX Developer passionate about building user-friendly applications.</p>
        <div className='social-links'>
          <a href="https://www.linkedin.com/in/lambru-adrian/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon />
          </a>
          <a href="mailto:lambru_george@yahoo.com" target="_blank" rel="noopener noreferrer">
            <EmailIcon />
          </a>
          <a href="https://github.com/lambrugeorge" target="_blank" rel="noopener noreferrer">
            <GitHubIcon />
          </a>
        </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <div className='skills-container'>
          <div className='card'>
            <h2>Technical & Analytical Skills</h2>
            <p>Python, Java, SQL, Android Studio (Java/XML), Power BI, Tableau Prep, DAX, 
  Machine Learning (Beginner), Firebase </p>
          </div>
          <div className='card'>
            <h2>Cloud & Tools</h2>
            <p>AWS CloudWatch (Beginner), Git, GitHub, VS Code</p>
          </div>
          <div className='card'>
            <h2>Soft Skills</h2>
            <p>Leadership, Teamwork, Communication, Adaptability, Time Management</p>
          </div>
          <div className='card'>
            <h2>Programming & Web Development</h2>
            <p>HTML, CSS, Material UI, JavaScript, React.js, Node.js, WordPress, MySQL</p>
          </div>
          <div className='card'>
            <h2>Operating Systems</h2>
            <p>Linux, Windows</p>
          </div>
          <div className='card'>
            <h2>Languages</h2>
            <p>Python,C++</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
