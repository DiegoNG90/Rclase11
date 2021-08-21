import axios from 'axios';

// Como ya instalamos los @types/axios, ésto no rompe porque está trabajando con ellos.

const API = axios.create({
    baseURL: "https://api.mercadolibre.com/sites/MLA/"
})

export default API;