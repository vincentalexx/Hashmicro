import hashmicro from '../../public/assets/image/hashmicro-white.webp'

const Footer = () => {
    return (
        <div className="bg-[#464652] px-16 md:px-20 lg:px-24 py-12 text-white text-sm grid md:grid-cols-2 md:gap-x-28 lg:grid-cols-3 lg:gap-x-16 xl:grid-cols-4 gap-y-10 justify-center md:justify-normal">
            <div className='space-y-2'>
                <img src={hashmicro} alt="HashMicro" className='max-w-[200px]'/>
                <p className='max-w-[350px]'>HashMicro merupakan provider brand ERP ternama di Indonesia. Telah melayani berbagai industri dengan sistem yang di kustom sesuai kebutuhan dan harga paling terjangkau jika di bandingkan dengan brand ERP lainnya.</p>
            </div>
            <div className='space-y-2'>
                <p className='text-xl font-bold'>Perbandingan HashMicro</p>
                <div className='space-y-1 flex flex-col'>
                    <a href="#" className=''>HashMicro vs SAP</a>
                    <a href="#" className=''>HashMicro vs Oracle</a>
                    <a href="#" className=''>HashMicro vs Ms Dynamic</a>
                    <a href="#" className=''>HashMicro vs Sage</a>
                </div>
            </div>
            <div className='space-y-2 '>
                <p className='text-xl font-bold'>Rekomendasi Produk</p>
                <div className='space-y-1 flex flex-col'>
                    <a href="#" className=''>Supply Chain Management</a>
                    <a href="#" className=''>Hash Manufacturing Software</a>
                    <a href="#" className=''>Inventaris</a>
                    <a href="#" className=''>Sistem Akuntansi</a>
                </div>
            </div>
            <div className='space-y-2'>
                <p className='text-xl font-bold'>Hubungi Kami di</p>
                <div className='space-y-1 flex flex-col'>
                    <p>021 5099 6750</p>
                    <p>+62-812-2284-6776</p>
                    <p>hello@hashmicro.co.id</p>
                    <p>partnership@hashmicro.com</p>
                </div>
            </div>
        </div>
    );
}

export default Footer