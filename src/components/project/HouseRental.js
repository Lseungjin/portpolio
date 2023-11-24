import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const HouseRental = () => { 
    return <div className="project_detail_container">
    <div className="project_detail_title">
        <h2>HouseRental</h2>
        <span>하우스 렌탈 </span>
    </div>

    <div className="project_detail_description">
        <div>
            <span>기획 의도</span>
            <span> 
                블록체인 개발자가 되기 위한 간단한 토이 프로젝트 + AWS배포 연습
            </span>
        </div>
        <div>
            <span>개발 기간</span>
            <span>2023.10.02 ~ 10.12(잠시 중단)</span>
        </div>
        <div>
            <span>기능 소개</span>
            <span>
            dev 서버가 실행되고 dapp이 포함된 새 브라우저 탭이 자동으로 열립니다.
            dapp을 사용하기 위해 원하는 Lease 버튼을 클릭하세요. 
            MetaMask를 통해 트랜잭션을 승인하라는 메시지가 자동으로 표시됩니다. 
            SUBMIT을 클릭하여 트랜잭션을 승인합니다.
            Lease가 완료된 House의 경우 'Success'이라고 표시됩니다.
            </span>
        </div>
        <div>
            <span>기술 스택</span>
            <div className="project_detail_skills">
                <span>solidity</span>
                <span>MetaMask</span>
                <span>JavaScript</span>
                <span>React</span>
                <span>Ganache</span>
            </div>
        </div>
        
        

    </div>

    <div className="project_detail_btn">
        <a href="https://github.com/Lseungjin/house-rental" target="blank">
            <span>Git</span>
            <span>
                <FontAwesomeIcon icon={faGithub}/>
            </span>
        </a>
    </div>
</div>
}

export default HouseRental;