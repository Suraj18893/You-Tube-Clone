import axios from "axios";

const request = axios.create({
    baseURL: "https://youtube.googleapis.com/youtube/v3/",
    params:{
        // key: process.env.REACT_APP_YT_API_KEY,
        key: 'AIzaSyB0bEzyZFuAeNEW5iolc4VbaVUbl4FupCA'
    }
})

export default request;