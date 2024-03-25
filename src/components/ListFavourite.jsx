import { Button, Container, ListGroup, ListGroupItem } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function ListFavourite() {
  // dobbiammo recuperare l'array delle aziende:
  const listCompanies = useSelector(state => state.favourites.cont);
  // creaimo la funzione per dispacciare le inforamzioni
  const dispatch = useDispatch();

  return (
    <Container>
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="display-4 my-3">Your Favorites Companies</h1>
        <Button variant="outline-secondary p-2">Go Back</Button>
      </div>
      <ListGroup>
        {listCompanies.map((companie, i) => {
          return (
            <ListGroupItem key={i}>
              <Button className="p-0 me-2">-</Button>
              <Link to={`/${companie.company_name}`}>{companie.company_name}</Link>
            </ListGroupItem>
          );
        })}
      </ListGroup>
    </Container>
  );
}

export default ListFavourite;
