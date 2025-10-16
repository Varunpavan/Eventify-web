import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary-soft/20 to-accent-soft/30 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-accent/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/5 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      {/* Header */}
      <header className="relative z-10 border-b border-border/20 backdrop-blur-md bg-background/80">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between animate-fade-in">
            <h1 className="logo-text text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Eventify
            </h1>
            <div className="flex items-center space-x-4">
              <Button 
                variant="outline" 
                onClick={() => navigate('/login')} 
                className="border-primary/30 hover:bg-primary/10 hover:border-primary transition-all duration-300 backdrop-blur-sm"
              >
                Sign In
              </Button>
              <Button 
                onClick={() => navigate('/signup')} 
                className="btn-primary"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 flex min-h-[80vh] items-center justify-center px-4 py-16">
        <div className="text-center max-w-5xl mx-auto">
          <div className="animate-fade-in">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold heading mb-8 leading-tight">
              Discover Amazing{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Events
              </span>{" "}
              Near You
            </h2>
          </div>
          
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-xl sm:text-2xl subtitle mb-12 max-w-3xl mx-auto leading-relaxed">
              Join thousands of event enthusiasts discovering concerts, shows, festivals, and more happening in your city. Never miss out on the experiences that matter to you.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg" 
              className="btn-primary text-lg px-12 py-4 h-14 w-full sm:w-auto font-semibold"
              onClick={() => navigate('/signup')}
            >
              Start Exploring
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-12 py-4 h-14 w-full sm:w-auto border-2 border-primary/30 hover:bg-primary/10 hover:border-primary transition-all duration-300 backdrop-blur-sm font-semibold"
              onClick={() => navigate('/login')}
            >
              Sign In
            </Button>
          </div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <div className="card-modern p-6 text-center backdrop-blur-sm bg-card/60 border-0">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-primary rounded-full animate-pulse"></div>
              </div>
              <h3 className="font-bold text-xl mb-3 text-heading">Discover Local</h3>
              <p className="text-subtitle">Find events happening right in your neighborhood</p>
            </div>
            
            <div className="card-modern p-6 text-center backdrop-blur-sm bg-card/60 border-0">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              </div>
              <h3 className="font-bold text-xl mb-3 text-heading">Stay Updated</h3>
              <p className="text-subtitle">Never miss out on the latest events and shows</p>
            </div>
            
            <div className="card-modern p-6 text-center backdrop-blur-sm bg-card/60 border-0">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
              <h3 className="font-bold text-xl mb-3 text-heading">Easy Booking</h3>
              <p className="text-subtitle">Simple and secure event booking experience</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;