import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";

const Demonav = () => {
  return (
    <div className="border-b border-neutral-900 pb-20" id="Contact">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
            <h2 className="my-10 text-center text-4xl">Get in Touch</h2>
            <div className="flex flex-col md:flex-row items-center md:space-x-12">
                <div className="flex-1">
                    <h3>Let's Talk</h3>
                    <p>I'm open to discussing web development projects or partnership opportunities</p>
                    <div className="mb-4 mt-8">
                        <FaEnvelope className="inline-block text-green-400 mr-2"></FaEnvelope>
                        <a href="mailto:murithikevin54@gmail.com" className="hover:underline">murithikevin54@gmail.com</a>
                    </div>
                    <div className="mb-4 mt-8">
                        <FaPhone className="inline-block text-green-400 mr-2"></FaPhone>
                        <span>+254712400421</span>
                    </div>
                    <div className="mb-4 mt-8">
                        <FaMapMarkedAlt className="inline-block text-green-400 mr-2"></FaMapMarkedAlt>
                        <span>Street, city, province, country</span>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Demonav;