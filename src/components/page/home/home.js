import "./home.css";
import { useTranslation } from 'react-i18next';
import UniverseRift from "../../../assets/images/Universe-Rift-2-24-2024.webp"
import DiscorsIcon from "../../../assets/images/discord-logo-discord-icon-transparent-free-png.webp"

export default function Home() {

  const { t} = useTranslation(); 

    return (
      <>
        <div className="Home">
          <img className="MainLogo" src={UniverseRift} alt="UniverseRiftLogo"></img>
          <a className="DiscordButton" href="https://discord.gg/TXBFBHJyDs">{t('home.button_join')}<img className="DiscordButtonImg" src={DiscorsIcon} alt="DiscordButtonImg"></img></a>
          <p className="MainText">{t('home.text_support')}</p>
        </div>
      </>
    );
}