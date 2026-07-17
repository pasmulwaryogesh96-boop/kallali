import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";

export default function Footer() {
  const links = {
    Product: ["Features", "Integrations", "Pricing", "Changelog", "Docs"],
    Company: ["About Us", "Careers", "Blog", "Contact"],
    Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
  };

  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
          
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded bg-kallali-green flex items-center justify-center text-white font-bold text-xl">
                K
              </div>
              <span className="text-xl font-bold tracking-tight text-gray-900">
                Kallali
              </span>
            </a>
            <p className="text-gray-500 text-sm max-w-xs mb-6">
              Sustainable productivity for teams that care about deep work. Cut the noise, do more with less friction.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-kallali-green transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-kallali-green transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-kallali-green transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Product</h4>
            <ul className="space-y-3">
              {links.Product.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-500 text-sm hover:text-kallali-green transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-3">
              {links.Company.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-500 text-sm hover:text-kallali-green transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Legal</h4>
            <ul className="space-y-3">
              {links.Legal.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-500 text-sm hover:text-kallali-green transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Kallali Inc. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <span>Designed with intention.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}