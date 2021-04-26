import WalletCard from '../WalletCard/WalletCard'
export default function WalletList({wallets}) {
    return <>
        {wallets !== [] && wallets.map((wallet) => 
            <WalletCard key={wallet._id} walletName={wallet.walletName} description={wallet.description} _id={wallet._id}/>
        )}
    </>
}
