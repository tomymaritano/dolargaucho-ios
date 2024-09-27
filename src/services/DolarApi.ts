import axios from 'axios';

const API_URL = 'https://dolarapi.com/v1/cotizaciones';

export const getCotizaciones = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching cotizaciones:', error);
    return [];
  }
};
