import axios from 'axios';

export const signin = async (body) => {
    try {
        return await axios.post(`http://localhost:3000/user/login`, body,  {
            withCredentials: true
        })
    } catch(err) {
        return err.response
    }
}

export const signup = async (body) => {
    try {   
        await axios.post(`http://localhost:3000/user/register`, body, {
        })
    } catch(err) {
        return err.response
    }
}

export const getUser = async (id) => {
    try {   
        let user = []
        const response = await fetch(`http://localhost:3000/user/get-user/${id}`, {
            credentials: 'include'
        })
        user = await response.json()
        return user
    } catch(err) {
        return err.response
    }
}
