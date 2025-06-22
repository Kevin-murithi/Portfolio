import { FaInstagram, FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  // EmailJS configuration - Get these from your EmailJS dashboard
  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'your_service_id';
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'your_template_id';
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key';

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Check if EmailJS is configured
    if (EMAILJS_SERVICE_ID === 'your_service_id' ||
        EMAILJS_TEMPLATE_ID === 'your_template_id' ||
        EMAILJS_PUBLIC_KEY === 'your_public_key') {

      // Fallback: Create mailto link if EmailJS is not configured
      const subject = encodeURIComponent(`Portfolio Contact: ${formData.subject}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      const mailtoLink = `mailto:murithikevin54@gmail.com?subject=${subject}&body=${body}`;

      window.open(mailtoLink, '_blank');
      setSubmitStatus('success');
      setIsSubmitting(false);

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      return;
    }

    try {
      // Initialize EmailJS with your public key
      emailjs.init(EMAILJS_PUBLIC_KEY);

      // Send email using EmailJS
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'murithikevin54@gmail.com', // Your email address
        }
      );

      console.log('Email sent successfully:', result);
      setSubmitStatus('success');

      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pb-20 pt-20 mb-20" id="Contact">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-light text-white mb-4">Get In Touch</h2>
        <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
          Interested in working together? Let's discuss your project
        </p>
      </motion.div>

      {/* Main Contact Section */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>

              {/* Email */}
              <div className="flex items-center space-x-4 mb-6 p-4 bg-neutral-800/30 rounded-lg hover:bg-neutral-800/50 transition-all duration-300">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <FaEnvelope className="text-blue-400 text-xl" />
                </div>
                <div>
                  <p className="text-neutral-400 text-sm">Email</p>
                  <p className="text-white">murithikevin54@gmail.com</p>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-center space-x-4 mb-6 p-4 bg-neutral-800/30 rounded-lg hover:bg-neutral-800/50 transition-all duration-300">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <FaLinkedin className="text-blue-400 text-xl" />
                </div>
                <div>
                  <p className="text-neutral-400 text-sm">LinkedIn</p>
                  <p className="text-white"><a href="https://www.linkedin.com/in/kevin-murithi54/">linkedin.com/in/kevin-murithi54</a></p>
                </div>
              </div>

              {/* GitHub */}
              <div className="flex items-center space-x-4 mb-6 p-4 bg-neutral-800/30 rounded-lg hover:bg-neutral-800/50 transition-all duration-300">
                <div className="p-2 bg-purple-500/20 rounded-lg">
                  <FaGithub className="text-purple-400 text-xl" />
                </div>
                <div>
                  <p className="text-neutral-400 text-sm">GitHub</p>
                  <p className="text-white"><a href="https://github.com/Kevin-murithi">github.com/Kevin-murithi</a></p>
                </div>
              </div>
            </div>

            {/* Availability Status */}
            <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-white mb-4">Availability</h3>
              <p className="text-neutral-300 mb-4">
                I'm currently available for freelance work and consulting.
                My typical response time is within 24 hours.
              </p>

              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-medium">Available</span>
                </div>
                <div className="bg-green-500/20 px-3 py-1 rounded-full">
                  <span className="text-green-400 text-sm">100%</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <label className="block text-neutral-400 text-sm mb-2">Name</label>
                  <motion.input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    className="w-full px-4 py-3 bg-neutral-800/50 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300"
                    required
                    whileFocus={{
                      scale: 1.02,
                      borderColor: "rgba(59, 130, 246, 0.5)",
                      boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)"
                    }}
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <label className="block text-neutral-400 text-sm mb-2">Email</label>
                  <motion.input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your email"
                    className="w-full px-4 py-3 bg-neutral-800/50 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300"
                    required
                    whileFocus={{
                      scale: 1.02,
                      borderColor: "rgba(59, 130, 246, 0.5)",
                      boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)"
                    }}
                  />
                </motion.div>
              </div>

              {/* Subject */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <label className="block text-neutral-400 text-sm mb-2">Subject</label>
                <motion.input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Project inquiry"
                  className="w-full px-4 py-3 bg-neutral-800/50 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300"
                  required
                  whileFocus={{
                    scale: 1.02,
                    borderColor: "rgba(59, 130, 246, 0.5)",
                    boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)"
                  }}
                />
              </motion.div>

              {/* Message */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <label className="block text-neutral-400 text-sm mb-2">Message</label>
                <motion.textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project..."
                  rows="6"
                  className="w-full px-4 py-3 bg-neutral-800/50 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300 resize-none"
                  required
                  whileFocus={{
                    scale: 1.01,
                    borderColor: "rgba(59, 130, 246, 0.5)",
                    boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)"
                  }}
                />
              </motion.div>

              {/* Privacy Policy Checkbox */}
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="privacy"
                  className="mt-1 w-4 h-4 text-blue-500 bg-neutral-800 border-neutral-600 rounded focus:ring-blue-500 focus:ring-2"
                  required
                />
                <label htmlFor="privacy" className="text-neutral-400 text-sm">
                  I agree to the Privacy Policy
                </label>
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 text-center"
                >
                  ✅ Message sent successfully! I'll get back to you within 24 hours.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 text-center"
                >
                  ❌ Failed to send message. Please try again or contact me directly.
                </motion.div>
              )}

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                className={`w-full font-medium py-4 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl ${
                  isSubmitting
                    ? 'bg-neutral-600 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white'
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <motion.div
                      className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    <span>Sending...</span>
                  </div>
                ) : (
                  'Send Message'
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
