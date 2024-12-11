import "./landingPage.css"
import Home from "../../components/page/home/home"
import Crowdfunding from "../crowdfunding/crowdfunding"
import AboutUniverseRift from "../page/aboutuniverserift/aboutuniverserift"
import Gear from "../../assets/images/gear.webp"
import Map from "../../components/page/map/map"
import { useTranslation } from 'react-i18next';

export default function LandingPage() {
    const { t, i18n } = useTranslation(); 
    return (
      <div className="LandingPage">
        <Home/>
        <div className="SpaсeName"><img src={Gear} alt="gear"></img><h1>{t('landingPage.key')}</h1><img src={Gear} alt="gear"></img></div>
        <AboutUniverseRift/>
        <div className="SpaсeName"><img src={Gear} alt="gear"></img><h1>{t('landingPage.how')}</h1><img src={Gear} alt="gear"></img></div>
        <Map/>
        <div className="SpaсeName"><img src={Gear} alt="gear"></img><h1>{t('landingPage.crowd')}</h1><img src={Gear} alt="gear"></img></div>
        <Crowdfunding/>
      </div>
    );
  }