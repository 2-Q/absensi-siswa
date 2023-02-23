
import router from 'next/router';


export default function Start() {
    return (
        <div className="rounded-xlg bg-white -mt-32 mb-7 px-12 py-16 shadow-lg text-center">
            <div
                className="mx-auto"
                style={{
                    backgroundImage: `URL(images/homepage_icon.svg)`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '11rem',
                    height: '10rem'
                }}
            />
            <div className="pt-6 pb-10">
                <div className="text-sm text-gray-500">status:</div>
                <div className="text-3xl mb-1">Tidak diketahui</div>
                <div className="text-gray-400 w-80 mx-auto">Belum ada keterangan absen untuk saat ini. <br /> Silakan absen dulu</div>
            </div>
            <div className="flex flex-col text-white">
                <button className="my-btn-hadir py-4 mb-3" onClick={() => router.push("/absensi/hadir")}>Hadir</button>
                <button className="my-btn-dispen py-4 mb-3" onClick={() => router.push("/absensi/hadir")}>Dispen</button>
                <button className="my-btn-izin py-4 mb-3" onClick={() => router.push("/absensi/izin")}>Izin</button>
            </div>
        </div>
    )
}