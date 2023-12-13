import chatting from '../../public/assets/image/image-chatting.webp'

const Informasi = () => {
    return (
        <div className="bg-white flex flex-col lg:flex-row justify-center items-center px-12 md:px-32 lg:px-40 space-y-7 lg:space-y-0 py-8">
            <div className="space-y-5 max-w-[700px]">
                <p className="font-bold text-3xl md:text-4xl"> Butuh Informasi Lebih Banyak Tentang Software HashMicro?</p>
                <button className='flex rounded-lg bg-red-700 px-6 py-1 text-white font-bold items-center justify-center ease-out duration-300 border-2 border-red-700 hover:bg-white hover:text-red-700'> Diskusi Santai di Whatsapp</button>
            </div>
            <img src={chatting} alt="chatting" className='max-w-[350px] md:max-w-lg'/>
        </div>
    );
}

export default Informasi