const Hero = ({ 
  bannerImage = "/assets/background.jpg",
  title = "Discover Exciting Events Happening Near You – Stay Tuned for Updates!",
  subtitle = "Explore upcoming events, from live shows to movie screenings, all in one place. Stay updated with real-time listings and seamless bookings."
}) => {
  return (
    <section className="relative w-full h-[400px] sm:h-[500px] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-700 hover:scale-110"
        style={{ backgroundImage: `url(${bannerImage})` }}
      />
      
      {/* Enhanced Gradient Overlay */}
      <div className="absolute inset-0 hero-gradient" />
      
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-primary/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-3xl text-white animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">
            {title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl opacity-90 leading-relaxed mb-8 animate-slide-up">
            Turn every weekend into a story worth sharing. From music to theatre, find every experience worth living — all in one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <button className="btn-primary px-8 py-3 rounded-full text-white font-semibold">
              Explore Events
            </button>
            <button className="px-8 py-3 rounded-full border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;