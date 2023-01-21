import { deleteContact } from '../../redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import { Label } from 'components/Form/Form.styled';
import { FindContact, DeleteBtn, Contact } from './Contacts.styled';
import { selectError, selectFilteredContacts, selectIsLoading } from 'redux/selectors';
import { loader } from 'helpers/loader';

export const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectFilteredContacts);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    const handleFilterChange = e => {
        dispatch(setFilter(e.target.value));
    };

    return (
        <FindContact>
            <Label>
                Find contacts by name
                <input
                    type="text"
                    name="filter"
                    onChange={handleFilterChange}
                />
            </Label>
            <ul>
                {isLoading && loader()}
                {error && <h3>{error}</h3>}

                {contacts.length !== 0
                    ? contacts.map(({ _id, name, number }) => (
                        <Contact key={_id}>
                            {name}: {number}
                            <DeleteBtn type="button" onClick={() => dispatch(deleteContact(_id))}>
                                Delete
                            </DeleteBtn>
                        </Contact>
                    ))
                    : ''}
            </ul>
        </FindContact>
    );
}