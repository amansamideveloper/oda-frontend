import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { ArrowDownRightIcon, ArrowRightIcon, Bars3Icon, CheckCircleIcon, TicketIcon } from '@heroicons/react/24/solid'
export default function Home() {
  return (
    <div className=' p-5  '>
      <div className='shadow-md sticky top-0 bg-white'>
        <div className='flex justify-between drop-shadow-md'>
          <div className=''>
            <h1 className='text-2xl text-green-700 font-bold'>ODAA<span className='text-black'>bus</span></h1>
          </div>
          <div className='hidden'>
            <ul>
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Home</a>
              </li>
            </ul>
          </div>
          <div className=''>
            <button type=''>

              <Bars3Icon className='text-green-700 w-8 h-8' />
            </button>
          </div>
        </div>
      </div>
      <div className='mx-1 my-4'>
        <div className='flex justify-center'>
          <div className=''>
            <h1 className='text-xl font-bold text-slate-600'>ODAA Integrated Transport S.C</h1>
            <p className='text-slate-500 my-2 text-sm'>is a locally registered company whose primary purpose is benefiting a community of public shareholders from a private business it takes part in</p>

          </div>
          <div className='align-middle mt-10'>
            <img src='/img/oda.png' className='w-full h-fit' />
          </div>
        </div>
        <div className='flex justify-between my-5'>
          <button className='bg-green-400 px-2 py-1 font-bold text-white rounded-xl shadow-md'>
            Book now
          </button>
          <div className='flex justify-center  shadow-md px-2 text-slate-500 font-semibold'>
            <button className=''>
              See more
            </button>
            <ArrowRightIcon className='w-4 h-4 m-3' />
          </div>

        </div>
      </div>
      <div className='my-8'>
        <h1 className='flex justify-center text-xl   font-bold text-slate-600'>Our Services</h1>
        <h6 className='flex justify-center font-bold text-slate-400'>we have 3 main services</h6>
        <div className='py-2'>
          <div className=''>

            <h3 className='text-black text-xl py-2 flex font-semibold justify-center text-slate-600'>ODAA TRANSPORT</h3>
            <p className='text-slate-400 text-sm '>ODAA Transport has a vision of connecting the horn of Africa with a transport service that is uniquely known for its safety, comfort and reliability</p>
            <img src='img/oda2.png' />
          </div>
          <div className=''>

            <h3 className='text-slate-600 text-xl py-2 flex font-semibold justify-center'>ODAA ENERGY</h3>
            <p className='text-slate-400 text-sm '>ODAA Energy is primarily focused in the marketing and distribution of petroleum products.The portfolio of petroleum products include fuel, lubricants</p>
            <img src='/img/petrol.png' />
          </div>
          <div>

            <h3 className='text-slate-600  text-xl py-2 flex font-semibold justify-center'>ODAA Online</h3>
            <p className='text-slate-500'>For Online Bus Ticket Booking</p>
            <div className='bg-green-800 rounded-md text-white text-white text-2xl mt-4 py-5'>
              <h3 className='flex justify-center'>Telephone : 09-93-94-96-93</h3>

              <h2 className='flex justify-center font-bold'>Account number</h2>
              <h3 className='flex justify-center '>Coop : 82 25 09</h3>
              <h3 className='flex justify-center'>CBE : 1000 4716 56 766</h3>


            </div>
          </div>
        </div>
      </div>

      <div className='my-8 '>
        <div className=''>
          <h1 className='flex justify-center text-xl text-slate-700 '>News About our company</h1>
          <h6 className='flex justify-center text-slate-400'>recent news</h6>

        </div>
        <div className='my-4'>
          <h2 className='font-bold text-slate-500 mb-2'>Gurgurtaa Dabalataa Qooda Aksiyyoon</h2>
          <p className='text-slate-500'>Murtii yaa’ii waligalaa idilee 3ffaa darbee fi kallattii yaa’ii waliigalaa idilee 4ffaa irratti ka’aame bu’uura gudhachuun Waldaan Aksiyoona
            Geejjiba Qinda’aa ODAA abbootii aksiyoonaa hundaaaf qoodni aksiyoonaa dabalataan gatii ka’uumsaatiin akka gurguramu murteesee jira.</p>
        </div>
        <div className='my-4'>
          <h2 className='font-bold text-slate-500 mb-2'>W/A Geejiba Qindaa’a ODAA</h2>
          <p className='text-slate-500'>Waldaa Aksiyoona Geejiba Qindaa’a ODAA Waldaan Aksiyoona Geejjiba Qindaa’aa ODAA yaa’ii waliigalaa
            idilee..</p>
        </div>
        <div className='my-4'>
          <h2 className='font-bold text-slate-500 mb-2'>ኦዳ ኢንተግሬትድ ትራንስፖርት አ/ማ</h2>
          <p className='text-slate-500'>ኦዳ ኢንተግሬትድ አክሲዮን ማህበር ባካሄደው 3ኛ መደበኛ ጠቅላላ ጉባኤው የአክሲዮን ከፍያ ያላጠናቀቁ ባለአክሲዮኖች በሁለት ወር ጊዜ ውስጥ ከፍለው እንዲያጠናቅቁ ወስኗል..</p>
        </div>
        <div className='my-5 flex justify-between'>

          <div className='flex m-3 w-48 flex-none p-2 shadow-md font-semibold text-slate-600'>

            <button className='mr-3  font-semibold text-slate-500'>See more news</button>
            <ArrowRightIcon className='w-4 h-4 mt-6' />
          </div>
          <div className=' my-5  '>
            <h2 className='text-green-400 text-lg font-semibold'> call now</h2>
            <p className=' text-slate-500 text-sm'>09-93-94-96-93 </p>
          </div>

        </div>
      </div>

      <div className='my-8 flex justify-between bg-green-800 rounded-md p-4'>
        <div className=' '>
          <h1 className='text-white text-2xl'>OUR PHILOSOPHY</h1>

          <p className='text-slate-300 '>To provide high quality services supported by leading technology to our esteemed customers with competitive price, safety, security standards, wealth using highly motivated, competent employees & state of the art technology</p>
          <button className='text-white float-right bg-lime-500 mt-2 py-1 px-2 rounded-md drop-shadow-md'>See more</button>
          <div className='relative '>
            <div className='flex absolute my-4'>
              <div className='w-2 h-2 mx-1 bg-white rounded-full'></div>
              <div className='w-2 h-2 mx-1 bg-slate-300 rounded-full'></div>
              <div className='w-2 h-2 mx-1 bg-slate-300 rounded-full'></div>
              <div className='w-2 h-2 mx-1 bg-slate-300 rounded-full'></div>
            </div>
          </div>

        </div>
        <div className='py-20'>
          <img src='/img/oda5.png' className='w-96' />
        </div>
      </div>
      <div className='my-8'>
        <div className=''>
          <h1 className='flex justify-center text-black font-bold text-2xl'>Partners who work with us</h1>
          <h4 className='flex justify-center text-slate-400 text-base font-bold '> Follow inscrunction for more</h4>
        </div>
        <div className='my-5 '>
          <div className='flex justify-between'>
            <div className='w-32 mx-2 mt-2'>
              <img src='/img/cbe.png' className='' />
            </div>
            <div className='w-48 mx-2'>
              <img src='/img/awash.png' className='' />
            </div>
            <div className='w-48'>
              <img src='/img/coop.png' />
            </div>


          </div>
          <div className='flex my-5 justify-start '>

            <div className='w-24'>
              <img src='/img/o-international.png' />
            </div>
            <div className='w-24'>
              <img src='/img/mela.png' />
            </div>
          </div>

        </div>
      </div>
      <div className='mt-8'>
        <div className='flex justify-between bg-slate-100 rounded-lg px-2'>
          <div>
            <h1 className='text-2xl text-green-700 font-bold'>ODAA<span className='text-black'>bus</span></h1>
            <p className='text-sm text-slate-400'>Copy right 2022</p>
          </div>
          <div>
            <h1 className=' text-slate-600 font-bold text-lg flex justify-center'> location</h1>
            <p className='text-sm text-slate-500'>Oromia Tower 5th Floor, Addis Ababa, Ethiopia</p>
            <p className='text-sm text-slate-500'> 09-93-94-96-93</p>
          </div>
          <div>
            <h1 className=' text-slate-600 font-bold text-lg'>

              Helpful
            </h1>
            <p className='text-sm text-slate-500'>About us</p>
            <p className='text-sm text-slate-500'>Help</p>
            <p className='text-sm text-slate-500'>Service</p>
            <p className='text-sm text-slate-500'>Privacy</p>

          </div>


        </div>
      </div>
    </div>
  )
}
