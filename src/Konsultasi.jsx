import contact from '../public/assets/image/WhatsApp.webp'

const Konsultasi = () => {
    return (
        <div className='bg-white'>
            <div className=" bg-[#445464] px-20 flex flex-col justify-center items-center">
                <div className="pt-5 pb-7 xl:py-5 flex flex-col justify-center space-y-3 xl:flex-row xl:space-x-10 xl:space-y-0 items-center">
                    <p className="text-white text-lg text-center">Gabung dengan 1750+ klien yang telah mentransformasi bisnisnya dengan solusi ERP</p>
                    <button className='flex font-base rounded-lg bg-white px-6 py-1 items-center justify-center ease-out duration-300 border-2 hover:bg-[#445464] hover:text-white'> <img src={contact} alt='contact' className='w-6 mr-2'/> Konsultasi Gratis</button>
                </div>
            </div>
        </div>
    );
}

export default Konsultasi