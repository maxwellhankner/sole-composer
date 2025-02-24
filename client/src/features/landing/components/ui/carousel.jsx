import * as React from "react"
import useEmblaCarousel from 'embla-carousel-react'
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "../../../../shared/ui/button"

function Carousel({ children, className }) {
  const [emblaRef, emblaApi] = useEmblaCarousel()

  return (
    <div className={`relative ${className}`}>
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex -ml-4">
          {React.Children.map(children, (child) => (
            <div className="pl-4 min-w-0 flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%]">
              {child}
            </div>
          ))}
        </div>
      </div>
      <Button 
        variant="outline" 
        size="icon" 
        className="absolute hidden md:-left-4 md:flex top-1/2 -translate-y-1/2"
        onClick={() => emblaApi?.scrollPrev()}
      >
        <ArrowLeft className="h-4 w-4" />
      </Button>
      <Button 
        variant="outline" 
        size="icon" 
        className="absolute hidden md:-right-4 md:flex top-1/2 -translate-y-1/2"
        onClick={() => emblaApi?.scrollNext()}
      >
        <ArrowRight className="h-4 w-4" />
      </Button>
    </div>
  )
}

export { Carousel } 