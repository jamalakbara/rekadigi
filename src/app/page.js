import { misi } from './lib/data'
import Paragraph from './components/Paragraph/paragraph'
import Heading from './components/Heading/heading'
import Image from 'next/image'
import Teams from './components/Teams/teams'

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
            <div className='flex flex-col gap-4'>
              <Heading className='text-black text-[32px]'>
                Visi
              </Heading>

              <Paragraph className='text-xl text-gray-500'>
              Penyedia layanan Digital Marketing yang inovatif dan berkualitas tinggi
              </Paragraph>
            </div>

            <div className='flex flex-col gap-4'>
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
      <section className='relative py-20 min-h-screen bg-white bg-[url(/img/kotak-kanan.svg)] bg-no-repeat bg-right-bottom'>
        <figure className='w-[1024px] h-[1024px] absolute bottom-[-15%] left-0 z-[1]'>
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
    </>
  )
}
