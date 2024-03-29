import "../styles/MainPage.css";
import { Button } from "react-bootstrap";
import { Link } from "react-scroll";

function MainPage() {
  return (
    <div className="MainPage p-3">
      <div className="container p-5">
        <div className="row">
          <div className="mainSlogan col-md-6 pt-5 my-auto">
            <p className="mainPageText">Develop</p>
            <p className="mainPageText">Intuition</p>
            <div className="mainPageSubText pt-5 pb-3">
              고착화되지 않는<br></br> 직관적인 웹 개발자
            </div>
            <div className="pt-5">
              <Button variant="dark" className="mainPageBtn">
                <Link as={Link} to="work" spy={true} smooth={true}>
                  <h3>See my work</h3>
                </Link>
              </Button>
            </div>
          </div>
          <div className="col-md-6 pt-5 mb-5">
            <img src={"https://raw.githubusercontent.com/sitecreater/storage_Portfolio.github.io/main/" + "PinkBrain.png"} width="70%" alt="" className="pinkBrain" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
