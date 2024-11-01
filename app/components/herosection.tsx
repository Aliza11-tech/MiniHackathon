import Link from "next/link"
export default function Herosection(){
    return(
        <div>
<div  className="bg-white w-full h-12 text-black text-center font-bold text-3xl py-2">Sell Your Car On Pak Wheels and Get the Best Price</div>
<div>
        <div className="grid grid-cols-7 grid-rows-5  h-44">
            <div className=" bg-white text-black "></div>
            <div className=" col-span-2 bg-white text-red-500 font-semibold">Post Your Ad on Pak wheels</div>
            <div className="row-span-4 text-center font-extrabold text-3xl bg-white text-blue-500 ">OR</div>
            <div className="col-span-2 bg-white font-semibold text-blue-500 ">Try Pak Wheel Sell it for Me</div>
            <div className=" bg-white text-blue-500"></div>
            <div className=" bg-white text-blue-500 "></div>
            <div className="col-span-2 bg-white text-blue-500 ">Post your Ad for Free in 3 easy steps</div>
            <div className=" col-span-2 bg-white text-blue-500">Dedicated Sells Experts to Sell your Car</div>
            <div className=" bg-white text-blue-500 "></div>
            <div className=" bg-white text-blue-500 "></div>
            <div className=" col-span-2 bg-white text-blue-500 ">Get Genuine Offers From Verified Buyers</div>
            <div className="col-span-2 bg-white text-blue-500">We Bargain for You and Share the Best Offer</div>
            <div className=" bg-white text-blue-500 "></div>
            <div className=" bg-white text-blue-500 "></div>
            <div className=" col-span-2 bg-white text-blue-500 ">Sell your car Fast at Best price</div>
            <div className="col-span-2 bg-white text-blue-500 ">We ensure Safe and Secure Transaction</div>
            <div className=" bg-white text-blue-500 "></div>
            <div className=" bg-white text-blue-500 "></div>
            <div className=" bg-white text-blue-500 "></div>
            <div className=" bg-white text-blue-500 "></div>
            <div className=" bg-white text-blue-500 "></div>
            <div className=" bg-white text-blue-500 "></div>
            <div className=" bg-white text-blue-500 "></div>
            <div className=" bg-white text-blue-500 "></div>
            <div className=" bg-white text-blue-500 "></div>
            <div className=" bg-white text-blue-500 "><Link href="/PostYourAd">
            <button className="bg-green-500 w-32 h-7 text-black text-center gap-8">Post an Ad</button>
            </Link></div>
            <div className=" bg-white text-blue-500 "></div>
            <div className=" bg-white text-blue-500 "></div>
            <div className=" bg-white text-blue-500 "></div>
            <div className=" bg-white text-blue-500 "><Link href="/registeryourcar">
            <button className="bg-green-500 w-32 h-7 text-black text-center">Click To Register</button>
            </Link></div>
            <div className=" bg-white text-blue-500 "></div>
            </div>
            
            {/* <Link href="/PostYourAd"><button className="bg-green-500 w-32 h-7 text-black text-center gap-8">Post an Ad</button></Link>
            <Link href="/registeryourcar"><button className="bg-green-500 w-32 h-7 text-black text-center">Click To Register</button></Link>
    */}
            
        <div className="grid grid-cols-7 grid-rows-5  h-28"></div>
            <div className=" bg-white text-black "></div>
    </div>
    </div>
    )
    }