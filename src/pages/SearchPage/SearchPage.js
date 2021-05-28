import { makeStyles } from "@material-ui/core/styles";
import { useState, useEffect } from "react";
import {
  Container,
  FormControl,
  FormControlLabel,
  InputLabel,
  OutlinedInput,
  Radio,
  RadioGroup,
  Typography,
} from "@material-ui/core";
import SearchedStockList from "../../components/SearchedStockList/SearchedStockList";
import {
  searchValueByNameAndSector,
  searchValueBySector,
  searchValueByName,
} from "../../services/stockService";

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
    marginBottom: 12,
  },
  pos: {
    marginBottom: 12,
  },
  margin: {
    margin: 10,
  },
});

export default function AddPage() {
  const classes = useStyles();
  const [companies, setCompanies] = useState([]);
  const [searchForm, setSearchForm] = useState({
    companyName: "",
    sector: "",
  });

  useEffect(() => {
    async function hookFunc() {
      if (searchForm.companyName !== "" && searchForm.sector !== "") {
        setCompanies(
          await searchValueByNameAndSector(
            searchForm.companyName,
            searchForm.sector
          )
        );
      }

      if (searchForm.companyName !== "" && searchForm.sector === "") {
        setCompanies(await searchValueByName(searchForm.companyName));
      }

      if (searchForm.companyName === "" && searchForm.sector !== "") {
        setCompanies(await searchValueBySector(searchForm.sector));
      }

      if (searchForm.companyName === "" && searchForm.sector === "") {
        setCompanies(
          await searchValueByName(
            searchForm.companyName,
          )
        );
      }
    }
    hookFunc();
  }, [searchForm.companyName, searchForm.sector]);

  const handleChange = async (e) => {
    const { name, value } = e.target;
    // ... keep the values in the form object
    setSearchForm({ ...searchForm, [name]: value });
  };

  return (
    <>
      <Container style={{ marginTop: 10 }}>
        <Typography className={classes.title}>Search stock values</Typography>
        <FormControl fullWidth className={classes.margin} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">Company</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            onChange={handleChange}
            name="companyName"
          />
        </FormControl>
        <FormControl component="fieldset">
          <RadioGroup
            onChange={handleChange}
            name="sector"
            style={{display: "inline-block"}}
          >
            <FormControlLabel
              value=""
              control={<Radio />}
              label="None"
            />
            <FormControlLabel
              value="IndexFund ETF"
              control={<Radio />}
              label="IndexFund ETF"
            />
            <FormControlLabel
              value="Health Care"
              control={<Radio />}
              label="Health Care"
            />
            <FormControlLabel
              value="Financials"
              control={<Radio />}
              label="Financials"
            />
            <FormControlLabel
              value="Consumer Staples"
              control={<Radio />}
              label="Consumer Staples"
            />
            <FormControlLabel
              value="Consumer Discretionary"
              control={<Radio />}
              label="Consumer Discretionary"
            />
            <FormControlLabel
              value="Industrials"
              control={<Radio />}
              label="Industrials"
            />
            <FormControlLabel
              value="Information Technology"
              control={<Radio />}
              label="Information Technology"
            />
            <FormControlLabel
              value="Real Estate"
              control={<Radio />}
              label="Real Estate"
            />
            <FormControlLabel
              value="Energy"
              control={<Radio />}
              label="Energy"
            />
            <FormControlLabel
              value="Communication Services"
              control={<Radio />}
              label="Communication Services"
            />
            <FormControlLabel
              value="Materials"
              control={<Radio />}
              label="Materials"
            />
            <FormControlLabel
              value="Utilities"
              control={<Radio />}
              label="Utilities"
            />
          </RadioGroup>
        </FormControl>
        <SearchedStockList companies={companies} />
      </Container>
    </>
  );
}
