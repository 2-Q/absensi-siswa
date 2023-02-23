import router from 'next/router';

import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Index(){
    return (
        <>
         {/* className="bg-gray-100" style={{minHeight: "70rem"}} */}
          <div>
            <div className="bg-three text-gray-300 mb-1">
                <div className="container mx-auto px-3 py-4 flex">
                    <button className="mr-3" onClick={()=>router.push("/")}><FontAwesomeIcon icon={faChevronLeft} /></button>
                    <div className=" text-xl font-semibold">Date</div>
                </div>
            </div>
            
            <div className="my-container mx-auto px-3">
                <div className="mb-5">
                    <div className="text-2xl mb-1 font-medium text-right">Juli 2021</div>
                    <div className="bg-gray-500 mb-5" style={{height:"400px"}}>tanggalan</div>
                </div>
                <div className="">
                    <label htmlFor="" className="font-medium">Catatan</label>
                    <textarea name="note" id="" rows="4" ></textarea>
                </div>
            </div>
          </div>
        </>)
}