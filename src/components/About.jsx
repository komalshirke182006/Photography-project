import "./About.css";
import profileImg from "../assets/profile.jpg"; 

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        {/* Left - Photographer Image */}
        <div className="about-image">
          <img src={profileImg} alt="Photographer" />
        </div>

        {/* Right - Information */}
        <div className="about-content">
          <h1>About Me</h1>
          <h6>The Artist Behind The Lens</h6><br></br>
          <h3>Hi, I'm Sara Khan</h3><br></br>
          <p>
            I am a professional photographer with over 12 years of experience in capturing authentic moments and
             meaningful stories through photography.<br></br>
             My work focuses on combining creativity, light, and emotion to create timeless images.

           I have worked with a wide range of clients, covering weddings, portraits, lifestyle, 
           and creative photography projects.<br></br><br></br>
           I believe the best photographs are created when people feel comfortable and confident in front of the camera.

          From planning a shoot to final editing, I pay close attention to detail and quality,
          ensuring every client receives images that they can cherish for a lifetime.
          </p>

          {/* Stats Cards */}
          <div className="about-stats">
            <div className="stat-card">
              <h4>12+</h4>
              <p>Years Experience</p>
            </div>

            <div className="stat-card">
              <h4>500+</h4>
              <p>Happy Clients</p>
            </div>

            <div className="stat-card">
              <h4>15+</h4>
              <p>Awards Won</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
