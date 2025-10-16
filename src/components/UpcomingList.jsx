import { useEffect, useCallback, useState } from "react";
import { Loader2 } from "lucide-react";
import EventCard from "./EventCard";
import { EventCardSkeleton } from "./ui/skeleton";

const UpcomingList = ({ items, onFetchNextPage, isLoading = false, hasMore = true }) => {
  const [isNearBottom, setIsNearBottom] = useState(false);

  const handleScroll = useCallback(() => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    
    // Trigger when user is 200px from bottom
    const nearBottom = scrollTop + windowHeight >= documentHeight - 200;
    
    if (nearBottom && !isNearBottom && hasMore && !isLoading) {
      setIsNearBottom(true);
      onFetchNextPage();
    } else if (!nearBottom) {
      setIsNearBottom(false);
    }
  }, [isNearBottom, hasMore, isLoading, onFetchNextPage]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  if (items.length === 0 && !isLoading) {
    return (
      <section className="py-16 bg-gradient-to-br from-muted/20 to-accent-soft/10">
        <div className="container mx-auto px-4">
          <h2 className="heading text-3xl font-bold mb-8 animate-fade-in">Upcoming events →</h2>
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 animate-float">
              <Loader2 className="w-12 h-12 text-accent" />
            </div>
            <p className="text-subtitle text-lg">No upcoming events found.</p>
            <p className="text-sm text-muted-foreground mt-2">Check back later for new events!</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-br from-muted/20 to-accent-soft/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-10">
          <h2 className="heading text-3xl font-bold animate-fade-in">Upcoming events →</h2>
          <button className="btn-primary px-6 py-2 rounded-full text-sm font-medium">
            See all
          </button>
        </div>
        
        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {items.map((event, index) => (
            <div key={`${event.eventName}-${index}`} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <EventCard event={event} />
            </div>
          ))}
        </div>

        {/* Loading Spinner */}
        {isLoading && (
          <div className="text-center py-16">
            <div className="relative w-16 h-16 mx-auto mb-6">
              <div className="absolute inset-0 border-4 border-muted rounded-full"></div>
              <div className="absolute inset-0 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            </div>
            <p className="text-subtitle text-lg animate-pulse">Loading more events...</p>
          </div>
        )}

        {/* End Message */}
        {!hasMore && items.length > 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            </div>
            <p className="text-subtitle text-lg">You've reached the end!</p>
            <p className="text-sm text-muted-foreground mt-1">All events have been loaded.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default UpcomingList;