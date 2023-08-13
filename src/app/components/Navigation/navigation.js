"use client"
import Link from "next/link"
import { menu } from '@/app/lib/data' 
import Button from "../Button/button"
import Logo from "../Logo/logo"

// create hamburger menu and navigation menu for mobile
const Hamburger = () => {
  // when clicked, show mobile menu
  const handleClick = () => {
    const mobileMenu = document.querySelector('.mobile-menu')
    mobileMenu.classList.toggle('hidden')
    mobileMenu.classList.toggle('flex')
  }

  return (
    <div className="
      flex flex-col gap-1 cursor-pointer
      sm:flex sm:items-end sm:col-span-1
      lg:hidden
    "
    onClick={handleClick}
    >
      <div className="
        w-8 h-1 bg-black
      "
      />
      <div className="
        w-8 h-1 bg-black
      "
      />
      <div className="
        w-8 h-1 bg-black
      "
      />
    </div>
  )
}

// create navigation menu for mobile
const MobileMenu = () => {
  return (
    <div className="
      flex-col gap-4 hidden mobile-menu col-span-2

    "
    >
      {menu.map((item, index) => (
        <Link href={item.href} key={index} className="
          text-black py-4 hover:text-figma-blue
        ">
            {item.title}
        </Link>
      ))}

      <Button className='
        bg-figma-blue
      '
      >
        Hubungi Kami
      </Button>
    </div>
  )
}


const Navigation = () => {
  const handleClick = (sectionId) => (e) => {
    e.preventDefault();
    const section = document.querySelector(sectionId);
    const offsetTop = section.offsetTop;
    console.log(sectionId, offsetTop);

    window.scroll({
      top: offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <nav className="
      w-full px-36 py-8 z-50 fixed bg-white grid grid-cols-3 shadow-md
      sm:px-8 sm:py-4 sm:grid-cols-2 sm:gap-4 sm:items-center sm:grid-flow-row-dense
      lg:px-36 lg:py-8 lg:grid-cols-3 lg:gap-4 lg:items-center
    "
    >
      <Link href="/" className="
        sm:col-span-1
      ">
        <Logo />
      </Link>

      <ul className="
        flex items-center space-x-4 text-black
        sm:hidden
        lg:flex lg:space-x-4
      "
      >
        {menu.map((item, index) => (
          <li key={index} onClick={handleClick(item.href)} className="cursor-pointer">
            <a onClick={handleClick(item.href)}>
                {item.title}
            </a>
          </li>
        ))}
      </ul>

      <Button className='
        bg-figma-blue
        sm:hidden
        lg:flex
      '
      >
        Hubungi Kami
      </Button>

      <Hamburger />

      <MobileMenu />
    </nav>
  )
}

export default Navigation