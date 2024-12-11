import "./aboutus.css";
import React, { useRef, useState } from "react";
import Bohdan from "../../../assets/images/Bohdan.png"
import Nikita from "../../../assets/images/rounded_corners_image_new.png"
import Yehor from "../../../assets/images/yehor.jpg"
import { useTranslation } from 'react-i18next';

export default function AboutUs() {
  const { t } = useTranslation(); 
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
          <h3>{t('about.bohdantitle')}</h3>
          <h2>Bohdan Kralikauskas</h2>
          <button className="Card__button" type="button"onClick={() => openDialog(
            t('about.bohdandescription'),
            Bohdan)
          }
          aria-controls="closeMe">Profile</button>
        </div>
        {/* **************************** */}

        <div className="Card">
          <img className="Card__img" src={Nikita} alt="Nikita Mikhailov" />
          <h3>{t('about.nikitatitle')}</h3>
          <h2>Nikita Mikhailov</h2>
          <button className="Card__button" type="button"onClick={() => openDialog(
            t('about.nikitadescription'),
            Nikita)
          }
          aria-controls="closeMe">Profile</button>
        </div>

        {/* **************************** */}

        <div className="Card">
          <img className="Card__img" src={Yehor} alt="Yehor Zhydok" />
          <h3>{t('about.yehortitle')}</h3>
          <h2>Yehor Zhydok</h2>
          <button className="Card__button" type="button"onClick={() => openDialog(
            t('about.yehordescription'),
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
