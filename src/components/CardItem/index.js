// Write your code here.
import './index.css'

const Technology = props => {
  const {cardDetail} = props
  const {title, description, imgUrl, className} = cardDetail
  return (
    <li className={`${className} card`}>
      <h1 className="heading">{title}</h1>
      <p className="para">{description}</p>
      <div className="imgContainer">
        <img className="image" src={imgUrl} alt={title} />
      </div>
    </li>
  )
}

export default Technology
