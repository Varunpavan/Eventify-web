import { Search, Heart, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { getCurrentUser, logout } from "@/lib/auth";

const Header = ({ city = "Mumbai, India", search = "", favorites = true, signInBtn = true, onSearchChange }) => {
  const navigate = useNavigate();
  const user = getCurrentUser();

  const handleSignOut = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="bg-background border-b border-stroke sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        {/* Top section with logo and user info */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2 md:space-x-4">
            <h1 className="logo-text text-xl md:text-2xl">Eventify</h1>
            <div className="hidden sm:flex items-center text-subtitle text-xs md:text-sm">
              <MapPin className="w-3 h-3 md:w-4 md:h-4 mr-1" />
              <span className="truncate max-w-32 md:max-w-none">{city}</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 md:space-x-4">
            {favorites && (
              <Button variant="ghost" size="icon" className="h-8 w-8 md:h-10 md:w-10">
                <Heart className="w-4 h-4 md:w-5 md:h-5" />
              </Button>
            )}
            
            {user ? (
              <div className="flex items-center space-x-2 md:space-x-3">
                <span className="hidden md:block text-sm text-subtitle">Welcome, {user.user.username}</span>
                <span className="md:hidden text-xs text-subtitle">Hi, {user.user.username.split(' ')[0]}</span>
                <Button variant="outline" size="sm" onClick={handleSignOut} className="text-xs md:text-sm">
                  Sign Out
                </Button>
              </div>
            ) : signInBtn ? (
              <Button variant="default" size="sm" onClick={() => navigate('/login')} className="text-xs md:text-sm">
                Sign In
              </Button>
            ) : null}
          </div>
        </div>

        {/* Location for mobile */}
        <div className="sm:hidden flex items-center text-subtitle text-xs mb-4">
          <MapPin className="w-3 h-3 mr-1" />
          {city}
        </div>

        {/* Navigation and search */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center space-y-4 lg:space-y-0">
          <div className="relative w-full lg:w-[45rem]"> {/* Increased width */}
  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-subtitle w-4 h-4" />
  <Input
    placeholder="Search for events, movies, plays..."
    className="pl-10 border-stroke focus:border-primary text-sm w-full" // ensures input stretches
    value={search}
    onChange={(e) => onSearchChange?.(e.target.value)}
  />
</div>
          
          
        </div>
      </div>
    </header>
  );
};

export default Header;