import Image from "next/image"
import Heading from "../Heading/heading"
import Paragraph from "../Paragraph/paragraph"


const Card = ({icon, head, desc, className}) => {
  return (
    <div className={`
      flex flex-col gap-6 p-12 max-w-[425px] rounded-[32px] shadow-md 
      sm:p-6 sm:max-w-full sm:rounded-[24px] sm:gap-4 sm:items-center
      md:p-8 md:gap-8 md:max-w-[500px]
      lg:p-12 lg:gap-6 lg:max-w-[600px] lg:text-left lg:items-start
      ${className}
    `}
    >
      <figure className="
        relative
        sm:w-12 sm:h-12
        md:w-14 md:h-14
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
        lg:text-2xl
      "
      >
        {head}
      </Heading>

      <Paragraph className="
        text-gray-500
        sm:text-lg
        lg:text-xl
      "
      >
        {desc}
      </Paragraph>
    </div>
  )
}

export default Card