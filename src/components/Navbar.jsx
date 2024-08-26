
const Navbar = () => {
  return (
    <div className="mb-20 text-white px-8 md:px-16 lg:px-24" >
        <div className="container py-2 flex flex-wrap justify-center md:justify-between items-center">
            <div className="text-2xl font-bold hidden md:inline">Kevin</div>
            <div className="space-x-6">
                <a href="#Home" className="hover:text-gray-400">Home</a>
                <a href="#About" className="hover:text-gray-400">About Me</a>
                <a href="#Services" className="hover:text-gray-400">Services</a>
                <a href="#Projects" className="hover:text-gray-400">Projects</a>
                <a href="#Contact" className="hover:text-gray-400">Contact</a>
            </div>
            <button className="bg-gradient-to-r from-blue-700  to-purple-900 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">Connect Me</button>
        </div>
    </div>
  )
};

export default Navbar;