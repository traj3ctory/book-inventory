import Container from 'react-bootstrap/Container'
import { FaHeart } from 'react-icons/fa'

const FooterUi = () => {
    return (
        <>
            <footer className="footer">
                <Container>
                    <p>Made with complex <FaHeart /> </p>
                </Container>
            </footer>
        </>
    )
}

export default FooterUi;