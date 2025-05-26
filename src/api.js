import axios from "axios";

const options = {
  baseURL: 'https://app.nocodb.com/api/v2/tables/mx5p3amyz924z3s',
  headers: {
    'xc-token': 'Ias4n8HZOeIkaa4Tbh-rYwYFlgDkTaDOpT1Me8JN'
  }
};

export const api = axios.create(options)