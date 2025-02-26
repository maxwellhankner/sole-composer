import { FaGithub, FaLinkedin } from "react-icons/fa"
import { Button } from "../../../landing/ui/button"
import { H3, H4, P } from "../../../landing/ui/typography"

export function Footer() {
  return (
    <footer className="bg-black text-gray-300">
      <div className="max-w-[1100px] mx-auto px-10 pt-10 pb-12 md:pb-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div className="text-center">
            <H3 className="text-white text-lg mb-4">
              <span className="font-semibold">Sole</span> Composer
            </H3>
            <P className="text-sm">
              Create and customize your own unique shoe designs with our powerful 3D design tool.
            </P>
          </div>
          <div className="text-center">
            <H4 className="text-white font-semibold mb-4">Quick Links</H4>
            <ul className="space-y-2 text-sm">
              <li><a href="" className="hover:text-white transition-colors">About</a></li>
              <li><a href="" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div className="text-center">
            <H4 className="text-white font-semibold mb-4">Connect</H4>
            <div className="flex justify-center space-x-4">
              <a 
                href="https://github.com/maxwellhankner/sole-composer" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-black transition-colors">
                  <FaGithub className="h-5 w-5" />
                </Button>
              </a>
              <a 
                href="https://www.linkedin.com/in/maxwellhankner/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-black transition-colors">
                  <FaLinkedin className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
        <div className="pt-0">
          <P className="text-sm text-center">
            © {new Date().getFullYear()} Sole Composer. All rights reserved.
          </P>
        </div>
      </div>
    </footer>
  )
}
