import { Helpers } from '@/Helpers/Types'
import styles from '../page.module.css'
import StudentsPage from './StudentsPage'

const Students = async () => {
  const students = await Helpers.fetchData("https://hostelcomplaintsmanagementsystem.onrender.com/api/dashboard/students/")
  
  return (
    <main className={styles.main}>
      <StudentsPage students={students.data} />
    </main>
  )
}

export default Students