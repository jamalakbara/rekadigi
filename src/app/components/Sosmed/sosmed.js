import { socialMedia } from "@/app/lib/data"
import Image from "next/image"
import Link from "next/link"

const Sosmed = () => {
  return (
    <ul className="flex items-center space-x-4 text-black">
      {socialMedia.map((item, index) => (
        <li key={index}>
          <Link href={item.href}>
              <figure className="w-8 h-8 relative">
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