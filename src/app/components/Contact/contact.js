import Image from "next/image"

const Contact = ({icon, href, children}) => {
  return (
    <div className="
      text-white flex items-center
      sm:gap-1 sm:text-sm
      lg:gap-2 lg:text-base
    "
    >
      <figure className="
        relative
        sm:w-4 sm:h-4
        lg:w-6 lg:h-6
      "
      >
        <Image
          src={icon}
          alt={icon}
          fill
          style={{ width: '100%', height: '100%' }}
        />
      </figure>
      <a href={href} target="_blank">
        {children}
      </a>
    </div>
  )
}

export default Contact