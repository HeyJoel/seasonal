import axiosFactory, { AxiosResponse } from 'axios';

const axios = createAxiosInstance();

function createAxiosInstance() {
    return axiosFactory.create({
        baseURL: '/data/'
    });
}

async function getRequired<TResult> (route: string, query?: any) {
    let result = await axios
        .get<TResult>(route, {
            data: query
        })
        .then(mapResponseData)
        .catch(handleError);

    if (!result) {
        throw new Error('Data was expected but not returned from route ' + route);
    }
    return result;
} 

async function get<TResult> (route: string, query?: any) {
    let result = await axios
        .get<TResult>(route, {
            data: query
        })
        .then(mapResponseData)
        .catch(handleError);

    return result;
} 

function mapResponseData<TData>(response: AxiosResponse<TData>) : TData | null {
    if (!response || !response.data) return null;

    return response.data;
}

function handleError(error: any) {
    // TODO: graceful error handling
    throw error;
}

const api = {
    get,
    getRequired
};
export default api
