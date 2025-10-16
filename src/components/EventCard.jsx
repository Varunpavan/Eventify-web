import { MapPin, Calendar, Cloud } from "lucide-react";

const EventCard = ({ event, className = "" }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  const formatDistance = (distanceKm) => {
    const distance = parseFloat(distanceKm);
    if (distance < 1) {
      return `${Math.round(distance * 1000)}m away`;
    }
    return `${Math.round(distance * 10) / 10}km away`;
  };

  return (
    <div className={`card-modern group cursor-pointer overflow-hidden border-0 hover:shadow-elegant hover:-translate-y-1 transition-all duration-300 ${className}`}>
      {/* Event Image */}
      <div className="relative aspect-video bg-muted overflow-hidden">
        <img
          src={event.img_url}
          alt={event.eventName}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
          onLoad={() => console.log('Image loaded successfully:', event.img_url)}
          onError={(e) => {
            console.log('Image failed to load:', event.img_url);
            e.currentTarget.src = 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=400&h=225&fit=crop&crop=center';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      {/* Event Details */}
      <div className="p-5">
        <h3 className="font-bold text-heading mb-3 text-lg leading-tight group-hover:text-primary transition-colors duration-200">
          {event.eventName}
        </h3>
        
        <div className="space-y-3 text-sm">
          <div className="flex items-center text-subtitle group-hover:text-foreground transition-colors duration-200">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 mr-3">
              <MapPin className="w-4 h-4 text-primary" />
            </div>
            <span className="font-medium">{event.cityName}</span>
          </div>
          
          <div className="flex items-center text-subtitle group-hover:text-foreground transition-colors duration-200">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-accent/10 mr-3">
              <Calendar className="w-4 h-4 text-accent" />
            </div>
            <span className="font-medium">{formatDate(event.date)}</span>
          </div>
          
          <div className="flex items-center text-subtitle group-hover:text-foreground transition-colors duration-200">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary mr-3">
              <Cloud className="w-4 h-4 text-secondary-foreground" />
            </div>
            <span className="font-medium">{event.weather}</span>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-border/50">
          <div className="flex items-center justify-between">
            <p className="text-xs font-semibold text-primary bg-primary-soft px-2 py-1 rounded-full">
              {formatDistance(event.distanceKm)}
            </p>
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;