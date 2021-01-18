import Header from '../components/Header';
import Body from '../components/Body';
import StudentSection from '../components/StudentSection';
import LandlordSection from '../components/LandlordSection';
import Footer from '../components/Footer';

function Homepage () {



  return (
    <>
      <div>
        <Header/>
      </div>
      <div>
        <section>
          <Body/>
        </section>
        <section>
          <StudentSection/>
          <LandlordSection/>
        </section>
      </div>
      <div>
        <Footer/>
      </div>
    </>
  )
}

export default Homepage;