import { useState } from "react";

const LoginForm = () => {

    const [showPassword, setShowPassword] = useState(false)
    const handleShowPassword = () => {
         setShowPassword(!showPassword)
    }

    return (
        <form className="form">
            <input type="email" id="email" placeholder="Enter your email" />
            <input type={showPassword ? 'text' : 'password'} id="password" placeholder="Enter your password" />
            Show Password
            <input type="checkbox" id="show-password" onChange={handleShowPassword} />
            <button type="submit">Submit</button>
        </form>
    );
};

export default LoginForm;