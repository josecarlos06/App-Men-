import {
   Links,
   LiveReload,
   Meta,
   Outlet,
   Scripts,
   ScrollRestoration,
} from "@remix-run/react";
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
   return (
      <Document>
         <Outlet />
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
