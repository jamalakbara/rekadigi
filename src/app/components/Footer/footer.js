import Heading from "../Heading/heading"
import Logo from "../Logo/logo"
import Paragraph from "../Paragraph/paragraph"
import Sosmed from "../Sosmed/sosmed"
import { contacts } from "@/app/lib/data"
import Contact from "../Contact/contact"
import Button from "../Button/button"

const Footer = () => {
  return (
    <footer className="
      bg-figma-blue bg-[url(/img/bg-footer.svg)] px-36 py-8 flex flex-col gap-6 relative z-10
      sm:p-10 sm:gap-4 sm:z-0
    "
    >
      <div className="
        flex justify-between items-center
        sm:flex-col sm:gap-4
      "
      >
        <Logo />

        <span className="
          text-white text-base leading-5
          sm:text-sm sm:leading-4
        "
        >
          © 2023 Daya Rekadigital Indonesia
        </span>
      </div>

      <div className="
        flex gap-12
        sm:flex-col sm:gap-4
      "
      >
        <div className="
          flex-1 flex flex-col gap-16
          sm:gap-4
        "
        >
          <div className="
            flex flex-col gap-4
            sm:gap-2 sm:items-center
          "
          >
            <Heading className="
              text-white text-[32px]
              sm:text-xl
            "
            >
              Temukan Kami   
            </Heading>

            <Paragraph className="
              text-white
              sm:text-sm sm:text-center
            "
            >
              Jl. Wijaya Kusuma No.39, Tipes, Kec. Serengan, Kota Surakarta, Jawa Tengah 57154
            </Paragraph>

            <Sosmed />
          </div>

          <div className="
            flex flex-col gap-4
            sm:gap-2 sm:items-center
          "
          >
            <Heading className="
              text-white text-[32px]
              sm:text-xl
            "
            >
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

        <div className="
          flex-1 flex flex-col gap-6
          sm:gap-4
        "
        >
          <Heading className="
            text-white text-[32px]
            sm:text-xl sm:text-center
          "
          >
            Pesan
          </Heading>

          <textarea className="
            w-full h-40 bg-white rounded-md p-4 text-black
            sm:h-32 sm:p-2 sm:text-sm
          " 
            placeholder="Pesan" 
          />

          <Button className="
            text-white bg-figma-blue border-2 border-white
            sm:text-sm
          "
          >
            Kirim
          </Button>
        </div>
      </div>
    </footer>
  )
}

export default Footer