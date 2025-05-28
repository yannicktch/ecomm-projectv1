import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import "../../css/app.css"
import acneteeblack from "../ASSETS/images/2.webp"

export default function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel()

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide"><img src={acneteeblack} alt="Slide 1" /></div>
        <div className="embla__slide"><img src={acneteeblack} alt="Slide 2" /></div>
        <div className="embla__slide"><img src={acneteeblack} alt="Slide 3" /></div>
      </div>
    </div>
  )
}
