import { useEffect, useState } from "react";
import Form from "./FormExample";
import Login from "./LoginExample";

const SignUp = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [user, setUser] = useState(null);
  useEffect(() => {
    console.log("SignUp component rendered");
  }, []);

  return (
    <div>
      {!isSuccess && <Form setIsSuccess={setIsSuccess} />}
      {isSuccess && <Login setIsSuccess={setIsSuccess} setUser={setUser} />}
    </div>
  );
};

export default SignUp;
