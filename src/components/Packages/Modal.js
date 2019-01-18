import React from "react";
import Carousel from "./Slideshow";


const carouselSlidesData = [
    {
      content:
        "We build your company a landing page that displays the company's info, pictures, and a contact page to your site. Time frame takes 1-5 business days",
      author: "Basic",
      source: "$250"
    }, 
    {
        content:
          "Need to increase company sales through an online store? Our engineers can set up a store for you that takes paypal, card, or cryptocurrency. We also offer a database management system where you the user can go in and view information about sales.",
        author: "eCommerce",
        source: "600$+"
      },
    {
      content:
        "Have an app idea in mind? We'll work with you to find a solution that helps your company become more efficient. An example of a web app would be creating a company management system that includes schedules, tasks, a clock in/out system, an automated timesheet, etc.",
      author: "Web App",
      source: "$800+"
    }
  ];

const Modal = props => (
  <div
    className={props.className}
    style={{
      transform: props.show ? "translateY(0vh)" : "translateY(-100vh)",
      opacity: props.show ? "1" : "0"
    }}
  >
    <div className="modal-content">
      <h2 onClick={props.close}>X</h2>
      <div className="package">
  <Carousel 
  packageName="Websites"
  slides={carouselSlidesData} />
      </div>
    </div>
  </div>
);

export default Modal;
