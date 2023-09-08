import {Link} from 'react-router-dom'

const courseItem = props => {
  const {courseData} = props
  const {id, name, logoUrl} = courseData
  return (
    <Link to={`/courses/${id}`}>
      <div>
        <img src={logoUrl} alt={name} />
        <p>{name}</p>
      </div>
    </Link>
  )
}

export default courseItem
