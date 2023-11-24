import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import About from './pages/about/About';
import Auction from './pages/auction/Auction';
import Contact from './pages/contact/Contact';
import Dashboard from './pages/dashboard/Dashboard';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Registration from './pages/registration/Registration';
import User from './pages/user/User';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/auction' element={<Auction />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/login' element={<Login />} />
        <Route path='/user' element={<User />} />
        <Route path='/' element={<PrivateRoute />}>
          <Route path='dashboard' element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
