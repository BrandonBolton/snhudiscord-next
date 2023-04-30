import { db } from '@/lib/db'
import TableRowCourses from '@/app/components/TableRowCourses'
import { courses } from '@prisma/client'

const getData = async (): Promise<courses[]> => {
  const data = db.courses.findMany()

  return data
}

export default async function DisplayCourse() {
  const courses = await getData()

  return (
    <>
      <h1>Courses</h1>
      <br />
      {courses.map((course) => (
        <>
          <TableRowCourses
            key={Number(course.id)}
            courseName={course.course_name!}
            syllabus={course.syllabus_link ?? undefined}
            degreeType={course.degree_type ?? undefined}
            courseOffering={course.course_offering ?? undefined}
            sophia={course.sophia ?? undefined}
            study={course.study ?? undefined}
            modernStates={course.modern_states ?? undefined}
            straighterLine={course.straighterline ?? undefined}
            certificate={course.certificate ?? undefined}
          />
          <br />
        </>
      ))}
    </>
  )
}
