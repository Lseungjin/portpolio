import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";


const WithsportsBlockchain = () => { 
    return <div className="project_detail_container">
        <div className="project_detail_title">
            <h2>WithsportsBlockchain</h2>
            <span>가천대 졸업프로젝트 - 팀 프로젝트에서 블록체인 분야</span>
        </div>

        <div className="project_detail_description">
            <div>
                <span>기획 의도</span>
                <span> 
                    토큰시스템 + 투표시스템
                </span>
            </div>
            <div>
                <span>개발 기간</span>
                <span>2023.10.19 ~ (진행 중)</span>
            </div>
            <div>
                <span>담당 및 참여도</span>
                <span>
                    토큰시스템(90%) - ui관련 제외, 투표시스템(0%) - 아직 시작안함
                </span>
            </div>
            <div>
                <span>기술 스택</span>
                <div className="project_detail_skills">
                    <span>Solidity</span>
                    <span>Java Spring</span>
                    <span>MetaMask</span>
                    <span>CSS</span>
                    <span>AWS</span>
                    <span>Ganache</span>
                    <span>Mysql</span>
                    <span>Git</span>
                    <span>Notion</span>
                </div>
            </div>
            
            

        </div>

        <div className="project_detail_btn">
            <a href="https://github.com/Lseungjin/withsports-blockchain" target="blank">
                <span>Git</span>
                <span>
                    <FontAwesomeIcon icon={faGithub}/>
                </span>
            </a>
        </div>
    </div>
}

export default WithsportsBlockchain;