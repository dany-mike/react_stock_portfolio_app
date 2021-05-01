import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

export default function CompanyList({datas}) {
    console.log(datas)
    return <>
        {datas.map((data) => (
        <TableRow key={data._id}>
            <TableCell>{data.companyName}</TableCell>
            <TableCell>{data.symbol}</TableCell>
            <TableCell>{data.stockPrice}</TableCell>
            <TableCell>{data.forecastPrice}</TableCell>
            <TableCell>{data.sharesNumber}</TableCell>
            <TableCell>{data.activityArea}</TableCell>
            <TableCell>About this company</TableCell>
        </TableRow>
        ))} 
    </>
}
