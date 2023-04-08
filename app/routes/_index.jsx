import { Link } from "@remix-run/react";

export const meta = () => {
   return [{ title: "Bienvenido App" }];
};
export default function Index() {
   return (
      <header className="container w-11/12 mx-auto flex flex-col items-center text-center gap-8">
         <figure className="pt-8 pb-2">
            <img src="https://res.cloudinary.com/dcuzoddes/image/upload/v1680907391/jesse-ballantyne-9r5kHbw51fk-unsplash-removebg-preview_sxdo5w.png" alt="sushi" />
            
         </figure>
         <h1 className="text-white text-6xl font-black">Danshiri</h1>
         <p className="text-slate-300 text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, commodi
            illum quos tempora debitis eos?
         </p>
         <Link to="/menu"
            className="bg-orange-500 text-2xl text-white py-4 px-10 rounded flex items-center justify-center 
            gap-1 w-full transition-transform border-2 border-orange-300">
               Ordena ahora
            <i className='bx bx-chevron-right'></i>
         </Link>
      </header>
   );
}
