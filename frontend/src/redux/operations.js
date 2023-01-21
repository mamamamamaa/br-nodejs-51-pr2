import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { notifyWarning } from 'helpers/notifications';

export const getContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, thunkAPI) => {
        try {
            const { data } = await axios.get('/contacts');
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (contact, thunkAPI) => {
        try {
            const { data } = await axios.post('/contacts', {
                name: contact.name,
                number: contact.number,
            });
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (id, thunkAPI) => {
        try {
            const { data } = await axios.delete(`/contacts/${id}`);
            notifyWarning(`${data.name} delete from phonebook`)
            return data;

        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);