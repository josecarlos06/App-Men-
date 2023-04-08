const Search = () => {
   return (
      <section className="relative">
         <div className="mt-5 bg-zinc-800 py-14 rounded-xl relative overflow-hidden z-0">
            <aside className="text-center">
               <h2 className="text-2xl text-white"><span className="text-orange-300 font-black">%10</span> de descuento 🔥
                  <span className="block">En la compra de dos platillos.</span>
               </h2>
            </aside>
            <img src="./img/oferta.png" alt="" className="oferta"/>
         </div>
         <img src="./img/planta.png" alt="planta" className="planta"/>
      </section>
   )
}

export default Search