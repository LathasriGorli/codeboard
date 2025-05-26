import { Login } from "../Card/Login";

const error = {
  image: '/public/Frame 13.png',
  email: "*email is required",
  password: "*password is required",
  message: "",
};

export function Logins({ id }: {id: string}) {
  
  return (
  <>
    <Login image={error.image} email={error.email} password={error.password} message={error.message}/>
  </>
  )
}
