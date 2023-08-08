"use client"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { teams } from "@/app/lib/data"
import Image from "next/image"
import Paragraph from "../Paragraph/paragraph"

const Teams = () => {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      breakpoints: {
        "(min-width: 1px)": {
          slides: { perView: 1, spacing: 5 },
        },
        "(min-width: 768px)": {
          slides: { perView: 2, spacing: 10 },
        },
      },
      slides: {
        perView: 2,
      },
    },
    [
      (slider) => {
        let timeout
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 2000)
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ]
  )

  return (
    <div ref={sliderRef} className="keen-slider">
      {/* if teams */}
      {teams && teams.map((item, index) => (
        <div key={index} className={`keen-slider__slide number-slide${index}`}>
          <div className="
            flex flex-col gap-9 items-center
            sm:gap-3
            md:gap-6
          "
          >
            <figure className="
              relative w-96 h-96
              sm:w-24 sm:h-24
              md:w-36 md:h-36
            "
            >
              <Image 
                src={item.image}
                alt={item.name}
                fill
                sizes="100%"
              />
            </figure>

            <div className="
              flex flex-col gap-2 items-center
            "
            >
              <Paragraph className="
                text-2xl text-black font-bold
                sm:text-xl
              "
              >
                {item.name}
              </Paragraph>

              <Paragraph className="
                text-xl text-gray-500
                sm:text-lg
              "
              >
                {item.position}
              </Paragraph>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Teams