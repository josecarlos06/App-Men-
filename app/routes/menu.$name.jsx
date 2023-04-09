import { onlyData } from '../services/api.server'
import { useLoaderData, useOutletContext } from '@remix-run/react';
import Navbar from "~/components/header/navbar"
import Contador from '~/components/sauce/contador';

export const loader = async ({ params }) => {
   const data = await onlyData(params.name);
   return data
}

const Information = () => {
   const data = useLoaderData();
   const { carrito,product, cantidad, setCantidad } = useOutletContext();
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
   }

   return (
      <>
         <Navbar
               product = {product}
         />
         <form className="container w-11/12 mx-auto mb-5 mt-20" onSubmit={addShop}>
            <figure className="w-60 mx-auto -my-5">
               <img src={image.data.attributes.url} alt={name} className="h-60 mx-auto" />
            </figure>
            <h2 className="text-white font-black text-center text-4xl mt-4">{name}</h2>
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
            <p className="text-4xl mt-4 text-white font-black">${price * cantidad}.00 </p>
            <Contador
               cantidad = {cantidad}
               setCantidad = {setCantidad}
            />
         <button
            type="submit"
            className='w-full bg-orange-500 text-2xl text-white py-4 px-6 rounded flex items-center justify-center gap-1 transition-transform border-2 border-orange-300 font-black'>Agregar al carrito</button>
      </form>
   </>
)
}

export default Information