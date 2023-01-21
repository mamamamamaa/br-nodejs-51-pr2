import { Helmet } from 'react-helmet';
import { ContactForm } from '../components/Form/Form';

const Form = () => {
    return (
        <div>
            <Helmet>
                <title>Add contact</title>
            </Helmet>
            <h2>Add contact</h2>
            <ContactForm />
        </div>
    );
};

export default Form;