import { useTranslation } from 'react-i18next';

function Home() {

    const { t } = useTranslation();

    return (
        <div>
            <div className='home'>
                    <h1>{t("welcome")}</h1>
                    <h2>Guarda tus mejores momentos con nosotros!</h2>
            </div>
        </div>
    );

}

export default Home;