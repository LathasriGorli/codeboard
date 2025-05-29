import { Login } from "../Card/Login";

const error = {
  image: '/src/components/icons/LoginImg.svg',
  email: "",
  otp: "",
  message: "",
};

export function Logins({ id }: {id: string}) {
  
  return (
  <>
    <Login image={error.image} email={error.email} otp={error.otp} message={error.message}/>
  </>
  )
}