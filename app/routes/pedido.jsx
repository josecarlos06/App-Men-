import { useOutletContext } from "@remix-run/react";
import { useEffect, useState } from "react";
import { ClientOnly } from "remix-utils";

const Pedido = () => {
   const [total, setTotal] = useState(0)
   const { shop,deleteProduct } = useOutletContext();

   useEffect(() => {
      const sumTotal = shop.reduce((total, souceState) => total + (souceState.price * souceState.cantidad), 0);
      setTotal(sumTotal);
   }, [shop]);
   const handleWhats = (e) =>{
      e.preventDefault();

      let productosParaWsp = shop.map(producto => ` - ${producto.name}, $${producto.price} `);
      const productosConFormatoAmigable = productosParaWsp.join('%0A%0A');
      console.log(productosConFormatoAmigable);
      let url = 
      `https://api.whatsapp.com/send?phone=+525539039231&text=Productos:%0A%0A${productosConFormatoAmigable}`;
      window.open(url)
  
   }
   return (
      <ClientOnly fallback={null}>
         {() => 
         <main className="flex flex-col container w-11/12 mx-auto gap-5 mt-5 mb-44">
            {shop.length === 0 ? 
               <p className="text-white text-5xl font-black text-center mt-5">No hay productos</p> 
               : (
                  shop?.map(tienda => (
                     <aside key={tienda.id} className="flex gap-6 items-center w-full bg-zinc-700 rounded p-5 relative">
                        <figure className="w-16 h-16 rounded overflow-hidden">
                           <img src={tienda.image} alt={tienda.name} className="object-cover w-full h-full"/>
                        </figure>
                        <div className="text-white text-xl flex flex-col gap-2 w-full">
                           <h2 className="font-black text-3xl">{tienda.name}</h2>
                           <p>Precio : ${tienda.price}</p>
                           <p>Cantidad : {tienda.cantidad}</p>
                           <p>Subtotal : ${tienda.price * tienda.cantidad}</p>
                        <button 
                           onClick={()=> deleteProduct(tienda.id) }
                           className=" bg-red-600 rounded text-white font-black p-2 w-auto">Eliminar</button>
                        </div>
                     </aside>
                  ))
               ) }
            <form
               onSubmit={handleWhats}
               className="fixed bottom-0 left-0 w-full mx-auto bg-zinc-800 text-white text-5xl font-black p-5">
               <h2 className="mb-5">Total : ${total}</h2>
               <button
                  type="submit"
                  className='w-full bg-orange-500 text-2xl text-white py-4 px-6 rounded flex items-center justify-center gap-1 transition-transform border-2 border-orange-300 font-black'>Enviar Orden</button>
            </form>
         </main>}
      </ClientOnly>
   )

}
export default Pedido