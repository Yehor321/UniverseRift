import "./crowdfunding.css"
import Kickstarter from "../../assets/crowdfunding/KickstarterLogo.png"
import Campfire from "../../assets/crowdfunding/images.jpg"
import Indiegogo from "../../assets/crowdfunding/indiegogoLogo.png"
import { useTranslation } from 'react-i18next';

export default function Crowdfunding() {
    const { t } = useTranslation(); 
    return (
      <div className="Crowdfunding">
        <p className="Crowdfunding__MainText">{t('crowdfunding.find')}</p>
        <div className="Crowdfunding__Qwerty">
            <a href="https://www.crowdcube.com/" target="_blank" rel="noreferrer">
                <div className="Crowdfunding__Box">
                    <img className="Crowdfunding__Logo" src={Campfire} alt="Crowdcube"></img>
                    <p className="Crowdfunding__Text">{t('crowdfunding.campfire')}</p>
                </div>
            </a>
            <a href="https://www.kickstarter.com/projects/universerift/universe-rift-mmorpg-with-full-loot-sandbox-system?ref=discovery_category_newest&total_hits=21593&category_id=35" target="_blank" rel="noreferrer">
                <div className="Crowdfunding__Box">
                    <img className="Crowdfunding__Logo" src={Kickstarter} alt="Kickstarter"></img>
                    <p className="Crowdfunding__Text">{t('crowdfunding.kickstarter')}</p>
                </div>
            </a>
            <a href="https://igg.me/at/universe-rift/x/38243399#/" target="_blank" rel="noreferrer">
                <div className="Crowdfunding__Box">
                    <img className="Crowdfunding__Logo" src={Indiegogo} alt="Indiegogo"></img>
                    <p className="Crowdfunding__Text">{t('crowdfunding.indiegogo')}</p>
                </div>
            </a>
        </div>
      </div>
    );
  }