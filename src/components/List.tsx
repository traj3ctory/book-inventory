import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import CardUi from "./Card";

interface dataObject {
  url: string;
  name: string;
  isbn: string;
  author: Array<string>;
  numberOfPages: string;
  publisher: string;
  country: string;
  released: string;
  character: Array<string>;
  povCharacters: Array<string>;
}

const ListUi = (props: any) => {
  const data: dataObject[] = props.data;

  return (
    <>
      <ListGroup>
        {data.length > 1 ? (
          data.map((el, index) => {
            return (
              <ListGroupItem variant="flush">
                <CardUi cardData={el} key={index} />
              </ListGroupItem>
            );
          })
        ) : (
          <h1>No item</h1>
        )}
      </ListGroup>
    </>
  );
};

export default ListUi;
