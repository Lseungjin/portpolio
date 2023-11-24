import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";


const Kotlin = () => { 
    return <div className="project_detail_container">
    <div className="project_detail_title">
        <h2>Kotlin </h2>
        <span>가천대학교 모바일 프로그래밍 실습</span>
    </div>

    <div className="project_detail_description">
        <div>
            <span>기획 의도</span>
            <span> 
                Kotlin 언어 완벽하게는 아니더라도 최대한 공부하기
            </span>
        </div>
        <div>
            <span>개발 기간</span>
            <span>2023.03.15 ~ 06.09</span>
        </div>
        <div>
            <span>기능 소개</span>
            <span>
                AuctioningInfoApp : 회원가입, 로그인, 로그아웃, 날짜검색 및 조회, 농산물 종류 검색, 검색 결과,  경락정보 검색, 사용자 정보, 저장내역 
                그 외 : 실습내용
            </span>
        </div>
        <div>
            <span>기술 스택</span>
            <div className="project_detail_skills">
                <span>HTML</span>
                <span>CSS</span>
                <span>Kotlin</span>
                <span>AndroidStudio</span>
            </div>
        </div>
        
        

    </div>

    <div className="project_detail_btn">
        <a href="https://github.com/Lseungjin/Kotlin" target="blank">
            <span>Git</span>
            <span>
                <FontAwesomeIcon icon={faGithub}/>
            </span>
        </a>
    </div>
</div>
}

export default Kotlin;