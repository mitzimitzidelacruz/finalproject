import { Container, Row, Col, Card, Button} from "react-bootstrap";
import { useTranslation } from "react-i18next";
import useAuth from "../../auth/useAuth";

export default function Account() {

    const { user } = useAuth();

    const { t } = useTranslation();

    return (
        <Container className="home">
            <Row className="mt-4">
                <Col xs={12} className="text-center">
                    <img 
                        src="https://arainfo.org/wordpress/wp-content/uploads/2020/05/Avatar-tipo-AraInfo-1.jpg"
                        alt="profile"
                        style={{
                            width: '200px',
                            height: '200px',
                            borderRadius: '50%',
                            objectFit: 'cover'
                        }} />
                </Col>
                <Col className="mt-4">
                    <Card>
                        <p className="text-center"><b>{t("name")}: </b>{user.name}</p>
                        <p className="text-center"><b>{t("email")}: </b>{user.email}</p>
                        <p className="text-center"><b>{t("role")}: </b>{user.role}</p>

                        <Button variant="link">
                            {t("editA")}
                        </Button>
                        <Button variant="link" className="mt-1">
                            {t("changeP")}
                        </Button>
                        <Button variant="link" className="mt-3 text-danger">
                            {t("deleteA")}
                        </Button>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}