import PropTypes from 'prop-types';

import Card from 'react-bootstrap/Card';
import { FaBookOpen, FaBook } from 'react-icons/fa';

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

/**
 * @title : UI to display book details
 * @param {*} props.publisher: parse publisher title
 * @param {*} props.name: parse name
 * @param {*} props.isbn: parse isbn
 * @param {*} props.authors: parse authors
 * @param {*} props.released: parse released date
 */
const CardUi = (props: any) => {
  const { publisher, name, isbn, authors, released } = props.cardData;
  return (
    <>
      <Card>
        <Card.Header>
          <div className="d-flex justify-content-between flex-wrap">
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
