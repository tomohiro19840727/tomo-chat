import { useAuthState } from "react-firebase-hooks/auth";
import './App.css';
import Sign from './components/Sign';
import Signout from './components/Signout';
import { auth } from "./firebase";

function App() {
  const [user] = useAuthState(auth);

   
  return (
    <div>
      {user ? <Signout/> : <Sign/>  }
    </div>
  );
};

export default App;
