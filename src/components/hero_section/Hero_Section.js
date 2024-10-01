import React from "react";
import "./../../layouts/ambiheader/Header.css";
// import Video from './../cards/Video';
import "./Hero_Section.css";

function Hero_Section() {
  return (
    // <div className='mt-5 '>
    //   <div id="Hero_Section" className="carousel slide " data-bs-ride="carousel" direction="top">
    //     <div className="carousel-indicators">
    //       <button type="button" data-bs-target="#Hero_Section" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    //       <button type="button" data-bs-target="#Hero_Section" data-bs-slide-to="1" aria-label="Slide 2"></button>
    //     </div>
    //     <div className="carousel-inner">
    //       <div className="carousel-item active" data-bs-interval="10000">

    //         <Video videoSrc="video1.mp4" heading="Lets Hangout And With Us Explore Future" />

    //       </div>
    //       <div className="carousel-item" data-bs-interval="10000">
    //           <Video videoSrc="video2.mp4" heading="Lets Hangout And With Us Explore Future" />
    //       </div>
    //     </div>
    //     <button className="carousel-control-prev" type="button" data-bs-target="#Hero_Section" data-bs-slide="prev">
    //       <span className="visually-hidden">Previous</span>
    //     </button>
    //     <button className="carousel-control-next" type="button" data-bs-target="#Hero_Section" data-bs-slide="next">
    //       <span className="visually-hidden">Next</span>
    //     </button>
    //   </div>
    // </div>
    <>
      <div className="hero-section">
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>Let's Hangout and Explore the Future Lorem </h1>
          <p>
            Join us on a journey towards innovation and technology.Join us on a
            journey towards innovation and technology.
          </p>
          <button className="cta-button">Learn More</button>
          <button className="cta-button">Read the press release</button>
        </div>
        <div className="latest">
          <div>
            <h3 className="haeding">Latest from HPE</h3>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                marginLeft: "30px",
              }}
            >
              <div style={{ width: "30%", marginTop: "30px" }}>
                <p>press release</p>
                <h4>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Cupiditate, suscipit.
                </h4>
                <h4>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Cupiditate
                </h4>
                <h5 className="latest_button">Read more</h5>
              </div>
              <div style={{ width: "30%", marginTop: "30px" }}>
                <p>blog post</p>
                <h4>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Cupiditate, suscipit.
                </h4>
                <h4>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Cupiditate
                </h4>
                <h5 className="latest_button">Read more</h5>
              </div>
              <div style={{ width: "30%", marginTop: "30px" }}>
                <p>press release</p>
                <h4>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Cupiditate, suscipit.
                </h4>
                <h4>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Cupiditate
                </h4>
                <h5 className="latest_button">Read more</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="last_hero">
          <div
            className="content"
            style={{ marginLeft: "300px", display: "flex" }}
          >
            <h3>Artificial intelligence</h3>
            <h3>Artificial intelligence</h3>
            <h3>Artificial intelligence</h3>
            <h3>Artificial intelligence</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero_Section;
