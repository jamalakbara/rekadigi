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
        relative h-screen bg-white bg-center bg-[url(/img/bg-hero.png)] flex items-center px-36 py-20
        sm:p-10 sm:bg-contain sm:bg-no-repeat sm:bg-center sm:h-[600px]
      "
      >
        <Heading className="
          text-black text-8xl font-bold max-w-[50%]
          sm:text-5xl sm:max-w-full sm:text-center
        "
        >
          Pengalaman Digital Lebih Baik Dengan <b className='text-figma-blue'>Rekadigi</b>
        </Heading>
      </section>

      {/* Visi Misi */}
      <section className="
        relative flex flex-col px-36 py-20 bg-figma-broken-white gap-12 bg-[url(/img/bulet-kanan.svg)] bg-right-top bg-no-repeat
        sm:p-10 sm:h-auto sm:bg-50%
      "
      >
        <figure className="
          w-80 h-80 absolute bottom-[-15%] left-0 z-[1]
          sm:w-40 sm:h-40 sm:bottom-[-10%] sm:left-[-10%]
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
        "
        >
          <Paragraph className='
            text-gray-500
            sm:text-xl
          '
          >
            Rekadigi.id adalah perusahaan jasa di bidang Digital Marketing
          </Paragraph>

          <Heading className='
            text-black text-7xl font-bold
            sm:text-4xl
          '
          >
          Mengutamakan <b className='text-figma-blue'>kepuasan</b> klien dan memandang pengembangan bisnis sebagai sarana kerjasama sosial
          </Heading>
          
          <div className='
            flex gap-12
            sm:flex-col sm:gap-4 sm:items-center sm:text-center sm:mt-8
          '
          >
            <div className='
              flex-1 flex flex-col gap-4
              sm:flex-1 sm:flex sm:flex-col sm:gap-4 sm:items-center sm:text-center
            '
            >
              <Heading className='
                text-black text-[32px]
                sm:text-2xl
              '
              >
                Visi
              </Heading>

              <Paragraph className='
                text-xl text-gray-500
                sm:text-lg
              '
              >
                Penyedia layanan Digital Marketing yang inovatif dan berkualitas tinggi
              </Paragraph>
            </div>

            <div className='
              flex-1 flex flex-col gap-4
              sm:flex-1 sm:flex sm:flex-col sm:gap-4 sm:items-center sm:text-center
            '
            >
              <Heading className='
                text-black text-[32px]
                sm:text-2xl
              '
              >
                Misi
              </Heading>

              <ul className='
                text-gray-500 flex flex-col gap-4 list-disc
                sm:text-lg sm:gap-2 sm:items-center sm:text-center sm:list-none
              '
              >
                {/* if misi */}
                {misi && misi.map((item, index) => (
                  <li key={index}>
                    <Paragraph className='
                      text-xl text-gray-500
                      sm:text-lg
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
      '
      >
        <figure className='
          w-[1024px] h-[1024px] absolute bottom-[-15%] left-[-20%] z-[1]
          sm:w-80 sm:h-80 sm:bottom-[-10%] sm:left-[-10%]
        '
        >
          <Image
            src='/img/kotak-kiri.svg'
            fill
            sizes='100%'
            priority
          />
        </figure>

        <div className='
          flex flex-col gap-24 relative z-10
          sm:gap-8 sm:items-center sm:text-center
        '
        >
          <div className='
            flex flex-col gap-6 px-36
            sm:gap-4 sm:px-0 sm:max-w-[80%] sm:mx-auto sm:text-center
          '
          >
            <Heading className='
              text-black text-5xl font-bold
              sm:text-4xl
            '
            >
              Tim Kami 
            </Heading>

            <Paragraph className='
              text-gray-500 text-xl
              sm:text-lg
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
        relative py-20 px-36 min-h-screen bg-figma-broken-white bg-[url(/img/bg-service.svg)] bg-contain bg-no-repeat bg-center
        sm:p-10 sm:min-h-[600px] sm:bg-no-repeat sm:bg-50%
      '
      >
        <div className='
          relative flex flex-col gap-24 z-10
          sm:gap-8 sm:items-center sm:text-center
        '
        >
          <div className='
            flex flex-col gap-6
            sm:gap-4 sm:mx-auto sm:text-center
          '
          >
            <Heading className='
              text-black text-5xl font-bold
              sm:text-4xl
            '
            >
              Layanan Kami
            </Heading>

            <Paragraph className='
              text-gray-500 text-xl
              sm:text-lg
            '
            >
              Kami hadir untuk menjadi mitra bisnis anda dengan menawarkan solusi kreatif dan inovatif dalam pengembangan IT dan pemasaran digital.
            </Paragraph>
          </div>

          <div className='
            flex flex-wrap justify-center items-stretch gap-8
            sm:gap-4 sm:mx-auto sm:text-center
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
        relative py-20 bg-white
        sm:py-10
      '
      >
        <div className='
          flex flex-col gap-16
          sm:gap-8 sm:items-center sm:text-center
        '
        >
          <Heading className='
            text-black text-5xl font-bold px-36 text-center
            sm:text-4xl sm:px-10
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
      '
      >
        <div className='
          flex gap-10
          sm:flex-col-reverse sm:gap-8 sm:items-center sm:text-center
        '
        >
          <div className='
            flex-1 flex flex-col gap-10
            sm:gap-4 sm:mx-auto sm:text-center
          '
          >
            <Heading className='
              text-black text-5xl font-bold
              sm:text-4xl
            '
            >
              Bagaimana Kami Bekerja
            </Heading>

              <ol className='
                flex flex-col gap-10
                sm:gap-4
              '
              >
                {/* if works */}
                {works && works.map((item, index) => (
                  
                    <li key={index} className='flex gap-10'>
                      <div className='
                        flex-none flex items-center justify-center bg-figma-blue w-14 h-14 rounded-full
                        sm:hidden
                      '
                      >
                        <Heading className='text-white text-2xl'>
                          {index + 1}
                        </Heading>
                      </div>

                      <Paragraph className='
                        text-gray-500 text-xl flex-initial
                        sm:text-lg
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
        relative py-20 px-36 bg-white
        sm:p-10
      '
      >
        <div className='
          flex justify-between items-center
          sm:flex-col-reverse sm:gap-8 sm:items-center sm:text-center
        '
        >
          <div className='flex-1'>
              <Heading className='
                text-black text-5xl font-bold
                sm:text-4xl
              '
              >
                Karir
              </Heading>

              <Paragraph className='
                text-gray-500 text-xl my-6
                sm:text-lg
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
              relative w-[408px] h-[369px]
              sm:w-[250px] sm:h-[187px]
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
        relative py-20 px-36 bg-figma-broken-white
        sm:p-10
      '
      >
        <div className='
          flex justify-between items-center
          sm:flex-col sm:gap-8 sm:items-center sm:text-center
        '
        >
          <div className='flex-1 flex items-center justify-center'>
            <figure className='
              relative w-[408px] h-[369px]
              sm:w-[250px] sm:h-[187px]
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
              '
              >
                Mulai Projekmu
              </Heading>

              <Paragraph className='
                text-gray-500 text-xl my-6
                sm:text-lg
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
      '
      >
        <div className='
          flex flex-col gap-16
        '
        >
          <Heading className='
            text-black text-5xl font-bold text-center
            sm:text-4xl
          '
          >
            Perkenalkan Tim Kami
          </Heading>

          {/* create 3 columns of grid image */}
          <div className='
            grid grid-cols-3
            sm:grid-cols-1 sm:gap-8
          '
          >
            {/* if members */}
            {members && members.map((item, index) => (
              // make image black and white and when hover it will be colored. when image still loading, it will show blur image
              <div key={index} className='
                relative w-full h-[400px]
                sm:w-full sm:h-[200px]
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
      '
      >
        <div className='
          flex gap-12 flex-wrap
        '
        >
          <div className='
            flex-1 flex flex-col gap-12
            sm:gap-6
          '
          >
            <figure className='
              relative w-36 h-36
              sm:w-16 sm:h-16
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
                text-black text-5xl font-bold
                sm:text-4xl
              '
              >
              Frequently Asked Questions
              </Heading>

              <Paragraph className='
                text-gray-500 text-xl
                sm:text-lg
              '
              >
              Masih membutuhkan bantuan ? Hubungi Kami
              </Paragraph>
            </div>
          </div>

          <div className='
            flex-1 flex flex-col gap-6
            sm:gap-4
          '
          >
            {/* if faqs */}
            {faqs && faqs.map((item, index) => (
              <div key={index} className='
                flex flex-col gap-6 bg-figma-gray p-8 rounded-3xl
                sm:p-4
              '
              >
                <Heading className='
                  text-black text-2xl font-bold
                  sm:text-xl
                '
                >
                  {item.question}
                </Heading>

                <Paragraph className='
                  text-gray-500 text-xl
                  sm:text-lg
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
