import "../styles/Profile.css";
import { useState } from "react";

function Profile() {
  let [skills] = useState([0, 1, 2, 3, 4, 5, 6, 7]);

  return (
    <div className="Profile pt-5 pb-5">
      <div className="HeaderFont pb-1" id="profile">
        Profile
      </div>
      <div className="HeaderLine pb-3">&nbsp;</div>
      <div className="container">
        <div className="WholeBox pt-5 pb-5">
          <div className="row">
            <div className="col-md-6 pt-5">
              <img src={"https://raw.githubusercontent.com/sitecreater/storage_Portfolio.github.io/main/" + "Profile.jpg"} width="35%" alt="" className="profilePicDiv" />
            </div>
            <div className="col-md-6 pt-5 my-auto">
              <div className="ProfileMainText pb-3">"Just try your hardest"</div>
              <div className="ProfileSubText pt-3">그저 최대한 노력해 보아라. 처음은 항상 어렵습니다.</div>
              <div className="ProfileSubText">늘 배우고 노력하는 자세로 빠르게 변화하는 트렌드에 맞춰</div>
              <div className="ProfileSubText">발전하는 웹 개발자가 되겠습니다.</div>
              <div className="ProfileSubText pt-3">안녕하세요. 신입 웹 개발자 박성민입니다.</div>
            </div>
            <div className="col-md-6 pt-5 pb-5">
              <div className="ProfileMainText pt-5">나이</div>
              <div>97. 05. 21</div>
              <div className="ProfileMainText pt-5">E-mail</div>
              <div>pk8008@naver.com</div>
            </div>
            <div className="col-md-6 pt-5">
              <div className="ProfileMainText">Skills</div>
              {skills.map((a, i) => (
                <img src={"https://raw.githubusercontent.com/sitecreater/storage_Portfolio.github.io/main/" + "skill_icon_" + (i + 1) + ".png"} width="7%" alt="" key={a} className="skills mx-5 my-4" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
