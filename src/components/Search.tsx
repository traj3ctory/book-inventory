import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { FaSearchengin } from 'react-icons/fa';

const SearchUi = (props: any) => {
  return (
    <>
      <Form>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Text id="basic-addon2"><FaSearchengin /></InputGroup.Text>
        </InputGroup>
      </Form>
    </>
  );
};

export default SearchUi;
