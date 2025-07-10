
import { useState } from 'react';
import { Grid, List, SlidersHorizontal, Heart, ShoppingBag, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useCart } from '@/contexts/CartContext';
import { useWishlist } from '@/contexts/WishlistContext';
import { Link } from 'react-router-dom';

const products = [
  {
    id: '1',
    name: 'Radiant Glow Foundation',
    price: 68,
    originalPrice: 85,
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop',
    rating: 4.8,
    reviews: 124,
    category: 'Face',
    skinType: 'All Types'
  },
  {
    id: '2',
    name: 'Silk Velvet Lipstick',
    price: 42,
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=400&fit=crop',
    rating: 4.9,
    reviews: 89,
    category: 'Lips',
    skinType: 'All Types'
  },
  {
    id: '3',
    name: 'Luminous Eye Palette',
    price: 95,
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&h=400&fit=crop',
    rating: 4.7,
    reviews: 156,
    category: 'Eyes',
    skinType: 'All Types'
  },
  {
    id: '4',
    name: 'Diamond Highlighter',
    price: 58,
    originalPrice: 72,
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=400&fit=crop',
    rating: 4.6,
    reviews: 98,
    category: 'Face',
    skinType: 'All Types'
  },
  {
    id: '5',
    name: 'Hydrating Serum',
    price: 78,
    image: 'https://images.unsplash.com/photo-1570194065650-d99fbf41e2d9?w=400&h=400&fit=crop',
    rating: 4.8,
    reviews: 203,
    category: 'Skincare',
    skinType: 'Dry'
  },
  {
    id: '6',
    name: 'Matte Liquid Lipstick',
    price: 38,
    image: 'https://images.unsplash.com/photo-1631730486572-f20ea39709d2?w=400&h=400&fit=crop',
    rating: 4.5,
    reviews: 76,
    category: 'Lips',
    skinType: 'All Types'
  }
];

const Shop = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [priceRange, setPriceRange] = useState([0, 150]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedSkinTypes, setSelectedSkinTypes] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('featured');
  
  const { addItem } = useCart();
  const { addItem: addToWishlist, isInWishlist, removeItem: removeFromWishlist } = useWishlist();

  const categories = ['Face', 'Eyes', 'Lips', 'Skincare'];
  const skinTypes = ['All Types', 'Dry', 'Oily', 'Combination', 'Sensitive'];

  const handleCategoryChange = (category: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, category]);
    } else {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    }
  };

  const handleSkinTypeChange = (skinType: string, checked: boolean) => {
    if (checked) {
      setSelectedSkinTypes([...selectedSkinTypes, skinType]);
    } else {
      setSelectedSkinTypes(selectedSkinTypes.filter(s => s !== skinType));
    }
  };

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

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    const matchesSkinType = selectedSkinTypes.length === 0 || selectedSkinTypes.includes(product.skinType);
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    return matchesCategory && matchesSkinType && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Page Header */}
      <section className="py-12 lg:py-16 brand-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl lg:text-4xl font-serif font-bold text-charcoal mb-4">
              Luxury Collection
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our complete range of premium cosmetics designed to enhance your natural beauty
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-64 space-y-6">
            <div className="bg-soft-pink p-6 rounded-lg">
              <h3 className="font-semibold text-charcoal mb-4 flex items-center">
                <SlidersHorizontal className="mr-2 h-5 w-5" />
                Filters
              </h3>
              
              {/* Price Range */}
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-charcoal mb-3">Price Range</h4>
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={150}
                    step={5}
                    className="mb-2"
                  />
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>

                {/* Categories */}
                <div>
                  <h4 className="font-medium text-charcoal mb-3">Categories</h4>
                  <div className="space-y-2">
                    {categories.map(category => (
                      <div key={category} className="flex items-center space-x-2">
                        <Checkbox 
                          id={category}
                          checked={selectedCategories.includes(category)}
                          onCheckedChange={(checked) => handleCategoryChange(category, checked as boolean)}
                        />
                        <label htmlFor={category} className="text-sm text-muted-foreground">
                          {category}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skin Type */}
                <div>
                  <h4 className="font-medium text-charcoal mb-3">Skin Type</h4>
                  <div className="space-y-2">
                    {skinTypes.map(skinType => (
                      <div key={skinType} className="flex items-center space-x-2">
                        <Checkbox 
                          id={skinType}
                          checked={selectedSkinTypes.includes(skinType)}
                          onCheckedChange={(checked) => handleSkinTypeChange(skinType, checked as boolean)}
                        />
                        <label htmlFor={skinType} className="text-sm text-muted-foreground">
                          {skinType}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Products */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 space-y-4 sm:space-y-0">
              <p className="text-muted-foreground">
                Showing {filteredProducts.length} of {products.length} products
              </p>
              
              <div className="flex items-center space-x-4">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                  </SelectContent>
                </Select>
                
                <div className="flex items-center space-x-1">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'outline'}
                    size="icon"
                    onClick={() => setViewMode('grid')}
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'outline'}
                    size="icon"
                    onClick={() => setViewMode('list')}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
              {filteredProducts.map((product) => (
                <Card key={product.id} className="group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <Link to={`/product/${product.id}`}>
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </Link>
                      
                      {/* Quick Actions */}
                      <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button
                          size="icon"
                          variant="secondary"
                          className="bg-white/90 hover:bg-white"
                          onClick={() => handleWishlistToggle(product)}
                        >
                          <Heart 
                            className={`h-4 w-4 ${isInWishlist(product.id) ? 'fill-current text-red-500' : ''}`} 
                          />
                        </Button>
                        <Button
                          size="icon"
                          variant="secondary"
                          className="bg-white/90 hover:bg-white"
                          onClick={() => handleAddToCart(product)}
                        >
                          <ShoppingBag className="h-4 w-4" />
                        </Button>
                      </div>

                      {/* Sale Badge */}
                      {product.originalPrice && (
                        <div className="absolute top-4 left-4 bg-primary text-white px-2 py-1 rounded text-xs font-medium">
                          Sale
                        </div>
                      )}
                    </div>
                    
                    <div className="p-4 space-y-2">
                      <div className="flex items-center space-x-2">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                          />
                        ))}
                        <span className="text-xs text-muted-foreground">
                          ({product.reviews})
                        </span>
                      </div>
                      
                      <Link to={`/product/${product.id}`}>
                        <h3 className="font-medium text-charcoal hover:text-primary transition-colors">
                          {product.name}
                        </h3>
                      </Link>
                      
                      <div className="flex items-center space-x-2">
                        <span className="font-semibold text-charcoal">
                          ${product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through">
                            ${product.originalPrice}
                          </span>
                        )}
                      </div>
                      
                      <Button 
                        className="w-full mt-2"
                        onClick={() => handleAddToCart(product)}
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Shop;
