import PropTypes from "prop-types";

import Card from "react-bootstrap/Card";

// Type declaration for props
interface cardUi {
  publisher: string,
  name: string,
  isbn: string,
  authors: string,
  endDate: string,
};

// Card component
const CardUi = (props: cardUi) => {
  const { publisher, endDate } = props;
  return (
    <>
      <Card>
        <Card.Header>{publisher}</Card.Header>
        <Card.Body></Card.Body>
        <Card.Footer>{endDate}</Card.Footer>
      </Card>
    </>
  );
};

// Card propType

Card.propTypes = {
  publisher: PropTypes.string,
  name: PropTypes.string,
  isbn: PropTypes.string,
  authors: PropTypes.string,
  endDate: PropTypes.string,
};

export default CardUi;
