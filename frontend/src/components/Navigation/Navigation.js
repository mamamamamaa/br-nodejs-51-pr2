import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import css from './Navigation.module.css';

export const Navigation = () => {
    const { isLoggedIn } = useAuth();
    return (
        <div className="flex">
            <NavLink
                to="/"
                className={css.link}
            >
                PhoneBook
            </NavLink>
            {isLoggedIn && (
                <div>
                    <NavLink
                        to="/contacts"
                        className={css.link}
                    >
                        Contacts
                    </NavLink>
                    <NavLink
                        to="/form"
                        className={css.link}
                    >
                        Add contact
                    </NavLink>
                </div>
            )}
        </div>
    );
};