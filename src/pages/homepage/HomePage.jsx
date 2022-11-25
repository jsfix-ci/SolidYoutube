import css from './HomePage.module.css'
import { Carousel } from '../../components/slice/Slice'

function HomePage() {
  return (
    <div className={css.homePage}>
      <Carousel />
    </div>
  )
}

export default HomePage
