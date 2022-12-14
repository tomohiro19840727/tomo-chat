import { useAuthState } from "react-firebase-hooks/auth";
import './App.css';
import Line from "./components/Line";
import Sign from "./components/Sign";

import Signout from './components/Signout';
import { auth } from "./firebase";

function App() {
  const [user] = useAuthState(auth);

   
  return (
    <div>
      {user ? <Signout /> : <Line />  }
    </div>
  );
};

export default App;
