import { IconBrandFacebook, IconBrandInstagram, IconBrandTwitter } from "@tabler/icons-react"

export const Footer = () =>{
    return (

        <footer className="bg-violet-800 text-white py-16 px-8">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-4">LaundryApp</h3>
          <p className="text-gray-400 mb-4">
            Making laundry day stress-free with our innovative pickup and delivery service.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><IconBrandFacebook/></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><IconBrandTwitter/></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><IconBrandInstagram/></a>
          </div>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">Pickup & Delivery</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Express Wash</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Premium Care</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Eco-Friendly</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold mb-4">Support</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Track Order</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
        <p>&copy; 2025 LaundrySeva All rights reserved.</p>
      </div>
    </div>
  </footer>
    )
}