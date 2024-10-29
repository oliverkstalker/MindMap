import axios from 'axios';

const API_URL = 'http://localhost:8000/api/notes';

export const fetchNotes = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const createNote = async (noteData) => {
    const response = await axios.post(API_URL, noteData);
    return response.data;
}
