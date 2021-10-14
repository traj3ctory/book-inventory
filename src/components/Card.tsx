import PropTypes from "prop-types";

import Card from "react-bootstrap/Card";
import { FaBookOpen, FaBook } from "react-icons/fa";

// Type declaration for props
// interface cardUi {
//   url: string,
//   name: string,
//   isbn: string,
//   author: Array<string>,
//   numberOfPages: string,
//   publisher: string,
//   country: string,
//   released: string,
//   character: Array<string>,
//   povCharacters: Array<string>,
// };

// Card component
const CardUi = (props: any) => {
  const { publisher, name, isbn, authors, released } = props.cardData;
  return (
    <>
      <Card>
        <Card.Header>
          <div className="d-flex justify-content-between">
            <h5>
              <strong>
                <FaBookOpen />
                &nbsp;Publisher
              </strong>
              :&nbsp;<i className="small">{publisher}</i>
            </h5>
            <h5>
                <FaBook />
                &nbsp;Book-Name:&nbsp;<i className="small">{name}</i>
            </h5>
          </div>
        </Card.Header>
        <Card.Body>{authors}</Card.Body>
        <Card.Footer>
          <div className="d-flex justify-content-between flex-wrap">
            <h6>ISBN Number:&nbsp;{isbn}</h6>
            <small>{released}</small>
          </div>
        </Card.Footer>
      </Card>
    </>
  );
};

// Card propType

Card.propTypes = {
  // publisher: PropTypes.string,
  // name: PropTypes.string,
  // isbn: PropTypes.string,
  // authors: PropTypes.string,
  // endDate: PropTypes.string,

  url: PropTypes.string,
  name: PropTypes.string,
  isbn: PropTypes.string,
  author: PropTypes.array,
  numberOfPages: PropTypes.string,
  publisher: PropTypes.string,
  country: PropTypes.string,
  released: PropTypes.string,
  character: PropTypes.array,
  povCharacters: PropTypes.array,
};

export default CardUi;
