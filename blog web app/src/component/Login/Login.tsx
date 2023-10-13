import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { MdOutlineVisibility } from "react-icons/md";

import style from "./login.module.css";

export const Login = () => {
  return (
    <div id="login">
      <div id={style["login-inside"]}>
        <p>
          Not a member? <a href=""> Register Now</a>
        </p>
        <div id={style["greeting"]}>
          <h1>Hello Again!</h1>
          <p>welcome back you've been missed!</p>
        </div>
        <form>
          <div id={style["password-container"]}>
            <input type="email" placeholder="Enter email" />
          </div>
          <div id={style["recover"]}>
            <div id={style["password-container"]}>
              <input type="password" placeholder="Enter password" />
              <MdOutlineVisibility id={style["visible"]} />
            </div>
            <p>Recover password</p>
          </div>
          <button>Sign in</button>
        </form>
        <div id={style["or"]}>
          <hr />
          <span>Or continue with</span>
          <hr />
        </div>
        <div id={style["login-icons"]}>
          <FcGoogle class={style["icon"]} size={23} />
          <AiFillApple class={style["icon"]} size={23} />
          <BsFacebook class={style["icon"]} size={23} />
          <AiFillInstagram class={style["icon"]} size={23} />
        </div>
      </div>
    </div>
  );
};
