import "./news.css"
import { useTranslation } from 'react-i18next';

export default function News() {
  const { t} = useTranslation(); 
    return (
      <div className="News__Main">
        <div className="News__card">
          <iframe className="News__card_Post" src="https://www.youtube.com/embed/KQWK92jEnkU?si=waXsk_7G9AauefMS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <div className="News__card_contend">
            <p className="News__card_contend_data">06.12.2024</p>
            <h1>{t('news.title')}</h1>
            <p>{t('news.subtitle')}</p>
          </div>
        </div>
      </div>
    );
  }

  