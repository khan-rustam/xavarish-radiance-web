
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-6xl lg:text-8xl font-serif font-bold text-gradient">404</h1>
            <h2 className="text-2xl lg:text-3xl font-serif font-semibold text-charcoal">
              Page Not Found
            </h2>
            <p className="text-lg text-muted-foreground max-w-md mx-auto">
              Sorry, we couldn't find the page you're looking for. The page may have been moved or doesn't exist.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link to="/">Return Home</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/shop">Browse Products</Link>
            </Button>
          </div>

          <div className="pt-8">
            <p className="text-sm text-muted-foreground mb-4">
              Popular pages you might be looking for:
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              <Button variant="ghost" size="sm" asChild>
                <Link to="/shop">Shop</Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/about">About Us</Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/blog">Beauty Blog</Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/contact">Contact</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;
