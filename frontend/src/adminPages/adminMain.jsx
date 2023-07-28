// import {useState, useEffect} from 'react';

const Login = () => {
  return(
    <div className='admin-login'>
      <h3>Login  </h3>
      <form>
        <input type="text" name="name" placeholder='username' id="name" />
        <input type="password" placeholder='Password' />
      </form>
    </div>
  )
} 

const AdminMain = () => {
  // const [login, setLogin] = useState({
  //   login: "",
  //   password: "",
  //   loggedIn: false
  // })
  return (
    <div className="Admin">
      <Login />
    </div>
  )
}

export default AdminMain