import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import { FormStyles, Label, SubmitBtn } from '../Form/Form.styled';

export const LoginForm = () => {
    const dispatch = useDispatch();
    const onSubmit = data => {
        dispatch(logIn(data));
    };

    return (
        <Formik initialValues={{ email: '', password: '' }} onSubmit={onSubmit}>
            {({ values, handleChange }) => (
                <FormStyles>
                    <Label>
                        Email
                        <input
                            type="email"
                            name="email"
                            required
                            value={values.email}
                            onChange={handleChange}
                        />
                    </Label>
                    <Label>
                        Password
                        <input
                            type="password"
                            name="password"
                            required
                            value={values.password}
                            onChange={handleChange}
                        />
                    </Label>
                    <SubmitBtn
                        type="submit"
                    >
                        Log In
                    </SubmitBtn>
                </FormStyles>
            )}
        </Formik>
    );
};