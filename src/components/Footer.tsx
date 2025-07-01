import Link from 'next/link';
import Image from 'next/image';
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaLinkedin, 
  FaTwitter, 
  FaGlobe,
  FaBuilding,
  FaHandshake,
  FaShieldAlt
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-corporate-gradient text-white py-16 border-t border-corporate-700">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Corporate Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <Image 
                src="/images/LOGOTRANSPARENTFLOWERONLY1.png" 
                alt="Lotus Direct Care" 
                width={60} 
                height={60} 
                className="mr-3"
              />
              <div>
                <div className="text-xl font-bold font-corporate">Lotus Direct Care</div>
                <div className="text-xs text-corporate-200 font-corporate">Enterprise Healthcare Solutions</div>
              </div>
            </div>
            <p className="mt-4 text-corporate-200 font-corporate leading-relaxed">
              Transforming healthcare delivery through innovative direct primary care models and executive health programs.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-corporate-300 hover:text-white transition-colors duration-300">
                <FaLinkedin className="text-xl" />
              </a>
              <a href="#" className="text-corporate-300 hover:text-white transition-colors duration-300">
                <FaTwitter className="text-xl" />
              </a>
              <a href="#" className="text-corporate-300 hover:text-white transition-colors duration-300">
                <FaGlobe className="text-xl" />
              </a>
            </div>
          </div>

          {/* Business Solutions */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-corporate flex items-center gap-2">
              <FaBuilding className="text-primary-400" />
              Business Solutions
            </h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-corporate-200 hover:text-white transition-colors duration-300 font-corporate">Executive Overview</Link></li>
              <li><Link href="/services" className="text-corporate-200 hover:text-white transition-colors duration-300 font-corporate">Healthcare Solutions</Link></li>
              <li><Link href="/direct-primary-care" className="text-corporate-200 hover:text-white transition-colors duration-300 font-corporate">DPC Enterprise Program</Link></li>
              <li><Link href="/pricing" className="text-corporate-200 hover:text-white transition-colors duration-300 font-corporate">Investment Plans</Link></li>
              <li><Link href="/blog" className="text-corporate-200 hover:text-white transition-colors duration-300 font-corporate">Industry Insights</Link></li>
              <li><Link href="/contact" className="text-corporate-200 hover:text-white transition-colors duration-300 font-corporate">Partnership Inquiries</Link></li>
            </ul>
          </div>

          {/* Executive Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-corporate flex items-center gap-2">
              <FaHandshake className="text-primary-400" />
              Executive Contact
            </h4>
            <ul className="space-y-4 text-corporate-200">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-primary-400 mt-1" />
                <div className="font-corporate">
                  <div>Corporate Headquarters</div>
                  <div className="text-sm">123 Executive Plaza</div>
                  <div className="text-sm">Suite 2000</div>
                  <div className="text-sm">Business District, USA 12345</div>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-primary-400" />
                <a href="tel:123-456-7890" className="hover:text-white transition-colors duration-300 font-corporate">
                  +1 (123) 456-7890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-primary-400" />
                <a href="mailto:executive@lotusdirectcare.com" className="hover:text-white transition-colors duration-300 font-corporate">
                  executive@lotusdirectcare.com
                </a>
              </li>
            </ul>
          </div>

          {/* Compliance & Security */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-corporate flex items-center gap-2">
              <FaShieldAlt className="text-primary-400" />
              Compliance & Security
            </h4>
            <ul className="space-y-3">
              <li>
                <div className="bg-accent-600 text-white px-3 py-2 rounded-lg text-sm font-corporate mb-3">
                  HIPAA Compliant
                </div>
              </li>
              <li>
                <div className="bg-primary-600 text-white px-3 py-2 rounded-lg text-sm font-corporate mb-3">
                  Enterprise Secure
                </div>
              </li>
            </ul>
            <div className="mt-4">
              <a 
                href="https://app.elationpassport.com/passport/login/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-accent-600 hover:bg-accent-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 text-sm font-corporate inline-block w-full text-center"
              >
                Executive Portal Access
              </a>
            </div>
          </div>
        </div>

        {/* Corporate Footer */}
        <div className="pt-8 border-t border-corporate-600">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-corporate-300 mb-4 md:mb-0 font-corporate">
              &copy; {new Date().getFullYear()} Lotus Direct Care Enterprise Solutions. All Rights Reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/hipaa" className="text-corporate-300 hover:text-white transition-colors duration-300 font-corporate">
                HIPAA Compliance
              </Link>
              <Link href="/terms" className="text-corporate-300 hover:text-white transition-colors duration-300 font-corporate">
                Enterprise Terms
              </Link>
              <Link href="/privacy" className="text-corporate-300 hover:text-white transition-colors duration-300 font-corporate">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
