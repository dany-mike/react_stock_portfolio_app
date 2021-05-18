import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button, Container, Typography } from "@material-ui/core";
import styles from "./WalletPage.module.css";
import { WalletContentByWalletId } from "../../services/walletService";
import { useEffect, useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import CompanyList from "../../components/CompanyList/CompanyList";
import Circular from "../../components/Circular/Circular";
import {useLocation} from "react-router-dom";
import {getFavorites} from "../../services/favoriteService"

export default function WalletPage() {
  const [walletContent, setWalletContent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);

  const history = useHistory();
  const { username } = useParams();
  const { walletId } = useParams();


  const search = useLocation().search;
  const walletName = new URLSearchParams(search).get('walletName');

  useEffect(() => {
    (async () => {
      try {
        setWalletContent(await WalletContentByWalletId(username, walletId));
        setFavorites(await getFavorites(username))
        setLoading(false);
      } catch (err) {
        history.push("/signin");
      }
    })();
  }, [username, walletId, history]);

  let spinner;
  let content;

  if (loading === true) {
    spinner = <Circular />;
  } else {
    content = (
      <TableContainer component={Paper} variant="outlined">
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Company</TableCell>
              <TableCell>Symbol</TableCell>
              <TableCell>Stock Price(now)</TableCell>
              <TableCell>Stock Price(forecast 1y)</TableCell>
              <TableCell>Shares Number</TableCell>
              <TableCell>Activity Area</TableCell>
              <TableCell>About</TableCell>
              <TableCell>Edit</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <CompanyList data={walletContent} walletName={walletName} favorites={favorites}/>
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
  return (
    <Container className={styles.marginTop}>
      <Typography variant='h4'>{walletName}</Typography>
      <br/>
      {spinner}
      {content}
      <Link to={{pathname: `/search-page/${username}/${walletId}`}} className={styles.none}>
        <Button color="primary" variant="outlined" className={styles.mt} style={{margin: 2}}>
          {"Search a stock value to add"}{" "}
        </Button>
      </Link>
      <Link to={`/wallets/${username}`} className={styles.none}>
        <Button color="secondary" variant="outlined" className={styles.mt} style={{margin: 2}}>
          {"Back"}{" "}
        </Button>
      </Link>
    </Container>
  );
}
