import Link from 'next/link';
import Image from 'next/image';
import { 
  FaClock, 
  FaCalendarCheck, 
  FaComments, 
  FaHandHoldingUsd, 
  FaVideo, 
  FaFlask,
  FaChartLine,
  FaShieldAlt,
  FaUsers
} from 'react-icons/fa';

const BusinessSolutionCard = ({ 
  Icon, 
  title, 
  description, 
  metrics 
}: { 
  Icon: React.ComponentType<any>, 
  title: string, 
  description: string,
  metrics: string 
}) => (
  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-corporate hover:shadow-executive transition-all duration-300 border border-corporate-200 group hover:scale-105 hover:bg-white/98">
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-primary-100 text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
        <Icon className="text-2xl" />
      </div>
      <span className="text-sm font-semibold text-accent-600 bg-accent-50 px-3 py-1 rounded-full font-corporate">
        {metrics}
      </span>
    </div>
    <h3 className="text-xl font-bold text-corporate-800 mb-3 font-corporate">{title}</h3>
    <p className="text-corporate-600 font-corporate leading-relaxed">{description}</p>
  </div>
);

const FeaturesSection = () => {
  return (
    <section className="relative py-20 bg-corporate-50 overflow-hidden">
      {/* Background Lotus Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/lotus_logo_hero.png" 
          alt="Executive Solutions Background"
          fill
          className="object-cover opacity-5"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-corporate-50/95 via-corporate-50/90 to-corporate-50/95"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6">
        {/* Executive Summary Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold font-corporate mb-4">
            <FaChartLine />
            Business Solutions Portfolio
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-corporate-800 font-corporate mb-4">
            Enterprise Healthcare Solutions
          </h2>
          <p className="text-xl text-corporate-600 font-corporate max-w-3xl mx-auto">
            Comprehensive direct primary care solutions designed to optimize organizational health outcomes while reducing operational costs and improving employee satisfaction.
          </p>
        </div>

        {/* Business Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <BusinessSolutionCard 
            Icon={FaClock} 
            title="Extended Executive Consultations"
            description="Comprehensive 30-60 minute appointments enabling thorough health assessments and strategic wellness planning for executives and key personnel."
            metrics="4x Longer"
          />
          <BusinessSolutionCard 
            Icon={FaCalendarCheck} 
            title="Priority Access Protocol"
            description="Same-day and next-day appointment availability ensuring minimal disruption to business operations and executive schedules."
            metrics="Same Day"
          />
          <BusinessSolutionCard 
            Icon={FaComments} 
            title="Direct Executive Access"
            description="Streamlined communication channels providing direct physician access through secure messaging, calls, and virtual consultations."
            metrics="24/7 Access"
          />
          <BusinessSolutionCard 
            Icon={FaHandHoldingUsd} 
            title="Transparent Cost Structure"
            description="Predictable healthcare investments with no hidden fees, enabling accurate budget forecasting and cost control."
            metrics="No Surprises"
          />
          <BusinessSolutionCard 
            Icon={FaVideo} 
            title="Virtual Executive Health"
            description="Comprehensive telemedicine platform integrated into membership, supporting remote consultations and follow-up care."
            metrics="Included"
          />
          <BusinessSolutionCard 
            Icon={FaFlask} 
            title="Enterprise Lab Solutions"
            description="Significantly reduced laboratory costs with wholesale pricing, enabling comprehensive health monitoring at scale."
            metrics="70-90% Savings"
          />
        </div>

        {/* ROI Dashboard Summary */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-dashboard border border-corporate-200 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-corporate-800 font-corporate mb-2">Return on Investment Analysis</h3>
            <p className="text-corporate-600 font-corporate">Measurable business outcomes from enterprise healthcare solutions</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-accent-50 rounded-xl">
              <FaUsers className="text-3xl text-accent-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-corporate-800 font-corporate">95%</div>
              <div className="text-corporate-600 font-corporate">Employee Satisfaction</div>
            </div>
            <div className="text-center p-6 bg-primary-50 rounded-xl">
              <FaShieldAlt className="text-3xl text-primary-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-corporate-800 font-corporate">40%</div>
              <div className="text-corporate-600 font-corporate">Reduced Sick Days</div>
            </div>
            <div className="text-center p-6 bg-warning-50 rounded-xl">
              <FaChartLine className="text-3xl text-warning-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-corporate-800 font-corporate">$2,500</div>
              <div className="text-corporate-600 font-corporate">Annual Savings per Employee</div>
            </div>
          </div>
        </div>

        {/* Executive Action */}
        <div className="text-center">
          <Link 
            href="/direct-primary-care" 
            className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 text-lg shadow-corporate hover:shadow-executive font-corporate hover:scale-105 inline-flex items-center gap-3"
          >
            <FaChartLine />
            Explore Enterprise Solutions
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
