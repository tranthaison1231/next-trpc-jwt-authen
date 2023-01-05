import { useState } from "react";
import { api } from "../utils/api";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter()
  const { mutate: login, isError } = api.auth.login.useMutation({
    onSuccess: () => {
      router.push('/dashboard');
    }
  });

  const [input, setInput] = useState({ email: '', password: '' });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value} = e.target;
    setInput((prev) => ({ ...prev, [name]: value }))
  }
  return (
    <div>
      {isError && <p style={{ color: 'red'}}> Invalid login data</p>}
      <input type="email" placeholder="email"  name="email" value={input.email} onChange={handleChange} />
      <input type="password" placeholder="password" name="password" value={input.password} onChange={handleChange} />
      <button onClick={() => login(input)} type="button">
        Sign in
      </button>
    </div>
  );
}


export default Login
