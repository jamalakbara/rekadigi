import Image from "next/image"

const Logo = () => {
  return (
    <figure className="relative w-14 h-14">
      <Image 
        src="/img/logo.svg"
        alt="Logo"
        fill
        style={{ width: '100%', height: '100%' }}
      />
    </figure>
  )
}

export default Logo