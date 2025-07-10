
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Star, Heart, ShoppingBag, Minus, Plus, Share2, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useCart } from '@/contexts/CartContext';
import { useWishlist } from '@/contexts/WishlistContext';

// Mock product data - in real app, this would come from API
const product = {
  id: '1',
  name: 'Radiant Glow Foundation',
  price: 68,
  originalPrice: 85,
  rating: 4.8,
  reviews: 124,
  images: [
    'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1570194065650-d99fbf41e2d9?w=600&h=600&fit=crop',
  ],
  description: 'Experience the perfect blend of coverage and radiance with our award-winning foundation. Formulated with light-reflecting particles and skin-loving ingredients, this foundation delivers a natural, luminous finish that lasts all day.',
  features: [
    'Full coverage with a natural finish',
    'Long-wearing formula (up to 16 hours)',
    'SPF 20 sun protection',
    'Suitable for all skin types',
    'Non-comedogenic and dermatologist tested'
  ],
  ingredients: 'Water, Cyclopentasiloxane, Titanium Dioxide, Dimethicone, Glycerin, Phenyl Trimethicone, PEG-10 Dimethicone, Sodium Chloride, Disteardimonium Hectorite...',
  shades: [
    { name: 'Porcelain', color: '#F5E6D3' },
    { name: 'Ivory', color: '#F2D7B0' },
    { name: 'Sand', color: '#E8C4A0' },
    { name: 'Honey', color: '#D4A574' },
    { name: 'Caramel', color: '#C19A6B' },
    { name: 'Espresso', color: '#8B4513' }
  ]
};

const relatedProducts = [
  {
    id: '2',
    name: 'Silk Velvet Lipstick',
    price: 42,
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=300&h=300&fit=crop',
    rating: 4.9
  },
  {
    id: '3',
    name: 'Luminous Eye Palette',
    price: 95,
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=300&h=300&fit=crop',
    rating: 4.7
  },
  {
    id: '4',
    name: 'Diamond Highlighter',
    price: 58,
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=300&h=300&fit=crop',
    rating: 4.6
  }
];

const ProductDetail = () => {
  const { id } = useParams();
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedShade, setSelectedShade] = useState(product.shades[0]);
  const [quantity, setQuantity] = useState(1);
  
  const { addItem } = useCart();
  const { addItem: addToWishlist, isInWishlist, removeItem: removeFromWishlist } = useWishlist();

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      variant: selectedShade.name
    });
  };

  const handleWishlistToggle = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        originalPrice: product.originalPrice
      });
    }
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-muted-foreground">
          <span>Home</span> / <span>Shop</span> / <span>Face</span> / <span className="text-charcoal font-medium">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <img 
                src={product.images[currentImage]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <Button
                variant="outline"
                size="icon"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white"
                onClick={prevImage}
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white"
                onClick={nextImage}
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
            
            {/* Thumbnail Images */}
            <div className="flex space-x-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  className={`flex-1 aspect-square rounded-lg overflow-hidden border-2 ${
                    currentImage === index ? 'border-primary' : 'border-transparent'
                  }`}
                  onClick={() => setCurrentImage(index)}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6 sticky top-4">
            <div>
              <h1 className="text-3xl font-serif font-bold text-charcoal mb-2">
                {product.name}
              </h1>
              
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                  <span className="text-sm text-muted-foreground ml-2">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
                <Badge variant="secondary">Bestseller</Badge>
              </div>

              <div className="flex items-center space-x-4 mb-4">
                <span className="text-3xl font-bold text-charcoal">
                  ${product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-muted-foreground line-through">
                    ${product.originalPrice}
                  </span>
                )}
                {product.originalPrice && (
                  <Badge className="bg-green-100 text-green-800">
                    Save ${product.originalPrice - product.price}
                  </Badge>
                )}
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              {product.description}
            </p>

            {/* Shade Selection */}
            <div className="space-y-3">
              <Label className="text-base font-medium">
                Shade: {selectedShade.name}
              </Label>
              <div className="flex flex-wrap gap-2">
                {product.shades.map((shade) => (
                  <button
                    key={shade.name}
                    className={`w-10 h-10 rounded-full border-2 ${
                      selectedShade.name === shade.name ? 'border-primary' : 'border-gray-300'
                    }`}
                    style={{ backgroundColor: shade.color }}
                    onClick={() => setSelectedShade(shade)}
                    title={shade.name}
                  />
                ))}
              </div>
            </div>

            {/* Quantity & Actions */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Label className="text-base font-medium">Quantity:</Label>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="font-medium text-center w-8">{quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex space-x-3">
                <Button 
                  size="lg" 
                  className="flex-1 bg-primary hover:bg-primary/90"
                  onClick={handleAddToCart}
                >
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Add to Cart
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={handleWishlistToggle}
                >
                  <Heart 
                    className={`h-5 w-5 ${isInWishlist(product.id) ? 'fill-current text-red-500' : ''}`} 
                  />
                </Button>
                <Button variant="outline" size="lg">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Product Features */}
            <div className="space-y-2">
              <h3 className="font-semibold text-charcoal">Key Features:</h3>
              <ul className="space-y-1">
                {product.features.map((feature, index) => (
                  <li key={index} className="text-sm text-muted-foreground flex items-start">
                    <span className="text-primary mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
              <TabsTrigger value="shipping">Shipping</TabsTrigger>
            </TabsList>
            
            <TabsContent value="description" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <div className="prose max-w-none">
                    <p className="text-lg leading-relaxed text-muted-foreground">
                      {product.description}
                    </p>
                    <p className="mt-4 text-muted-foreground">
                      This luxurious foundation is the result of years of research and development, 
                      combining the latest in cosmetic technology with premium ingredients sourced 
                      from around the world. The unique formula adapts to your skin tone throughout 
                      the day, ensuring a perfect match from morning to night.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="ingredients" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-charcoal mb-4">Full Ingredients List</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {product.ingredients}
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="reviews" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="text-4xl font-bold text-charcoal">{product.rating}</div>
                    <div>
                      <div className="flex items-center space-x-1 mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground">Based on {product.reviews} reviews</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="border-b pb-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <span className="font-medium text-sm">Sarah M.</span>
                        <span className="text-xs text-muted-foreground">Verified Purchase</span>
                      </div>
                      <p className="text-muted-foreground">
                        "Absolutely love this foundation! The coverage is perfect and it lasts all day. 
                        The shade match is spot on and it doesn't feel heavy on my skin."
                      </p>
                    </div>
                    
                    <div className="border-b pb-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="flex items-center space-x-1">
                          {[...Array(4)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                          ))}
                          <Star className="h-4 w-4 text-gray-300" />
                        </div>
                        <span className="font-medium text-sm">Emma K.</span>
                        <span className="text-xs text-muted-foreground">Verified Purchase</span>
                      </div>
                      <p className="text-muted-foreground">
                        "Great foundation with beautiful coverage. Only wish there were more shade options 
                        for deeper skin tones."
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="shipping" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-charcoal mb-2">Shipping Options</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Standard Shipping (5-7 business days) - FREE on orders over $50</li>
                        <li>• Express Shipping (2-3 business days) - $15</li>
                        <li>• Overnight Shipping (1 business day) - $25</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-charcoal mb-2">Returns & Exchanges</h3>
                      <p className="text-muted-foreground">
                        30-day return policy for unused products in original packaging. 
                        Free returns on all orders.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-serif font-bold text-charcoal mb-8">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Card key={relatedProduct.id} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img 
                      src={relatedProduct.image} 
                      alt={relatedProduct.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 space-y-2">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < Math.floor(relatedProduct.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <h3 className="font-medium text-charcoal">{relatedProduct.name}</h3>
                    <p className="font-semibold text-charcoal">${relatedProduct.price}</p>
                    <Button className="w-full mt-2">Add to Cart</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
