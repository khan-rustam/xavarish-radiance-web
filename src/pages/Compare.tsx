
import { X, Check, Star, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useCart } from '@/contexts/CartContext';
import { Link } from 'react-router-dom';

// Mock comparison data
const comparisonProducts = [
  {
    id: '1',
    name: 'Radiant Glow Foundation',
    price: 68,
    originalPrice: 85,
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300&h=300&fit=crop',
    rating: 4.8,
    reviews: 124,
    coverage: 'Full',
    finish: 'Natural',
    wearTime: '16 hours',
    spf: 'SPF 20',
    skinType: 'All Types',
    waterproof: true,
    crueltyFree: true,
    vegan: true,
    ingredients: 'Hyaluronic Acid, Vitamin E, Titanium Dioxide',
    returnPolicy: '30 days'
  },
  {
    id: '2',
    name: 'Silk Velvet Lipstick',
    price: 42,
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=300&h=300&fit=crop',
    rating: 4.9,
    reviews: 89,
    coverage: 'Full',
    finish: 'Matte',
    wearTime: '8 hours',
    spf: 'None',
    skinType: 'All Types',
    waterproof: false,
    crueltyFree: true,
    vegan: false,
    ingredients: 'Jojoba Oil, Vitamin E, Natural Waxes',
    returnPolicy: '30 days'
  },
  {
    id: '3',
    name: 'Diamond Highlighter',
    price: 58,
    originalPrice: 72,
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=300&h=300&fit=crop',
    rating: 4.6,
    reviews: 98,
    coverage: 'Buildable',
    finish: 'Luminous',
    wearTime: '12 hours',
    spf: 'None',
    skinType: 'All Types',
    waterproof: true,
    crueltyFree: true,
    vegan: true,
    ingredients: 'Mica, Pearl Powder, Vitamin C',
    returnPolicy: '30 days'
  }
];

const compareAttributes = [
  { key: 'price', label: 'Price', type: 'price' },
  { key: 'rating', label: 'Rating', type: 'rating' },
  { key: 'reviews', label: 'Reviews', type: 'text' },
  { key: 'coverage', label: 'Coverage', type: 'text' },
  { key: 'finish', label: 'Finish', type: 'text' },
  { key: 'wearTime', label: 'Wear Time', type: 'text' },
  { key: 'spf', label: 'SPF Protection', type: 'text' },
  { key: 'skinType', label: 'Skin Type', type: 'text' },
  { key: 'waterproof', label: 'Waterproof', type: 'boolean' },
  { key: 'crueltyFree', label: 'Cruelty-Free', type: 'boolean' },
  { key: 'vegan', label: 'Vegan', type: 'boolean' },
  { key: 'ingredients', label: 'Key Ingredients', type: 'text' },
  { key: 'returnPolicy', label: 'Return Policy', type: 'text' }
];

const Compare = () => {
  const { addItem } = useCart();

  const handleAddToCart = (product: any) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
  };

  const renderAttributeValue = (value: any, type: string) => {
    switch (type) {
      case 'price':
        return (
          <div className="space-y-1">
            <span className="font-semibold text-lg">${value}</span>
            {comparisonProducts.find(p => p.price === value)?.originalPrice && (
              <div className="text-sm text-muted-foreground line-through">
                ${comparisonProducts.find(p => p.price === value)?.originalPrice}
              </div>
            )}
          </div>
        );
      case 'rating':
        return (
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`h-4 w-4 ${i < Math.floor(value) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                />
              ))}
            </div>
            <span className="font-medium">{value}</span>
          </div>
        );
      case 'boolean':
        return value ? (
          <div className="flex items-center text-green-600">
            <Check className="h-5 w-5 mr-1" />
            <span>Yes</span>
          </div>
        ) : (
          <div className="flex items-center text-red-500">
            <X className="h-5 w-5 mr-1" />
            <span>No</span>
          </div>
        );
      default:
        return <span>{value}</span>;
    }
  };

  if (comparisonProducts.length === 0) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h1 className="text-3xl font-serif font-bold text-charcoal">No Products to Compare</h1>
            <p className="text-lg text-muted-foreground">
              Add products to your comparison list to see detailed side-by-side comparisons.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link to="/shop">Browse Products</Link>
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
      
      {/* Page Header */}
      <section className="py-12 lg:py-16 brand-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl lg:text-4xl font-serif font-bold text-charcoal mb-4">
              Product Comparison
            </h1>
            <p className="text-lg text-muted-foreground">
              Compare products side-by-side to find the perfect match for your needs
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <div className="min-w-[800px]">
            {/* Product Headers */}
            <div className="grid grid-cols-4 gap-6 mb-8">
              <div className="font-semibold text-charcoal"></div>
              {comparisonProducts.map((product) => (
                <Card key={product.id} className="relative">
                  <CardContent className="p-6 text-center">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2 h-6 w-6 text-muted-foreground hover:text-destructive"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                    
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-24 h-24 object-cover rounded-lg mx-auto mb-4"
                    />
                    
                    <h3 className="font-medium text-charcoal mb-2">{product.name}</h3>
                    
                    <div className="space-y-2 mb-4">
                      <div className="text-xl font-bold text-charcoal">
                        ${product.price}
                      </div>
                      {product.originalPrice && (
                        <div className="text-sm text-muted-foreground line-through">
                          ${product.originalPrice}
                        </div>
                      )}
                    </div>
                    
                    <Button 
                      className="w-full mb-2"
                      onClick={() => handleAddToCart(product)}
                    >
                      <ShoppingBag className="mr-2 h-4 w-4" />
                      Add to Cart
                    </Button>
                    
                    <Button variant="outline" size="sm" asChild className="w-full">
                      <Link to={`/product/${product.id}`}>View Details</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Comparison Attributes */}
            <Card>
              <CardHeader>
                <CardTitle className="font-serif">Detailed Comparison</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-0">
                  {compareAttributes.map((attr, index) => (
                    <div 
                      key={attr.key}
                      className={`grid grid-cols-4 gap-6 py-4 px-6 ${
                        index % 2 === 0 ? 'bg-soft-pink' : 'bg-white'
                      }`}
                    >
                      <div className="font-medium text-charcoal">
                        {attr.label}
                      </div>
                      {comparisonProducts.map((product) => (
                        <div key={`${product.id}-${attr.key}`} className="text-sm">
                          {renderAttributeValue(product[attr.key as keyof typeof product], attr.type)}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Button variant="outline" size="lg">
            Clear Comparison
          </Button>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link to="/shop">Add More Products</Link>
          </Button>
        </div>

        {/* Comparison Tips */}
        <Card className="mt-12">
          <CardContent className="p-6">
            <h3 className="font-serif font-semibold text-charcoal mb-4">
              How to Choose the Right Product
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-charcoal mb-2">Consider Your Skin Type</h4>
                <p className="text-sm text-muted-foreground">
                  Different products work better for different skin types. Consider whether you have dry, oily, combination, or sensitive skin.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-charcoal mb-2">Think About Coverage</h4>
                <p className="text-sm text-muted-foreground">
                  Do you prefer full coverage for special occasions or light coverage for everyday wear? Choose accordingly.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-charcoal mb-2">Check Wear Time</h4>
                <p className="text-sm text-muted-foreground">
                  Consider how long you need your makeup to last. Some products are designed for all-day wear while others are perfect for shorter periods.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-charcoal mb-2">Read Reviews</h4>
                <p className="text-sm text-muted-foreground">
                  Customer reviews can provide valuable insights into how products perform in real-world conditions.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default Compare;
