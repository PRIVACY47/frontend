
import {NavigationBar} from  './Navbar.js'

import {Footer} from "./Footer"

export const About = () => {
    return (
        <>
        <NavigationBar heading="About" />   
        <div className='container p-3 font-serif text-justify leading-loose mt-12' style={{color:"#585858"}} >
            <div >

                    <h3>AboutUS</h3>
                    <p>Establishment of the Entrepreneurship Cell began with an idea
                        of 3 students who were invited to the Global Entrepreneurship Summit 2014 
                        held at IIT Kharagpur and were inspired by the way India's prestigious institutions are supporting 
                        the overall development of engineering and management students across the country.</p>

            </div>

            <div className='md:flex md:flex-row  mt-5 font-light' >


                <div className=' flex-1 w-50 mr-5'>
                    <h3>Our Process</h3>
                    <p >Empowering, cultivating, and ultimately serving those who follow you will unlock massive
                         potential within your organization, allowing you to solve for problems in real time</p>

                         <h3>Our Vision</h3>
                         <p>"We wanted every student to think and act independently,
                             which is essential in this world with growing pace. So we thought 
                             why not start a cell like this in our college so that it'll help our future 
                             generations. We believe one should be free to explore one's fullest potential. 
                             We never know which great idea hides in whose mind, so we thought of creating a 
                             platform where students can speak their heart out. No idea is stupid. It was initially
                              very tough for us to erase the stigma and educate the students regarding entrepreneurship
                             as a career choice. Eventually, WE succeeded! " 
                             - says Kavya Amaresam, Founder, CEO, Entrepreneurship cell, KITS.</p>

                </div>

                <div className=' flex-1 w-50'>

                    <h3>Our Approach</h3>

                    <p>KITS E-CELL was emerged from the passion of students
                         who went to the GLOBAL ENTREPRENEURSHIP SUMMIT at IIT KHARAGPUR 
                         in 2015. They had come to know the real importance of ENTREPRENEURSHIP 
                         and strived hard for days together in creating the structure
                         and environment of the E-Cell. Eventually the cell emerged with its wings
                          flying on 4th April, 2014 with a vision and mission.</p>

                          <h3>

                          Our Mission
                          </h3>
                          <p>
                          To create the Entrepreneurial environment in 
                          the campus by organising the workshops, events 
                          and lectures and shape the creative thoughts of the 
                          students into real time PROTOTYPES
                          </p>
                </div>
            </div>

           </div>
        <Footer />
        </>
    );
}