import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home/Home';
import LogIn from './Pages/LogIn/LogIn';
import SignUp from './Pages/SignUp/SignUp';
import Services from './Pages/Services/Services';
import About from './Pages/About/About';
import Doctors from './Pages/Doctors/Doctors';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import NotFound from './Pages/NotFound/NotFound';
import AuthProvider from './context/AuthProvider';
import Appointment from './Pages/Appointment/Appointment';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/login' element={<LogIn />}></Route>
            <Route path='/signup' element={<SignUp />}></Route>
            <Route 
              path='/services' 
              element={<PrivateRoute><Services /></PrivateRoute>}
            ></Route>
            <Route 
              path='/services/:serviceId' 
              element={<PrivateRoute><ServiceDetail /></PrivateRoute>}
            ></Route>
            <Route path='/about' element={<About />}></Route>
            <Route 
              path='/doctors' 
              element={<PrivateRoute><Doctors /></PrivateRoute>}></Route>
            <Route 
              path='/appointment' 
              element={<PrivateRoute><Appointment /></PrivateRoute>}
            ></Route>
            <Route path='*' element={<NotFound />}></Route>
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
