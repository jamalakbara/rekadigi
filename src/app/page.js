import { misi, services, works, members } from './lib/data'
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

      <section className="relative h-screen bg-white bg-center bg-[url(/img/bg-hero.png)] flex items-center px-36 py-20">
        <Heading className='text-black text-8xl font-bold max-w-[50%]'>
          Pengalaman Digital Lebih Baik Dengan <b className='text-figma-blue'>Rekadigi</b>
        </Heading>
      </section>

      {/* Visi Misi */}
      <section className='relative flex flex-col px-36 py-20 bg-figma-broken-white gap-12 bg-[url(/img/bulet-kanan.svg)] bg-right-top bg-no-repeat'>
        <figure className='w-80 h-80 absolute bottom-[-15%] left-0 z-[1]'>
          <Image
            src='/img/bulet-kiri.svg'
            fill
            sizes='100%'
            priority
          />
        </figure>

        <div className='flex flex-col gap-12 relative z-10'>
          <Paragraph className='text-gray-500'>
          Rekadigi.id adalah perusahaan jasa di bidang Digital Marketing
          </Paragraph>

          <Heading className='text-black text-7xl font-bold'>
          Mengutamakan <b className='text-figma-blue'>kepuasan</b> klien dan memandang pengembangan bisnis sebagai sarana kerjasama sosial
          </Heading>
          
          <div className='flex gap-12'>
            <div className='flex-1 flex flex-col gap-4'>
              <Heading className='text-black text-[32px]'>
                Visi
              </Heading>

              <Paragraph className='text-xl text-gray-500'>
              Penyedia layanan Digital Marketing yang inovatif dan berkualitas tinggi
              </Paragraph>
            </div>

            <div className='flex-1 flex flex-col gap-4'>
              <Heading className='text-black text-[32px]'>
                Misi
              </Heading>

              <ul className='text-gray-500 flex flex-col gap-4 list-disc'>
                {/* if misi */}
                {misi && misi.map((item, index) => (
                  <li key={index}>
                    <Paragraph className='text-xl text-gray-500'>
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
      <section className='relative py-20 min-h-screen bg-white bg-[url(/img/kotak-kanan.svg)] bg-no-repeat bg-right-bottom bg-contain'>
        <figure className='w-[1024px] h-[1024px] absolute bottom-[-15%] left-[-20%] z-[1]'>
          <Image
            src='/img/kotak-kiri.svg'
            fill
            sizes='100%'
            priority
          />
        </figure>

        <div className='flex flex-col gap-24 relative z-10'>
          <div className='flex flex-col gap-6 px-36'>
            <Heading className='text-black text-5xl font-bold'>
            Tim Kami 
            </Heading>

            <Paragraph className='text-gray-500 text-xl'>
            Perusahaan kami mengedepankan budaya kerja yang menjunjung tinggi kebebasan dalam berkreasi, saling toleransi dalam keragaman, keterbukaan berpendapat sehingga tercipta lingkungan kerja yang menyenangkan, fleksibel tetapi tujuan tetap tercapai.
            </Paragraph>
          </div>

          <Teams />
        </div>
      </section>

      {/* Services */}
      <section className='relative py-20 px-36 min-h-screen bg-figma-broken-white bg-[url(/img/bg-service.svg)] bg-contain bg-no-repeat bg-center'>
        <div className='flex flex-col gap-24'>
          <div className='flex flex-col gap-6'>
            <Heading className='text-black text-5xl font-bold'>
              Layanan Kami
            </Heading>

            <Paragraph className='text-gray-500 text-xl'>
            Kami hadir untuk menjadi mitra bisnis anda dengan menawarkan solusi kreatif dan inovatif dalam pengembangan IT dan pemasaran digital.
            </Paragraph>
          </div>

          <div className='flex flex-wrap justify-center items-stretch gap-8'>
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
      <section className='relative py-20 bg-white'>
        <div className='flex flex-col gap-16'>
          <Heading className='text-black text-5xl font-bold px-36 text-center'>
            Sudah dipercayai oleh
          </Heading>

          <Portfolios />
        </div>
      </section>

      {/* How We Work */}
      <section className='relative py-20 px-36 min-h-screen bg-[url(/img/bg-work.svg)] bg-center bg-no-repeat bg-cover flex items-center'>
        <div className='flex gap-10'>
          <div className='flex-1 flex flex-col gap-10'>
            <Heading className='text-black text-5xl font-bold'>
              Bagaimana Kami Bekerja
            </Heading>

            <div className='flex flex-col gap-10'>
              {/* if works */}
              {works && works.map((item, index) => (
                <ol key={index} className='flex flex-col gap-10'>
                  <li className='flex gap-10'>
                    <div className='flex-none flex items-center justify-center bg-figma-blue w-14 h-14 rounded-full'>
                      <Heading className='text-white text-2xl'>
                        {index + 1}
                      </Heading>
                    </div>

                    <Paragraph className='text-gray-500 text-xl flex-initial'>
                      {item}
                    </Paragraph>
                  </li>
                </ol>
              ))}
            </div>
          </div>

          <div className='flex-1 flex items-center justify-center'>
            <figure className='relative w-[675px] h-[505px]'>
              <Image
                src='/img/img-work.svg'
                fill
                sizes='100%'
                priority
              />
            </figure>
          </div>
        </div>
      </section>

      {/* Career */}
      <section className='relative py-20 px-36 bg-white'>
        <div className='flex justify-between items-center'>
          <div className='flex-1'>
              <Heading className='text-black text-5xl font-bold'>
                Karir
              </Heading>

              <Paragraph className='text-gray-500 text-xl my-6'>
                Open position <b>Developer, Designer, and Internship </b>
              </Paragraph>

              <Button className='bg-figma-blue'>
                Gabung Sekarang
              </Button>
          </div>

          <div className='flex-1 flex items-center justify-center'>
            <figure className='relative w-[408px] h-[369px]'>
              <Image
                src='/img/karir.svg'
                fill
                sizes='100%'
                priority
              />
            </figure>
          </div>
        </div>
      </section>

      {/* Start Project */}
      <section className='relative py-20 px-36 bg-figma-broken-white'>
        <div className='flex justify-between items-center'>
          <div className='flex-1 flex items-center justify-center'>
            <figure className='relative w-[408px] h-[369px]'>
              <Image
                src='/img/start-project.svg'
                fill
                sizes='100%'
                priority
              />
            </figure>
          </div>

          <div className='flex-1'>
              <Heading className='text-black text-5xl font-bold'>
              Mulai Projekmu
              </Heading>

              <Paragraph className='text-gray-500 text-xl my-6'>
              Jelajahi beragam produk dan layanan yang lengkap, ungkapkan potensimu, dan mulailah petualangan baru.
              </Paragraph>
              
              <Button className='bg-figma-blue'>
              Mulai Projek
              </Button>
          </div>
        </div>
      </section>

      {/* Our Teams */}
      <section className='relative py-20 px-36 bg-white'>
        {/* create 3 columns of grid image */}
        <div className='grid grid-cols-3'>
          {/* if members */}
          {members && members.map((item, index) => (
            // make image black and white and when hover it will be colored
            <div key={index} className='relative w-full h-[400px]'>
              <Image
                src={item.img}
                alt={`member-${index}`}
                fill
                sizes='100%'
                className='w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500'
              />
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
