import { Link } from "@remix-run/react";

const Navbar = ({product}) => {
   return (
      <nav className="flex justify-between items-center py-3 text-2xl text-white fixed top-0 z-20 w-full right-0 px-5 bg-zinc-800 shadow-lg shadow-neutral-400/10">
         <Link to="/menu" className="font-black flex items-center gap-2">Danshiri 
            <span>
               <img src="./../img/sushi.png" alt="sushi" className="w-10"/>
            </span>
         </Link>
         <Link to="/pedido" className="flex items-center gap-1">
            <i className='bx bx-cart'></i>
            <span className="text-white font-black bg-orange-500 text-xl px-2 rounded-full">{product}</span>
         </Link>
      </nav>
   )
}

export default Navbar