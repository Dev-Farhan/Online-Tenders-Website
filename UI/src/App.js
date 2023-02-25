/* eslint-disable jsx-a11y/anchor-is-valid */
import { Routes,Route } from 'react-router-dom';

import Header from './Header/Header';
import About from './About/About';
import Service from './Service/Service';
import Blog from './Blog/Blog';
import Quotes from './Quotes/Quotes';
import Footer from './Footer/Footer';  
import Register from './Register/Register';
import Login from './Login/Login';
import Contact from './Contact/Contact';
import Admin from './Admin/Admin';
import User from './User/User';
import Logout from './Logout/Logout';
import ManageUser from './ManageUser/ManageUser';
import AddCategory from './Addcategory/Addcategory';


function App() {
  return (
    <>
     <Header/>
     <Routes>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/service" element={<Service/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/logout" element={<Logout/>}></Route>
      <Route path="/admin" element={<Admin/>}></Route>
      <Route path="/manageusers" element={<ManageUser/>}></Route>
      <Route path="/addcategory" element={<AddCategory/>}></Route>
      <Route path="/user" element={<User/>}></Route>
     </Routes>
     <Blog/>
     <Quotes/>
     <Routes> 
      <Route path="/contact"element={<Contact/>}></Route>
     </Routes>
     <Footer/>
      
     
    </>
  );
}

export default App;
