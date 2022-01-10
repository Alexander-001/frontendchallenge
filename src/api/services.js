import axios from 'axios';
import { ACTION_SERVICE_GET_JOBS, PATH_API_GET_JOBS } from '../types/index';

export const ServicesAPI = {
    
    getOptionsGetJobs: function () {
        let options = this.getOptionsService(PATH_API_GET_JOBS);
        return options;
    },

    getOptionsService: async function (path) {
        const host = 'https://61435a41c5b553001717cf2f.mockapi.io' || '';
        return {
            url: `${host}${path}`,
            method: "GET",
            headers: {
				'content-type': 'application/json'
			}
        }
    },

    changeActionService: function (params) {
        switch (params.action) {
            case ACTION_SERVICE_GET_JOBS:
                return this.getOptionsGetJobs(params);
            default:
                break;
        };
    },

    callService: async function(params) {
        let options = await this.changeActionService(params);
        return await axios(options);
    }
}