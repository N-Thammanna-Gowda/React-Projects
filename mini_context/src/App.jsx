import Login from "./Components/Login"
import Profile from "./Components/Profile"
import UserContextProvider from "./Contexts/UserContextProvider"

function App() {

  return (
    <UserContextProvider>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}


//state management
//context-api, redux, redux-toolkit, zustand, react-redux
export default App
