import Image from "next/image"
import Heading from "../Heading/heading"
import Paragraph from "../Paragraph/paragraph"


const Card = ({icon, head, desc, className}) => {
  return (
    <div className={`flex flex-col gap-6 p-12 max-w-[425px] rounded-[32px] shadow-md ${className}`}>
      <figure className="relative w-14 h-14">
        <Image
          src={icon}
          alt={head}
          fill
          sizes="100%"
        />
      </figure>

      <Heading className="text-black text-2xl font-bold">
        {head}
      </Heading>

      <Paragraph className="text-gray-500 text-xl">
        {desc}
      </Paragraph>
    </div>
  )
}

export default Card