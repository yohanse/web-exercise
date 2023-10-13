import left from "../../assets/left.webp";
import style from "./imageLogin.module.css";

export const ImageLogin = () => {
  return <div id="image-login">
    <img src={left} alt="image login" id={style["img"]}/>
  </div>;
};
