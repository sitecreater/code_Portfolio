import '../CSS/Contact.css';
import {Button} from 'react-bootstrap';

function Contact() {
    return (
        <div className="Contact">
            <div className="container">
                <div className='row'>
                    <div className='HeaderFont pt-5 pb-5'>
                        Contact
                    </div>

                    <div className="pt-5">
                        안녕하세요? 개발자 Park 입니다.
                    </div>
                    <div className="pt-5 pb-5">
                            <Button variant="dark">Contact</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;