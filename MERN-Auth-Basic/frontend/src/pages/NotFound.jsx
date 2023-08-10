import { useParams } from "react-router-dom";

const NotFound = () => {
  const { params } = useParams();
  return <div>{`cannot get /${params}`}</div>;
};
export default NotFound;
