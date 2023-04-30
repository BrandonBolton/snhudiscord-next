interface CourseProps {
  courseName: string
  syllabus?: string
  degreeType?: string
  courseOffering?: string
  sophia?: string
  study?: string
  modernStates?: string
  straighterLine?: string
  certificate?: string
}

let linker = (link: string | undefined) => {
  if (link) {
    return (
      <a target="_blank" rel="noreferrer" href={link}>
        Link
      </a>
    )
  } else {
    return 'None'
  }
}

const TableRowCourses: React.FC<CourseProps> = ({
  courseName,
  syllabus,
  degreeType,
  courseOffering,
  sophia,
  study,
  modernStates,
  straighterLine,
  certificate,
}) => {
  return (
    <>
      {courseName} {linker(syllabus)} {degreeType} {courseOffering}{' '}
      {linker(sophia)} {linker(study)} {linker(modernStates)}{' '}
      {linker(straighterLine)} {linker(certificate)}
    </>
  )
}

export default TableRowCourses
