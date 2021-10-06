/**
 *  @author DJIMNAIBEYE Sidoine
 */

import APIClient from "./APIClient";

const PATH = 'repositories';
/**
 *  RepositoriesService class: find repositories via request
 */
export default class RepositoriesService {

    constructor() {
        this.client = APIClient.instance();
    }
/**
 *  getRepositories function
 * @param {String} request
 * @param {function} successCallback
 * @param {function} errorCallback
 */
    getRepositories(request, successCallback, errorCallback) {
        this.client.get(PATH, request, successCallback, errorCallback);
    }

}