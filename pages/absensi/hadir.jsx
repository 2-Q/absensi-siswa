import router from 'next/router';

import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function HadirPage(){
    return (<>
        
        <div className="bg-gray-100">
            <div className="bg-three text-gray-300">
                <div className="container mx-auto flex justify-start px-3 py-4">
                    <button onClick={()=>router.push("/")}><FontAwesomeIcon icon={faChevronLeft} /></button>
                    <div className="text-xl font-semibold ml-3">Lokasi</div>
                </div>
            </div>

            <div className="mx-auto my-container">
                <div className="bg-gray-500 w-full" style={{height: "800px"}}>this maps</div>
                <form action="" className="px-3 flex flex-col -mt-14">
                    <button className="my-btn-submit py-2 rounded text-white">Absen</button>
                </form>
            </div>
        </div>
    </>)
}