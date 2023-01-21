import { Helmet } from 'react-helmet';
import { RegisterForm } from '../components/RegisterForm/RegisterForm';

const Register = () => {
    return (
        <div>
            <Helmet>
                <title>Registration</title>
            </Helmet>
            <h2>Register form</h2>
            <RegisterForm />
        </div>
    );
};

export default Register;