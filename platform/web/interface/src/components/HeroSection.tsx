import { Button } from '@/components/ui/button';
import { PlayCircle, Users } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 bg-white pt-32">
      <div className="max-w-5xl mx-auto text-center">
        {/* Main Headline */}
        <div className="animate-fade-in mb-12">
          <h1 className="text-5xl md:text-7xl font-bold text-midnight mb-6 leading-tight font-google-sans">
            Simple, Insightful,
            <br />
            <span className="text-cool-blue">Trustworthy</span>
          </h1>
        </div>

        {/* Subtitle */}
        <div className="animate-fade-in mb-16" style={{ animationDelay: '0.2s' }}>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Certified Provider By The Sudanese Authority for DATA Governance & insight
          </p>
        </div>

        {/* Call-to-Action Buttons */}
        <div className="animate-fade-in flex flex-col sm:flex-row gap-4 justify-center mb-24" style={{ animationDelay: '0.4s' }}>
          <Button 
            size="lg" 
            className="bg-cool-blue hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-medium hover-scale transition-all duration-200"
          >
            <Users className="w-5 h-5 mr-2" />
            Free Registration
          </Button>
          <Button 
            size="lg" 
            className="bg-cool-blue hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-medium hover-scale transition-all duration-200"
          >
            <PlayCircle className="w-5 h-5 mr-2" />
            Communication
          </Button>
        </div>

        {/* Image Placeholder */}
        <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="max-w-4xl mx-auto">
            <div className="bg-soft-gray rounded-2xl p-8 md:p-12 shadow-lg">
              <img 
                src="/assets/images/platform-preview.png" 
                alt="Platform Preview" 
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
