import Image from "next/image";
import Link from "next/link";
import { FaChartLine, FaUserMd, FaShieldAlt, FaClock, FaHandHoldingMedical, FaBuilding } from 'react-icons/fa';
import JourneySection from "@/components/JourneySection";
import PricingSection from "@/components/PricingSection";
import FeaturesSection from "@/components/FeaturesSection";
import DoctorSection from "@/components/DoctorSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogPreviewSection from "@/components/BlogPreviewSection";

export default function Home() {
  return (
    <>
      {/* Executive Dashboard Hero Section */}
      <section className="relative bg-dashboard-gradient text-white overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/artistic_lotus_hero.png" 
            alt="Executive Health Background"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-800/85 to-slate-900/90"></div>
        </div>
        
        {/* Content Container */}
        <div className="relative z-10 container mx-auto px-6 py-16">
          {/* Executive Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="bg-slate-900 bg-opacity-60 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white border-opacity-20">
                <Image 
                  src="/images/LOGOTRANSPARENTFLOWERONLY1.png" 
                  alt="Lotus Direct Care - Enterprise Healthcare Solutions"
                  width={120}
                  height={120}
                  className="animate-corporate-glow"
                  priority
                />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold font-corporate leading-tight mb-6 text-shadow-executive">
              Enterprise Healthcare Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-white font-corporate text-shadow-executive">
              Transforming healthcare delivery through direct primary care models and innovative medical solutions designed for modern professionals and forward-thinking organizations.
            </p>
          </div>

          {/* Corporate KPI Dashboard */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-slate-900 bg-opacity-40 backdrop-blur-md rounded-xl p-6 shadow-2xl border border-white border-opacity-30 hover:bg-opacity-50 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <FaClock className="text-3xl text-accent-400" />
                <span className="text-4xl font-bold text-white font-corporate">30-60</span>
              </div>
              <div>
                <p className="text-corporate-100 font-corporate font-medium">Minute Consultations</p>
                <p className="text-sm text-corporate-200">Extended appointment times</p>
              </div>
            </div>
            
            <div className="bg-slate-900 bg-opacity-40 backdrop-blur-md rounded-xl p-6 shadow-2xl border border-white border-opacity-30 hover:bg-opacity-50 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <FaUserMd className="text-3xl text-accent-400" />
                <span className="text-4xl font-bold text-white font-corporate">24/7</span>
              </div>
              <div>
                <p className="text-corporate-100 font-corporate font-medium">Direct Access</p>
                <p className="text-sm text-corporate-200">Physician availability</p>
              </div>
            </div>
            
            <div className="bg-slate-900 bg-opacity-40 backdrop-blur-md rounded-xl p-6 shadow-2xl border border-white border-opacity-30 hover:bg-opacity-50 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <FaChartLine className="text-3xl text-accent-400" />
                <span className="text-4xl font-bold text-white font-corporate">70-90%</span>
              </div>
              <div>
                <p className="text-corporate-100 font-corporate font-medium">Cost Reduction</p>
                <p className="text-sm text-corporate-200">Laboratory services</p>
              </div>
            </div>
          </div>

          {/* Executive Action Center */}
          <div className="bg-slate-900 bg-opacity-50 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white border-opacity-30">
            <h2 className="text-2xl font-bold text-center mb-6 font-corporate">Executive Action Center</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="https://app.elationemr.com/book/lotusdirectcare/service-locations/933212881617143?appointment_types=" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-accent-600 hover:bg-accent-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 text-lg shadow-corporate hover:shadow-executive font-corporate hover:scale-105 flex items-center gap-3"
              >
                <FaHandHoldingMedical />
                Executive Consultation
              </Link>
              <Link 
                href="/direct-primary-care" 
                className="border-2 border-white hover:bg-white hover:text-primary-800 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 text-lg shadow-corporate hover:shadow-executive font-corporate hover:scale-105 flex items-center gap-3"
              >
                <FaBuilding />
                Enterprise Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      <JourneySection />

      <PricingSection />

      <FeaturesSection />

      <DoctorSection />

      <TestimonialsSection />

      <BlogPreviewSection />
    </>
  );
}
