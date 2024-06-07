import axios from "axios";

export default axios.create({
    baseURL : 'https://api.rawg.io/api' ,
    params: {
        key : '9b4cf363f55a4ab5b741b6eafc54f47c'
    }
})