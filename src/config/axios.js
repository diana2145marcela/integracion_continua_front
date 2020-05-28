import Axios from 'axios';

const clienteAxios = axios.create({
    url: 'http://localhost:3000'
})

export default clienteAxios;