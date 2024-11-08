import './About.css';
import Image from "next/image";

function About() {
  return (
    <section id="about" className="about">
      <div className="img-about">
        <Image
          src = "/heronew.jpeg"
          alt="Description of image"
          width={400}
          height={400}
        />
        <div className="info-about1">
          <span>3+</span>
          <p>years of exprience</p>
        </div>
        <div className="info-about2">
          <span>50+</span>
          <p>project complete</p>
        </div>
        <div className="info-about3">
          <span>200+</span>
          <p>Happy cionts</p>
        </div>
      </div>
      <div className="about-content">
        <span>Let me Indrojuce myself</span>
        <h2>About me</h2>
        <h3>A Story Of Good</h3>
        <p>
          I am a web developer with 3 years of experience in creating modern
          responsive, and user-focused websites. Skilled in leveraging the
          latest technologies to deliver seamless and efficient web experiences
          I am dedicated to building high-quality functional, and visually
          appealing applications that meet user needs and enhance online
          presence.
        </p>
        <div className="btn-box">
          <a href="https://www.linkedin.com" className="btn">
            Read More!
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;