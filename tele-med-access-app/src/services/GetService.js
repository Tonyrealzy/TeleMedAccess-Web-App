import Logger from '../components/Logger';
import axios from 'axios';

const API_KEY = '6849efb9demshaf036b9d61cb2a3p1dd315jsnf81b85934d27';
const BASE_URL = 'https://endlessmedicalapi1.p.rapidapi.com';

const getRequest = async (endpoint) => {
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

export default getRequest;
