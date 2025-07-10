
import { Calendar, User, Tag, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: '1',
    slug: 'summer-makeup-trends-2024',
    title: 'Summer Makeup Trends 2024: Embrace the Glow',
    excerpt: 'Discover the hottest makeup trends this summer, from dewy skin to bold neon accents. Learn how to achieve these looks with our expert tips.',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=400&fit=crop',
    author: 'Elena Xavarish',
    date: '2024-06-15',
    category: 'Trends',
    readTime: '5 min read'
  },
  {
    id: '2',
    slug: 'skincare-routine-for-glowing-skin',
    title: 'The Ultimate Skincare Routine for Radiant, Glowing Skin',
    excerpt: 'Build the perfect skincare routine with our step-by-step guide. From cleansing to moisturizing, learn the secrets to healthy, luminous skin.',
    image: 'https://images.unsplash.com/photo-1570194065650-d99fbf41e2d9?w=600&h=400&fit=crop',
    author: 'Dr. Sarah Chen',
    date: '2024-06-10',
    category: 'Skincare',
    readTime: '8 min read'
  },
  {
    id: '3',
    slug: 'choosing-perfect-foundation-shade',
    title: 'How to Choose the Perfect Foundation Shade for Your Skin Tone',
    excerpt: 'Never struggle with foundation matching again. Our comprehensive guide will help you find your perfect shade every time.',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&h=400&fit=crop',
    author: 'Maya Rodriguez',
    date: '2024-06-05',
    category: 'Tutorial',
    readTime: '6 min read'
  },
  {
    id: '4',
    slug: 'sustainable-beauty-practices',
    title: 'Sustainable Beauty: How to Build an Eco-Friendly Makeup Collection',
    excerpt: 'Learn about sustainable beauty practices and discover eco-friendly products that are good for you and the planet.',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&h=400&fit=crop',
    author: 'Green Beauty Team',
    date: '2024-05-28',
    category: 'Sustainability',
    readTime: '7 min read'
  },
  {
    id: '5',
    slug: 'evening-makeup-look-tutorial',
    title: 'Creating the Perfect Evening Glamour Look',
    excerpt: 'Transform your daytime look into evening glamour with our step-by-step tutorial. Perfect for special occasions and date nights.',
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=600&h=400&fit=crop',
    author: 'Sophia Laurent',
    date: '2024-05-20',
    category: 'Tutorial',
    readTime: '10 min read'
  },
  {
    id: '6',
    slug: 'ingredient-spotlight-hyaluronic-acid',
    title: 'Ingredient Spotlight: The Power of Hyaluronic Acid',
    excerpt: 'Everything you need to know about hyaluronic acid and why it should be a staple in your skincare routine.',
    image: 'https://images.unsplash.com/photo-1631730486572-f20ea39709d2?w=600&h=400&fit=crop',
    author: 'Dr. Michael Kim',
    date: '2024-05-15',
    category: 'Ingredients',
    readTime: '4 min read'
  }
];

const categories = ['All', 'Trends', 'Tutorial', 'Skincare', 'Sustainability', 'Ingredients'];

const Blog = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 lg:py-24 brand-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-charcoal mb-6">
              Beauty <span className="text-gradient">Blog</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Discover the latest beauty trends, tutorials, and expert tips to enhance your natural radiance.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === 'All' ? 'default' : 'outline'}
              size="sm"
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Post */}
        <div className="mb-12">
          <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative">
                <img 
                  src={blogPosts[0].image} 
                  alt={blogPosts[0].title}
                  className="w-full h-64 lg:h-full object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-primary text-white">
                  Featured
                </Badge>
              </div>
              <CardContent className="p-8 flex flex-col justify-center">
                <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(blogPosts[0].date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>{blogPosts[0].author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Tag className="h-4 w-4" />
                    <span>{blogPosts[0].category}</span>
                  </div>
                </div>
                
                <h2 className="text-2xl lg:text-3xl font-serif font-bold text-charcoal mb-4">
                  {blogPosts[0].title}
                </h2>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    {blogPosts[0].readTime}
                  </span>
                  <Button asChild>
                    <Link to={`/blog/${blogPosts[0].slug}`}>
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post, index) => (
            <Card 
              key={post.id} 
              className="group hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <Link to={`/blog/${post.slug}`}>
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </Link>
                  <Badge 
                    variant="secondary" 
                    className="absolute top-4 left-4 bg-white/90 text-charcoal"
                  >
                    {post.category}
                  </Badge>
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="h-3 w-3" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  
                  <Link to={`/blog/${post.slug}`}>
                    <h3 className="text-lg font-serif font-semibold text-charcoal hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                  </Link>
                  
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xs text-muted-foreground">
                      {post.readTime}
                    </span>
                    <Button variant="ghost" size="sm" asChild>
                      <Link to={`/blog/${post.slug}`}>
                        Read More <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Posts
          </Button>
        </div>
      </div>

      {/* Newsletter Signup */}
      <section className="py-16 bg-soft-pink">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl lg:text-3xl font-serif font-bold text-charcoal mb-4">
              Never Miss a Beauty Tip
            </h2>
            <p className="text-muted-foreground mb-6">
              Subscribe to our newsletter for the latest beauty trends, tutorials, and exclusive offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
