const Categories = ({ setCategory, category}) => {
   return (
      <section className='mt-5'>
         <h1 className='text-white text-3xl font-bold'>Categorias</h1>
         <div className="flex gap-2 flex-wrap mt-5">
            <button 
               onClick={ e => setCategory("")}
               type='button' className={`${category === '' ? 'border-2 border-white' : ''} bg-zinc-700 text-white text-xl px-4 py-2 rounded`}>
               Todas
            </button>
            <button 
               onClick={ e => setCategory("sushi")}
               type='button' className={`${category === 'sushi' ? 'border-2 border-white' : ''} bg-zinc-700 text-white text-xl px-4 py-2 rounded`}>
               Sushi
            </button>
            <button 
               onClick={ e => setCategory("bebidas")}
               type='button' className={`${category === 'bebidas' ? 'border-2 border-white' : ''} bg-zinc-700 text-white text-xl px-4 py-2 rounded`}>
               Bebidas
            </button>
         </div>
      </section>
   )
}

export default Categories