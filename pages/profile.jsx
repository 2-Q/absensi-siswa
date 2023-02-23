import router from 'next/router';
import React, {useState} from 'react';

import { faUser,faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Index(){
const [show, setShow]=React.useState(false)

    return (
        <>
         {/* className="bg-gray-100" style={{minHeight: "70rem"}} */}
          <div className="bg-gray-100">
            <div className="bg-three text-gray-300 px-3 mb-3">
                <div className="container mx-auto flex justify-between py-4">
                    <div className="flex">
                        <button className="mr-2" onClick={()=>router.push("/")}><FontAwesomeIcon icon={faChevronLeft} /></button>
                        <div className=" text-xl font-semibold">Profile</div>
                    </div>
                    <div onClick={()=>setShow(!show)} onBlur={()=>setShow(false)}>
                    <FontAwesomeIcon icon={faUser} />
                        {show?<div className="absolute bg-red-500" >hello</div>:null}
                    </div>
                </div>
            </div>
            <div className="my-container mx-auto px-3">
                <div className="bg-white rounded px-4 py-7 mb-3">
                    <div className="flex flex-col items-center mb-4">
                        <div className="rounded-full bg-gray-100 mr-3 bg-gray-500" style={{height:"85px", width:"85px"}}></div>
                    </div>
                    <div className="border-b py-3">
                        <label className="font-bold">Nama</label>
                        <div className="">Dwiki I. P. M</div>
                    </div>
                    <div className="border-b py-3">
                        <label className="font-bold">NIP</label>
                        <div className="">09173887689998</div>
                    </div>
                    <div className="border-b py-3">
                        <label className="font-bold">Jabatan</label>
                        <div className="">Guru Mapel</div>
                    </div>
                    {/* <a href="" className="text-blue-500">ubah sandi</a>
                    <div className="flex justify-center mt-7 mb-5">
                        <button className="bg-red-500 text-white rounded py-2 px-5">LOGOUT</button>
                    </div> */}
                </div>
                <div className="bg-white rounded p-3">
                    <div className="bg-gray-500 mb-5" style={{height:"400px"}}>gafik</div>
                </div>
            </div>
              
          </div>
        </>)
}