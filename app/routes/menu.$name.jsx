import { Link } from '@remix-run/react'
import { useState } from 'react'
const Platillo = () => {
   const [cantidad, setCantidad] = useState(1);
   const addShop = ()=>{
      console.log("Agregado");
   }
   return (
      <main className="container w-11/12 mx-auto my-10">

         <figure className="w-60 mx-auto -my-5">
            <img src="https://res.cloudinary.com/dcuzoddes/image/upload/v1680926897/emmanuel-zua-eDG8gsiqkyI-unsplash-removebg-preview_izzf5e.png" alt="sushi" />
            <img src="" alt="" />
         </figure>

         <h2 className="text-white font-black text-center text-4xl mt-4">Onigiri</h2>

         <aside className="flex justify-between text-2xl mt-4 text-gray-300">
            <span className="flex items-center gap-1">
               <i className='bx bx-time text-white'></i>
               20 min
            </span>
            <span className="flex items-center gap-1"><i className='bx bxs-star text-yellow-500'></i>4.5</span>
         </aside>

         <p className="text-white text py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, dolor. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae labore quisquam architecto voluptas quod nemo dolore. Facere facilis corrupti aut.</p>

         <nav className='flex flex-col mt-5 gap-4'>
            <p className="text-5xl mt-4 text-white font-black">${30 * cantidad}.00</p>
            <ul className='inline-flex items-center justify-center text-white text-5xl bg-zinc-800 p-3 rounded'>
               <li
                  onClick={() => cantidad < 15 && setCantidad(cantidad + 1)}
                  className='flex items-center bg-zinc-900 px-2 rounded border-2 border-gray-100'>
                  <i className='bx bx-plus'></i>
               </li>
               <li className='px-2 pointer'> {cantidad} </li>
               <li
                  onClick={() => cantidad > 1 && setCantidad(cantidad - 1)}
                  className='bg-zinc-900 px-5  text-5xl rounded border-2 border-gray-100'> −
               </li>
            </ul>
            <button 
               onClick = {()=> addShop()}
               type="button"
               className='w-full bg-orange-500 text-2xl text-white py-4 px-6 rounded flex items-center justify-center gap-1 transition-transform border-2 border-orange-300 font-black'>Agregar al carrito</button>
         </nav>
      </main>
   )
}

export default Platillo