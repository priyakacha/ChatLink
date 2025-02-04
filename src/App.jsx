import Chat from "./components/chat/Chat";
import Detail from "./components/detail/Detail";
import List from "./components/list/List";
import Login from "./components/Login/Login";
import Notification from "./components/notification/Notification";

const App = () => {
  // const user = false;
  const user = true;

  return (
    <div className='container'>
      {user ? (
        <>
        <List/>
        <Chat/>
        <Detail/>
        </>  
      ) : (
        <Login />
      )
    }
    <Notification/>
      </div>
  )
}

export default App 