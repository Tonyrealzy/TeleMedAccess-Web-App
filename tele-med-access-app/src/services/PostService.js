import Logger from '../components/Logger';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = process.env.REACT_APP_BASE_URL;

const PostRequest = async (endpoint, data) => {
	try {
		const response = await axios.get(`${BASE_URL}/${endpoint}`, data, {
            headers: {
                'Content-Type': 'application/json',
                'x-rapidapi-key': API_KEY,
                'x-rapidapi-host': 'endlessmedicalapi1.p.rapidapi.com',
            },
        });
        return response;
	} catch (error) {
		Logger('Error posting data: ', error);
	};
};

export default PostRequest;
