import "./aboutus.css";
import React, { useRef, useState } from "react";
import Testimg from "../../../assets/images/sakamoto_2023.jpg";
import Bohdan from "../../../assets/images/Bohdan.png"
import Nikita from "../../../assets/images/rounded_corners_image_new.png"
import Yehor from "../../../assets/images/yehor.jpg"


export default function AboutUs() {
  const dialogRef = useRef(null);
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  const openDialog = (text, img) => {
    if (dialogRef.current) {
      setContent(text);
      setImage(img);
      dialogRef.current.showModal();
    }
  };

  const closeDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };

  return (
    <div className="AboutUs__Main">
      <div className="AboutUs__Cards">

        <div className="Card">
          <img className="Card__img" src={Bohdan} alt="Bohdan Kralikauskas" />
          <h3>CEO, co-founder</h3>
          <h2>Bohdan Kralikauskas</h2>
          <button className="Card__button" type="button" onClick={() =>openDialog(
                "APU management student. Studying IT since 10 y.o., 3 years working experience as a project manager and Team Lead in the top 5 IT companies in Russia according to Forbes, 1 year development of Univers Rift",
                Bohdan)
            }
            aria-controls="closeMe">Profile</button>
        </div>

        {/* **************************** */}

        <div className="Card">
          <img className="Card__img" src={Nikita} alt="Nikita Mikhailov" />
          <h3>Lead Game Designer, co-founder</h3>
          <h2>Nikita Mikhailov</h2>
          <button className="Card__button" type="button" onClick={() =>openDialog(
                "XYZ School of Game Design, Unreal Engine 5, NPO Nippon “Business and Market Analysis” ",
                Nikita)
            }
            aria-controls="closeMe">Profile</button>
        </div>

        {/* **************************** */}

        <div className="Card">
          <img className="Card__img" src={Yehor} alt="Yehor Zhydok" />
          <h3>CTO, co-founder</h3>
          <h2>Yehor Zhydok</h2>
          <button className="Card__button" type="button" onClick={() =>openDialog(
                "Studying programming for 7 years, full-stack developer, C++, Unreal Engine 5 blueprint developer. Working experience more than 1 year.Currently enrolling into Ritsumeikan Asia Pacific University",
                Yehor)
            }
            aria-controls="closeMe">Profile</button>
        </div>

        {/* **************************** */}

        {/* Диалоговое окно */}
        <dialog id="closeMe" ref={dialogRef} aria-labelledby="dialog-name">
          <img className="Card__img" src={image} alt="Profile" />
          <h2 id="heading">About Me</h2>
          <p>{content}</p>
          <button className="dialog__button" type="button" onClick={closeDialog}>Thank You</button>
        </dialog>
      </div>
    </div>
  );
}
