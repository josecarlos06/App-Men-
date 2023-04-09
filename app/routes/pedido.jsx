import { useOutletContext } from "@remix-run/react";
import { useEffect, useState } from "react";
import { ClientOnly } from "remix-utils";

const Pedido = () => {
   const [total, setTotal] = useState(0)
   const { shop } = useOutletContext();

   useEffect(() => {
      const sumTotal = shop.reduce((total, souceState) => total + (souceState.price * souceState.cantidad), 0);
      setTotal(sumTotal);
   }, [shop]);

   return (
      <ClientOnly fallback={"cargando"}>
         {() => (
            <main className="flex flex-col container w-11/12 mx-auto gap-5 mt-5 overflow-y-auto max-h-96">
               {shop?.map(tienda => (
                  <aside key={tienda.id} className="flex gap-6 items-center bg-zinc-700 rounded p-5">
                     <figure>
                        <img src={tienda.image} alt={tienda.name} className="w-22 h-32" />
                     </figure>
                     <div className="text-white text-xl flex flex-col gap-2">
                        <h2 className="font-black text-3xl">{tienda.name}</h2>
                        <p>Precio : ${tienda.price}</p>
                        <p>Cantidad : {tienda.cantidad}</p>
                        <p>Subtotal : ${tienda.price * tienda.cantidad}</p>
                     </div>
                  </aside>
               ))}
               <div className="text-white p-5 font-black text-5xl fixed bottom-0 rigth-0 left-0 w-full mx-auto bg-zinc-800">
                  <h2 className="mb-5">total : ${total}</h2>
                  <button
                     type="submit"
                     className='w-full bg-orange-500 text-2xl text-white py-4 px-6 rounded flex items-center justify-center gap-1 transition-transform border-2 border-orange-300 font-black'>Enviar Orden</button>
               </div>
            </main>
         )}
      </ClientOnly>
   )
}

export default Pedido
