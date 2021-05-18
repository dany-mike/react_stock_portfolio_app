import { getFavorites } from "../../services/favoriteService";
import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import FavoriteList from "../../components/FavoriteList/FavoriteList";
import Circular from "../../components/Circular/Circular";
import { Button, Container, Typography } from "@material-ui/core";

export default function FavoritePage() {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  const history = useHistory();
  const { username } = useParams();

  const handleGoBack = (e) => {
    e.preventDefault();
    history.goBack();
  };

  useEffect(() => {
    (async () => {
      try {
        setFavorites(await getFavorites(username));
        setLoading(false);
      } catch (err) {
        history.push("/signin");
      }
    })();
  }, [username, history]);

  let spinner;
  let content;

  if (loading === true) {
    spinner = <Circular />;
  } else {
    content = (
      <>
        <FavoriteList favorites={favorites}/>
        <Button color="secondary" variant="outlined" style={{marginTop: 10}} onClick={handleGoBack}>Back</Button>
      </>
    );
  }

  return (
    <Container>
      {spinner}
      <Typography variant="h4">My Favorites</Typography>
      {content}
    </Container>
  );
}
