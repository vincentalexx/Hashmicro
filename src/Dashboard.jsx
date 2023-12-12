import dashboard from '../public/assets/image/dashboard.webp'

const Dashboard = () => {
    return (
        <div className="px-20 lg:grid lg:grid-cols-2 pt-28 space-y-7">
            <div className='space-y-7'>
                <div className='space-y-7'>
                    <p className="font-bold text-4xl">Inversasi Sukses Marimas untuk Optimalkan Produksi dan Penuhi Tuntutan Pasar</p>
                    <p className='font-semibold text-xl'>Ketahui bagaimana Marimas memilih untuk menggunakan solusi HashMicro dan meraih keuntungan maksimal</p>
                </div>
                <div className='flex justify-between'>
                    <button className='py-2 px-5 sm:px-24 bg-red-700 text-white font-bold rounded-lg'>Coba Gratis</button>
                    <button className='py-2 px-5 sm:px-24 border-2 border-red-700  font-bold rounded-lg'>Coba Gratis</button>
                </div>
            </div>
            <img src={dashboard} alt="dashboard" className='' style={{width: "500px"}}/>
        </div>
    );
}

export default Dashboard