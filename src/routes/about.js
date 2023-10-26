import React from "react";
import portfolioImage from "../assets/image/pp.png";
import cv from "../assets/cv/resume.pdf";
import fb from "../assets/social_media/fb.png";
import ig from "../assets/social_media/ig.png";
import gh from "../assets/social_media/gh.png";
import li from "../assets/social_media/li.png";
import tw from "../assets/social_media/tw.png";
import mail from "../assets/social_media/mail.png";

function about() {
  return (
    <section class="pt-4">
      <div class="container">
        <div class="row">
          <div
            className="col-md-12 text-center"
            style={{ paddingTop: "8.5rem" }}
          >
            <div>
              <span className="greeting">Hello, </span>
              <span className="greeting" style={{ color: "#9B4819" }}>
                I am Nirajan!
              </span>
            </div>
            <div>
              <span className="greeting-designation">
                Computer Engineering Student
              </span>
            </div>

            <div className="d-flex justify-content-center pt-4">
              <a
                href="mailto:nirajan.bekoju@gmail.com"
                target="_blank"
                className="mr3 socialMediaLink"
              >
                <img src={mail} className="social-media"></img>
              </a>
              <a
                href="https://github.com/NirajanBekoju"
                target="_blank"
                className="mr3 socialMediaLink"
              >
                <img src={gh} className="social-media"></img>
              </a>
              <a
                href="https://www.facebook.com/bekojunirajan/"
                target="_blank"
                className="mr3 socialMediaLink"
              >
                <img src={fb} className="social-media"></img>
              </a>

              <a
                href="https://www.instagram.com/nirajanbekoju/"
                target="_blank"
                className="mr3 socialMediaLink"
              >
                <img src={ig} className="social-media"></img>
              </a>

              <a
                href="https://www.linkedin.com/in/nirajan-bekoju-2698631b5/"
                target="_blank"
                className="mr3 socialMediaLink"
              >
                <img src={li} className="social-media"></img>
              </a>
              <a
                href="https://twitter.com/BekojuNirajan"
                target="_blank"
                className="mr3 socialMediaLink"
              >
                <img src={tw} className="social-media"></img>
              </a>
            </div>

            <div className="pt-4">
              <a
                href={cv}
                target="_blank"
                className="btn btn-outline-dark btn-rounded button"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container aboutme">
        <div className="row">
          <div className="col-md-9">
            <h1 className="greeting" style={{ color: "#9B4819" }}>
              About Me
            </h1>

            <p class="text-justify">
              As a computer engineering student, I have an interest in linear
              algebra, multi-variable calculus, probability, and statistics.
              Currently, I am learning machine learning and deep learning and
              studying CNNs, sequential models like RNNs, GRUs, and LSTMs. My
              programming languages of interest are Python, C, C++, Octave and
              Julia. I would love to explore Reinforcement Learning.
            </p>
            <p>
              I have been working on nepali language processing to develop
              language model for sentimental classification, text auto -
              generation and summarization.
            </p>
            <p>
              Other than technical aspects, I enjoy listening instumental
              music(mostly classical), playing flute, cycling, walking,
              meditation, and spending time without doing anything.I love
              studying history, religion and philosophy. As of now, my favorite
              anime are One piece and Attack on Titan.
            </p>
            <p>
              <span className="font-weight-bold">Favourite Quotes: </span>"A man
              is made by his beliefs. As he believes. So he becomes." - Lord
              Krishna
            </p>
          </div>

          <div
            className="col-md-3"
            style={{ marginTop: "7rem", marginBottom: "10rem" }}
          >
            <div className="circular-image-container">
              <img
                src={portfolioImage}
                alt="Portfolio image"
                width={300}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default about;
