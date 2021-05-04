import { makeStyles } from "@material-ui/core/styles";
import {useState} from 'react'
import { Container, FormControl, InputLabel, OutlinedInput, Typography } from "@material-ui/core";
import SearchedStockList from '../../components/SearchedStockList/SearchedStockList'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 32,
    marginBottom: 12
  },
  pos: {
    marginBottom: 12,
  },
});

export default function AddPage() {
  const classes = useStyles();
  const [companyName, setCompanyName ] = useState('')

  const handleChange = (e) => {
    e.preventDefault();
    setCompanyName(e.target.value)
  }

  return (
    <Container style={{marginTop: 10}}>
        <Typography className={classes.title}>Search stock values</Typography>
        <FormControl fullWidth className={classes.margin} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">Company</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            onChange={handleChange}
            name="companyName"
            value={companyName}
          />
        </FormControl>
        <SearchedStockList/>

    </Container>
  );
}
