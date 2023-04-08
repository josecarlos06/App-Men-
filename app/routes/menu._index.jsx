import { Link } from "@remix-run/react"
import Navbar from "../components/header/navbar"
import Categorias from "../components/main/categorias"
import Search from "../components/main/search"

const Menu = () => {
   return (
      <>
         <header className="container w-11/12 mx-auto">
            <Navbar />
            <Search />
         </header>
         <main className="container w-11/12 mx-auto">
            <Categorias />
            <section className="mt-5 grid gap-10">
               <div className="p-5 rounded-xl bg-zinc-800 items">

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

                  <p className="text-white text py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, dolor.</p>

                  <aside className="flex justify-between items-center text-3xl mt-4 text-white">
                     <p className="font-black text-5xl">$30.00</p>
                     <Link to="/menu/torta" className="bg-orange-500 border-2 border-orange-400 flex items-center rounded-full p-2">
                        <i className='bx bx-plus'></i>
                     </Link>
                  </aside>
               </div>
            </section>
         </main>
      </>
   )
}

export default Menu