import axios from 'axios';

// Develop server URL
const postBaseUrl = 'http://localhost:3000/api';

// Staging server URL
// const postBaseUrl = 'http://weathermood-staging.us-west-2.elasticbeanstalk.com/api';

// Production server URL
// const postBaseUrl = 'http://goodbye-stinky.us-west-2.elasticbeanstalk.com/api';
 // goodbye-stinky.us-west-2.elasticbeanstalk.com
export function listPosts(isRefrige) {
    let url = `${postBaseUrl}/posts`;

    if(isRefrige)
        url += '?isRefrige=true';
    else
        url += '?isRefrige=false';

    console.log(`Making GET request to: ${url}`);

    return axios.get(url).then(function(res) {
        if (res.status !== 200)
            throw new Error(`Unexpected response code: ${res.status}`);

        return res.data;
    });
}

export function createPost(isRefrige, foodDetail) {
    let url = `${postBaseUrl}/posts`;
    if(isRefrige)
        url += '?isRefrige=true';
    else
        url += '?isRefrige=false';

    console.log(`Making POST request to: ${url}`);

    return axios.post(url, {
        ...foodDetail
    }).then(function(res) {
        if (res.status !== 200)
            throw new Error(`Unexpected response code: ${res.status}`);

        return res.data;
    });
}
export function updatePost(isRefrige, foodDetail) {
    let url = `${postBaseUrl}/update`;
    if(isRefrige)
        url += '?isRefrige=true';
    else
        url += '?isRefrige=false';

    console.log(`Making POST request to: ${url}`);

    return axios.post(url, {
        ...foodDetail
    }).then(function(res) {
        if (res.status !== 200)
            throw new Error(`Unexpected response code: ${res.status}`);

        return res.data;
    });
}
export function deletePost(isRefrige, id) {
    let url = `${postBaseUrl}/posts/${id}`;
    if(isRefrige)
        url += '?isRefrige=true';
    else
        url += '?isRefrige=false';


    console.log(`Making GET request to: ${url}`);

    return axios.get(url).then(function(res) {
        if (res.status !== 200)
            throw new Error(`Unexpected response code: ${res.status}`);

        return res.data;
    });
}
