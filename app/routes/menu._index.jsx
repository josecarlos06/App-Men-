import {useLoaderData, useOutletContext } from "@remix-run/react"
import { getData } from "~/services/api.server"
import Navbar from "~/components/header/navbar"
import Categories from "~/components/main/categories"
import Search from "~/components/main/search"
import { useState,useEffect} from "react"
import Saucer from "~/components/sauce/saucer"

export const loader = async () => {
   const data = await getData();
   return data.data
}
const Menu = () => {
   const data = useLoaderData();
   const {product} = useOutletContext();
   const [category, setCategory] = useState('');
   const [filter, setFilter] = useState([]);
   useEffect(()=>{
      if(category){
         const newFilter = data.filter( platillo => platillo.attributes.category === category);
         setFilter(newFilter)
      }else{
         setFilter(data)
      }
   },[category]);

      return (
      <>
         <header className="container w-11/12 mx-auto">
            <Navbar
               product = {product}
            />
            <Search />
         </header>
         <main className="container w-11/12 mx-auto">
            <Categories 
               setCategory = {setCategory}
               category = {category}
            />
            <section className="grid gap-10 mt-10">
               {filter?.length === 0 ? <p className="text-white font-black text-3xl text-center">No hay elementos a mostrar</p> : (
                  filter?.map(menu => (
                     <Saucer
                        key={menu.id}
                        menu={menu.attributes}
                        
                     />
                  )))
               }
            </section>
         </main>
      </>
   )
}

export default Menu