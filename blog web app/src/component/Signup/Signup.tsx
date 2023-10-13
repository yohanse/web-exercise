import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { MdOutlineVisibility } from "react-icons/md";

import style from "./signup.module.css";

export const Signup = () => {
  return (
    <div id="signup">
      <div id={style["login-inside"]}>
        <p>
          Already have an Account? <a href=""> Sign In</a>
        </p>
        <div id={style["greeting"]}>
          <h1>Join Us Today!</h1>
          <p>Sign in with us today to get started!</p>
        </div>
        <div id={style["login-icons"]}>
          <FcGoogle class={style["icon"]} size={23} />
          <AiFillApple class={style["icon"]} size={23} />
          <BsFacebook class={style["icon"]} size={23} />
          <AiFillInstagram class={style["icon"]} size={23} />
        </div>
        <div id={style["or"]}>
          <hr />
          <span>Or continue register with email</span>
          <hr />
        </div>
        <form>
          <div className={style["password-container"]}>
            <input type="email" placeholder="Enter email" />
          </div>
          <div className={style["password-container"]}>
            <input type="password" placeholder="Enter password" />
            <MdOutlineVisibility class={style["visible"]} />
          </div>
          <div className={style["password-container"]}>
            <input type="password" placeholder="Confirm password" />
            <MdOutlineVisibility class={style["visible"]} />
          </div>
          <button id={style["signup"]}>Sign in</button>
        </form>
      </div>
    </div>
  );
};
