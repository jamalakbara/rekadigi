import Heading from "../Heading/heading"
import Logo from "../Logo/logo"
import Paragraph from "../Paragraph/paragraph"
import Sosmed from "../Sosmed/sosmed"
import { contacts } from "@/app/lib/data"
import Contact from "../Contact/contact"
import Button from "../Button/button"

const Footer = () => {
  return (
    <footer className="bg-figma-blue bg-[url(/img/bg-footer.svg)] px-36 py-8 flex flex-col gap-6 relative z-10">
      <div className="flex justify-between items-center">
        <Logo />

        <span className="text-white text-base leading-5">
        © 2023 Daya Rekadigital Indonesia
        </span>
      </div>

      <div className="flex gap-12">
        <div className="flex-1 flex flex-col gap-16">
          <div className="flex flex-col gap-4">
            <Heading className="text-white text-[32px]">
            Temukan Kami   
            </Heading>

            <Paragraph className="text-white">
            Jl. Wijaya Kusuma No.39, Tipes, Kec. Serengan, Kota Surakarta, Jawa Tengah 57154
            </Paragraph>

            <Sosmed />
          </div>

          <div className="flex flex-col gap-4">
            <Heading className="text-white text-[32px]">
              Kontak Kami
            </Heading>

            {/* if contacts then render Contact */}
            {contacts && contacts.map((item, index) => (
              <Contact key={index} {...item}>
                {item.title}
              </Contact>
            ))}
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-6">
          <Heading className="text-white text-[32px]">
            Pesan
          </Heading>

          <textarea className="w-full h-40 bg-white rounded-md p-4 text-black" placeholder="Pesan" />

          <Button className="text-white bg-figma-blue border-2 border-white">
            Kirim
          </Button>
        </div>
      </div>
    </footer>
  )
}

export default Footer