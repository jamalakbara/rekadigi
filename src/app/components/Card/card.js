import Image from "next/image"
import Heading from "../Heading/heading"
import Paragraph from "../Paragraph/paragraph"


const Card = ({icon, head, desc, className}) => {
  return (
    <div className={`
      flex flex-col gap-6 p-12 max-w-[425px] rounded-[32px] shadow-md 
      sm:p-6 sm:max-w-full sm:rounded-[24px] sm:gap-4 sm:items-center
      md:p-8 md:gap-8 md:max-w-[500px]
      ${className}
    `}
    >
      <figure className="
        relative w-14 h-14
        sm:w-12 sm:h-12
      "
      >
        <Image
          src={icon}
          alt={head}
          fill
          sizes="100%"
        />
      </figure>

      <Heading className="
        text-black text-2xl font-bold
        sm:text-xl
      "
      >
        {head}
      </Heading>

      <Paragraph className="
        text-gray-500 text-xl
        sm:text-lg
      "
      >
        {desc}
      </Paragraph>
    </div>
  )
}

export default Card