import left from "../../assets/left.webp";
import style from "./imageLogin.module.css";
const Div = styled.div<{chech: bollean}>`
  display: ${chech? "None" : "flex"};
`;
export const ImageLogin = () => {
  return <div id="image-login">
    <img src={left} alt="image login" id={style["img"]}/>
  </div>;
};
