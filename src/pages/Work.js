import "../styles/Work.css";
import data from "../assets/WorkData.js";
import { useState } from "react";

function Work() {
  let [work] = useState(data);

  return (
    <div className="Work">
      <div className="HeaderFont pb-1" id="work">
        Work
      </div>
      <div className="HeaderLine pb-3">&nbsp;</div>
      <div className="container">
        {
          // WorkData 반복문
          work.map((work) => (
            <div className="WholeBox pt-5 pb-5" key={work.id}>
              <div className="row">
                <div className="mb-5">
                  <img src={work.image} width="15%" alt="" className="workPicDiv" />
                </div>

                <div className="my-auto">
                  <div className="WorkMainText">{work.title}</div>
                  <div className="WorkSubUpText pt-5">{work.useLang}</div>
                  <div className="WorkSubText pt-3">{work.introduction}</div>
                  <div className="WorkSubText">{work.introduction2}</div>
                  <div className="iconSpace">
                    {work.processLink && (
                      <div className="pt-5">
                        <div>
                          <a href={work.processLink} target="_blank" rel="noopener noreferrer">
                            <i class="fa-solid fa-book fa-3x"></i>
                          </a>
                        </div>
                        <div className="ContextSubText pt-2">기획 & 과정</div>
                      </div>
                    )}

                    {work.gitLink && (
                      <div className="pt-5">
                        <div>
                          <a href={work.gitLink} target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-github fa-3x"></i>
                          </a>
                        </div>
                        <div className="ContextSubText pt-2">깃허브 & 설명</div>
                      </div>
                    )}

                    {work.hostLink && (
                      <div className="pt-5">
                        <div>
                          <a href={work.hostLink} target="_blank" rel="noopener noreferrer">
                            <i className="fa-solid fa-earth-americas fa-3x"></i>
                          </a>
                        </div>
                        <div className="ContextSubText pt-2">보러 가기</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Work;
