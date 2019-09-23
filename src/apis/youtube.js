import axios from 'axios';
const KEY = 'AIzaSyAVbOW-ByuX-GWvwc5arJzlcuFl2Tqxxqg';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part:'snippet',
        maxResults: 5,
        key:KEY

    }

});