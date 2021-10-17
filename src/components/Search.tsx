import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { FaSearchengin } from 'react-icons/fa';

const SearchUi = (props: any) => {
  const [params, setParams] = useState("");

  /**
   * @Function : function to send the search parameter to the filter function
   * @param: input value
   */
  const handleClick = (event: any) => {
    event.preventDefault();
    props.filter(params);
    setParams("");
  };

  return (
    <>
      <Form onSubmit={handleClick}>
        <InputGroup>
          <FormControl
            placeholder="...Search"
            aria-label="search"
            aria-describedby="searchParam"
            id="search"
            name="search"
            value={params}
            onChange={(e) => setParams(e.target.value)}
            // onInput={props.filter}
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
