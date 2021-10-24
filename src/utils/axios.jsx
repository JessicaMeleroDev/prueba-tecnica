import axios from 'axios';

const clientAxios = axios.create({
     baseURL: 'https://front-test-api.herokuapp.com/api/'
});

export default clientAxios;
