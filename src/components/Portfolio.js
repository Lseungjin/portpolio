import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Model from "./model";

const Portfolio = () => {

  // git 이동
  const goDetail = (target) => {
    if (target === "WithsportsReserve") {
      window.open("https://github.com/Lseungjin/withsports-reserve", "_blank");
    } else if (target === "WithsportsBlockchain") {
      window.open("https://github.com/Lseungjin/withsports-blockchain", "_blank");
    } else if (target === "Kotlin") {
      window.open("https://github.com/Lseungjin/Kotlin", "_blank");
    } else if (target === "HouseRental") {
      window.open("https://github.com/Lseungjin/house-rental", "_blank");
    }
  };
  // 프로젝트 model
  const [modelIsOpen, setModelIsOpen] = useState(false);
  const [targetProject, setTargetProject] = useState(null);

  const body = document.getElementsByTagName('body')[0];

  const modelOpen = (project) => {
    setModelIsOpen(!modelIsOpen);
    setTargetProject(project);
    const portfolio = document.getElementById("Portfolio");
    portfolio.scrollIntoView({ behavior: "smooth" });
    body.classList.add('scroll-locked');
  }

  const closeModel = () => { 
    setModelIsOpen(!modelIsOpen);
    body.classList.remove('scroll-locked');
  }

  return (
    <div className="wrapper" id="Portfolio">
      <div className="container portfolio">
        <h1>Portfolio</h1>

        <div>
          <div className="team_project project">
            <h2>Team Project</h2>
            <div className="project_wrap">
              <div className="porject_item">
                <div className="project_img">
                  <img
                    src={process.env.PUBLIC_URL + "/img/project/withsports - reserve.png" } alt="WithsportsReserve"
                  />
                </div>
                <div className="porject_description">
                  <div>
                    <span>WithsportsReserve</span>
                    <span>블록체인 기반 스포츠매칭서비스(예약서비스부분)</span>
                  </div>
                  <div>
                    <button onClick={() => modelOpen("WithsportsReserve")}>
                      프로젝트 설명_
                      <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                  </div>
                </div>
              </div>

              <div className="porject_item">
                <div className="project_img">
                  <img
                    src={process.env.PUBLIC_URL + "/img/project/withsports - blockchain.png"} alt="WithsportsBlockchain"
                  />
                </div>
                <div className="porject_description">
                  <div>
                    <span>WithsportsBlockchain</span>
                    <span>블록체인 기반 스포츠매칭서비스(블록체인부분)</span>
                  </div>
                  <div>
                    <button onClick={() => modelOpen("WithsportsBlockchain")}>
                      프로젝트 설명_
                      <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="solo_project project">
            <h2>Solo Project</h2>
            <div className="project_wrap">
              <div className="porject_item">
                <div className="project_img">
                  <img
                    src={process.env.PUBLIC_URL + "/img/project/kotlin.png"} alt="Kotlin"
                  />
                </div>
                <div className="porject_description">
                  <div>
                    <span>Kotlin</span>
                    <span>Kotlin 실습</span>
                  </div>
                  <div>
                    <button onClick={() => modelOpen("Kotlin")}>
                      프로젝트 설명_
                      <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                  </div>
                </div>
              </div>

              <div className="porject_item">
                <div className="project_img">
                  <img
                    src={process.env.PUBLIC_URL + "/img/project/house-rental.png"} alt="HouseRental"
                  />
                </div>
                <div className="porject_description">
                  <div>
                    <span>HouseRental</span>
                    <span>블록체인 - HouseRental</span>
                  </div>
                  <div>
                    <button onClick={() => modelOpen("HouseRental")}>
                      프로젝트 설명_
                      <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {
          modelIsOpen ? <Model project={targetProject} modelClose={closeModel}/> : null
        }
    </div>
  );
};

export default Portfolio;