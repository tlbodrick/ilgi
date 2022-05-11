import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'

import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Home from './pages/Home'


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<PrivateRoute />}>
            <Route path='/' element={<Home />} />
          </Route>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </Router>

      <ToastContainer />
    </>
  );
}

export default App;
