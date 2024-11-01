import Image from "next/image"
import Link from "next/link"
export default function Featurednewcars(){
    return(
        <div>
            <h1 className="text-black text-center font-extrabold text-4xl py-2">FEATURED NEW CARS</h1>
            <div className="flex gap-4">
            <div className="w-1/4 bg-white h-52 text-black text-center">
            <Link href="/toyota">
            <Image
src="/images/toyota.png"
 alt="car image"
 height={900}
 width={900}
 className="h-32 w-[500px]" />
            </Link>
            <h4 className="text-blue-800 font-bold py-2">TOYOTA COROLLA</h4>
            <h4  className="text-green-500 py-0">PKR 59.7-75.5 LAC</h4>
            </div>
            <div className="w-1/4 bg-white h-52 text-black text-center">
            <Link href="/alto">
            <Image
src="/images/alto.png"
 alt="car image"
 height={900}
 width={900}
 className="h-32 w-[500px]" />
            </Link>
            <p className="text-blue-800 font-bold py-2">SUZUKI ALTO NEW</p>
            <p className="text-green-500 py-0">PKR 23.5-35.5 LAC</p></div>
            <div className="w-1/4 bg-white h-52 text-black text-center"><Link href="/mehran">
            <Image
src="/images/mehran1.png"
 alt="car image"
 height={900}
 width={900}
 className="h-32 w-[500px]" />
            </Link>
            <h4 className="text-blue-800 font-bold py-2">HONDA MEHRAN</h4> 
            <h4 className="text-green-500 py-0">8.5-11.5 LAC</h4></div>
            <div className="w-1/4 bg-white h-52 text-black text-center"><Link href="/coure">
            <Image
src="/images/coure.png"
 alt="car image"
 height={900}
 width={900}
 className="h-32 w-[500px]" />
            </Link>
            <h4 className="text-blue-800 font-bold py-2">SUZUKI COURE</h4>
            <h4 className="text-green-500 py-0">20-30 LAC</h4></div>    
            </div>
               </div>
    )
}