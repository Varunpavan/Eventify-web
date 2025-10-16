import { useState, useEffect, useMemo } from "react";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import RecommendedCarousel from "@/components/RecommendedCarousel";
import UpcomingList from "@/components/UpcomingList";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { fetchRecommendedEvents, fetchUpcomingEvents } from "@/lib/api";

const Events = () => {
  const [recommendedEvents, setRecommendedEvents] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoadingRecommended, setIsLoadingRecommended] = useState(true);
  const [isLoadingUpcoming, setIsLoadingUpcoming] = useState(false);
  const [hasMoreUpcoming, setHasMoreUpcoming] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const { toast } = useToast();

  // Event categories
  const categories = [
    { id: "all", label: "All Events" },
    { id: "live", label: "Live Shows" },
    { id: "streams", label: "Streams" },
    { id: "movies", label: "Movies" },
    { id: "plays", label: "Plays" },
    { id: "events", label: "Events" },
  ];

  // Load recommended events on component mount
  useEffect(() => {
    const loadRecommendedEvents = async () => {
      try {
        setIsLoadingRecommended(true);
        const events = await fetchRecommendedEvents();
        // Ensure we have exactly 8 events for the carousel
        const limitedEvents = events.slice(0, 8);
        setRecommendedEvents(limitedEvents);
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to load recommended events",
          variant: "destructive",
        });
      } finally {
        setIsLoadingRecommended(false);
      }
    };

    loadRecommendedEvents();
  }, [toast]);

  // Load first page of upcoming events
  useEffect(() => {
    const loadInitialUpcomingEvents = async () => {
      try {
        setIsLoadingUpcoming(true);
        const events = await fetchUpcomingEvents(1);
        setUpcomingEvents(events);
        setCurrentPage(1);
        
        // If we got fewer events than expected, assume no more pages
        if (events.length < 6) {
          setHasMoreUpcoming(false);
        }
      } catch (error) {
        toast({
          title: "Error", 
          description: "Failed to load upcoming events",
          variant: "destructive",
        });
      } finally {
        setIsLoadingUpcoming(false);
      }
    };

    loadInitialUpcomingEvents();
  }, [toast]);

  // Load next page of upcoming events
  const handleFetchNextPage = async () => {
    if (!hasMoreUpcoming || isLoadingUpcoming) return;

    try {
      setIsLoadingUpcoming(true);
      const nextPage = currentPage + 1;
      const newEvents = await fetchUpcomingEvents(nextPage);
      
      if (newEvents.length === 0) {
        setHasMoreUpcoming(false);
      } else {
        setUpcomingEvents(prev => [...prev, ...newEvents]);
        setCurrentPage(nextPage);
        
        // If we got fewer events than expected, assume this is the last page
        if (newEvents.length < 6) {
          setHasMoreUpcoming(false);
        }
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to load more events",
        variant: "destructive",
      });
    } finally {
      setIsLoadingUpcoming(false);
    }
  };

  // Helper function to determine event category based on name/type
  const getEventCategory = (event) => {
    const eventName = event.eventName.toLowerCase();
    if (eventName.includes('live') || eventName.includes('concert') || eventName.includes('show')) return 'live';
    if (eventName.includes('stream') || eventName.includes('online')) return 'streams';
    if (eventName.includes('movie') || eventName.includes('film') || eventName.includes('cinema')) return 'movies';
    if (eventName.includes('play') || eventName.includes('theatre') || eventName.includes('drama')) return 'plays';
    return 'events';
  };

  // Filter events based on search query and category
  const filteredRecommendedEvents = useMemo(() => {
    let filtered = recommendedEvents;
    
    // Filter by category
    if (activeCategory !== 'all') {
      filtered = filtered.filter(event => getEventCategory(event) === activeCategory);
    }
    
    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      filtered = filtered.filter(event => 
        event.eventName.toLowerCase().includes(query) ||
        event.cityName.toLowerCase().includes(query) ||
        event.weather.toLowerCase().includes(query)
      );
    }
    
    return filtered;
  }, [recommendedEvents, searchQuery, activeCategory]);

  const filteredUpcomingEvents = useMemo(() => {
    let filtered = upcomingEvents;
    
    // Filter by category
    if (activeCategory !== 'all') {
      filtered = filtered.filter(event => getEventCategory(event) === activeCategory);
    }
    
    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      filtered = filtered.filter(event => 
        event.eventName.toLowerCase().includes(query) ||
        event.cityName.toLowerCase().includes(query) ||
        event.weather.toLowerCase().includes(query)
      );
    }
    
    return filtered;
  }, [upcomingEvents, searchQuery, activeCategory]);

  // Handle search input change
  const handleSearchChange = (value) => {
    setSearchQuery(value);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header 
        search={searchQuery}
        onSearchChange={handleSearchChange}
      />
      
      <Hero 
        bannerImage="/assets/background.jpg"
        title="Discover Exciting Events Happening Near You – Stay Tuned for Updates!"
        subtitle="Lorem ipsum dolor sit amet consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
      />
      
      {/* Category Tabs */}
      <div className="container mx-auto px-4 py-8">
        <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
          <TabsList className="grid w-full grid-cols-6 bg-card-modern p-2 rounded-xl shadow-md border-0">
            {categories.map((category) => (
              <TabsTrigger 
                key={category.id} 
                value={category.id}
                className="text-sm font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-glow rounded-lg transition-all duration-300 hover:bg-primary/10"
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-6">
              {!isLoadingRecommended && filteredRecommendedEvents.length > 0 && (
                <RecommendedCarousel items={filteredRecommendedEvents} />
              )}
              
              <UpcomingList
                items={filteredUpcomingEvents}
                onFetchNextPage={handleFetchNextPage}
                isLoading={isLoadingUpcoming}
                hasMore={hasMoreUpcoming}
              />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default Events;