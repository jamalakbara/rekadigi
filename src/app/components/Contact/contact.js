import Image from "next/image"

const Contact = ({icon, href, children}) => {
  return (
    <div className="
      text-white flex gap-2 items-center
      sm:gap-1 sm:text-sm
    "
    >
      <figure className="
        w-6 h-6 relative
        sm:w-4 sm:h-4
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