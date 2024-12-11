import "./footer.css"
import MainLogo from "../../assets/images/Universe-Rift-2-24-2024.webp"

import Discord from "../../assets/social-media-icons/discord_icon_qwe.png"
import Instagram from "../../assets/social-media-icons/Instagram_icon_qwe.png"
import X from "../../assets/social-media-icons/X_icon_qwe.png"
import Youtube from "../../assets/social-media-icons/youtube_icon_qwe.png"

export default function Footer() {
    return (
      <div className="Footer">
          <div className="Footer__Messengers">
            <a href="https://discord.gg/TXBFBHJyDs"><img className="Footer__Messengers_Img" src={Discord} alt="Discord"></img></a>
            <a href="https://www.instagram.com/universe_rift/"><img className="Footer__Messengers_Img" src={Instagram} alt="Instagram"></img></a>

          </div>
          <a href="https://www.universerift.com"><img className="Footer__MainLogo" src={MainLogo} alt="Universe Rift Main Logo"></img></a>
          <div className="Footer__Platforms">
          <a href="https://twitter.com/universe_rift"><img className="Footer__Messengers_Img" src={X} alt="X"></img></a>
          <a href="https://www.youtube.com/channel/UClQ8qFWtXSShpY9H3ggbJsg"><img className="Footer__Messengers_Img" src={Youtube} alt="Youtube"></img></a>
            {/* <a href="https://www.unrealengine.com/en-US"><img className="Footer__Platforms_Img" src={UnrealEngine} alt="Unreal Engine"></img></a>
            <a href="https://store.steampowered.com/"><img className="Footer__Platforms_Img" src={Steam} alt="Steam"></img></a> */}
          </div>
      </div>
    );
  }