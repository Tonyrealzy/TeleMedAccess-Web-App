import Logger from '../components/Logger';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = process.env.REACT_APP_BASE_URL;

const GetRequest = async (endpoint) => {
	try {
		const response = await axios.get(`${BASE_URL}/${endpoint}`, {
            headers: {
                'x-rapidapi-key': API_KEY,
                'x-rapidapi-host': 'endlessmedicalapi1.p.rapidapi.com',
            },
        });
        return response;
	} catch (error) {
		Logger('Error fetching data: ', error);
	};
};

export default GetRequest;
