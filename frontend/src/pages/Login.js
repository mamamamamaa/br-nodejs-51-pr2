
import { Helmet } from 'react-helmet';
import { LoginForm } from '../components/LoginForm/LoginForm';


const Login = () => {
    return (
        <div>
            <Helmet>
                <title>Login</title>
            </Helmet>
            <h2>Login form</h2>
            <LoginForm />
        </div>
    );
};

export default Login;