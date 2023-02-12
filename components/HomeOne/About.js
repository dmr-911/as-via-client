import React from "react";

const About = () => {
  const lists = [
    <>
      <i className="icofont-verification-check"></i> INSTANT ANSWERS TO USER
      REQUESTS
    </>,
    <>
      <i className="icofont-verification-check"></i> REAL-TIME COMMUNICATION
    </>,
    <>
      <i className="icofont-verification-check"></i> ADVANCED AI TECHNOLOGY FOR
      ACCURATE RESPONSES
    </>,
    <>
      <i className="icofont-verification-check"></i> ABILITY TO UNDERSTAND USER
      INTENT
    </>,
    <>
      <i className="icofont-verification-check"></i> CONTINUOUS IMPROVEMENT
      THROUGH MACHINE LEARNING
    </>,
    <>
      <i className="icofont-verification-check"></i> INTEGRATION WITH WHATSAPP,
      THE WORLD'S MOST POPULAR MESSAGING PLATFORM
    </>,
    <>
      <i className="icofont-verification-check"></i> ALL-IN-ONE SOLUTION FOR
      INFORMATION AND COMMUNICATION NEEDS
    </>,
    <>
      <i className="icofont-verification-check"></i> ADVANCED AI TECHNOLOGY FOR
      ACCURATE RESPONSES
    </>,
    <>
      <i className="icofont-verification-check"></i> ONE CLICK SETUP FOR
      CONVENIENT ACCESS
    </>,
  ];

  return (
    <>
      <section id="about" className="app-about-section">
        <div className="container">
          <div
            className="section-title"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            <h2>About As Via</h2>
            <p>
              The rapid advancement in artificial intelligence (AI) has led to a
              proliferation of AI-powered tools and applications that are
              changing the way we interact with technology. Via is a
              hyperintelligent AI-powered WhatsApp chatbot that takes advantage
              of this technological boom and the popularity of chatbots like
              OpenAI's ChatGPT.
            </p>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-7">
              <div
                className="app-about-text"
                data-aos="fade-in"
                data-aos-duration="2000"
                data-aos-delay="200"
              >
                <h3>Most Popular Messaging Platform</h3>
                <p>
                  Ask Via offers a multitude of benefits to its users, making it
                  the perfect solution for anyone looking to improve their
                  productivity and efficiency. The chatbot's integration with
                  WhatsApp, the world's most popular messaging platform, allows
                  for real-time communication and instant answers to user
                  requests.
                </p>
                <p>
                  The chatbot also saves time and effort by automating routine
                  tasks and freeing up users to focus on more important tasks.
                  The one-click setup makes it easy and convenient for anyone to
                  start using Ask Via.
                </p>

                <ul>
                  {lists.map((list, i) => (
                    <li key={i}>{list}</li>
                  ))}

                  <li>
                    <i className="icofont-verification-check"></i> Responsive
                    design
                  </li>
                  <li>
                    <i className="icofont-verification-check"></i> Easy to
                    customize
                  </li>
                  <li>
                    <i className="icofont-verification-check"></i> Modern design
                  </li>
                </ul>

                <a
                  href="https://play.google.com/store/apps"
                  className="default-button"
                  target="_blank"
                >
                  <i className="icofont-cloud-download"></i>
                  Try Now
                </a>
              </div>
            </div>

            <div className="col-lg-5">
              <div
                className="text-center"
                data-aos="fade-in"
                data-aos-duration="3000"
                data-aos-delay="300"
              >
                <img src="/images/app-about.jpg" alt="App About Image" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
