// import logo from './logo.svg';
import './App.css';
import './Custom.css';
import Header from './MyComponent/Header';
import Home from './MyComponent/Home';
import Blog from './MyComponent/Blog';
import InnerBlog from './MyComponent/InnerBlog';
import Podcast from './MyComponent/Podcast';
import InnerPodcast from './MyComponent/InnerPodcast';
import AboutUs from './MyComponent/AboutUs';
import ContactUs from './MyComponent/ContactUs';
import SignUp from './MyComponent/SignUp';
import Login from './MyComponent/Login';
import SignupCheckOut from './MyComponent/SignupCheckOut';
import CheckOut from './MyComponent/CheckOut';
import EditorProfile from './MyComponent/EditorProfile';
import Marine from './MyComponent/Marine';
import Professional from './MyComponent/Professional';
import SubscriptionBoater from './MyComponent/SubscriptionBoater';
import BusinessSubscription from './MyComponent/BusinessSubscription';
import SignUpPopup from './MyComponent/SignUpPopup';
import SignUpPro from './MyComponent/SignUpPro';
import Footer from './MyComponent/Footer';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <Header/>
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/blog' element={<Blog/>}></Route>
          <Route exact path='/podcast' element={<Podcast/>}></Route>
          <Route exact path='/signup' element={<SignUp/>}></Route>
          <Route exact path='/login' element={<Login />}></Route>
          <Route exact path='/marine' element={<Marine/>}></Route>
          <Route exact path='/innerblog' element={<InnerBlog/>}></Route>
          <Route exact path='/innerpodcast' element={<InnerPodcast/>}></Route>
          <Route exact path='/aboutus' element={<AboutUs/>}></Route>
          <Route exact path='/contactus' element={<ContactUs/>}></Route>
          <Route exact path='/signUpPopup' element={<SignUpPopup/>}></Route>
          <Route exact path='/professional' element={<Professional/>}></Route>
          <Route exact path='/subscriptionBoater' element={<SubscriptionBoater/>}></Route>
          <Route exact path='/businesssubscription' element={<BusinessSubscription/>}></Route>
          <Route exact path='/signuppro' element={<SignUpPro/>}></Route>
          <Route exact path='/signupcheckout/:label' element={<SignupCheckOut/>}></Route>
          <Route exact path='/CheckOut/:label' element={<CheckOut/>}></Route>
          <Route exact path='/editorprofile' element={<EditorProfile/>}></Route>
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
