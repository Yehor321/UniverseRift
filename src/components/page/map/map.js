import { useEffect } from "react";
import { useTranslation } from 'react-i18next';
import "./map.css";

import mapClouded2 from "../../../assets/map/map_clouded2.webp";
import mapContent from "../../../assets/map/map_content.webp";
import mapIsland from "../../../assets/map/map_island.webp";
import mapRoads from "../../../assets/map/map_roads.webp";
import mapName from "../../../assets/map/map_name.webp";

export default function Map() {
  const { t, i18n } = useTranslation(); 
  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty(
        "--move-x",
        `${(e.clientX - window.innerWidth / 2) * -0.005}deg`
      );
      document.documentElement.style.setProperty(
        "--move-y",
        `${(e.clientY - window.innerHeight / 2) * -0.01}deg`
      );
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="Map__Main">
      <section className="layers">
        <div className="layers__container">
          <div
            className="layers__item layer-2"
            style={{ backgroundImage: `url(${mapIsland})` }}
          ></div>
          <div
            className="layers__item layer-3"
            style={{ backgroundImage: `url(${mapRoads})` }}
          ></div>
          <div
            className="layers__item layer-4"
            style={{ backgroundImage: `url(${mapContent})` }}
          ></div>
          <div
            className="layers__item layer-6"
            style={{ backgroundImage: `url(${mapClouded2})` }}
          ></div>
          <div
            className="layers__item layer-6"
            style={{ backgroundImage: `url(${mapName})` }}
          ></div>
        </div>
      </section>
      <p>{t('map.description')}</p>
    </div>
  );
}
