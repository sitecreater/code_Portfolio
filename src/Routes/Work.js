import "../CSS/Work.css";
import data from "../Components/WorkData.js";
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
                  <img
                    src={work.image}
                    width="15%"
                    alt=""
                    className="workPicDiv"
                  />
                </div>

                <div className="my-auto">
                  <div className="WorkMainText">{work.title}</div>
                  <div className="WorkSubText pt-5">{work.useLang}</div>
                  <div className="WorkSubText">{work.introduction}</div>
                  <div className="WorkSubText">{work.participation}</div>
                  <div className="iconSpace">
                    {work.processLink && (
                      <div className="pt-5">
                        <div>
                          <a
                            href={work.processLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i class="fa-solid fa-book fa-3x"></i>
                          </a>
                        </div>
                        <div className="ContextSubText pt-2">Process</div>
                      </div>
                    )}

                    <div className="pt-5">
                      <div>
                        <a
                          href={work.gitLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fa-brands fa-github fa-3x"></i>
                        </a>
                      </div>
                      <div className="ContextSubText pt-2">GitHub</div>
                    </div>

                    <div className="pt-5">
                      <div>
                        <a
                          href={work.hostLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fa-solid fa-earth-americas fa-3x"></i>
                        </a>
                      </div>
                      <div className="ContextSubText pt-2">Hosting</div>
                    </div>
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
