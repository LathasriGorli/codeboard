import { Login } from "../Card/Login";

const error = {
  image: '/src/components/icons/LoginImg.svg',
  email: "",
  password: "",
  message: "",
};

export function Logins({ id }: {id: string}) {
  
  return (
  <>
    <Login image={error.image} email={error.email} password={error.password} message={error.message}/>
  </>
  )
}
