import Image from "next/image"
import Link from "next/link"
import { menu } from '@/app/lib/data' 
import Button from "../Button/button"

const Navigation = () => {
  return (
    <nav className="w-full px-36 py-8  fixed bg-white grid grid-cols-3 shadow-md">
      <Link href="/">
        <div className="relative w-14 h-14">
          <Image 
            src="/img/logo.svg"
            alt="Logo"
            fill
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </Link>

      <ul className="flex items-center space-x-4 text-black">
        {menu.map((item, index) => (
          <li key={index}>
            <Link href={item.href}>
                {item.title}
            </Link>
          </li>
        ))}
      </ul>

      <Button className='bg-figma-blue'>
        Hubungi Kami
      </Button>
    </nav>
  )
}

export default Navigation