import Link from "next/link"
export default function Footer(){
    return(
        <div>
        <footer>
<div className="grid grid-cols-1 grid-rows-1 bg-black w-full h-10">
    <div className="bg-black text-center text-white text-lg"><Link href="/contact us">contact us</Link></div>
</div>
<div className="bg-black text-center text-white text-lg">Made By Aliza Asad</div>
</footer>
</div>
)
    }