import './index.css'

const ProjectShowCase = props => {
  const {details} = props
  const {name, imageUrl} = details

  return (
    <li className="appList">
      <img src={imageUrl} className="image" alt={name} />
      <p className="name">{name}</p>
    </li>
  )
}

export default ProjectShowCase
