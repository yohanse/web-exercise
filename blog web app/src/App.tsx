import { ImageLogin } from "./component/ImageLogin/ImageLogin";
import { ImageSignup } from "./component/ImageSignup/ImageSignup";
import { Signup } from "./component/Signup/Signup";
import { Login } from "./component/Login/Login";

export const App = () => {
  return (
    <div id="wrapper">
      <div id="image-wrapper">
        <ImageLogin></ImageLogin>
        
        <Login></Login>
        <ImageSignup></ImageSignup>
      </div>
      <div id="auth-wrapper">
        
        <Signup></Signup>
      </div>
    </div>
  );
};
