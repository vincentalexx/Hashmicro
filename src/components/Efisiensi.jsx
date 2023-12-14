import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import section from '../../public/assets/image/bg-video-section.webp'
import { faCircleCheck, faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import Video from './Video'

const Efisiensi = () => {
    const [youtubeID] = useState('https://www.youtube.com/watch?v=7hquJzhRg6M&pp=ygUJaGFzaG1pY3Jv')

    let [isOpen, setisOpen] = useState(false)

    const closeModal = () => {
        setisOpen(false);
    }

    let video


    useEffect(() => {
        video = document.querySelector("#video");
    }, [])

    function open(){
        console.log(body)
        setisOpen(!isOpen);
        body.style.backgroundColor = "black";

    }
    
    return (
        <div className='bg-white h-64 sm:h-80 md:h-[410px] lg:h-[500px] xl:h-[680px] overflow-y-hidden w-full'>
            <div className='absolute w-full '  > 
                <div className='pt-24 sm:pt-36 md:pt-48 lg:pt-56 xl:pt-[290px] flex flex-col space-y-3 sm:space-y-8 cursor-pointer' onClick={() => setisOpen(!isOpen)}>
                    <div className='flex justify-center items-center'>
                        <FontAwesomeIcon icon={faCirclePlay} className=' text-white text-2xl box-border z-10 cursor-pointer text-[8vw]' id='change-text'/>
                        <img src={section} alt="section" className='absolute z-0'/>
                    </div>
                    <div className=' bg-black z-10 w-1/2 relative bg-opacity-70 flex justify-end'>
                        <p className='pl-5 md:pr-8 pr-5 z-10 md:text-lg lg:text-2xl xl:text-3xl text-left font-bold text-white text-sm py-2 max-w-[250px] md:max-w-[300px] lg:max-w-[400px] xl:max-w-[500px]'>Efisiensi Proses Bisnis Marimas Berkat HashMicro</p>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className='absolute -mt-1 sm:mt-14 md:mt-[141px] lg:mt-2 xl:mt-20 z-30 w-full h-1/3 md:h-1/4 lg:h-3/4 flex justify-center items-center cursor-pointer' id='video' onClick={() => setisOpen(!isOpen)}>
                    <Video />
                </div>
            )}
        </div>
    );
}

export default Efisiensi