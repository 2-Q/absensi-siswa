import Start from "../components/midContent/start";
import Hadir from "../components/midContent/hadir";
import Izin from "../components/midContent/izin";
import { useRouter } from 'next/router';

import { faUser, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



export default function Index() {
    const router = useRouter()
    var status = router.query.status

    return (
        <>
            {/* className="bg-gray-100" style={{minHeight: "70rem"}} */}

            <div className="bg-gray-100">
                <div className="bg-three text-gray-300 pb-32">
                    <div className="container mx-auto flex justify-between px-3 py-4">
                        <div className=" text-xl font-semibold">Home</div>
                        <div className="flex ">
                            <button className="ml-3" onClick={() => router.push("/date")}><FontAwesomeIcon icon={faCalendarAlt} /></button>
                            <button className="ml-3" onClick={() => router.push("/profile")}><FontAwesomeIcon icon={faUser} /></button>
                        </div>
                    </div>
                </div>

                <div className="mx-auto px-3 my-container">

                    {(() => {
                        switch (status) {
                            case "hadir":
                                return (
                                    <Hadir />
                                )
                            case "izin":
                                return (
                                    <Izin />
                                )

                            default:
                                return (
                                    <Start />
                                )
                        }
                    })()}


                    <div className="text-xl mb-2 font-semibold">Catatan Hari Ini:</div>
                    <div className="pb-7">
                        <textarea className="w-full shadow-lg px-3 py-2" placeholder="Tulis Catatn di sini ya..." name="note" id="" rows="10"></textarea>
                    </div>

                    <div className="mb-2 text-xl font-semibold">Peraturan</div>
                    <ul className="pb-7">
                        <li className="py-1 px-4" style={{ listStyle: "inside" }}>Wajib Mengisi daftar hadir setiap hari kerja</li>
                        <li className="py-1 px-4" style={{ listStyle: "inside" }}>pengisian absensi tepat waktu</li>
                        <li className="py-1 px-4" style={{ listStyle: "inside" }}>izin tidak masuk hanya di perbolehkan 5 hari dalam satu bulan</li>
                    </ul>
                </div>
            </div>
        </>)
}