// Write your code here

import './index.css'

const PlanetItem = props => {
  const {planetItem} = props
  const {imageUrl, name, description} = planetItem
  return (
    <div className="planet-item" data-testid="planets">
      <img className="planet-img" src={imageUrl} alt={`planets ${name}`} />
      <h1 className="planet-heading">{name}</h1>
      <p className="planet-description">{description}</p>
    </div>
  )
}

export default PlanetItem
