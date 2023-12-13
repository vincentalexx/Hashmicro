import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import contact from '../public/assets/image/WhatsApp.webp'

const Solusi = () => {
    return (
        <div className="bg-white flex flex-col justify-center items-center px-7 py-14 space-y-7">
            <div className="max-w-[800px] flex justify-center items-center px-7">
                <p className="text-3xl md:text-4xl text-center font-bold">Perubahan yang Dirasakan Marimas Melalui Implementasi Sistem HashMicro</p>
            </div>
            <div className="">
                <ul className="flex bg-gray-200 rounded-3xl text-gray-400 font-semibold text-sm md:text-base py-1">
                    <li className="round-xl py-2 px-3 md:px-8 lg:px-10 cursor-pointer hover:bg-white border-2  rounded-3xl ease-out duration-300">
                        <p>Manufaktur</p>
                    </li>
                    <li className="round-xl py-2 px-3 md:px-8 lg:px-10 cursor-pointer hover:bg-white border-2  rounded-3xl ease-out duration-300">
                        <p>Supply Chain</p>
                    </li>
                    <li className="round-xl py-2 px-3 md:px-8 lg:px-10 cursor-pointer hover:bg-white border-2  rounded-3xl ease-out duration-300">
                        <p>Inventaris</p>
                    </li>
                    <li className="round-xl py-2 px-3 md:px-8 lg:px-10 cursor-pointer hover:bg-white border-2  rounded-3xl ease-out duration-300">
                        <p>Akuntansi</p>
                    </li>
                </ul>
            </div>
            <div className="flex flex-col xl:flex-row space-y-5 xl:space-y-0 xl:space-x-5">
                <div className="max-w-[400px] border-gray-400 border-2 rounded-2xl p-9 pr-7 space-y-4">
                    <p className='text-xl font-semibold'>Masalah</p>
                    <p>Kesulitan dalam memantau persediaan stok sehingga terjadi overstock & understock hingga risiko kehilangan barang.</p>
                </div>
                <div className="max-w-[400px] border-green-600 bg-emerald-200 border-2 rounded-2xl p-9 pr-7 space-y-4">
                    <div className='flex space-x-2 items-center'>
                        <FontAwesomeIcon icon={faCircleCheck} className='text-green-600 text-2xl' />
                        <p className='text-xl font-semibold'>Solusi</p>
                    </div>
                    <p>Implementasi Software Inventaris yang mampu memonitor pergerakan stok otomatis dengan integrasi barcode scanning, hingga reminder saat ketersediaan barang hampir habis.</p>
                </div>
            </div>
            <div className='flex flex-col xl:flex-row justify-center items-center xl:space-x-7 border-2 border-red-700 rounded-xl text-center py-4 px-6'>
                <p>Masih belum menemukan solusi terbaik untuk memudahkan proses bisnis Anda? 
                </p>
                <button className='flex font-base rounded-lg bg-red-700 px-6 py-1 text-white items-center justify-center ease-out duration-300 border-2 border-red-700 hover:bg-white hover:text-red-700 max-w-[200px]'> <img src={contact} alt='contact' className='w-6 mr-2'/> Konsultasi Gratis</button>
            </div>
        </div>
    );
}

export default Solusi