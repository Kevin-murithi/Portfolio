import { MyServices } from "../constants"

const Services = () => {
  return (
    <div className="mb-20 flex justify-center flex-col items-center border-b border-neutral-900 pb-24" id="Services">
        <h2 className="my-20 text-center text-4xl">My Services</h2>
        <div className="w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" >
                {MyServices.map(service =>(
                    <div key={service.id} className="bg-gray-900 px-4 pb-6 rounded-lg hover:shadow-lg transform transition-transfrom duration-300 hover:scale-105">
                        <div className="text-right text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700  to-purple-900">
                            {service.id}
                        </div>
                        <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700  to-purple-900">
                            {service.title}
                        </h3>
                        <p className="mt-2 text-gray-300">
                            {service.description}
                        </p>
                        <a href="#" className="">Read More</a>
                    </div>
                ))}
            </div>
        </div>
    </div>



  )
}

export default Services