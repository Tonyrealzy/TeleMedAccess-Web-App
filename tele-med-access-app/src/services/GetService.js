import Logger from '../components/Logger';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = process.env.REACT_APP_BASE_URL;

export const GetSessionIdRequest = async () => {
	try {
		const response = await axios.get(`${BASE_URL}/InitSession`, {
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

export const GetAllSymptomsRequest = async () => {
	try {
		const response = await axios.get(`${BASE_URL}/GetFeatures`, {
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

export const GetAnalysisRequest = async (sessionId) => {
	try {
		const response = await axios.get(`${BASE_URL}/Analyze`, {
            headers: {
                'x-rapidapi-key': API_KEY,
                'x-rapidapi-host': 'endlessmedicalapi1.p.rapidapi.com',
            },
            params: {
                SessionID: sessionId
            },
        });
        return response;
	} catch (error) {
		Logger('Error fetching data: ', error);
	};
};


export const GetAllSuggestedOutcomes = async () => {
	try {
		const response = await axios.get(`${BASE_URL}/GetOutcomes`, {
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