import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Dashboard from './pages/dashboard/Dashboard';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Registration from './pages/registration/Registration';
import User from './pages/user/User';
import PrivateRoute from './PrivateRoute';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
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
