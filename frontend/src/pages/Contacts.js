
import { ContactList } from '../components/Contacts/Contacts';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getContacts } from 'redux/operations';
import { Helmet } from 'react-helmet';

const Contacts = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getContacts());
    }, [dispatch]);

    return (
        <>
            <Helmet>
                <title>Contact-list</title>
            </Helmet>
            <ContactList />
        </>
    );
};

export default Contacts;