import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import useAuth from "../auth/useAuth";
import Form from 'react-bootstrap/Form';

const userCredentials = {};

function NewRegister() {

    const location = useLocation();

    const { t } = useTranslation();

    const { login } = useAuth();

    return (
        <div className='page'>
            <h1>{t("welcomeRegister")}</h1>
            
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
      
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Rol</Form.Label>
                <Form.Select controlId="formBasicRole">
                    <option>admin</option>
                    <option>regular</option>
                </Form.Select>
            </Form.Group>

            <button type="submit" onClick={() => login(userCredentials, location.state?.from)}>{t("registerU")}</button>


        </Form>

             
        </div> 
    )

}

export default NewRegister;
