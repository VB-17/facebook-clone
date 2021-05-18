import Image from "next/image";
import { signIn } from "next-auth/client";

function Login() {
  return (
    <div className="grid place-items-center">
      <Image
        src="https://links.papareact.com/t4i"
        height={400}
        width={400}
        objectFit="contain"
      />

      <h1
        onClick={signIn}
        className="px-5 py-3 cursor-pointer bg-blue-500 text-center text-white rounded-lg "
      >
        Login with Facebook
      </h1>
    </div>
  );
}

export default Login;
