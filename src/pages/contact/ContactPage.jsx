import img from "../../assets/Contact-Hero.jpg";
import emailjs from "@emailjs/browser";
import AnimatedPage from "../../components/AnimatedPage";
import LogoM from "../../components/logo-M/LogoM";
import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import "./contact.scss";

const ContactPage = () => {
  const { ref: ref1, inView: titleIsVisible } = useInView();

  const refContainer = useRef(null);

  const formRef = useRef();

  const navigate = useNavigate();

  useEffect(() => {
    refContainer.current.focus();
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_g788tme",
        "template_w7u6qtb",
        formRef.current,
        "Fj7G3Ji2yq_cho6WY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    navigate("/success");
  };

  const handleKeyPress = (event) => {
    // look for the `Enter` keyCode
    if (event.keyCode === 13 || event.which === 13) {
      handleSubmit();
    }
  };

  return (
    <AnimatedPage>
      <div className="contactPage">
        <div className="contactHeader">
          <LogoM className="logoColor" />
          <div className="formContainer">
            <div className="titleContainer">
              <h2>contact me</h2>
              <p className="formSubtitle">
                Let&apos;s get this conversation started. <br /> Tell me more
                about your company and goals for your future business growth.
              </p>
            </div>
            <form className="form" onSubmit={handleSubmit} ref={formRef}>
              <div className="formRow">
                <input
                  type="text"
                  className="formInput"
                  id="name"
                  name="name"
                  placeholder="name"
                  ref={refContainer}
                  required
                  onKeyDown={handleKeyPress}
                />
              </div>
              <div className="formRow">
                <input
                  type="email"
                  className="formInput"
                  id="email"
                  name="email"
                  placeholder="email"
                  required
                  onKeyDown={handleKeyPress}
                />
              </div>
              <div className="formRow">
                <textarea
                  type="text"
                  className="formInput"
                  name="message"
                  placeholder="message"
                  required
                  onKeyDown={handleKeyPress}
                />
              </div>
              <button className="btnSend" type="submit">
                SEND
              </button>
            </form>
          </div>
        </div>

        <div className="footerWrapper">
          <div className="contactFooter">
            <div className="imgContainer">
              <div className="backgroundImg">
                <img src={img} alt="chair mock up" className="iAmAnSvg" />
              </div>
              <div className="frontTitle">
                <h2
                  ref={ref1}
                  className={`frontText ${titleIsVisible ? "fadeIn" : ""}`}
                >
                  industrial design | CAD | photorealistic rendering
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default ContactPage;
