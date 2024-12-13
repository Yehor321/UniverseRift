import "./header.css"
import React, { useState } from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Download from "../../page/dowload/dowload"
import News from "../../page/news/news"
import AboutUs from "../../page/aboutus/aboutus"
import LandingPage from "../../screen/landingPage"
import imgLanguage from "../../../assets/images/language.png"

export default function Header() {

    const [selectedOption] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const { t, i18n } = useTranslation(); 

    const chanageLanguage = (language) => {
        i18n.changeLanguage(language)
    }

    return (
        <>
        <header>
            <div className="firstHeader">
                <a className="firstHeader__item Shop" href="https://www.kickstarter.com/projects/universerift/universe-rift-mmorpg-with-full-loot-sandbox-system?ref=discovery_category_newest&total_hits=21593&category_id=35">{t('header.supp')}</a>
                
                
                <div className="firstHeader__item firstHeader__custom-selector">
                    <button className="selector-button" onClick={() => setIsOpen(!isOpen)}>
                        {selectedOption || <img className="firstHeader__imglanguage" src={imgLanguage} alt="imgLanguage"></img>}
                    </button>
                    {isOpen && (
                        <div className="firstHeader__dropdown">
                            <button className="firstHeader__dropdown-item" onClick={() => chanageLanguage('en')}>English</button>
                            <button className="firstHeader__dropdown-item" onClick={() => chanageLanguage('jp')}>日本語</button>
                            <button className="firstHeader__dropdown-item" onClick={() => chanageLanguage('ru')}>Русский</button>
                        </div>
                    )}
                </div>


            </div>
            <div className="secondHeader">
                <NavLink className="secondHeader__item LandingPage" to={'LandingPage'}>{t('header.home')}</NavLink>
                <NavLink className="secondHeader__item News" to={'News'}>{t('header.new')}</NavLink>
                <NavLink className="secondHeader__item AboutUs" to={'AboutUs'}>{t('header.about')}</NavLink>
            </div>
        </header>

        <Routes>
            <Route path="/Download" element={<Download/>}/>
            <Route path="/News" element={<News/>}/>
            <Route path="/AboutUs" element={<AboutUs/>}/>
            <Route path="/LandingPage" element={<LandingPage/>}/>
        </Routes>
        </>
    )
}