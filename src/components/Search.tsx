import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { FaSearchengin } from 'react-icons/fa';

const SearchUi = (props: any) => {
  const [params, setParams] = useState('');

  const handleClick = () => props.filter(params);

  return (
    <>
      <Form>
        <InputGroup>
          <FormControl
            placeholder="...Search"
            aria-label="search"
            aria-describedby="searchParam"
            id="search"
            name="search"
            onChange={(e) => setParams(e.target.value)}
          />
          <InputGroup.Text onClick={handleClick} id="searchParam">
            <FaSearchengin />
          </InputGroup.Text>
        </InputGroup>
      </Form>
    </>
  );
};

export default SearchUi;
