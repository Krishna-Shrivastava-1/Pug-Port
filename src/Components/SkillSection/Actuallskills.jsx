import React from 'react'
import george from "../../assets/georg.png";
const Actuallskills = () => {
    const icondata = [{ image: 'https://pluspng.com/img-png/firebase-logo-png-firebase-google-icon-512x512.png', title: 'Firebase', id: 1, percent: 30 , para:'A backend-as-a-service platform for building web and mobile apps with authentication, database, and hosting features.' },
    { id: 2, image: 'https://code.visualstudio.com/assets/images/code-stable.png', title: 'Visual Studio Code', percent: 100 , para:' A lightweight and powerful code editor for multiple programming languages with extensions support.' },
    { id: 3, image: 'https://icons.veryicon.com/png/o/business/vscode-program-item-icon/react-3.png', title: 'React js', percent: 60 , para:'A JavaScript library for building dynamic user interfaces using reusable components.' },
    { id: 4, image: 'https://cdn-icons-png.flaticon.com/512/1532/1532556.png', title: 'HTML', percent: 100 ,para:'The standard markup language used for creating the structure of web pages.' },
    { id: 5, image: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/css-icon.png', title: 'CSS', percent: 100 , para:'A stylesheet language used for designing and styling web page layouts.' },
    { id: 6, image: 'https://static.vecteezy.com/system/resources/previews/027/127/463/original/javascript-logo-javascript-icon-transparent-free-png.png', title: 'Javacscript', percent: 75 , para:'A programming language for creating interactive and dynamic web content.' },
    { id: 7, image: 'https://cdn-icons-png.flaticon.com/512/4492/4492311.png', title: 'SQL', percent: 100 ,para:'A language used to manage and query relational databases efficiently.' },
    { id: 8, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png?20230715030042', title: 'Tailwind css', percent: 100 ,para:'A utility-first CSS framework for quickly styling web applications with predefined classes.' },
    { id: 9, image: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/267_Python_logo-1024.png', title: 'Python', percent: 47 ,para:' A versatile programming language known for simplicity and wide-ranging applications.' },
    { id: 10, image: 'https://seeklogo.com/images/G/greensock-gsap-icon-logo-13BB451E88-seeklogo.com.png', title: 'GSAP', percent: 24 ,para:'A powerful JavaScript library for creating high-performance animations on the web.' },
    ]
    return (
        <div>
            <div className='flex items-center justify-center relative h-[50vh]' >
                <img className="h-full w-full object-fill  fgt" src={george} alt="Background" />
                <div className='absolute top-0 w-full'>
                    <div className='flex items-center justify-center ' >
                        <div className='w-[75%]  flex items-center p-2 flex-col' >
                            <h3 className='text-white font-bold text-xl bg-[#00000080] w-full p-2' >Krishna Shrivastava's :Skill Crate</h3>
                            <div className='w-full flex items-center flex-wrap md:grid grid-cols-3 gap-1 border p-2 overflow-y-auto scro   max-h-56'>

                                {
                                    icondata.map(({ id, image, title, percent ,para }) => (
                                        <div key={id} className='flex items-center justify-center  group   ' >

                                            <div className='flex items-center justify-center px-4 py-4  w-full relative'  >
                                                <div className='bg-[#be9221]  left-0  skibo  p-2 absolute bottom-0     w-full  z-0 h-full ' style={{ width: `${percent}%` }}  >


                                                </div>
                                                <img className='w-16 h-16 m-2 z-10' src={image} alt="" />
                                             
                                                  <p className='text-white font-bold  z-10' >{title} <p className='text-sm font-medium' >{para}</p> </p>
                                          
                                                
                                               
                                            </div>

                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Actuallskills
