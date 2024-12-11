import "./aboutuniverserift.css"
import { useTranslation } from 'react-i18next';

export default function AboutUniverseRift() {
  const { t} = useTranslation(); 
    return (
      <div className="AboutUniverseRift__Main">
        <div className="container">

          <div className="item DynamicCombatRPG">
            <div className="item__background">
              <h3>{t('aboutuniverserift.titleone')}</h3>
              <p>{t('aboutuniverserift.subtitleone')}</p>
            </div>
          </div>

          <div className="item ExpansiveWorld">
            <div className="item__background">
              <h3>{t('aboutuniverserift.titletwo')}</h3>
              <p>{t('aboutuniverserift.subtitletwo')}</p>
              </div>
          </div>

          <div className="item STEAMPUNK">
            <div className="item__background">
            <h3>{t('aboutuniverserift.titlethree')}</h3>
            <p>{t('aboutuniverserift.subtitlethree')}</p>
              </div>
          </div>
        </div>
      </div>
    );
  }