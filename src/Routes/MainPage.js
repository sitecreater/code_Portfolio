import '../CSS/MainPage.css';
import { Button } from 'react-bootstrap';

function MainPage() {
    return (
        <div className="MainPage">
            <div className="container">
                <div className='row'>
                    <div className="col-md-6 pt-5">
                        <img
                            src={"https://raw.githubusercontent.com/sitecreater/portfolio.github.io/main/와보(움직임).gif"}
                            width="82%"
                            alt=''/>
                    </div>
                    <div className="col-md-6 pt-5 my-auto">
                        <div className='mainText pt-5'>
                            Just try your hardest
                        </div>
                        <div className='subText pt-5'>
                           항상 배움의 자세로 성장하는 웹 개발자
                        </div>
                        <div className="pt-5">
                            <Button variant="dark">See my work</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainPage;