import axios from 'axios'

export const getWalletsByUsername = async (username) => {
    let wallets = []
    const response = await fetch(`http://localhost:3000/wallet/${username}`,{
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
    const response = await fetch(`http://localhost:3000/wallet/get-wallet/${username}/${walletId}`, {
        credentials: 'include'
    })
    walletObj = await response.json()
    return walletObj
}

export const deleteWalletByWalletId = async(username, walletId) => {
    await axios.delete(`http://localhost:3000/wallet/delete-wallet/${username}/${walletId}` , {
        withCredentials: true
    })
}

export const WalletContentByWalletId = async(username, walletId) => {
    let walletContent = []

    const response = await axios.get(`http://localhost:3000/wallet/${username}/${walletId}`, {
        withCredentials: true
    })

    walletContent = response.data

    return walletContent
}
