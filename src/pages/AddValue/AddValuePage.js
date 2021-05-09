import { Container } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddCompanyIntoWalletForm from "../../components/AddCompanyIntoWalletForm/AddCompanyIntoWalletForm";
import CompanyDescriptionCard from "../../components/CompanyDescriptionCard/CompanyDescriptionCard";
import {
  getStockPricesBySymbol,
  getStockNameBySymbol,
} from "../../services/stockService";
import {  getWalletById } from "../../services/walletService"
import Circular from '../../components/Circular/Circular'

export default function AddValuePage() {
  const { symbol } = useParams();
  const {walletId} = useParams();
  const {username} = useParams();

  const [profil, setProfile] = useState([]);
  const [prices, setPrices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [wallet, setWallet] = useState({})

  useEffect(() => {
    async function getDatas() {
      const prices = await getStockPricesBySymbol(symbol);
      setPrices(prices.reverse());
      const stockName = await getStockNameBySymbol(symbol);
      setProfile(stockName);
      const walletContent = await getWalletById(username, walletId)
      setWallet(walletContent)
      setLoading(false);
    }
    getDatas();
  }, [symbol, walletId]);

  let circular;
  let content;

  if (loading === false) {
    circular = "";
    content = (
      <>
        <AddCompanyIntoWalletForm data={prices} profil={profil} wallet={wallet} />
        <CompanyDescriptionCard data={prices} profil={profil}/>
      </>
    );
  } else {
    circular = <Circular />;
    content = "";
  }

  return (
    <>
      <Container>
          {content}
          {circular}
      </Container>
    </>
  );
}
