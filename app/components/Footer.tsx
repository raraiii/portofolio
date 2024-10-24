import { FaInstagram, FaWhatsapp, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="footer" className="bg-gradient-to-br from-violet-950 to-violet-950 text-white py-22">
      <div className="container mx-auto px-4 flex flex-col items-center text-center space-y-4">
        {/* Contact Section */}
        <h3 className="text-lg font-bold mb-3 tracking-wide uppercase">Contact Me</h3>
        
        {/* Contact Email */}
        <div id="contact-email" className="flex items-center space-x-2 mb-2">
          <FaEnvelope size={16} className="text-yellow-400" />
          <p className="text-sm tracking-wide">raraiii@gmail.com</p>
        </div>
        
        {/* Contact Phone */}
        <div id="contact-phone" className="flex items-center space-x-2 mb-2">
          <FaPhone size={16} className="text-green-400" />
          <p className="text-sm tracking-wide">+62 123 456 789</p>
        </div>

        {/* Contact Address */}
        <div id="contact-address" className="flex items-center space-x-2 mb-2">
          <FaMapMarkerAlt size={16} className="text-red-400" />
          <p className="text-sm tracking-wide">Indonesia, Jakarta, Kemayoran</p>
        </div>

        {/* Social Media Icons */}
        <div id="social-media" className="flex space-x-4 mt-4">
          <a href="https://www.instagram.com/raisyah1412/profilecard/?igsh=MW1qbWkxdzZhaGVncw==" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pink-500 transition duration-300 transform hover:scale-105">
            <FaInstagram size={20} />
          </a>
          <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-green-500 transition duration-300 transform hover:scale-105">
            <FaWhatsapp size={20} />
          </a>
          <a href="https://github.com/raraiii" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-600 transition duration-300 transform hover:scale-105">
          <FaGithub size={20} />
           </a>

        </div>

        {/* Footer Copyright */}
        <div id="copyright" className="mt-6 text-xs text-gray-300">
          <p>&copy; {new Date().getFullYear()} Raisyah Devita Anggraini. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
