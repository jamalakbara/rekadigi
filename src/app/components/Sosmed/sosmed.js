import { socialMedia } from "@/app/lib/data"
import Image from "next/image"
import Link from "next/link"

const Sosmed = () => {
  return (
    <ul className="
      flex items-center text-black
      sm:space-x-2
      lg:space-x-4
    "
    >
      {socialMedia.map((item, index) => (
        <li key={index}>
          <Link href={item.href}>
              <figure className="
                relative
                sm:w-6 sm:h-6
                lg:w-8 lg:h-8
              "
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  fill
                  style={{ width: '100%', height: '100%' }}
                />
              </figure>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Sosmed