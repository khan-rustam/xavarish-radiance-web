
import { useParams } from 'react-router-dom';
import { Calendar, User, Tag, ArrowLeft, Share2, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

// Mock blog post data
const blogPost = {
  slug: 'summer-makeup-trends-2024',
  title: 'Summer Makeup Trends 2024: Embrace the Glow',
  excerpt: 'Discover the hottest makeup trends this summer, from dewy skin to bold neon accents.',
  content: `
    <p class="lead">As we step into the warmer months, it's time to refresh our makeup routines with the latest summer trends that celebrate natural beauty and radiant skin.</p>
    
    <h2>The Dewy Skin Revolution</h2>
    <p>This summer is all about achieving that perfect dewy, glass-skin look. Say goodbye to matte finishes and hello to luminous, healthy-looking skin that appears to glow from within.</p>
    
    <h3>How to Achieve the Perfect Dewy Look:</h3>
    <ul>
      <li>Start with a hydrating primer to create the perfect base</li>
      <li>Use a lightweight, illuminating foundation</li>
      <li>Add strategic highlights to the high points of your face</li>
      <li>Set only the T-zone to maintain that natural glow</li>
    </ul>
    
    <h2>Bold Neon Accents</h2>
    <p>While the base remains natural, summer 2024 is seeing pops of vibrant neon colors making their way into mainstream beauty. Think electric blues, hot pinks, and lime greens used sparingly for maximum impact.</p>
    
    <h3>Ways to Incorporate Neon:</h3>
    <ul>
      <li>A single stroke of neon eyeliner</li>
      <li>Bright mascara on bottom lashes only</li>
      <li>Neon lip tint for a fresh, youthful look</li>
      <li>Colorful inner corner highlights</li>
    </ul>
    
    <h2>Sun-Kissed Everything</h2>
    <p>The sun-kissed look continues to dominate, but this year it's more subtle and natural. Think gentle bronzing that mimics a real tan, paired with peachy blushes that give you that just-back-from-vacation glow.</p>
    
    <h2>Minimalist Eye Makeup</h2>
    <p>Less is definitely more when it comes to eye makeup this summer. The focus is on enhancing your natural eye shape with subtle definition rather than dramatic looks.</p>
    
    <p>Remember, the key to any great summer look is to enhance your natural beauty while staying comfortable in the heat. These trends are all about feeling confident and radiant, no matter what the temperature!</p>
  `,
  image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1200&h=600&fit=crop',
  author: 'Elena Xavarish',
  date: '2024-06-15',
  category: 'Trends',
  readTime: '5 min read',
  tags: ['Summer', 'Trends', 'Makeup', 'Glowing Skin', 'Natural Beauty']
};

const relatedPosts = [
  {
    slug: 'skincare-routine-for-glowing-skin',
    title: 'The Ultimate Skincare Routine for Radiant, Glowing Skin',
    image: 'https://images.unsplash.com/photo-1570194065650-d99fbf41e2d9?w=300&h=200&fit=crop',
    date: '2024-06-10'
  },
  {
    slug: 'choosing-perfect-foundation-shade',
    title: 'How to Choose the Perfect Foundation Shade',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=300&h=200&fit=crop',
    date: '2024-06-05'
  },
  {
    slug: 'evening-makeup-look-tutorial',
    title: 'Creating the Perfect Evening Glamour Look',
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=300&h=200&fit=crop',
    date: '2024-05-20'
  }
];

const BlogPost = () => {
  const { slug } = useParams();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <article className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <div className="mb-8">
          <Button variant="ghost" asChild>
            <Link to="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
        </div>

        {/* Article Header */}
        <header className="mb-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
              <Badge variant="secondary">{blogPost.category}</Badge>
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>{new Date(blogPost.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center space-x-1">
                <User className="h-4 w-4" />
                <span>{blogPost.author}</span>
              </div>
              <span>{blogPost.readTime}</span>
            </div>
            
            <h1 className="text-3xl lg:text-5xl font-serif font-bold text-charcoal mb-6 leading-tight">
              {blogPost.title}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {blogPost.excerpt}
            </p>

            {/* Social Share */}
            <div className="flex items-center space-x-4 mb-8">
              <span className="text-sm font-medium text-charcoal">Share:</span>
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" size="sm">
                <Heart className="h-4 w-4 mr-2" />
                Save
              </Button>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-12">
          <img 
            src={blogPost.image} 
            alt={blogPost.title}
            className="w-full h-64 lg:h-96 object-cover rounded-2xl luxury-shadow-lg"
          />
        </div>

        <div className="grid lg:grid-cols-4 gap-12">
          {/* Article Content */}
          <div className="lg:col-span-3">
            <div 
              className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-charcoal prose-p:text-muted-foreground prose-p:leading-relaxed prose-li:text-muted-foreground prose-a:text-primary hover:prose-a:text-primary/80"
              dangerouslySetInnerHTML={{ __html: blogPost.content }}
            />

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="font-semibold text-charcoal mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {blogPost.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="rounded-full">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Author Bio */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-start space-x-4">
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=100&h=100&fit=crop&crop=face" 
                  alt={blogPost.author}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-serif font-semibold text-charcoal text-lg mb-2">
                    {blogPost.author}
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    Founder & Creative Director of Xavarish. Elena is a beauty industry veteran with over 15 years of experience in luxury cosmetics and skincare.
                  </p>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">Follow</Button>
                    <Button variant="outline" size="sm">View Profile</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              {/* Table of Contents */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-serif font-semibold text-charcoal mb-4">Table of Contents</h3>
                  <nav className="space-y-2">
                    <a href="#dewy-skin" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                      The Dewy Skin Revolution
                    </a>
                    <a href="#neon-accents" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                      Bold Neon Accents
                    </a>
                    <a href="#sun-kissed" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                      Sun-Kissed Everything
                    </a>
                    <a href="#minimalist-eyes" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                      Minimalist Eye Makeup
                    </a>
                  </nav>
                </CardContent>
              </Card>

              {/* Newsletter Signup */}
              <Card className="bg-soft-pink">
                <CardContent className="p-6 text-center">
                  <h3 className="font-serif font-semibold text-charcoal mb-2">
                    Get Beauty Tips
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Subscribe for weekly beauty tips and exclusive content.
                  </p>
                  <div className="space-y-2">
                    <input 
                      type="email"
                      placeholder="Your email"
                      className="w-full px-3 py-2 text-sm rounded border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                    <Button size="sm" className="w-full bg-primary hover:bg-primary/90">
                      Subscribe
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        <section className="mt-16 pt-12 border-t border-gray-200">
          <h2 className="text-2xl font-serif font-bold text-charcoal mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedPosts.map((post) => (
              <Card key={post.slug} className="group hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <Link to={`/blog/${post.slug}`}>
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </Link>
                  <div className="p-4">
                    <p className="text-xs text-muted-foreground mb-2">
                      {new Date(post.date).toLocaleDateString()}
                    </p>
                    <Link to={`/blog/${post.slug}`}>
                      <h3 className="font-medium text-charcoal hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;
