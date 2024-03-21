
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './Pages/AboutUs/AboutUs/AboutUs';
import ApplyNow from './Pages/ApplyNow/ApplyNow';
import Canada from './Pages/Canada/Canada/Canada';
import EduCanada from './Pages/Canada/EduCanada/EduCanada/EduCanada';
import FundCanada from './Pages/Canada/FundCanada/FundCanada/FundCanada';
import VisaCanada from './Pages/Canada/VisaCanada/VisaCanada/VisaCanada';
import Countries from './Pages/Countries/Countries/Countries';
import Dashboard from './Pages/Dashboard/Dashboard';
import CourseDetails from './Pages/FindCourse&Details/CourseDetails/CourseDetails/CourseDetails';
import FindCourse from './Pages/FindCourse&Details/FindCourse/FindCourse/FindCourse';

import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import PrivacyPolicy from './Pages/PrivacyPolicy/PrivacyPolicy/PrivacyPolicy';
import Services from './Pages/Services/Services/Services';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';
import TearmsUse from './Pages/TearmsUse/TearmsUse/TearmsUse';
import RequireAuth from './Pages/Login/RequireAuth';
import Users from './Pages/Dashboard/Users/Users';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Applicants from './Pages/Dashboard/Applicants/Applicants';
import Australia from './Pages/Australia/Australia/Australia';
import VisaAustralia from './Pages/Australia/VisaAustralia/VisaAustralia';
import FundAustralia from './Pages/Australia/FundAustralia/FundAustralia';
import EduAustralia from './Pages/Australia/EduAustralia/EduAustralia';

function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     <Routes>
     <Route path="/" element={ <Home></Home>}></Route>
     <Route path="/services" element={ <Services></Services>}></Route>
     <Route path="/about" element={ <AboutUs></AboutUs>}></Route>
     <Route path="/tearms&use" element={ <TearmsUse></TearmsUse>}></Route>
     <Route path="/privacyPolicy" element={ <PrivacyPolicy></PrivacyPolicy>}></Route>
     <Route path="/countries" element={ <Countries></Countries>}></Route>
     <Route path="/findCourse" element={ <FindCourse></FindCourse>}></Route>
     <Route path="/courseDetails" element={ <CourseDetails></CourseDetails>}></Route>
     <Route path="/studyAustralia" element={ <Australia></Australia>}></Route>
     <Route path="/visaAustralia" element={ <VisaAustralia></VisaAustralia>}></Route>
     <Route path="/fundAustralia" element={ <FundAustralia></FundAustralia>}></Route>
     <Route path="/educationAustralia" element={ <EduAustralia></EduAustralia>}></Route>
     <Route path="/studyCanada" element={ <Canada></Canada>}></Route>
     <Route path="/visaCanada" element={ <VisaCanada></VisaCanada>}></Route>
     <Route path="/fundCanada" element={ <FundCanada></FundCanada>}></Route>
     <Route path="/educationCanada" element={ <EduCanada></EduCanada>}></Route>
     <Route path="/applyNow" element={ <ApplyNow></ApplyNow>}></Route>
     {/* <Route path="/applyNow" element={ 
     <RequireAuth>
      <ApplyNow></ApplyNow>
     </RequireAuth>}></Route> */}
     <Route path="/login" element={ <Login></Login>}></Route>
     <Route path="/signup" element={ <SignUp></SignUp>}></Route>
     <Route path="/adminDashboard" element={<RequireAuth><Dashboard/>
       </RequireAuth>}> 
      <Route path='users' index element={<Users></Users>}></Route>
      <Route path='applicants'  element={<Applicants></Applicants>}></Route>
       </Route>
     
     </Routes>
     <ToastContainer />
     <Footer></Footer>
   
    </div>
  );
}

export default App;
