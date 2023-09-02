import Contact from './Contact'
import Education from './Education'
import Experience from './Experience'
import Header from './Header'
import Interests from './Interests'
import JD from './JD'
import Languages from './Languages'
import PersonalDetails from './PersonalDetails'
import Skills from './Skills'
// import Languages from './Languages'

const Right = () => {
  return (
    <div className='max-w-4xl mx-auto '>
      <Header />
      {/* <Contact /> */}
      <Experience />
      <JD />
      <Education />
      <div className='lg:hidden  '>
        <Skills />
      </div>
      <Languages />
      {/* <PersonalDetails /> */}
      {/* <Interests /> */}
    </div>
  )
}

export default Right
