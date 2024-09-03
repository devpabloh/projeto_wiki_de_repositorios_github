import gitLogo from "../assets/logo/Github-desktop-logo-symbol.svg.png"
import {Container} from "./styles"
import Input from "../components/Input/index"
import ItemRepo from "../components/ItemRepo";
import { ButtonContainer } from "../components/Button/styles";
function App(){
    return (
        < Container>
            <img src={gitLogo} width={72} height={72} alt="github logo" />
            <Input/>
            <ButtonContainer/>
            <ItemRepo/>
        </Container>
    )
}

export default App;