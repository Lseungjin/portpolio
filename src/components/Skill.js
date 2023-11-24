import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJava, faEthereum, faAndroid, faJs, faReact, faGithub, } from "@fortawesome/free-brands-svg-icons";
import { faLeaf, faOtter, faStore, faServer ,faHardDrive, faShield} from "@fortawesome/free-solid-svg-icons";


// skill 컴포넌트
const Skill = ({skillName}) => { 

    let skill; 

    switch(skillName) {
        
        case "Blockchain":
            skill = <FontAwesomeIcon icon={faShield} />
            break;
        case "Kotlin":
            skill = <FontAwesomeIcon icon={faAndroid}/>
            break;
        case "JavaScript":
            skill = <FontAwesomeIcon icon={faJs}/>
            break;
        case "React":
            skill = <FontAwesomeIcon icon={faReact}/>
            break;
        case "Git":
            skill = <FontAwesomeIcon icon={faGithub}/>
            break;
        case "Oracle":
            skill = <FontAwesomeIcon icon={faServer}/>
            break;
        case "dbeaver":
            skill = <FontAwesomeIcon icon={faOtter}/>
            break;
        case "Redux":
            skill = <FontAwesomeIcon icon={faStore}/>
            break;
        case "Java":
            skill = <FontAwesomeIcon icon={faJava}/>
            break;
        case "Spring":
            skill = <FontAwesomeIcon icon={faLeaf}/>
            break;
        case "STS":
            skill = <FontAwesomeIcon icon={faLeaf}/>
            break;
        case "mysql":
            skill = <FontAwesomeIcon icon={faHardDrive}/>
            break;
        case "Solidity":
            skill = <FontAwesomeIcon icon={faEthereum}/>
            break;
    }

    
    return  <span className="SkillName">
        <span>
            {skill}
        </span>
        <span>
            {skillName}
        </span>
        
  </span>
}

export default Skill;