import WalletCard from '../WalletCard/WalletCard'
export default function WalletList({wallets}) {
    console.log(wallets)
    return <>
        {wallets !== [] && wallets.map((wallet) => 
            <WalletCard key={wallet._id} walletName={wallet.walletName} description={wallet.description}/>
        )}
    </>
}
