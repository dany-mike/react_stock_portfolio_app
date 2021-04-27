import axios from 'axios';

export const signin = async (body, token) => {

    try {
        return await axios.post(`http://localhost:3000/user/login`, body)
    } catch(err) {
        return err.response
    }
}

export const signup = async (body) => {
    try {   
        await axios.post(`http://localhost:3000/user/register`, body)
    } catch(err) {
        return err.response
    }
}