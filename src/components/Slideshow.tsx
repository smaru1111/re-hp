import Image, { StaticImageData } from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Image1 from '../../public/image1.jpeg'
import Image2 from '../../public/image2.png.jpeg'
import Image3 from '../../public/image3.jpeg'

// カルーセルにする画像のソースをリストにします
const images = [Image1, Image2, Image3]

const Slider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      pagination={{ clickable: true }}
      navigation
      loop={true}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      style={{ width: '100%', height: '100vh' }} // 画面の幅の100%、高さの70%に設定
    >
      {images.map((src: StaticImageData, index: number) => (
        <SwiperSlide key={`${index}`} style={{ width: '100%', height: '100%' }}>
          <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <Image src={src} layout="fill" objectFit="cover" alt="test_image" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Slider
