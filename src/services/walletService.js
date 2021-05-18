import axios from 'axios'

// const baseURL = "https://stock-portfolio-app-api.herokuapp.com"
const baseURL = "http://localhost:3000"

export const getWalletsByUsername = async (username) => {
    let wallets = []
    const response = await fetch(`${baseURL}/wallet/${username}`,{
        credentials: 'include',
    })
    wallets = await response.json()
    return wallets
}

export const walletByUsernameRequest = async (username, data, url, method, walletId) => {
    await method(`${url}/${username}/${walletId}`, data , {
        withCredentials: true
    })
}

export const getWalletById = async (username, walletId) => {
    let walletObj = []
    const response = await fetch(`${baseURL}/wallet/get-wallet/${username}/${walletId}`, {
        credentials: 'include'
    })
    walletObj = await response.json()
    return walletObj
}

export const deleteWalletByWalletId = async(username, walletId) => {
    await axios.delete(`${baseURL}/wallet/delete-wallet/${username}/${walletId}` , {
        withCredentials: true
    })
}

export const WalletContentByWalletId = async(username, walletId) => {
    let walletContent = []

    const response = await axios.get(`${baseURL}/wallet/${username}/${walletId}`, {
        withCredentials: true
    })

    walletContent = response.data

    return walletContent
}
