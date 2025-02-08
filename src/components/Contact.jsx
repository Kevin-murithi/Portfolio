import { FaInstagram, FaLinkedin, FaGithub, FaXTwitter, FaEnvelope } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20 h-full" id="Contact">
      <h2 className="my-10 text-center text-4xl font-semibold">Get in Touch</h2>

      <div className="flex flex-col md:flex-row w-full px-10 h-full justify-evenly items-center">
        {/* Contact Info */}
        {/* Contact Info Card */}
        <div className="flex flex-col items-center md:items-start p-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 shadow-lg rounded-2xl w-80 text-white">
          <h3 className="text-2xl font-semibold mb-2">Lets Connect</h3>
          <p className="text-neutral-300">Feel free to reach out to me!</p>

          {/* Email Section */}
          <div className="mt-4 flex items-center space-x-3 bg-neutral-800 px-4 py-2 rounded-lg shadow-md transition-transform hover:scale-105">
            <FaEnvelope size={22} className="text-blue-400" />
            <p className="text-neutral-200">murithikevin54@gmail.com</p>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 justify-center md:justify-start mt-6">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:scale-110 transition-transform shadow-lg">
              <FaInstagram size={28} className="text-pink-600 hover:text-pink-700" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:scale-110 transition-transform shadow-lg">
            <FaXTwitter size={28} className="text-black hover:text-gray-800" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:scale-110 transition-transform shadow-lg">
            <FaLinkedin size={28} className="text-blue-700 hover:text-blue-800" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-black rounded-full hover:scale-110 transition-transform shadow-lg">
            <FaGithub size={28} className="text-white hover:text-gray-900" />
            </a>
            <a href="mailto:murithikevin54@gmail.com" className="p-2 hover:scale-110 transition-transform">
              <FaEnvelope size={28} className="text-red-600 hover:text-red-700" />
            </a>
          </div>
        </div>
        {/* Contact Form */}
        <div className="w-full md:w-auto">
          <form action="https://formsubmit.co/murithikevin54@gmail.com" method="POST" className="flex flex-col space-y-4">
            <input 
              type="text" 
              name="name" 
              placeholder="Name" 
              className="w-72 px-3 py-2 border border-neutral-700 rounded-lg bg-neutral-800 text-white outline-none focus:ring-2 focus:ring-blue-700"
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Email" 
              className="w-72 px-3 py-2 border border-neutral-700 rounded-lg bg-neutral-800 text-white outline-none focus:ring-2 focus:ring-blue-700"
            />
            <textarea 
              name="message" 
              placeholder="Message" 
              className="w-72 px-3 py-2 border border-neutral-700 rounded-lg bg-neutral-800 text-white outline-none h-32 resize-none focus:ring-2 focus:ring-blue-700"
            ></textarea>
            <button className="bg-gradient-to-r from-blue-700 to-purple-900 text-white px-4 py-2 rounded-lg w-28 transition-transform duration-300 hover:scale-105">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
