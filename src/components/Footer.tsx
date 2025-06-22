import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">Manuka Dandeniya</h3>
            <p className="text-gray-300 mb-4">
              Software Engineering Intern passionate about creating innovative solutions 
              and building meaningful applications.
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:manukadandeniya52@gmail.com"
                className="p-2 bg-dark-700 rounded-full hover:bg-primary-600 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/manuka"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-dark-700 rounded-full hover:bg-primary-600 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/manuka-dandeniya"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-dark-700 rounded-full hover:bg-primary-600 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-300 hover:text-primary-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-gray-300">
              <p>📧 manukadandeniya52@gmail.com</p>
              <p>📱 +94 76 778 2211</p>
              <p>📍 Wellawaya, Sri Lanka</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-dark-700 pt-8 flex flex-col md:flex-row items-center justify-between">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-300 flex items-center"
          >
            Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> by Manuka Dandeniya
          </motion.p>
          <p className="text-gray-300 mt-4 md:mt-0">
            © {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;