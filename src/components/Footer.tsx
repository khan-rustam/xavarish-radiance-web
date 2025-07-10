
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-soft-pink border-t border-pink-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="block">
              <h3 className="text-2xl font-serif font-semibold text-charcoal">
                Xavarish
              </h3>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Redefine your radiance with our luxury cosmetics collection. Premium quality, elegant design, timeless beauty.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="h-8 w-8 text-charcoal hover:text-primary">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-charcoal hover:text-primary">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-charcoal hover:text-primary">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-charcoal hover:text-primary">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-charcoal">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/shop" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Shop All
              </Link>
              <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <Link to="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Beauty Blog
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Customer Care */}
          <div className="space-y-4">
            <h4 className="font-semibold text-charcoal">Customer Care</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Shipping & Returns
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Size Guide
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                FAQ
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Track Your Order
              </a>
            </nav>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="font-semibold text-charcoal">Stay Connected</h4>
            <p className="text-sm text-muted-foreground">
              Subscribe for exclusive offers and beauty tips
            </p>
            <div className="flex space-x-2">
              <Input 
                placeholder="Enter your email" 
                className="flex-1 text-sm"
              />
              <Button size="sm" className="bg-primary hover:bg-primary/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-pink-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © 2024 Xavarish. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
