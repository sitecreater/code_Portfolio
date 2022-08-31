import '../CSS/MainPage.css';
import {Button} from 'react-bootstrap';

function MainPage() {
    return (
        <div className="MainPage p-3">
            <div className="container p-5">
                <div className='row'>
                    <div className="col-md-6 pt-5 my-auto">
                        <p className='mainText'>
                            Develop
                        </p>
                        <p className='mainText'>
                            Intuition
                        </p>
                        <div className='subText pt-5 pb-3'>
                            상황에 고착화 되있지 않는<br></br>
                            직관적인 웹 개발자.
                        </div>
                        <div className="pt-5">
                            <Button variant="secondary" className="mainPageBtn">
                                <h3>See my work</h3>
                            </Button>
                        </div>
                    </div>
                    <div className="col-md-6 mb-5">
                        <img
                            src={"https://raw.githubusercontent.com/sitecreater/portfolioStorage.github.io/main/" +
                                    "imac.jpg"}
                            width="65%"
                            alt=''
                            className='pt-5'/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainPage;