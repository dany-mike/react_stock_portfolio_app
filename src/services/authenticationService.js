import axios from 'axios';

// const baseURL = "https://stock-portfolio-app-api.herokuapp.com"
const baseURL = "http://localhost:3000"
const token = localStorage.getItem("token")


export const signin = async (body) => {
    try {
        return await axios.post(`${baseURL}/user/login`, body,  {
            headers: {
                'Authorization': `${token}`
            }
        })
    } catch(err) {
        return err.response
    }
}

export const signup = async (body) => {
    try {   
        return await axios.post(`${baseURL}/user/register`, body, {
        })
    } catch(err) {
        return err.response
    }
}

export const getUser = async (id) => {
    try {   
        let user = []
        const response = await fetch(`${baseURL}/user/get-user/${id}`, {
            credentials: 'include'
        })
        user = await response.json()
        return user
    } catch(err) {
        return err.response
    }
}

export const isUser = async () => {

    let check = false

    const response = await axios.get(`${baseURL}/user/check`, {
        headers: {
            'Authorization': `${token}`
        }
    })

    check = response

    return check
}

export const logout = async () => {
        const response = await axios.get(`${baseURL}/user/logout`, {
            headers: {
                'Authorization': `${token}`
            }
        })
        return response
}