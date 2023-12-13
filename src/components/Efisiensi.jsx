import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import section from '../../public/assets/image/bg-video-section.webp'
import { faCircleCheck, faCirclePlay } from '@fortawesome/free-solid-svg-icons';

const Efisiensi = () => {
    return (
        <div className='bg-white'>
            <div className='pt-24 sm:pt-36 md:pt-48 lg:pt-56 xl:pt-[290px] flex flex-col justify-normal'>
                <div className='flex justify-center items-center'>
                    <FontAwesomeIcon icon={faCirclePlay} className=' text-white text-2xl absolute box-border z-10 cursor-pointer text-[8vw]' id='change-text'/>
                    <img src={section} alt="section" className='absolute z-0'/>
                </div>
                <div className='bg-black z-10'>
                    <p className='absolute z-10 text-left'>Efisiensi Proses Bisnis Marimas Berkat HashMicro</p>
                </div>
            </div>
        </div>
    );
}

export default Efisiensi