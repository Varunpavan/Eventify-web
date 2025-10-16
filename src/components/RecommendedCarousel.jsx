import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import EventCard from "./EventCard";

const RecommendedCarousel = ({ items }) => {

  if (items.length === 0) {
    return (
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="heading text-2xl font-bold mb-8">Recommended shows →</h2>
          <div className="text-center text-subtitle py-12">
            Loading recommended events...
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="heading text-2xl font-bold mb-8">Recommended shows →</h2>
        
        <ScrollArea className="w-full whitespace-nowrap rounded-lg">
          <div className="flex w-max space-x-4 p-4">
            {items.map((event, index) => (
              <div 
                key={`${event.eventName}-${index}`} 
                className="w-80 flex-shrink-0"
              >
                <EventCard event={event} />
              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </section>
  );
};

export default RecommendedCarousel;