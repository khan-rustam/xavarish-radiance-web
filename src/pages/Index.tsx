
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ShoppingBag, Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useCart } from '@/contexts/CartContext';
import { useWishlist } from '@/contexts/WishlistContext';
import { AnimatedSection } from '@/components/animations/AnimatedSection';
import { motion } from 'framer-motion';

const featuredProducts = [
  {
    id: '1',
    name: 'Radiant Glow Foundation',
    price: 68,
    originalPrice: 85,
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop',
    rating: 4.8,
    reviews: 124
  },
  {
    id: '2',
    name: 'Silk Velvet Lipstick',
    price: 42,
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=400&fit=crop',
    rating: 4.9,
    reviews: 89
  },
  {
    id: '3',
    name: 'Luminous Eye Palette',
    price: 95,
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&h=400&fit=crop',
    rating: 4.7,
    reviews: 156
  },
  {
    id: '4',
    name: 'Diamond Highlighter',
    price: 58,
    originalPrice: 72,
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=400&fit=crop',
    rating: 4.6,
    reviews: 98
  }
];

const categories = [
  {
    name: 'Face',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300&h=300&fit=crop',
    count: '24 Products'
  },
  {
    name: 'Eyes',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=300&h=300&fit=crop',
    count: '18 Products'
  },
  {
    name: 'Lips',
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=300&h=300&fit=crop',
    count: '15 Products'
  },
  {
    name: 'Skincare',
    image: 'https://images.unsplash.com/photo-1570194065650-d99fbf41e2d9?w=300&h=300&fit=crop',
    count: '32 Products'
  }
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [email, setEmail] = useState('');
  const { addItem } = useCart();
  const { addItem: addToWishlist, isInWishlist, removeItem: removeFromWishlist } = useWishlist();

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredProducts.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredProducts.length) % featuredProducts.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleAddToCart = (product: any) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
  };

  const handleWishlistToggle = (product: any) => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        originalPrice: product.originalPrice
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden brand-gradient">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent z-10"></div>
        <div className="relative z-20 text-center max-w-4xl mx-auto px-4 animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-charcoal mb-6">
            Redefine Radiance
            <span className="block text-gradient">with Xavarish</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover the art of luxury beauty with our curated collection of premium cosmetics designed for the modern, sophisticated woman.
          </p>
          <div className="space-x-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-3">
              <Link to="/shop">
                Explore Collection <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-8 py-3">
              <Link to="/about">Our Story</Link>
            </Button>
          </div>
        </div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-10"></div>
      </section>

      {/* Featured Products Carousel */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-charcoal mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our most loved products, crafted with the finest ingredients for exceptional results.
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {featuredProducts.map((product) => (
                  <div key={product.id} className="w-full flex-shrink-0 px-4">
                    <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
                      <div className="space-y-6">
                        <div className="flex items-center space-x-2">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                            />
                          ))}
                          <span className="text-sm text-muted-foreground">
                            {product.rating} ({product.reviews} reviews)
                          </span>
                        </div>
                        <h3 className="text-3xl lg:text-4xl font-serif font-bold text-charcoal">
                          {product.name}
                        </h3>
                        <p className="text-lg text-muted-foreground">
                          Experience the perfect blend of luxury and performance with our signature formula that delivers radiant, long-lasting results.
                        </p>
                        <div className="flex items-center space-x-4">
                          <span className="text-2xl font-bold text-charcoal">
                            ${product.price}
                          </span>
                          {product.originalPrice && (
                            <span className="text-lg text-muted-foreground line-through">
                              ${product.originalPrice}
                            </span>
                          )}
                        </div>
                        <div className="flex space-x-4">
                          <Button 
                            size="lg" 
                            className="bg-primary hover:bg-primary/90"
                            onClick={() => handleAddToCart(product)}
                          >
                            <ShoppingBag className="mr-2 h-5 w-5" />
                            Add to Cart
                          </Button>
                          <Button 
                            variant="outline" 
                            size="lg"
                            onClick={() => handleWishlistToggle(product)}
                          >
                            <Heart 
                              className={`mr-2 h-5 w-5 ${isInWishlist(product.id) ? 'fill-current text-red-500' : ''}`} 
                            />
                            Wishlist
                          </Button>
                        </div>
                      </div>
                      <div className="relative">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-96 lg:h-[500px] object-cover rounded-2xl luxury-shadow-lg"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white"
              onClick={nextSlide}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            {/* Dots */}
            <div className="flex justify-center space-x-2 mt-8">
              {featuredProducts.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-primary' : 'bg-gray-300'
                  }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 lg:py-24 bg-soft-pink">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-charcoal mb-4">
              Shop by Category
            </h2>
            <p className="text-lg text-muted-foreground">
              Find the perfect products for every aspect of your beauty routine
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Link 
                key={category.name} 
                to="/shop" 
                className="group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img 
                        src={category.image} 
                        alt={category.name}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-xl font-serif font-semibold">{category.name}</h3>
                        <p className="text-sm opacity-90">{category.count}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story Teaser */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1570194065650-d99fbf41e2d9?w=1920&h=1080&fit=crop')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-white/90"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-slide-up">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-charcoal mb-6">
              Our Story of Elegance
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Born from a passion for timeless beauty and modern sophistication, Xavarish represents the perfect harmony between luxury and accessibility. Every product is meticulously crafted to enhance your natural radiance while celebrating your unique beauty.
            </p>
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              <Link to="/about">
                Discover Our Journey <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 lg:py-24 gold-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-charcoal mb-4">
              Join Our Beauty Community
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Be the first to know about new arrivals, exclusive offers, and beauty tips from our experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1"
              />
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              By subscribing, you agree to our Privacy Policy and Terms of Service.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
