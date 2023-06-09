import {
   Links,
   LiveReload,
   Meta,
   Outlet,
   Scripts,
} from "@remix-run/react";
import { useEffect } from "react";
import { useState } from "react";
import styleTailwind from "~/styles/app.css"

export function links() {
   return [
      {
         rel: "stylesheet",
         href: styleTailwind
      },
      {
         rel: "stylesheet",
         href: "https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
      }
   ]
}
export default function App() {
   // 👁
   const carritoLs = typeof window !== 'undefined' && JSON.parse(localStorage.getItem('shop')) || [];
   const [shop, setShop] = useState(carritoLs);
   const [product, setProduct] = useState(0);
   useEffect(()=>{
      localStorage.setItem('shop', JSON.stringify(shop));
      setProduct(shop.length);
   },[shop]);
   
   const carrito = (obj)=>{
      if(shop.some( souceState => souceState.id === obj.id)){
         const shopUpdate = shop.map( souceState => {
            if(souceState.id ===  obj.id){
               souceState.cantidad = obj.cantidad;
            }
            return souceState;
         })
         setShop(shopUpdate);
      }else{
         setShop([...shop, obj])
         setProduct(shop.length+1);
      }
   }
   const updateCantidad = ()=>{
      const shopUpdate = shop.map( souceState => {
         if(souceState.id ===  obj.id){
            souceState.cantidad = obj.cantidad;
         }
         return souceState;
      })
      setShop(shopUpdate);
   }

   const deleteProduct=(product)=>{
      const updateProduct = shop.filter(shopState => shopState.id !== product);
      setShop(updateProduct);
   }
   return (
      <Document>
         <Outlet
            context={{
               carrito,
               shop,
               product,
               updateCantidad,
               deleteProduct
            }}
         />
      </Document>
   )
}

function Document({ children }) {
   return (
      <html lang="es">
         <head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <Meta />
            <Links />
         </head>
         <body className="bg-zinc-900">
            {children}
            <Scripts />
            <LiveReload />
         </body>
      </html>
   );
}

export function CatchBoundary(){
   const error = useCatch();
   return(
      <Document>
         <p className='error'>{error.status} {error.statusText}</p>
      </Document>
   )
}

export function ErrorBoundary({error}){
   return(
      <Document>
         <p className='error'>{error.status} {error.statusText}</p>
      </Document>
   )
}
