
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './Pages/AboutUs/AboutUs/AboutUs';
import ApplyNow from './Pages/ApplyNow/ApplyNow';
import Canada from './Pages/Canada/Canada/Canada';
import EduCanada from './Pages/Canada/EduCanada/EduCanada/EduCanada';
import FundCanada from './Pages/Canada/FundCanada/FundCanada/FundCanada';
import VisaCanada from './Pages/Canada/VisaCanada/VisaCanada/VisaCanada';
import Countries from './Pages/Countries/Countries/Countries';
import CourseDetails from './Pages/FindCourse&Details/CourseDetails/CourseDetails/CourseDetails';
import FindCourse from './Pages/FindCourse&Details/FindCourse/FindCourse/FindCourse';

import Home from './Pages/Home/Home/Home';
import PrivacyPolicy from './Pages/PrivacyPolicy/PrivacyPolicy/PrivacyPolicy';
import Services from './Pages/Services/Services/Services';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';
import TearmsUse from './Pages/TearmsUse/TearmsUse/TearmsUse';

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
     <Route path="/studyCanada" element={ <Canada></Canada>}></Route>
     <Route path="/visaCanada" element={ <VisaCanada></VisaCanada>}></Route>
     <Route path="/fundCanada" element={ <FundCanada></FundCanada>}></Route>
     <Route path="/educationCanada" element={ <EduCanada></EduCanada>}></Route>
     <Route path="/findCourse" element={ <FindCourse></FindCourse>}></Route>
     <Route path="/courseDetails" element={ <CourseDetails></CourseDetails>}></Route>
     <Route path="/applyNow" element={ <ApplyNow></ApplyNow>}></Route>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
