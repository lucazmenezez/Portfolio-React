import { ButtonWpp, TooltipText } from "./styles"
import iconWpp from "../../assets/images/icon_whatssapp.svg";

const BtnWpp =  () => (
  <div>
    <ButtonWpp href="https://api.whatsapp.com/send?phone=5541984589855&text=Olá! quero construir um site." target="_blank">
      <img src={iconWpp} alt="ícon do whatsapp" />
      <TooltipText>Vamos Conversar</TooltipText>
    </ButtonWpp>
  </div>
)

export default BtnWpp
