import { Link } from "@remix-run/react";

const Navbar = () => {
   return (
      <nav className="flex justify-between items-end py-5 text-2xl text-white">
         <Link to="/menu" className="font-black flex items-center gap-2">Danshiri 
            <span>
               <img src="./img/sushi.png" alt="sushi" className="w-10"/>
            </span>
         </Link>
         <Link to="/pedido" className="relative">
            <i className='bx bx-cart'></i>
         </Link>
      </nav>
   )
}

export default Navbar