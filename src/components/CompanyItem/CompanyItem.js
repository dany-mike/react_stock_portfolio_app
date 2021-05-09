import { Button, TableCell } from "@material-ui/core";
import { useParams, Link } from "react-router-dom";
import { deleteStockInWallet } from "../../services/stockService";
import TableRow from "@material-ui/core/TableRow";

export default function CompanyItem({
  companyName,
  symbol,
  stockPrice,
  forecastPrice,
  sharesNumber,
  activityArea,
  key
}) {
  const { username } = useParams();
  const { walletId } = useParams();

  const onDelete = async () => {
    let isConfirm = window.confirm("Are you sure to delete this wallet?");
    if (isConfirm) {
      await deleteStockInWallet(username, walletId, symbol);
      document.location.reload();
    }
  };

  return (
    <TableRow key={key}>
      <TableCell>{companyName}</TableCell>
      <TableCell>{symbol}</TableCell>
      <TableCell>${stockPrice}</TableCell>
      <TableCell>${forecastPrice}</TableCell>
      <TableCell>{sharesNumber}</TableCell>
      <TableCell>{activityArea}</TableCell>
      <TableCell>
        <Link
          to={`/about-company/${username}/${walletId}/${symbol}`}
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <Button variant="outlined">About</Button>
        </Link>
      </TableCell>
      <TableCell>
        <Link
          to={`/about-company/${username}/${walletId}/${symbol}`}
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <Button variant="outlined">Edit</Button>
        </Link>
      </TableCell>
      <TableCell>
        <Button variant="outlined" onClick={onDelete}>
          Delete
        </Button>
      </TableCell>
    </TableRow>
  );
}
