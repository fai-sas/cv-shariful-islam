import Contact from './Contact'
import Languages from './Languages'
import PersonalDetails from './PersonalDetails'
import ProfileImg from './ProfileImg'
import Skills from './Skills'

const Left = () => {
  return (
    <div className='max-w-lg my-8 mx-auto bg-slate-200'>
      <ProfileImg />
      <Contact />
      <div className='hidden lg:block'>
        <Skills />
      </div>
      {/* <PersonalDetails /> */}
      {/* <Languages /> */}
    </div>
  )
}

export default Left
