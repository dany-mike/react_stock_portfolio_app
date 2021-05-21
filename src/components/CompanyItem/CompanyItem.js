import { Button, TableCell } from "@material-ui/core";
import { useParams, Link } from "react-router-dom";
import { deleteStockInWallet } from "../../services/stockService";
import TableRow from "@material-ui/core/TableRow";

export default function CompanyItem({ data }) {
  const { username } = useParams();
  const { walletId } = useParams();

  const onDelete = async () => {
    let isConfirm = window.confirm("Are you sure to delete this company?");
    if (isConfirm) {
      await deleteStockInWallet(username, walletId, data.symbol);
      document.location.reload();
    }
  };

  return (
    <TableRow key={data._id}>
      <TableCell>{data.companyName}</TableCell>
      <TableCell>{data.symbol}</TableCell>
      <TableCell>${data.stockPrice}</TableCell>
      <TableCell>${data.forecastPrice}</TableCell>
      <TableCell>{data.sharesNumber}</TableCell>
      <TableCell>{data.activityArea}</TableCell>
      <TableCell>
        <Link
          to={`/about-company/${username}/${walletId}/${data.symbol}`}
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <Button variant="outlined">About</Button>
        </Link>
      </TableCell>
      <TableCell>
        <Link
          to={`/edit-company/${username}/${walletId}/${data.symbol}`}
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
