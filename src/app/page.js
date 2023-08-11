import { misi, services, works, members, faqs } from './lib/data'
import Paragraph from './components/Paragraph/paragraph'
import Heading from './components/Heading/heading'
import Image from 'next/image'
import Teams from './components/Teams/teams'
import Card from './components/Card/card'
import Portfolios from './components/Portfolios/portfolios'
import Button from './components/Button/button'

export default function Home() {
  return (
    <>
      {/* Hero */}

      <section className="
        relative bg-white bg-center bg-[url(/img/bg-hero.png)] flex items-center
        sm:p-10 sm:bg-contain sm:bg-no-repeat sm:bg-center sm:h-[600px]
        md:h-[700px]
        lg:h-screen lg:px-36 lg:py-20 lg:bg-auto
      "
      >
        <Heading className="
          text-black font-bold
          sm:text-5xl sm:max-w-full sm:text-center
          lg:text-7xl lg:max-w-[50%] lg:text-left
        "
        >
          Pengalaman Digital Lebih Baik Dengan <b className='text-figma-blue'>Rekadigi</b>
        </Heading>
      </section>

      {/* Visi Misi */}
      <section className="
        relative flex flex-col px-36 py-20 bg-figma-broken-white gap-12 bg-[url(/img/bulet-kanan.svg)] bg-right-top bg-no-repeat
        sm:p-10 sm:h-auto sm:bg-50% sm:gap-4
        lg:px-36 lg:py-20 lg:bg-auto lg:gap-12
      "
      >
        <figure className="
          absolute z-[1]
          sm:w-40 sm:h-40 sm:bottom-[-10%] sm:left-[-10%]
          md:w-52 md:h-w-52 md:bottom-[-20%] md:left-[-20%] 
          lg:left-0 lg:bottom-[-15%] lg:w-80 lg:h-80
        "
        >
          <Image
            src='/img/bulet-kiri.svg'
            alt='Bulet Kiri'
            fill
            sizes='100%'
            priority
          />
        </figure>

        <div className="
          flex flex-col gap-12 relative z-10
          sm:gap-4 sm:items-center sm:text-center
          md:gap-12
          lg:text-left lg:items-start
        "
        >
          <Paragraph className='
            text-gray-500
            sm:text-xl
            lg:text-2xl
          '
          >
            Rekadigi.id adalah perusahaan jasa di bidang Digital Marketing
          </Paragraph>

          <Heading className='
            text-black font-bold
            sm:text-4xl
            lg:text-7xl
          '
          >
          Mengutamakan <b className='text-figma-blue'>kepuasan</b> klien dan memandang pengembangan bisnis sebagai sarana kerjasama sosial
          </Heading>
          
          <div className='
            flex gap-12
            sm:flex-col sm:gap-4 sm:items-center sm:text-center sm:mt-8
            md:mt-0
            lg:gap-12 lg:flex-row lg:items-start lg:text-left
          '
          >
            <div className='
              flex-1 flex flex-col gap-4
              sm:items-center sm:text-center
              lg:items-start lg:text-left
            '
            >
              <Heading className='
                text-black
                sm:text-2xl
                lg:text-4xl
              '
              >
                Visi
              </Heading>

              <Paragraph className='
                text-xl text-gray-500
                sm:text-lg
                lg:text-xl
              '
              >
                Penyedia layanan Digital Marketing yang inovatif dan berkualitas tinggi
              </Paragraph>
            </div>

            <div className='
              flex-1 flex flex-col gap-4
              sm:items-center sm:text-center
              lg:items-start lg:text-left
            '
            >
              <Heading className='
                text-black
                sm:text-2xl
                lg:text-4xl
              '
              >
                Misi
              </Heading>

              <ul className='
                text-gray-500 flex flex-col
                sm:text-lg sm:gap-2 sm:items-center sm:text-center sm:list-none
                lg:text-2xl lg:gap-4 lg:items-start lg:text-left lg:list-disc
              '
              >
                {/* if misi */}
                {misi && misi.map((item, index) => (
                  <li key={index}>
                    <Paragraph className='
                      text-gray-500
                      sm:text-lg
                      lg:text-xl
                    '
                    >
                      {item}
                    </Paragraph>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className='
        relative py-20 min-h-screen bg-white bg-[url(/img/kotak-kanan.svg)] bg-no-repeat bg-right-bottom bg-contain
        sm:p-10 sm:min-h-[600px] sm:bg-right-top sm:bg-50%
        md:min-h-min
        lg:py-20 lg:min-h-screen lg:bg-auto
      '
      >
        <figure className='
          absolute z-[1]
          sm:w-80 sm:h-80 sm:bottom-[-10%] sm:left-[-10%]
          md:w-96 md:h-96
          lg:w-[1024px] lg:h-[1024px] lg:bottom-[-15%] lg:left-[-20%]
        '
        >
          <Image
            src='/img/kotak-kiri.svg'
            alt='Kotak Kiri'
            fill
            sizes='100%'
            priority
          />
        </figure>

        <div className='
          flex flex-col gap-24 relative z-10
          sm:gap-8 sm:items-center sm:text-center
          md:gap-12
        '
        >
          <div className='
            flex flex-col
            sm:gap-4 sm:px-0 sm:text-center
            md:gap-8
            lg:gap-12 lg:px-36 lg:text-left
          '
          >
            <Heading className='
              text-black font-bold
              sm:text-4xl
              lg:text-5xl
            '
            >
              Tim Kami 
            </Heading>

            <Paragraph className='
              text-gray-500 text-xl
              sm:text-lg
              lg:text-xl
            '
            >
              Perusahaan kami mengedepankan budaya kerja yang menjunjung tinggi kebebasan dalam berkreasi, saling toleransi dalam keragaman, keterbukaan berpendapat sehingga tercipta lingkungan kerja yang menyenangkan, fleksibel tetapi tujuan tetap tercapai.
            </Paragraph>
          </div>

          <Teams />
        </div>
      </section>

      {/* Services */}
      <section className='
        relative bg-figma-broken-white bg-[url(/img/bg-service.svg)] bg-contain bg-no-repeat bg-center
        sm:p-10 sm:min-h-[600px] sm:bg-no-repeat sm:bg-50%
        lg-min-h-screen lg:bg-contain lg:py-20 lg:px-36
      '
      >
        <div className='
          relative flex flex-col gap-24 z-10
          sm:gap-8 sm:items-center sm:text-center
          md:gap-12
          lg:items-start lg:text-left
        '
        >
          <div className='
            flex flex-col gap-6
            sm:gap-4 sm:mx-auto sm:text-center
            md:gap-8
            lg:gap-12 lg:text-left lg:mx-0
          '
          >
            <Heading className='
              text-black text-5xl font-bold
              sm:text-4xl
              lg:text-5xl
            '
            >
              Layanan Kami
            </Heading>

            <Paragraph className='
              text-gray-500 text-xl
              sm:text-lg
              lg:text-xl
            '
            >
              Kami hadir untuk menjadi mitra bisnis anda dengan menawarkan solusi kreatif dan inovatif dalam pengembangan IT dan pemasaran digital.
            </Paragraph>
          </div>

          <div className='
            flex flex-wrap justify-center items-stretch gap-8
            sm:gap-4 sm:mx-auto sm:text-center
            lg:gap-10 lg:mx-0 lg:text-left
          '
          >
            {/* if services */}
            {services && services.map((item, index) => (
              <Card
                key={index}
                icon={item.image}
                head={item.title}
                desc={item.description}
                className='bg-white'
              />
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className='
        relative bg-white
        sm:py-10
        lg:py-20
      '
      >
        <div className='
          flex flex-col gap-16
          sm:gap-8 sm:items-center sm:text-center
          md:gap-12
          lg:gap-16
        '
        >
          <Heading className='
            text-black text-5xl font-bold px-36 text-center
            sm:text-4xl sm:px-10
            lg:text-5xl lg:px-0
          '
          >
            Sudah dipercayai oleh
          </Heading>

          <Portfolios />
        </div>
      </section>

      {/* How We Work */}
      <section className='
        relative py-20 px-36 min-h-screen bg-[url(/img/bg-work.svg)] bg-center bg-no-repeat bg-cover flex items-center
        sm:p-10 sm:min-h-[600px] sm:bg-no-repeat
        lg:min-h-screen lg:bg-cover lg:py-20 lg:px-36
      '
      >
        <div className='
          flex gap-10
          sm:flex-col-reverse sm:gap-8 sm:items-center sm:text-center
          lg:flex-row lg:gap-16 lg:items-start lg:text-left
        '
        >
          <div className='
            flex-1 flex flex-col gap-10
            sm:gap-4 sm:mx-auto sm:text-center
            lg:gap-10 lg:mx-0 lg:text-left
          '
          >
            <Heading className='
              text-black text-5xl font-bold
              sm:text-4xl
              lg:text-5xl
            '
            >
              Bagaimana Kami Bekerja
            </Heading>

              <ol className='
                flex flex-col gap-10
                sm:gap-4
                lg:gap-10
              '
              >
                {/* if works */}
                {works && works.map((item, index) => (
                  
                    <li key={index} className='flex gap-10'>
                      <div className='
                        flex-none flex items-center justify-center bg-figma-blue w-14 h-14 rounded-full
                        sm:hidden
                        lg:flex
                      '
                      >
                        <Heading className='
                          text-white text-2xl
                          lg:text-3xl
                        '
                        >
                          {index + 1}
                        </Heading>
                      </div>

                      <Paragraph className='
                        text-gray-500 text-xl flex-initial
                        sm:text-lg
                        lg:text-xl
                      '
                      >
                        {item}
                      </Paragraph>
                    </li>
                  
                ))}
              </ol>
          </div>

          <div className='flex-1 flex items-center justify-center'>
            <figure className='
              relative w-[675px] h-[505px]
              sm:w-[250px] sm:h-[187px]
              lg:w-[675px] lg:h-[505px]
            '
            >
              <Image
                src='/img/img-work.svg'
                alt='How We Work'
                fill
                sizes='100%'
                priority
              />
            </figure>
          </div>
        </div>
      </section>

      {/* Career */}
      <section className='
        relative bg-white
        sm:p-10
        lg:py-20 lg:px-36
      '
      >
        <div className='
          flex justify-between
          sm:flex-col-reverse sm:gap-8 sm:items-center sm:text-center
          lg:flex-row lg:gap-16 lg:text-left
        '
        >
          <div className='flex-1'>
              <Heading className='
                text-black text-5xl font-bold
                sm:text-4xl
                lg:text-5xl
              '
              >
                Karir
              </Heading>

              <Paragraph className='
                text-gray-500 text-xl my-6
                sm:text-lg
                lg:text-xl
              '
              >
                Open position <b>Developer, Designer, and Internship </b>
              </Paragraph>

              <Button className='bg-figma-blue'>
                Gabung Sekarang
              </Button>
          </div>

          <div className='flex-1 flex items-center justify-center'>
            <figure className='
              relative 
              sm:w-[250px] sm:h-[187px]
              lg:w-[408px] lg:h-[369px]
            '
            >
              <Image
                src='/img/karir.svg'
                alt='Karir'
                fill
                sizes='100%'
              />
            </figure>
          </div>
        </div>
      </section>

      {/* Start Project */}
      <section className='
        relative bg-figma-broken-white
        sm:p-10
        lg:py-20 lg:px-36
      '
      >
        <div className='
          flex justify-between items-center
          sm:flex-col sm:gap-8 sm:items-center sm:text-center
          lg:flex-row lg:gap-16 lg:text-left
        '
        >
          <div className='flex-1 flex items-center justify-center'>
            <figure className='
              relative
              sm:w-[250px] sm:h-[187px]
              lg:w-[408px] lg:h-[369px]
            '
            >
              <Image
                src='/img/start-project.svg'
                alt='Start Project'
                fill
                sizes='100%'
              />
            </figure>
          </div>

          <div className='flex-1'>
              <Heading className='
                text-black text-5xl font-bold
                sm:text-4xl
                lg:text-5xl
              '
              >
                Mulai Projekmu
              </Heading>

              <Paragraph className='
                text-gray-500 text-xl my-6
                sm:text-lg
                lg:text-xl 
              '
              >
                Jelajahi beragam produk dan layanan yang lengkap, ungkapkan potensimu, dan mulailah petualangan baru.
              </Paragraph>
              
              <Button className='bg-figma-blue'>
                Mulai Projek
              </Button>
          </div>
        </div>
      </section>

      {/* Our Teams */}
      <section className='
        relative py-20 px-36 bg-white
        sm:p-10
        lg:py-20 lg:px-36
      '
      >
        <div className='
          flex flex-col gap-16
        '
        >
          <Heading className='
            text-black text-5xl font-bold text-center
            sm:text-4xl
            lg:text-5xl
          '
          >
            Perkenalkan Tim Kami
          </Heading>

          {/* create 3 columns of grid image */}
          <div className='
            grid grid-cols-3
            sm:grid-cols-1 sm:gap-8
            lg:grid-cols-3 lg:gap-0
          '
          >
            {/* if members */}
            {members && members.map((item, index) => (
              // make image black and white and when hover it will be colored. when image still loading, it will show blur image
              <div key={index} className='
                relative w-full h-[400px]
                sm:w-full sm:h-[200px]
                lg:w-full lg:h-[400px]
              '
              >
                <Image
                  src={item.img}
                  alt={`blur-${index}`}
                  fill
                  sizes='100%'
                  priority
                  className='w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500'
                  blurDataURL={item.blur}
                  placeholder='blur'
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className='
        relative py-20 px-36 bg-white bg-[url(/img/kotak-kiri.svg)] bg-left bg-no-repeat
        sm:p-10
        lg:py-20 lg:px-36
      '
      >
        <div className='
          flex gap-12 flex-wrap
        '
        >
          <div className='
            flex-1 flex flex-col gap-12
            sm:gap-6
            lg:gap-12
          '
          >
            <figure className='
              relative
              sm:w-16 sm:h-16
              lg:w-36 lg:h-36
            '
            >
              <Image
                src='/img/faq.png'
                alt='faq'
                fill
                sizes='100%'
              />
            </figure>

            <div className='
              flex flex-col gap-6
            '
            >
              <Heading className='
                text-black font-bold
                sm:text-4xl
                lg:text-5xl
              '
              >
              Frequently Asked Questions
              </Heading>

              <Paragraph className='
                text-gray-500
                sm:text-lg
                lg:text-xl
              '
              >
              Masih membutuhkan bantuan ? Hubungi Kami
              </Paragraph>
            </div>
          </div>

          <div className='
            flex-1 flex flex-col gap-6
            sm:gap-4
            lg:gap-6
          '
          >
            {/* if faqs */}
            {faqs && faqs.map((item, index) => (
              <div key={index} className='
                flex flex-col gap-6 bg-figma-gray p-8 rounded-3xl
                sm:p-4
                lg:p-8
              '
              >
                <Heading className='
                  text-black text-2xl font-bold
                  sm:text-xl
                  lg:text-2xl
                '
                >
                  {item.question}
                </Heading>

                <Paragraph className='
                  text-gray-500 text-xl
                  sm:text-lg
                  lg:text-xl
                '>
                  {item.answer}
                </Paragraph>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
