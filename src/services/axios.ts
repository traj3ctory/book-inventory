import axios from 'axios';

const request = async () => {
    let res = await axios.get(`${process.env.REACT_APP_API}`);
    if (res){
        return res;
    };
}

export default request;