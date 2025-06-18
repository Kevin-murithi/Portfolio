import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaHeart } from "react-icons/fa6";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#Home" },
    { name: "About", href: "#About" },
    { name: "Services", href: "#Services" },
    { name: "Skills", href: "#Skills" },
    { name: "Projects", href: "#Projects" },
    { name: "Contact", href: "#Contact" }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/Kevin-murithi",
      icon: FaGithub,
      color: "hover:text-gray-400"
    },
    {
      name: "LinkedIn", 
      href: "https://www.linkedin.com/in/kevin-murithi54/",
      icon: FaLinkedin,
      color: "hover:text-blue-400"
    },
    {
      name: "Twitter",
      href: "https://x.com/murithikevin54",
      icon: FaTwitter,
      color: "hover:text-gray-400"
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/ps.kevin_/?__pwa=1",
      icon: FaInstagram,
      color: "hover:text-pink-400"
    }
  ];

  return (
    <footer className="bg-neutral-950 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-white">Kevin Murithi</h3>
            <p className="text-neutral-400 leading-relaxed">
              Building exceptional digital experiences with modern technologies. 
              Available for freelance work and consulting.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{
                      scale: 1.2,
                      rotate: 5,
                      boxShadow: "0 8px 25px rgba(59, 130, 246, 0.3)"
                    }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-3 bg-neutral-800 rounded-lg text-neutral-400 ${social.color} transition-all duration-300 hover:bg-neutral-700 relative group`}
                  >
                    <motion.div
                      className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"
                    />
                    <IconComponent size={20} className="relative z-10" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-neutral-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
            <div className="space-y-3">
              <p className="text-neutral-400">
                <span className="text-white font-medium">Email:</span><br />
                murithikevin54@gmail.com
              </p>
              <p className="text-neutral-400">
                <span className="text-white font-medium">Location:</span><br />
                Available Worldwide (Remote)
              </p>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-sm">Available for new projects</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-neutral-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-neutral-400 text-sm">
              © {currentYear} Kevin Murithi. All rights reserved.
            </p>
            <div className="flex items-center space-x-1 text-neutral-400 text-sm">
              <span>Designed & Built with</span>
              <FaHeart className="text-red-500 mx-1" size={14} />
              <span>by Kevin</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
