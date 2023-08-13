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
      bg-figma-blue bg-[url(/img/bg-footer.svg)] flex flex-col relative z-10 bg-cover bg-no-repeat bg-bottom
      sm:p-10 sm:gap-4 sm:z-0
      lg:px-36 lg:py-20 lg:gap-12
    "
    >
      <div className="
        flex justify-between items-center
        sm:flex-col sm:gap-4
        lg:flex-row
      "
      >
        <Logo />

        <span className="
          text-white
          sm:text-sm sm:leading-4
          lg:text-base lg:leading-5
        "
        >
          © 2023 Daya Rekadigital Indonesia
        </span>
      </div>

      <div className="
        flex gap-12
        sm:flex-col sm:gap-4
        lg:flex-row lg:gap-12
      "
      >
        <div className="
          flex-1 flex flex-col
          sm:gap-4
          lg:gap-16
        "
        >
          <div className="
            flex flex-col gap-4
            sm:gap-2 sm:items-center
            lg:gap-4 lg:items-start
          "
          >
            <Heading className="
              text-white
              sm:text-xl
              lg:text-[32px]
            "
            >
              Temukan Kami   
            </Heading>

            <Paragraph className="
              text-white
              sm:text-sm sm:text-center
              lg:text-base lg:text-left
            "
            >
              Jl. Wijaya Kusuma No.39, Tipes, Kec. Serengan, Kota Surakarta, Jawa Tengah 57154
            </Paragraph>

            <Sosmed />
          </div>

          <div className="
            flex flex-col gap-4
            sm:gap-2 sm:items-center
            lg:gap-4 lg:items-start
          "
          >
            <Heading className="
              text-white
              sm:text-xl
              lg:text-[32px]
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
            lg:text-[32px] lg:text-left
          "
          >
            Pesan
          </Heading>

          <textarea className="
            w-full h-40 bg-white rounded-md p-4 text-black
            sm:h-32 sm:p-2 sm:text-sm
            lg:h-40 lg:p-4 lg:text-base
          " 
            placeholder="Pesan" 
          />

          <Button className="
            text-white bg-figma-blue border-2 border-white
            sm:text-sm
            lg:text-base
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