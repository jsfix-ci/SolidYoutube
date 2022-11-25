import css from './Slice.module.css'
import Slider from 'react-slick'
import { data } from '../../constants/MainSlider'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <div className={css.mainContainer}>
      <Slider {...settings}>
        {data.map(item => (
          <div className={css.card} key={item.id}>
            <button>{item.title}</button>
          </div>
        ))}
      </Slider>
    </div>
  )
}
