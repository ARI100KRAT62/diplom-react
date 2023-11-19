import axios from "axios";



const HOST = 'http://blog/api/';

export const RestService = {
    getCategory(id, is_car = true) {
        return axios
            .get(HOST + `category/${id}`, {})
            .then((response) => {
                return response.data
            })
            .catch(err => {
                return []
            })
    },
    getInfo(id) {
        return axios
            .get(HOST + `info/${id}`, {})
            .then((response) => {
                return response.data
            })
            .catch(err => {
                return []
            })
    },
    getContact() {
        return axios
            .get(HOST + `contact`, {})
            .then((response) => {
                return response.data
            })
            .catch(err => {
                return []
            })
    }
}