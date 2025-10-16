import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }) {
  return (
    <div
      className={cn("skeleton h-4 w-full", className)}
      {...props}
    />
  );
}

function EventCardSkeleton() {
  return (
    <div className="card-modern overflow-hidden animate-pulse">
      {/* Image Skeleton */}
      <div className="aspect-video bg-muted" />
      
      {/* Content Skeleton */}
      <div className="p-5 space-y-4">
        <Skeleton className="h-6 w-3/4" />
        
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Skeleton className="w-8 h-8 rounded-full" />
            <Skeleton className="h-4 w-1/2" />
          </div>
          <div className="flex items-center gap-3">
            <Skeleton className="w-8 h-8 rounded-full" />
            <Skeleton className="h-4 w-1/3" />
          </div>
          <div className="flex items-center gap-3">
            <Skeleton className="w-8 h-8 rounded-full" />
            <Skeleton className="h-4 w-2/5" />
          </div>
        </div>
        
        <div className="pt-4 border-t border-border/50">
          <div className="flex items-center justify-between">
            <Skeleton className="h-6 w-20 rounded-full" />
            <Skeleton className="w-2 h-2 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

function AuthCardSkeleton() {
  return (
    <div className="w-full max-w-md card-modern border-0 backdrop-blur-sm bg-card/95 animate-pulse">
      {/* Header Skeleton */}
      <div className="space-y-3 text-center pb-6 p-6">
        <Skeleton className="h-8 w-40 mx-auto" />
        <Skeleton className="h-4 w-32 mx-auto" />
      </div>
      
      {/* Content Skeleton */}
      <div className="px-6 pb-6 space-y-6">
        <div className="space-y-3">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-12 w-full" />
        </div>
        <div className="space-y-3">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-12 w-full" />
        </div>
        <Skeleton className="h-12 w-full" />
        <Skeleton className="h-4 w-48 mx-auto" />
      </div>
    </div>
  );
}

function HeaderSkeleton() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between animate-pulse">
        <div className="flex items-center space-x-4">
          <Skeleton className="h-8 w-32" />
          <Skeleton className="h-4 w-16" />
        </div>
        
        <div className="flex-1 max-w-sm mx-4">
          <Skeleton className="h-10 w-full rounded-full" />
        </div>
        
        <div className="flex items-center space-x-2">
          <Skeleton className="h-9 w-20" />
          <Skeleton className="h-9 w-16" />
        </div>
      </div>
    </header>
  );
}

export { Skeleton, EventCardSkeleton, HeaderSkeleton, AuthCardSkeleton };
