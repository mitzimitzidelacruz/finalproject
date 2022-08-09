import { useTranslation } from 'react-i18next';

function Home() {

    const { t } = useTranslation();

    return (
        <div className='home'>
            <div className='home2'>
                    <h1>{t("welcome")}</h1>
                    <h2>{t("welcome2")}</h2>

                    <div className='buttonhome'>
                        <a className='btnRegister' href="/register">{t("registerU")}</a>
                        <a className='btnLogin' href="/login">{t("login")}</a>
                    </div>

                    
            </div>
            <div>
                <img src='https://i1.wp.com/www.oinkoink.com.mx/wp-content/uploads/2019/10/Hot-travel.png?fit=1200%2C692&ssl=1'/>
            </div>
        </div>
    );

}

export default Home;