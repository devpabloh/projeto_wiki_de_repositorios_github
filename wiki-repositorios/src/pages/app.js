import gitLogo from "../assets/logo/Github-desktop-logo-symbol.svg.png"
import {Container} from "./styles"
import Input from "../components/Input/index"
function App(){
    return (
        < Container>
            <img src={gitLogo} width={72} height={72} alt="github logo" />
            <Input/>
        </Container>
    )
}

export default App;