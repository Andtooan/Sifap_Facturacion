const Resources = module.exports;

const axios = require('axios');

const BASE_URL = 'https://digital-invoice-manager.herokuapp.com/api'



Resources.loginUser = async (userData) => {
  const url = `${BASE_URL}/companies/login/`
  try {
    const response = await axios.post(url, userData);
    return response
  } catch (error) {
    console.log('fetch error', error);
  }
}

Resources.register = async (userData) => {
  const url = `${BASE_URL}/companies/signup/`
  try {
    const response = await axios.post(url, userData);
    return response
  } catch (error) {
    console.log('fetch error', error);
  }
}

Resources.getCountryIdentification = async () => {
  const url = `${BASE_URL}/countries/identification`
  try {
    const response = await axios.get(url);
    return response
  } catch (error) {
    console.log('fetch error', error);
  }
}