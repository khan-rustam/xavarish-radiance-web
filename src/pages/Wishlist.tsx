
import { Heart, ShoppingBag, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useWishlist } from '@/contexts/WishlistContext';
import { useCart } from '@/contexts/CartContext';
import { Link } from 'react-router-dom';

const Wishlist = () => {
  const { items, removeItem } = useWishlist();
  const { addItem } = useCart();

  const handleAddToCart = (item: any) => {
    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image
    });
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <Heart className="h-16 w-16 text-muted-foreground mx-auto" />
            <h1 className="text-3xl font-serif font-bold text-charcoal">Your Wishlist is Empty</h1>
            <p className="text-lg text-muted-foreground">
              Save your favorite products to your wishlist and never lose track of what you love.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link to="/shop">Explore Products</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-serif font-bold text-charcoal mb-2">My Wishlist</h1>
          <p className="text-muted-foreground">{items.length} items saved</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.map((item) => (
            <Card key={item.id} className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-0">
                <div className="relative">
                  <Link to={`/product/${item.id}`}>
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </Link>
                  
                  <Button
                    size="icon"
                    variant="secondary"
                    className="absolute top-4 right-4 bg-white/90 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => removeItem(item.id)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="p-4 space-y-3">
                  <Link to={`/product/${item.id}`}>
                    <h3 className="font-medium text-charcoal hover:text-primary transition-colors">
                      {item.name}
                    </h3>
                  </Link>
                  
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold text-charcoal">
                      ${item.price}
                    </span>
                    {item.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        ${item.originalPrice}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button 
                      className="flex-1"
                      onClick={() => handleAddToCart(item)}
                    >
                      <ShoppingBag className="mr-2 h-4 w-4" />
                      Add to Cart
                    </Button>
                    <Button 
                      variant="outline"
                      size="icon"
                      onClick={() => removeItem(item.id)}
                    >
                      <Heart className="h-4 w-4 fill-current text-red-500" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/shop">Continue Shopping</Link>
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Wishlist;
