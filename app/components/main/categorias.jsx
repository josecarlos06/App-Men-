const Categorias = () => {
  return (
    <section className='mt-5'>
         <h1 className='text-white text-3xl font-bold'>Categorias</h1>
         <div className="flex gap-2 flex-wrap mt-5">
         <button type='button' className='bg-zinc-700 text-white text-xl px-4 py-2 rounded'>
               Todas
            </button>
            <button type='button' className='bg-zinc-700 text-white text-xl px-4 py-2 rounded'>
               Sushi
            </button>
            <button type='button' className='bg-zinc-700 text-white text-xl px-4 py-2 rounded'>
               Bebidas
            </button>
         </div>
    </section>
  )
}

export default Categorias