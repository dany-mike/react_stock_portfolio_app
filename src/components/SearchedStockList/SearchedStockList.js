import { Card, Typography, CardContent } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

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
    fontSize: 21,
  },
  pos: {
    marginBottom: 12,
  },
  posT: {
    marginTop: 12,
  },
  subtitle: {
      fontSize: 32,
      fontWeight: 'bold'
  }
});

export default function SearchedStockList() {

  const classes = useStyles();

  return <>
     <Card className={classes.posT} variant='outlined'>
       <CardContent>
         <Typography
           className={classes.title}
           color="textSecondary"
           gutterBottom
         >
           Name |  Symbol | Sector
         </Typography>
         <Typography
           className={classes.subtitle}
           gutterBottom
         >
           $Price
         </Typography>
       </CardContent>
     </Card>
  </>
}
