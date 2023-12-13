import section from '../public/assets/image/section2.webp'

const Fitur = () => {
    return (
        <div className="bg-white px-20 py-10 md:px-40 lg:px-20 xl:px-64 flex justify-center items-center">
            <div className="bg-[#191c27] flex flex-col lg:flex-row justify-center items-center px-16 rounded-3xl pt-5 xl:space-x-8 space-y-10 xl:space-y-0">
                <div className="flex flex-col xl:flex-row space-y-10 justify-center items-center lg:space-y-0 lg:space-x-10 pb-5 pt-14">
                    <div className="space-y-7 max-w-[500px]">
                        <p className="font-bold text-white text-xl md:text-2xl lg:text-[27px]">Marimas sukses mengefisiensikan proses bisnis bersama HashMicro, sekarang giliran Anda!</p>
                        <p className="text-white">Ketahui semua fitur esensial Hashmicro untuk dorong pertumbuhan bisnis anda secara efisien dan efektif.</p>
                        <button className='py-2 px-5 text-white border-2 border-white font-bold rounded-lg hover:bg-white hover:brightness-70 hover:text-[#191c27] ease-out duration-300'>Coba Gratis</button>
                    </div>
                </div>
                <img src={section} alt="section" className='sm:min-w-[300px] sm:max-w-[400px] xl:max-w-[400px]'/>

            </div>
        </div>
    );
}

export default Fitur