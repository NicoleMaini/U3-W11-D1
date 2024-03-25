import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux"; // poiché dobbiamo dispacciare un'action

const Job = ({ data }) => {
  const dispatch = useDispatch(); // da fare per forza così perché se no non funziona
  return (
    <Row className="mx-0 mt-3 p-3" style={{ border: "1px solid #00000033", borderRadius: 4 }}>
      <Col xs={3}>
        <Button
          className="p-0 me-2"
          onClick={() => {
            // qui aggiungimo l'azienda (ovvero ricreaiamo l'array di aziende preferite)
            dispatch({
              // gli diciamo a che azione deve rispondere
              type: "ADD_LIST",
              // e cosa/dove deve andare a mettere l'elemento
              payload: data,
            });
          }}
        >
          +
        </Button>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={9}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
    </Row>
  );
};

export default Job;
