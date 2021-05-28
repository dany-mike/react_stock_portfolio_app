import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { getWalletsByUsername } from "../../services/walletService";
import WalletList from "../../components/WalletList/WalletList";
import Container from "@material-ui/core/Container";
import styles from "./HomePage.module.css";
import Circular from "../../components/Circular/Circular";
import { Grid } from "@material-ui/core";

export const HomePage = () => {
  const [wallets, setWallets] = useState([]);
  const [loading, setLoading] = useState(true);
  const { username } = useParams();
  const history = useHistory();

  useEffect(() => {
    (async () => {
      try {
        setWallets(await getWalletsByUsername(username));
        setLoading(false);
      } catch (err) {
        history.push("/signin");
      }
    })();
  }, [username, history, loading]);

  const handleClickCreate = (e) => {
    e.preventDefault();
    history.push(`/add-wallet/${username}/`);
  };

  const handleClickFav = (e) => {
    e.preventDefault();
    history.push(`/favorites/${username}`)
  }

  let spinner;
  let content;
  if(loading === true) {
    spinner = <Container className={styles.marginTop}>
        <Grid container spacing={10}>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}>
            <Circular />
          </Grid>
          <Grid item xs={4}></Grid>
        </Grid>
    </Container>
    content = ""
  } else {
      spinner = ""
      content = 
      <Container>
      <WalletList wallets={wallets} />
      <Button
        className={styles.margin}
        variant="contained"
        color="primary"
        onClick={handleClickCreate}
      >
        Create a new wallet
      </Button>
      <Button
        className={styles.margin}
        variant="contained"
        color="secondary"
        onClick={handleClickFav}
      >
        favorites
      </Button>
    </Container>
  }

  return (
    <>   
      {spinner}
      {content}
    </>
  );
};
