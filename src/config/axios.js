import axios from 'axios';

const clienteAxios = axios.create({
    baseURL: 'https://integracioncontinuaback.herokuapp.com'
})

export default clienteAxios;