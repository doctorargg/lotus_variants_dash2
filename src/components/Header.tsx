'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const Header = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-corporate-gradient shadow-executive sticky top-0 z-50 border-b border-corporate-200">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center group">
          <div className="relative">
            <Image 
              src="/images/LOGOTRANSPARENTFLOWERONLY1.png" 
              alt="Lotus Direct Care Logo" 
              width={45} 
              height={45} 
              className="mr-3 transition-transform duration-300 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-primary-500 opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-300"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-white font-corporate">Lotus Direct Care</span>
            <span className="text-xs text-corporate-200 font-corporate">Professional Healthcare Solutions</span>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <Link href="/" className="text-corporate-100 hover:text-white font-medium font-corporate transition-all duration-300 relative group">
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/about" className="text-corporate-100 hover:text-white font-medium font-corporate transition-all duration-300 relative group">
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          
          {/* Services Dropdown */}
          <div className="relative group">
            <button 
              className="flex items-center text-corporate-100 hover:text-white font-medium font-corporate transition-all duration-300 relative group"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              Solutions
              <FaChevronDown className="ml-2 text-sm transition-transform duration-300 group-hover:rotate-180" />
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <div 
              className={`absolute top-full left-0 bg-white shadow-dashboard rounded-xl py-3 w-72 transition-all duration-300 border border-corporate-200 ${
                isServicesOpen ? 'opacity-100 visible translate-y-2' : 'opacity-0 invisible translate-y-0'
              }`}
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <Link href="/services" className="block px-6 py-3 text-corporate-700 hover:bg-primary-50 hover:text-primary-700 transition duration-200 font-corporate font-semibold border-b border-corporate-100">
                All Healthcare Solutions
              </Link>
              <Link href="/ketamine-therapy" className="block px-6 py-2.5 text-corporate-600 hover:bg-primary-50 hover:text-primary-600 transition duration-200 font-corporate">
                Ketamine Therapy
              </Link>
              <Link href="/prp-injections" className="block px-6 py-2.5 text-corporate-600 hover:bg-primary-50 hover:text-primary-600 transition duration-200 font-corporate">
                PRP Injections
              </Link>
              <Link href="/addiction-treatment" className="block px-6 py-2.5 text-corporate-600 hover:bg-primary-50 hover:text-primary-600 transition duration-200 font-corporate">
                Addiction Treatment
              </Link>
              <Link href="/functional-medicine" className="block px-6 py-2.5 text-corporate-600 hover:bg-primary-50 hover:text-primary-600 transition duration-200 font-corporate">
                Functional Medicine
              </Link>
            </div>
          </div>
          
          <Link href="/direct-primary-care" className="text-corporate-100 hover:text-white font-medium font-corporate transition-all duration-300 relative group">
            DPC Program
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/pricing" className="text-corporate-100 hover:text-white font-medium font-corporate transition-all duration-300 relative group">
            Investment
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/blog" className="text-corporate-100 hover:text-white font-medium font-corporate transition-all duration-300 relative group">
            Insights
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/contact" className="text-corporate-100 hover:text-white font-medium font-corporate transition-all duration-300 relative group">
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <a href="https://app.elationpassport.com/passport/login/" target="_blank" rel="noopener noreferrer" className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-corporate hover:shadow-executive font-corporate hover:scale-105">
            Executive Portal
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button 
            className="navbar-burger flex items-center text-white p-3 rounded-lg hover:bg-corporate-600 transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="block h-5 w-5 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
      </nav>
      
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-corporate-300 shadow-executive">
          <div className="container mx-auto px-6 py-6 space-y-4">
            <Link href="/" className="block text-corporate-700 hover:text-primary-600 font-medium font-corporate py-2 border-b border-corporate-100">Home</Link>
            <Link href="/about" className="block text-corporate-700 hover:text-primary-600 font-medium font-corporate py-2 border-b border-corporate-100">About</Link>
            <Link href="/services" className="block text-corporate-700 hover:text-primary-600 font-medium font-corporate py-2 border-b border-corporate-100">Healthcare Solutions</Link>
            <div className="pl-4 space-y-3 bg-corporate-50 rounded-lg py-3">
              <Link href="/ketamine-therapy" className="block text-corporate-600 hover:text-primary-600 font-corporate">Ketamine Therapy</Link>
              <Link href="/prp-injections" className="block text-corporate-600 hover:text-primary-600 font-corporate">PRP Injections</Link>
              <Link href="/addiction-treatment" className="block text-corporate-600 hover:text-primary-600 font-corporate">Addiction Treatment</Link>
              <Link href="/functional-medicine" className="block text-corporate-600 hover:text-primary-600 font-corporate">Functional Medicine</Link>
            </div>
            <Link href="/direct-primary-care" className="block text-corporate-700 hover:text-primary-600 font-medium font-corporate py-2 border-b border-corporate-100">DPC Program</Link>
            <Link href="/pricing" className="block text-corporate-700 hover:text-primary-600 font-medium font-corporate py-2 border-b border-corporate-100">Investment</Link>
            <Link href="/blog" className="block text-corporate-700 hover:text-primary-600 font-medium font-corporate py-2 border-b border-corporate-100">Insights</Link>
            <Link href="/contact" className="block text-corporate-700 hover:text-primary-600 font-medium font-corporate py-2 border-b border-corporate-100">Contact</Link>
            <a href="https://app.elationpassport.com/passport/login/" target="_blank" rel="noopener noreferrer" className="block bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300 text-center shadow-corporate font-corporate">
              Executive Portal
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;