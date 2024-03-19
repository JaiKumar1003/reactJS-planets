import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'

import './index.css'

const ReactSlick = props => {
  const {planetsList} = props
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  console.log(planetsList[0])
  return (
    <div className="slider-container">
      <h1 className="main-heading">PLANETS</h1>
      <Slider {...settings}>
        {planetsList.map(eachItem => (
          <PlanetItem planetItem={eachItem} key={eachItem.id} />
        ))}
      </Slider>
    </div>
  )
}

export default ReactSlick
