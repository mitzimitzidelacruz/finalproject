import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

function Navbar() {

    const { t } = useTranslation();

    function changeLanguage(language) {
        i18next.changeLanguage(language);
    }

    return (
        <nav>
          <ul>
              <li> 
                  <a href="/">{t("home")}</a> 
              </li>
              <li> 
                  <a href="/group">{t("categories")}</a>
              </li>
              <li>
                  <a href="/register">{t("logs")}</a>
              </li>
              <li> 
                  <a href="/list">{t("list")}</a>    
              </li>
              
              <li> 
                  <a onClick={() => changeLanguage("en")}>En</a>    
              </li>
              <li> 
                  <a onClick={() => changeLanguage("es")}>Es</a>    
              </li>
              <li> 
                  <a href="/login">{t("login")}</a>    
              </li>
          </ul>
        </nav>
    )
  }
  
  export default Navbar;