
function Heading({text}) {
    return (
        <div className='mt-16 mb-6 flex items-center justify-between' >
            <hr className='w-2/12 h-1 bg-gray-500' />
            <h2 className='w-fit text-nowrap px-4 uppercase font-semibold'>{text}</h2>
            <hr className='w-7/12 h-1 bg-gray-500'/>
        </div>
    );
}

export default Heading;
