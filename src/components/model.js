import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import WithsportsBlockchain from "./project/WithsportsBlockchain";
import WithsportsReserve from "./project/WithsportsReserve";
import Kotlin from "./project/kotlin";
import HouseRental from "./project/HouseRental";

const model = ({project, modelClose}) => { 

    let targetProject = "";

    if(project === "WithsportsBlockchain") targetProject = <WithsportsBlockchain />
    if(project === "WithsportsReserve") targetProject = <WithsportsReserve />
    if(project === "Kotlin") targetProject = <Kotlin />
    if(project === "HouseRental") targetProject = <HouseRental />

    return <div className="Model">
        
        <div className="model_back_bg"></div>


        <div className="model_container">
            <div className="model_close" onClick={modelClose}>
                <FontAwesomeIcon icon={faX}/>
            </div>
            {targetProject}
        </div>

    </div>
}

export default model;