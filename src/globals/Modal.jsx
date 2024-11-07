import React from 'react'
import ReactPortal from './ReactPortal';
import { FaWindowClose } from "react-icons/fa";

function Modal({ children, isOpen, handleClose }) {
    if (!isOpen) return null;

  return (
    <ReactPortal wrapperId='react-portal-modal-container'>
            <div className='fixed inset-0 z-40 bg-black/80 w-screen h-screen flex flex-col justify-center 
                    items-center' onClick={(e) => {
                    //  handleClose()
                    e.stopPropagation()
            }} >
            <div className='bg-white w-11/12 md:w-2/5 flex flex-col items-center justify-center gap-5 z-50 p-5'>
                <div className='w-[90%] flex flex-row justify-end'>
                    <FaWindowClose onClick={handleClose} className='text-red-500 text-3xl cursor-pointer'/>
                    </div>
                <p className='p-4 bg-proj-yellow w-[90%] text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus labore error esse deleniti rem! Quibusdam facere officiis distinctio aliquam, est cumque repellat impedit eveniet suscipit ratione et aperiam minima excepturi.
                Sunt nihil deleniti quos harum! Unde quo pariatur illo placeat praesentium quod, a molestiae? Delectus adipisci ipsa molestias assumenda numquam amet quod beatae fuga similique. Autem, modi aliquid! Consequuntur, impedit.</p>
                <div className='border-2 h-72 border-proj-yellow w-[80%]'></div>
            </div>
            </div>
    </ReactPortal>
  )
}

export default Modal