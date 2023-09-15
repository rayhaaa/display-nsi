'use client'
 
// export default function ExampleClientComponent() {
//   const pathname = usePathname()
//   pathname.explode('/') 
//   pathname.pop()
//   pathname.toString()
//   pathname.replace(/,/g, "/")

//   let string = document.getElementById("url").innerHTML
//   let res = string.replace(/blue/g, "red")
//   document.getElementById(url).innerHTML = res;
//   console.log(pathname)
//   return (
//     <>
//     <div>

//         <div id='url'> .http://192.168.10.75:3003/api/history-downtime</div>
//     </div>
//     </>
//   )
// }

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useRouter } from 'next/router'
 
export function Navigation({ navLinks }) {
  const pathname = usePathname()
  pathname.explode('/') 
  pathname.pop()
  pathname.toString()
  pathname.replace(/,/g, "/")

  return (
    <>
      {navLinks.map((link) => {
        const isActive = pathname === link.href
        return (
          <Link
            className={isActive ? 'text-blue' : 'text-black'}
            href={pathname}
            key={link.name}
          >
            {link.name}
          </Link>
        )
      })}
    </>
  )
}