import Image from "next/image"
import Link from "next/link"
import { menu } from '@/app/lib/data' 
import Button from "../Button/button"
import Logo from "../Logo/logo"

const Navigation = () => {
  return (
    <nav className="w-full px-36 py-8  fixed bg-white grid grid-cols-3 shadow-md">
      <Link href="/">
        <Logo />
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