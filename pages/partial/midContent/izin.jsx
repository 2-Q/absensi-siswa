const izin_icon = './images/izin.svg';
export default function Izin(){
    return(
        <div className="rounded-lg bg-white -mt-32 mb-7 px-12 pt-14 pb-12 shadow-lg text-center">
            {/* <img className="w-44 mx-auto" src={izin_icon} alt="homepage icon" /> */}
            <div className="my-12 my-style-before-after">
                <div  className="text-sm text-gray-500">Kesempatan izin tersisa:</div>
                <div className="text-6xl font-light text-gray-500">2 hari</div>
            </div>

            <div className="pt-6 pb-10">
                <div  className="text-sm text-gray-500">status:</div>
                <div className="text-3xl mb-1">Termohon Izin</div>
                <div className="text-gray-400">Jika anda memiliki keinginan untuk berhenti izin tidak masuk kerja silakan klik tombol stop di bawah ini</div>
            </div>

            <button className="bg-red-500 text-white font-semibold rounded py-4 px-14 mb-3">Stop</button>
        </div>
    )
}