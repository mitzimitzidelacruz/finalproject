import { useTranslation } from 'react-i18next';

function NotFound() {

    const { t } = useTranslation();

    return (
        <div>
            <div className='Error'>
                    <h1>{t("notFound")}</h1>
                    <a href='/'>{t("ErrorNF")}</a>
            </div>
        </div>
    );

}

export default NotFound;