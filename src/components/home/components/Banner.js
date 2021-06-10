import { Parallax } from 'react-parallax'
import CoolImg from '../../../img/crypto.jpg'

const Banner = () => {
  return (
    <Parallax
      strength={300}
      blur={{ min: -15, max: 15 }}
      bgImage={CoolImg}
      className="heroBanner">
          
      </Parallax>
  )
}

export default Banner
