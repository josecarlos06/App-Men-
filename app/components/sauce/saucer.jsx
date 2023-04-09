import { Link } from "@remix-run/react";

const Saucer = ({menu}) => {
   const {name, price, description, time,average,image,url} = menu;
   return (
      <div className="p-5 rounded-xl bg-zinc-800 items">

         <figure className="w-60 mx-auto -my-5">
            <img src={image.data.attributes.url} alt={name} className="h-60 mx-auto"/>
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

         <p className="text-white text mt-2 limit">{description}</p>

         <aside className="flex justify-between items-center text-3xl mt-4 text-white">
            <p className="font-black text-4xl">${price}.00</p>
            <Link to={`/menu/${url}`} className="bg-orange-500 border-2 border-orange-400 flex items-center rounded-full p-2">
               <i className='bx bx-plus'></i>
            </Link>
         </aside>

      </div>
   )
}

export default Saucer