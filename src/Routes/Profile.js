import '../CSS/Profile.css';
import {Button} from 'react-bootstrap';

function Profile() {
    return (
        <div className="Profile">
            <div className="container">
                <div className='row'>
                    <div>
                        <h3>- Profile -</h3>
                    </div>

                    <div className="col-md-6 pt-5">
                        <img
                            src={"https://raw.githubusercontent.com/sitecreater/portfolio.github.io/main/와보(스페셜 " +
                                    "에디션).png"}
                            width="50%"
                            alt=''/>
                    </div>
                    <div className="col-md-6 pt-5 my-auto">
                        <div className='mainText pt-5'>
                            '느린 것을 두려워 말고, 멈추는 것을 두려워하라' 라는 말이 있습니다. 어떤 분야든 배움에는 끝이 없습니다. 겸손의 자세로 배움을 게을리하지
                            않고, 빠르게 변화하는 트렌드에 맞춰 발전하는 프론트엔드 개발자가 되겠습니다.
                        </div>
                        <div className='subText pt-5'>
                            안녕하세요. 신입 웹 개발자 PARK입니다.
                        </div>
                        <div className="pt-5"></div>

                    </div>
                    <div className="col-md-4">
                        <p>나이</p>
                        97. 05. 21</div>
                    <div className="col-md-4">
                        <p>E-mail</p>pk8008@naver.com</div>
                    <div className="col-md-4">
                        <Button variant="info">Skills</Button>
                        <p>React</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;