import * as React from "react"
import useEmblaCarousel from 'embla-carousel-react'
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "../../../../shared/ui/button"

function Carousel({ children, className }) {
  const [emblaRef, emblaApi] = useEmblaCarousel()

  return (
    <div className={`${className} mb-20`}>
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex -ml-4">
          {React.Children.map(children, (child) => (
            <div className="pl-4 min-w-0 flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%]">
              {child}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center gap-8 mt-4">
        <Button 
          variant="outline" 
          size="icon" 
          className="hidden md:flex"
          onClick={() => emblaApi?.scrollPrev()}
        >
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <Button 
          variant="outline" 
          size="icon" 
          className="hidden md:flex"
          onClick={() => emblaApi?.scrollNext()}
        >
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

export { Carousel } 