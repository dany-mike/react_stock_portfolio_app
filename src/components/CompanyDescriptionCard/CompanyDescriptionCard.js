import { Card } from "@material-ui/core";
import LineChart from "../LineChart/LineChart";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export default function CompanyDescriptionCard({ data, profil }) {
  const hidden = useMediaQuery("(max-width:750px)");

  return (
    <>
      <Card style={{ marginBottom: 50 }} variant="outlined">
        {hidden ? null : <LineChart prices={data} profil={profil} />}
      </Card>
    </>
  );
}
