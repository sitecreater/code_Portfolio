import '../CSS/MainPage.css';
import {Button} from 'react-bootstrap';

function MainPage() {
    return (
        <div className="MainPage p-3">
            <div className="container p-5">
                <div className='row'>
                    <div className="mainSlogan col-md-6 pt-5 my-auto">
                        <p className='mainPageText'>
                            Develop
                        </p>
                        <p className='mainPageText'>
                            Intuition
                        </p>
                        <div className='mainPageSubText pt-5 pb-3'>
                            상황에 고착화 되있지 않는<br></br>
                            직관적인 웹 개발자.
                        </div>
                        <div className="pt-5">
                            <Button variant="dark"  className="mainPageBtn">
                                <h3>See my work</h3>
                            </Button>
                        </div>
                    </div>
                    <div className="col-md-6 pt-5 mb-5">
                        <img
                            src={"https://raw.githubusercontent.com/sitecreater/portfolioStorage.github.io/main/" +
                                    "pinkBrain.png"}
                            width="70%"
                            alt=''
                            className='pinkBrain'/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainPage;