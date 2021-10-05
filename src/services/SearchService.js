import APIClient from "./APIClient";

const PATH = 'repositories';
export default class RepositoriesService {

    constructor() {
        this.client = APIClient.instance();
    }
    getRepositories(request, successCallback, errorCallback) {
        this.client.get(PATH, request, successCallback, errorCallback);
    }

}