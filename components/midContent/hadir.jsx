
export default function Hadir() {
    return (
        <div className="rounded-lg bg-white -mt-32 mb-7 px-12 pt-14 pb-12 shadow-lg text-center">
            <div className="my-12 my-style-before-after">
                <div className="text-sm text-gray-500">Durasi kerja:</div>
                <div className="text-6xl font-light text-gray-700 my-bg-decoration">00:20:20</div>
            </div>

            <div className="pt-6 pb-10">
                <div className="text-sm text-gray-500">status:</div>
                <div className="text-3xl mb-1">Sedang di Kantor</div>
                <div className="text-gray-400 w-80 mx-auto">Belum ada keterangan absen untuk saat ini. <br /> Silakan absen dulu</div>
            </div>

            <div className="flex justify-evenly text-white">
                <button className="my-btn-dispen py-4 px-14 mb-3">Dispen</button>
                <button className="my-btn-hadir py-4 px-14 mb-3">Pulang</button>
            </div>
        </div>
    )
}