import dashboard from '../public/assets/image/dashboard.webp'

const Dashboard = () => {
    return (
        <div className="px-20 md:px-40 lg:px-40 flex flex-col lg:space-x-10 xl:space-x-32 pt-28 lg:pt-36 space-y-12 xl:flex-row justify-center items-center mb-12 lg:mb-16 xl:mb-20">
            <div className='space-y-7'>
                <div className='space-y-7 max-w-lg'>
                    <p className="font-bold text-4xl">Inversasi Sukses Marimas untuk Optimalkan Produksi dan Penuhi Tuntutan Pasar</p>
                    <p className='font-semibold text-xl'>Ketahui bagaimana Marimas memilih untuk menggunakan solusi HashMicro dan meraih keuntungan maksimal</p>
                </div>
                <div className='flex'>
                    <button className='py-2 px-[18px] sm:px-12 md:px-14 border-2 border-red-700 mr-5 bg-red-700 text-white font-bold rounded-lg hover:bg-white hover:text-black ease-out duration-300'>Coba Gratis</button>
                    <button className='py-2 px-[18px] sm:px-12 md:px-14 border-2 border-red-700 font-bold rounded-lg hover:bg-red-700 hover:text-white ease-out duration-300'>Coba Gratis</button>
                </div>
            </div>
            <img src={dashboard} alt="dashboard" className='sm:max-w-[400px] md:min-w-[300px] md:max-w-[500px]'/>
        </div>
    );
}

export default Dashboard