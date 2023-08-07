"use client"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { portfolios } from "@/app/lib/data"
import Image from "next/image"

const Portfolios = () => {
  const animation = { duration: 10000, easing: (t) => t }

  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      breakpoints: {
        "(min-width: 1px)": {
          slides: { perView: 3, spacing: 48,  },
        },
      },
      renderMode: "performance",
      slides: {
        perView: 'auto',
        spacing: 48,
      },
      created(s) {
        s.moveToIdx(5, true, animation)
      },
      updated(s) {
        s.moveToIdx(s.track.details.abs + 5, true, animation)
      },
      animationEnded(s) {
        s.moveToIdx(s.track.details.abs + 5, true, animation)
      },
    },
  )

  return (
    <div ref={sliderRef} className="keen-slider flex items-center justify-center">
      {/* if portfolios */}
      {portfolios && portfolios.map((item, index) => (
        <div key={index} className={`keen-slider__slide number-slide${index} flex items-center justify-center`}>
          <img src={item.img} alt={item.title} />
          {/* <figure className="relative w-24 h-24">
            <Image
              src={item.img}
              alt={item.title}
              fill
              sizes="100%"
            />
          </figure> */}
        </div>
      ))}
    </div>
  )
}

export default Portfolios