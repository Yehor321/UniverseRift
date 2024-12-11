import "./crowdfunding.css"
import Kickstarter from "../../assets/crowdfunding/KickstarterLogo.png"
import Campfire from "../../assets/crowdfunding/images.jpg"
import Indiegogo from "../../assets/crowdfunding/indiegogoLogo.png"

export default function Crowdfunding() {
    return (
      <div className="Crowdfunding">
        <p className="Crowdfunding__MainText">You can also find us here</p>
        <div className="Crowdfunding__Qwerty">
            <a href="https://www.crowdcube.com/" target="_blank">
                <div className="Crowdfunding__Box">
                    <img className="Crowdfunding__Logo" src={Campfire} alt="Crowdcube"></img>
                    <p className="Crowdfunding__Text">Support us on Campfire</p>
                </div>
            </a>
            <a href="https://www.kickstarter.com/projects/universerift/universe-rift-mmorpg-with-full-loot-sandbox-system?ref=discovery_category_newest&total_hits=21593&category_id=35" target="_blank">
                <div className="Crowdfunding__Box">
                    <img className="Crowdfunding__Logo" src={Kickstarter} alt="Kickstarter"></img>
                    <p className="Crowdfunding__Text">Support us on Kickstarter</p>
                </div>
            </a>
            <a href="https://www.indiegogo.com/" target="_blank">
                <div className="Crowdfunding__Box">
                    <img className="Crowdfunding__Logo" src={Indiegogo} alt="Indiegogo"></img>
                    <p className="Crowdfunding__Text">Support us on Indiegogo</p>
                </div>
            </a>
        </div>
      </div>
    );
  }