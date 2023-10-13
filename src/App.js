import React from 'react';
import './App.css'; // You should create an App.css file for styling
import avatar from './avatar.jpg'; // Add your profile picture

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <h1>My Portfolio</h1>
        </nav>
      </header>
      <main>
        <section className="profile">
          <img src={avatar} alt="Your Name" />
          <h2>Palaniappa K</h2>
          <p>Web Developer</p>
        </section>
        <section className="about">
          <h2>About Me</h2>
          <p>
          I'm a passionate web developer with a love for creating innovative and user-friendly digital experiences. With a strong foundation in web technologies, I bring creativity and technical skills to every project I tackle.

My journey in web development started several years ago when I discovered my fascination with coding. Since then, I've honed my skills in HTML, CSS, JavaScript, and various modern web frameworks. I've had the privilege of working on a diverse range of projects, from small business websites to complex web applications.

My experience has taught me the importance of collaboration, problem-solving, and attention to detail. I thrive in dynamic environments, and I'm always eager to learn and adapt to new technologies. Whether it's building responsive, mobile-friendly websites or optimizing site performance, I enjoy the challenge of crafting elegant solutions.

What truly drives me is the opportunity to make a positive impact on the digital world. I believe that well-designed websites can enhance people's lives, whether by providing valuable information, streamlining processes, or offering an enjoyable user experience. I'm dedicated to creating websites that not only meet but exceed user expectations.
          </p>
        </section>
        <section className="projects">
          <h2>Projects</h2>
          <div className="project">
            <h3>Project 1: Store.it</h3>
            <p>Store.it is a cutting-edge e-commerce website I developed using the MERN (MongoDB, Express.js, React, Node.js) stack. This platform offers a seamless shopping experience with features such as user authentication, product catalog, shopping cart, and secure payment processing. I utilized Redux for state management and integrated third-party APIs for product data. The project also demonstrates responsive design, making it accessible on various devices.</p>
          </div>
          <div className="project">
            <h3>Project 2: Metup app</h3>
            <p>Metup is a mobile app designed for both iOS and Android platforms. It's a location-based social networking app that enables users to connect with people nearby. Users can create profiles, view nearby users on a map, and chat with others in real time. The app leverages technologies like React Native for cross-platform development, Firebase for real-time data storage, and geolocation services to provide accurate user locations. It's a showcase of my mobile app development skills.</p>
          </div>
        </section>
        <section className="contact">
          <h2>Contact Me</h2>
          <p>Email: xxys@email.com</p>
          <p>LinkedIn: linkedin.com/in/xyss</p>
          <p>GitHub: github.com/xyss</p>
        </section>
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Palani</p>
      </footer>
    </div>
  );
}

export default App;

