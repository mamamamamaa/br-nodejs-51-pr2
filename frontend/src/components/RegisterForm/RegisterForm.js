import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { FormStyles, Label, SubmitBtn } from '../Form/Form.styled';

export const RegisterForm = () => {
    const dispatch = useDispatch();
    const onSubmit = data => {
        dispatch(register(data));
    };

    return (
        <Formik
            initialValues={{ name: '', email: '', password: '' }}
            onSubmit={onSubmit}
        >
            {({ values, handleChange }) => (
                <FormStyles>
                    <Label>
                        Name
                        <input
                            type="text"
                            name="name"
                            required
                            value={values.name}
                            onChange={handleChange}
                        />
                    </Label>
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
                        Sign Up
                    </SubmitBtn>
                </FormStyles>
            )}
        </Formik>
    );
};