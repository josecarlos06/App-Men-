import { onlyData } from '../services/api.server';
import { useLoaderData, useOutletContext } from '@remix-run/react';
import { useState } from 'react';
import Navbar from "~/components/header/navbar";

export const loader = async ({ params }) => {
   const data = await onlyData(params.name);
   return data;
}

const Information = () => {
   const data = useLoaderData();
   const { carrito, product } = useOutletContext();
   const [alerta, setAlerta] = useState(false);
   const [cantidad, setCantidad] = useState(1);
   const { name, price, description, time, average, image } = data.data[0].attributes;
   const addShop = e => {
      e.preventDefault();
      const obj = {
         name,
         price,
         time,
         cantidad,
         id: data.data[0].id,
         image: image.data.attributes.url
      }
      carrito(obj);
      setAlerta(true);
      setTimeout(() => {
         setAlerta(false);
      }, 3000);
   }

   return (
      <>
         <Navbar
            product={product}
         />
         <p className={`${alerta ? 'active' : ''} show bg-green-500 p-2 text-xl text-white font-black rounded`}>Producto Agregado</p>
         <form className="container w-11/12 mx-auto mb-5 mt-20" onSubmit={addShop}>
            <figure className="">
               <img src={image.data.attributes.url} alt={name} className="h-64 object-cover w-full" />
            </figure>
            <h2 className="text-white font-black text-4xl mt-4">{name}</h2>
            <aside className="flex justify-between text-2xl mt-4 text-gray-300">
               <span className="flex items-center gap-1">
                  <i className='bx bx-time text-white'></i>
                  {time}
               </span>
               <span className="flex items-center gap-1">
                  <i className='bx bxs-star text-yellow-500'></i>
                  {average}
               </span>
            </aside>

            <p className="text-white text py-4">{description}</p>
            <header className='flex items-center justify-between'>
               <p className="text-4xl text-white font-black">${price * cantidad}.00 </p>
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
            </header>
            <button
               type="submit"
               className='w-full bg-orange-500 text-2xl text-white py-4 px-6 rounded flex items-center justify-center gap-1 transition-transform border-2 border-orange-300 font-black'>Agregar al carrito</button>
         </form>
      </>
   )
}

export default Information