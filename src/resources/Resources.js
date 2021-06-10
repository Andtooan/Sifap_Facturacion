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

Resources.TwoFactor = async (code) => {
  const url = `${BASE_URL}/companies/2fa/`
  try {
    const response = await axios.post(url, { code });
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

Resources.GenerateNewInvoice = async (invoiceData) => {
  const url = `${BASE_URL}/orders/`
  try {
    const response = await axios.post(url, invoiceData);
    return response
  } catch (error) {
    console.log('fetch error', error);
  }
}

Resources.getInvoices = async (id) => {
  const url = `${BASE_URL}/orders/companies/${id}`
  try {
    const response = await axios.get(url);
    return response.data
  } catch (error) {
    console.log('fetch error', error);
  }
}
Resources.LogOut = async (token) => {
  const url = `${BASE_URL}/companies/logout/`

  try {
    const response = await axios.post(url, {
      'authorization': token
    });
    return response
  } catch (error) {
    console.log('fetch error', error);
  }
}
