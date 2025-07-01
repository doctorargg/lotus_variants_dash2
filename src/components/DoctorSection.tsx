import Image from 'next/image';
import Link from 'next/link';
import { FaAward, FaGraduationCap, FaBriefcase, FaHandshake, FaChartLine, FaUserTie } from 'react-icons/fa';

const DoctorSection = () => {
  return (
    <section className="py-20 bg-corporate-50">
      <div className="container mx-auto px-6">
        {/* Executive Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold font-corporate mb-4">
            <FaUserTie />
            Chief Medical Officer
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-corporate-800 font-corporate mb-4">
            Executive Leadership Profile
          </h2>
          <p className="text-xl text-corporate-600 font-corporate max-w-3xl mx-auto">
            Meet the visionary leader transforming healthcare delivery through innovative direct primary care solutions and executive health programs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Professional Portrait */}
          <div className="text-center lg:text-left">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl opacity-20 blur-lg"></div>
              <div className="relative bg-white p-4 rounded-2xl shadow-dashboard">
                <Image 
                  src="/images/dr_rosenberg_new.jpg" 
                  alt="Dr. Aaron Rosenberg - Chief Medical Officer"
                  width={500}
                  height={600}
                  className="rounded-xl shadow-executive mx-auto lg:mx-0 object-cover"
                />
                <div className="absolute bottom-6 left-6 bg-white bg-opacity-95 backdrop-blur-sm rounded-lg p-3 shadow-corporate">
                  <div className="text-sm font-semibold text-corporate-800 font-corporate">Dr. Aaron Rosenberg</div>
                  <div className="text-xs text-primary-600 font-corporate">Chief Medical Officer</div>
                </div>
              </div>
            </div>
          </div>

          {/* Executive Profile */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-corporate-800 font-corporate mb-4">
                Dr. Aaron Rosenberg, MD
              </h3>
              <p className="text-lg text-primary-600 font-semibold mb-6 font-corporate flex items-center gap-2">
                <FaAward className="text-primary-500" />
                Board-Certified Family Medicine Physician
              </p>
            </div>

            {/* Executive Summary */}
            <div className="bg-white rounded-xl p-6 shadow-corporate border border-corporate-200">
              <h4 className="text-xl font-bold text-corporate-800 font-corporate mb-4">Executive Summary</h4>
              <div className="text-corporate-600 space-y-3 font-corporate leading-relaxed">
                <p>Dr. Rosenberg leads our organization's mission to revolutionize healthcare delivery through direct primary care models. His strategic vision focuses on eliminating traditional healthcare barriers while maximizing patient outcomes and organizational efficiency.</p>
                <p>His executive approach combines evidence-based medicine with innovative business practices, delivering measurable ROI for both individual clients and corporate partnerships.</p>
              </div>
            </div>

            {/* Professional Credentials */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4 shadow-corporate border border-corporate-200">
                <div className="flex items-center gap-3 mb-2">
                  <FaGraduationCap className="text-primary-600" />
                  <span className="font-semibold text-corporate-800 font-corporate">Education</span>
                </div>
                <p className="text-sm text-corporate-600 font-corporate">Medical Degree, Board Certification</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-corporate border border-corporate-200">
                <div className="flex items-center gap-3 mb-2">
                  <FaBriefcase className="text-primary-600" />
                  <span className="font-semibold text-corporate-800 font-corporate">Specialization</span>
                </div>
                <p className="text-sm text-corporate-600 font-corporate">Executive Health & Preventive Medicine</p>
              </div>
            </div>

            {/* Key Performance Indicators */}
            <div className="bg-executive-gradient rounded-xl p-6 text-white">
              <h4 className="text-xl font-bold font-corporate mb-4 flex items-center gap-2">
                <FaChartLine />
                Leadership Metrics
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold font-corporate">15+</div>
                  <div className="text-sm text-corporate-200 font-corporate">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold font-corporate">500+</div>
                  <div className="text-sm text-corporate-200 font-corporate">Executive Clients</div>
                </div>
              </div>
            </div>

            {/* Executive Action */}
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/about" 
                className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-corporate hover:shadow-executive font-corporate hover:scale-105 flex items-center gap-2"
              >
                <FaHandshake />
                Executive Profile
              </Link>
              <Link 
                href="/contact" 
                className="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-corporate font-corporate hover:scale-105 flex items-center gap-2"
              >
                <FaUserTie />
                Schedule Executive Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorSection;
