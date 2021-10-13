import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import CardUi from './Card';

const ListUi = () => {
    const data = 'hello';

    return (
        <>
            <ListGroup>
                <ListGroupItem>
                    <CardUi detail={data} />
                </ListGroupItem>
            </ListGroup>
        </>
    )
};

export default ListUi;