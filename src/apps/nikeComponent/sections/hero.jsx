import Button from "../component/button"
import { arrowRight } from "../assets/icons"
import { statistics } from "../constants"
import { bigShoe1 } from "../assets/images"

function Hero() {
	return (
		<section id="home" className="remx-auto pt-10 min-h-screen flex max-lg:flex-wrap justify-center items-center gap-4">
			<div className="px-8">
				<h2 className="pb-4 text-xl text-red-600">
					Our Summer collections
				</h2>
				<h1 className="text-8xl font-bold">
					The New Arrival <br /> <span className="text-red-600 ">Nike</span> Shoes
				</h1>
				<p className="text-gray-600 text-lg py-8">
					Discover stylish Nike arrivals, quality comfort, and innovation for your active life.
				</p>
				<Button bgColor="bg-red-600" text="Shop Now" logo={arrowRight}/>
				<div className="flex flex-wrap mt-20 gap-16">
					{
					statistics.map((e) => (
						<div key={e.label}>
							<span className="text-4xl font-bold">{e.value}</span><br/>
							<span className="block text-gray-600 text-center">{e.label}</span>
						</div>
					))
					}
				</div>
			</div>
			{/* <div className="max:flex-1 min-h-screen bg-slate-600 flex justify-center items-center"> */}
			<div className="lg:-translate-y-28 lg:h-screen flex items-center -z-10 bg-gray-500 bg-opacity-30">
				<img src={bigShoe1} alt="Shoe Image" width={600} height={500} className="object-contain******" />
			</div>
		</section>
	)
}

export default Hero