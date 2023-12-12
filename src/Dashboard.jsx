import dashboard from '../public/assets/image/dashboard.webp'

const Dashboard = () => {
    return (
        <div className="px-5 col-md-2">
            <div>
                <h2 className="font-weight-bold">Inversasi Sukses Marimas untuk Optimalkan Produksi dan Penuhi Tuntutan Pasar</h2>
                <h5>Ketahui bagaimana Marimas memilih untuk menggunakan solusi HashMicro dan meraih keuntungan maksimal</h5>
            </div>
            <img src={dashboard} alt="dashboard" className='' style={{width: "500px"}}/>
        </div>
    );
}

export default Dashboard