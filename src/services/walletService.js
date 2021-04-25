
export const getWalletsByUsername = async (username) => {
    let wallets = []
    const response = await fetch(`http://localhost:3000/wallet/${username}`)
    wallets = await response.json()
    return wallets
}
