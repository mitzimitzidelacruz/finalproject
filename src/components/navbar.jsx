import { useTranslation } from 'react-i18next';

function Navbar() {
    const { t } = useTranslation();

    return (
        <nav>
          <ul>
              <li> 
                  <a href="/">{t("home")}</a> 
              </li>
              <li> 
                  <a href="/">{t("categories")}</a>
              </li>
              <li>
                  <a href="/">{t("logs")}</a>
              </li>
              <li> 
                  <a href="/">{t("list")}</a>    
              </li>
          </ul>
        </nav>
    )
  }
  
  export default Navbar;