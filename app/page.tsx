
import { db } from "@/lib/db"

const getData = async() => {
  const data = await db.courses.findFirst()


  return data;
}

export default async function DisplayCourse() {
  const courses = await getData()

  return (
    <div>
      {courses?.course_code}
    </div>
  )
}
