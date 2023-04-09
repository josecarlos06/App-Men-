const Contador = ({setCantidad, cantidad}) => {
   return (
      <nav className='flex justify-between my-5 gap-4 flex-wrap'>
         <div className='inline-flex items-center text-5xl justify-center text-white bg-zinc-800 p-3 rounded gap-3'>
            <button
               type='button'
               onClick={() => cantidad > 1 && setCantidad(cantidad - 1)}
               className='bg-zinc-900 rounded border-2 border-gray-100 px-2'> &ndash;
            </button>
            <p className='text-3xl font-black'> {cantidad} </p>
            <button
               type='button'
               onClick={() => cantidad < 9 && setCantidad(cantidad + 1)}
               className=' bg-zinc-900 rounded border-2 border-gray-100 px-2'>
               +
            </button>
         </div>
      </nav>
   )
}

export default Contador