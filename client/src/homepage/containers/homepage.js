//Components 
import Header from '../components/Header';
import Body from '../components/Body';
import StudentSection from '../components/StudentSection';
import LandlordSection from '../components/LandlordSection';
import Footer from '../components/Footer';
//CSS
import './Homepage.css';


function Homepage () {



  return (
    <>
      <div id="homepage">
        <div id="homepage-header">
          <Header/>
        </div>
        <div id="homepage-main-section">
          <section id="homepage-body">
            <Body/>
          </section>
          <section id="homepage-sections">
            <div id="homepage-student-section">
              <StudentSection/>
            </div>
            <div id="homepage-landlord-section">
              <LandlordSection/>
            </div>
          </section>
        </div>
        <div id="homepage-footer">
          <Footer/>
        </div>
      </div>
    </>
  )
}

export default Homepage;