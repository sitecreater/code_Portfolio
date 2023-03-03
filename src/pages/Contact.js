import "../styles/Contact.css";
import { Button } from "react-bootstrap";
import React, { useState } from "react";
import Flip from "react-reveal/Flip";

function Contact() {
  let [subModal, setSubModal] = useState(false);

  return (
    <div className="Contact">
      <div className="HeaderFont pb-1" id="contact">
        Contact
      </div>
      <div className="HeaderLine pb-3">&nbsp;</div>
      <div className="container">
        <div className="WholeBox pt-5 pb-5">
          <div className="row">
            <div className="col-md-4 pt-3">
              <i className="fa-solid fa-phone fa-2x"></i>
              <div className="ContextMainText pt-4">Phone</div>
              <div className="ContextSubText pt-2">010-9793-7502</div>
            </div>

            <div className="col-md-4 pt-3">
              <i className="fa-solid fa-envelope fa-2x"></i>
              <div className="ContextMainText pt-4">E-Mail</div>
              <div className="ContextSubText pt-2">pk8008@naver.com</div>
            </div>

            <div className="col-md-4 pt-3">
              <i className="fa-brands fa-github fa-2x"></i>
              <div className="ContextMainText pt-4">GitHub</div>
              <div className="ContextSubText pt-2">
                <a href="https://github.com/sitecreater">https://github.com/sitecreater</a>
              </div>
            </div>
          </div>
        </div>
        <div className="before_tipBox pb-5">
          <Button
            variant="dark"
            onClick={() => {
              setSubModal(!subModal);
            }}
          >
            모바일로 보신다면? Click🖱️
          </Button>
          {subModal === true ? <TipBox></TipBox> : null}
        </div>
      </div>
    </div>
  );
}

function TipBox() {
  return (
    <Flip bottom="bottom">
      <div className="after_tipBox pt-5">
        <p>화면 맨 밑을 클릭하세요!</p>
        <p>모바일 뷰에서 유용한 메뉴바를 사용할 수 있어요😍</p>
      </div>
    </Flip>
  );
}

export default Contact;
