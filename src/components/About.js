import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowDown } from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "react-responsive";

const About = () => {
  // 미디어쿼리
  const pc = useMediaQuery({ query: "(min-width: 1024px)" });
  const tabletAndMobile = useMediaQuery({ query: "(max-width: 1023px)" });

  return (
    <div className="wrapper" id="About">
      <div className="container about">
        <h1>About Me</h1>

        {pc && (
          <div className="about_introduce">
            <div className="about_left">
              <img src={process.env.PUBLIC_URL + "./img2.jpg"} alt="img2" />
            </div>

            <div className="about_right">
              <p className="about_text">
                2년간 가천대학교 20학번 교육과정을 통해 React,
                JavaScript, 와 같은 기초적인 웹 프로그래밍, Java, blockchain, kotlin DataBase(Mysql) 같은 백엔드
                대한 공부를 하며 실습을 하였습니다. 그리고 유데미에서 블록체인 강의를 수강하였습니다.
                그 과정에서 두 번의 팀 프로젝트를 진행 중에 있으며 최근 블록체인 강의를 수강하면서 블록체인 분야에도
                매력을 느껴 백엔드 또는 블록체인 개발자가 되기를 결심하였습니다. 
                공부와 개인프로젝트를 진행하며 백엔드 개발자로서의
                능력을 키우는 중이며 필요한 언어나 라이브러리, 기술 등 배울 껀덕지가 있다면 언제든
                배울 준비가 되어있습니다. 앞으로도 항상 배울 수 있는 기회를
                감사히 여기며 겸손한 마음으로 배워 성장하고 싶습니다.
              </p>

              <div style={{ textAlign: "end" }}>
                <a href={process.env.PUBLIC_URL + "이력서(이승진).docx"} download="이력서(이승진)">
                  Download CV__
                  <FontAwesomeIcon icon={faCloudArrowDown} />
                </a>
              </div>

              <div className="about_detail">
                <div className="detail_box">
                  <span>Career</span>
                  <div className="detail_item">
                    <span>2034.06 ~ 2052.06</span>
                    <span>이직 및 퇴직 예정</span>
                  </div>
                  <div className="detail_item">
                    <span>2024.02 ~ 2033.12</span>
                    <span>네카라쿠베당토 입사 및 근무</span>
                  </div>
                </div>

                <div className="detail_box">
                  <span>Education</span>
                  <div className="detail_item">
                    <span>2022.03 ~ 2024.02</span>
                    <span>가천대학교 편입학 및 졸업예정</span>
                  </div>
                  <div className="detail_item">
                    <span>2018.10 ~ 2020.06</span>
                    <span>육군 병장 만기 전역</span>
                  </div>
                  <div className="detail_item">
                    <span>2014.03 ~ 2017.02</span>
                    <span>광명북고등학교 졸업</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {tabletAndMobile && (
          <div className="about_introduce_small">
            <div className="about_top">
              <div>
                <img src={process.env.PUBLIC_URL + "./img2.jpg"} alt="img2" />

              </div>

              <div>
                <p>
                2년간 가천대학교 20학번 교육과정을 통해 react,
                JavaScript, 와 같은 기초적인 웹 프로그래밍, Java, blockchain, kotlin DataBase(Mysql) 같은 백엔드
                대한 공부를 하며 실습을 하였습니다. 그리고 유데미에서 블록체인 강의를 수강하였습니다.
                그 과정에서 두 번의 팀 프로젝트를 진행 중에 있으며 최근 블록체인 강의를 수강하면서 블록체인 분야에도
                매력을 느껴 백엔드 또는 블록체인 개발자가 되기를 결심하였습니다. 
                공부와 개인프로젝트를 진행하며 백엔드 개발자로서의
                능력을 키우는 중이며 필요한 언어나 라이브러리, 기술 등 배울 껀덕지가 있다면 언제든
                배울 준비가 되어있습니다. 앞으로도 항상 배울 수 있는 기회를
                감사히 여기며 겸손한 마음으로 배워 성장하고 싶습니다.
                </p>

                <div>
                  <a href={process.env.PUBLIC_URL + "이력서(이승진).docx"} download="이력서(이승진)">
                    Download CV__
                    <FontAwesomeIcon icon={faCloudArrowDown} />
                  </a>
                </div>
              </div>
            </div>

            <div className="about_bottom">
              <div className="detail_box">
                <span>Career</span>
                <div className="detail_item">
                    <span>2034.06 ~ 2052.06</span>
                    <span>이직 후 정년퇴직 예정</span>
                </div>
                <div className="detail_item">
                    <span>2024.02 ~ 2033.12</span>
                    <span>네카라쿠베당토 입사 및 근무</span>
                </div>
              </div>

              <div className="detail_box">
                <span>Education</span>
                <div className="detail_item">
                  <span>2022.03 ~ 2024.02</span>
                  <span>가천대학교 편입학 및 졸업예정</span>
                </div>
                <div className="detail_item">
                  <span>2018.10 ~ 2020.06</span>
                  <span>육군 병장 만기 전역</span>
                </div>
                <div className="detail_item">
                  <span>2014.03 ~ 2017.02</span>
                  <span>광명북고등학교 졸업</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;