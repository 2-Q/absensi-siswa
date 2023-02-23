import router from 'next/router';

import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function izinPage(){
    return (<>
        
        <div>
            <div className="bg-three text-gray-300">
                <div className="container mx-auto flex justify-start px-3 py-4">
                    <button onClick={()=>router.push("/")}><FontAwesomeIcon icon={faChevronLeft} /></button>
                    <div className="text-xl font-semibold ml-3">Izin</div>
                </div>
            </div>

            <div className="mx-auto my-container p-3">
                <div className="text-xl mb-2 font-semibold">Form Izin</div>
                <div className="bg-white p-3">
                    <form action="" className="flex flex-col">
                        <div className="mb-3">
                            <label className="font-medium" htmlFor="">Jenis:</label>
                            <select name="" id="">
                                <option value="">Sakit</option>
                                <option value="">Kepentingan Lain</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label className="font-medium" htmlFor="">Sejak Hari ini Hingga:</label>
                            <input type="date" />
                        </div>
                        <div className="mb-3">
                            <label className="font-medium" htmlFor="">Bukti Terkait:</label>
                            <input type="file" />
                        </div>
                        <div className="mb-3">
                            <label className="font-medium" htmlFor="">Keterangan:</label>
                            <textarea name="" id="" rows="4"></textarea>
                        </div>
                        <button className="my-btn-submit py-2 text-white mb-3">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </>)
}