import axios from 'axios';
import { encode as base64_encode} from 'base-64';
const API_PATH = '/search';
const encoded = base64_encode(`${process.env.REACT_APP_LOGIN}:${process.env.REACT_APP_TOKEN}`);
const headers = {"Authorization":`Basic ${encoded}`}

export default class APIClient {
    constructor() {
        this.client = axios.create({
            baseURL: API_PATH,
            timeout: 300000,
            headers:headers
        });
    }

    static instance() {
        if ((!APIClient.hasOwnProperty('INSTANCE')) || (!APIClient.INSTANCE instanceof APIClient))
            APIClient.INSTANCE = new APIClient();
        return APIClient.INSTANCE;
    }

    get(url,request, successCallback, errorCallback) {
        this.client.get(`${url}?${request}`)
            .then(response => {
                if (parseInt(response.status) === 200) {
                    successCallback(response.data);
                } else {
                    if (errorCallback != null) errorCallback(response);
                }
            })
            .catch(e => {
                if (errorCallback != null) errorCallback(e);
            });
    }
}
