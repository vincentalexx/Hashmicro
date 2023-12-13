import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import contact from '../../public/assets/image/WhatsApp.webp'
import { useState } from 'react';

const Solusi = () => {
    let [isOpen, setisOpen] = useState(false)

    const closeModal = () => {
        setisOpen(false);
    }

    // const changeText = document.querySelector("#change-text");

    // changeText.addEventListener("click", function() {
    //     changeText.textContent = "Text has been changed!";
    // });

    const textComp1 = [
        "Kesulitan dalam memantau persediaan stok sehingga terjadi overstock & understock hingga risiko kehilangan barang.",
        "Nor is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but occasionally circumstances occur in which toil and pain can procure him some great pleasure.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam.",
        "Ut aliquet tristique nisl vitae volutpat. Nulla aliquet porttitor venenatis. Donec a dui et dui fringilla consectetur id nec massa. Aliquam erat volutpat. Sed ut dui ut lacus dictum fermentum vel tincidunt neque. ",
    ]
    
    const titleComp1 = ['Masalah', 'Masalah', 'Masalah', 'Masalah']
    
    const textComp2 = [
        "Implementasi Software Inventaris yang mampu memonitor pergerakan stok otomatis dengan integrasi barcode scanning, hingga reminder saat ketersediaan barang hampir habis.",
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus rerum sit repellat esse deserunt quaerat dolorem consectetur repudiandae ex adipisci, eligendi est ipsa, nulla alias non harum. Accusantium, beatae culpa.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
    ]
    
    const titleComp2 = ['Solusi', 'Solusi', 'Solusi','Solusi']

    var selection = document.getElementsByClassName("select")

    console.log(selection.length)

    var text1 = textComp1[0]
    var text2 = textComp2[0]
    var title1 = titleComp1[0]
    var title2 = titleComp2[0]

    function open(id){
        for(var i = 0; i < selection.length; i++){
            if(i === id){
                selection[i].classList.add("bg-red-700")
                selection[i].classList.remove("text-gray-400")
                selection[i].classList.add("text-white")
            }
            else{
                selection[i].classList.remove("bg-red-700")
                selection[i].classList.add("text-gray-400")
                selection[i].classList.remove("text-white")
            }
        }
    }

    

    return (
        <div className="bg-white flex flex-col justify-center items-center px-7 py-14 space-y-7">
            <div className="max-w-[800px] flex justify-center items-center px-7">
                <p className="text-3xl md:text-4xl text-center font-bold">Perubahan yang Dirasakan Marimas Melalui Implementasi Sistem HashMicro</p>
            </div>
            <div className="">
                <ul className="flex bg-gray-200 rounded-3xl  font-semibold text-sm md:text-base py-1">
                    <li className="select round-xl py-2 px-3 md:px-8 lg:px-10 cursor-pointer hover:bg-white border-2  rounded-3xl ease-out duration-300 text-gray-400 hover:text-black" id='0' onClick={() => open(0)}>
                        <p>Manufaktur</p>
                    </li>
                    <li className="select round-xl py-2 px-3 md:px-8 lg:px-10 cursor-pointer hover:bg-white border-2  rounded-3xl ease-out duration-300 text-gray-400 hover:text-black" id='1' onClick={() => open(1)}>
                        <p>Supply Chain</p>
                    </li>
                    <li className="select round-xl py-2 px-3 md:px-8 lg:px-10 cursor-pointer  hover:bg-white border-2  rounded-3xl ease-out duration-300 text-gray-400 hover:text-black" id='2' onClick={() => open(2)}>
                        <p>Inventaris</p>
                    </li>
                    <li className="select round-xl py-2 px-3 md:px-8 lg:px-10 cursor-pointer hover:bg-white border-2  rounded-3xl ease-out duration-300 text-gray-400 hover:text-black" id='3' onClick={() => open(3)}>
                        <p>Akuntansi</p>
                    </li>
                </ul>
            </div>
            <div className="flex flex-col xl:flex-row space-y-5 xl:space-y-0 xl:space-x-5">
                <div className="max-w-[400px] border-gray-400 border-2 rounded-2xl p-9 pr-7 space-y-4">
                    <p className='text-xl font-semibold'>{title1} </p>
                    <p>{text1} </p>
                </div>
                <div className="max-w-[400px] border-green-600 bg-emerald-200 border-2 rounded-2xl p-9 pr-7 space-y-4">
                    <div className='flex space-x-2 items-center'>
                        <FontAwesomeIcon icon={faCircleCheck} className=' text-green-600 text-2xl' id='change-text'/>
                        <p className='text-xl font-semibold '>{title2} </p>
                    </div>
                    <p>{text2} </p>
                </div>
            </div>
            <div className='flex flex-col xl:flex-row justify-center items-center xl:space-x-7 border-2 border-red-700 rounded-xl text-center py-4 px-6 space-y-2 xl:space-y-0'>
                <p>Masih belum menemukan solusi terbaik untuk memudahkan proses bisnis Anda? 
                </p>
                <button className='flex font-base rounded-lg bg-red-700 px-6 py-1 text-white items-center justify-center ease-out duration-300 border-2 border-red-700 hover:bg-white hover:text-red-700 max-w-[200px]'> <img src={contact} alt='contact' className='w-6 mr-2'/> Konsultasi Gratis</button>
            </div>
        </div>
    );
}

export default Solusi