
import { Award, Heart, Leaf, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const values = [
  {
    icon: Heart,
    title: 'Passion for Beauty',
    description: 'We believe beauty is an art form that deserves the finest ingredients and meticulous craftsmanship.'
  },
  {
    icon: Leaf,
    title: 'Natural Excellence',
    description: 'Our products blend natural botanicals with advanced science for safe, effective results.'
  },
  {
    icon: Shield,
    title: 'Quality Assurance',
    description: 'Every product undergoes rigorous testing to ensure the highest standards of quality and safety.'
  },
  {
    icon: Award,
    title: 'Luxury Experience',
    description: 'From packaging to application, we create an elevated experience that celebrates your beauty ritual.'
  }
];

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 lg:py-24 brand-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-charcoal mb-6">
              Our Story of <span className="text-gradient">Elegance</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Xavarish was born from a vision to redefine luxury beauty. We believe that every woman deserves to feel radiant, confident, and beautifully herself.
            </p>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-up">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-charcoal">
                Crafting Beauty Since 2020
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded in the heart of New York, Xavarish emerged from a simple yet profound belief: that luxury beauty should be both accessible and extraordinary. Our journey began with a small team of passionate beauty experts who shared a vision of creating products that celebrate individuality while delivering exceptional results.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, we continue to push the boundaries of beauty innovation, combining the finest natural ingredients with cutting-edge technology to create products that not only enhance your appearance but also nourish your skin and uplift your spirit.
              </p>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/shop">Explore Our Collection</Link>
              </Button>
            </div>
            <div className="relative animate-scale-in">
              <img 
                src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=600&fit=crop" 
                alt="Xavarish Beauty Products"
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl luxury-shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Founder */}
      <section className="py-16 lg:py-24 bg-soft-pink">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative animate-scale-in lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500&h=600&fit=crop" 
                alt="Founder Portrait"
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl luxury-shadow-lg"
              />
            </div>
            <div className="space-y-6 animate-slide-up lg:order-2">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-charcoal">
                Meet Elena Xavarish
              </h2>
              <p className="text-lg font-medium text-primary">
                Founder & Creative Director
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                "Beauty has always been my passion and my language. Growing up in a family of artists, I learned early that true beauty comes from within, but the right products can help that inner radiance shine through."
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With over 15 years of experience in the beauty industry, Elena has worked with leading cosmetic houses before founding Xavarish. Her vision was to create a brand that celebrates diversity, promotes self-expression, and delivers luxury without compromise.
              </p>
              <blockquote className="text-xl italic text-charcoal border-l-4 border-primary pl-6">
                "Every woman deserves to feel like the masterpiece she already is."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-charcoal mb-4">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do, from product development to customer experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card 
                key={value.title} 
                className="text-center hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-soft-gold rounded-full">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-charcoal">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Certifications */}
      <section className="py-16 lg:py-24 gold-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-charcoal mb-4">
              Trusted & Certified
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our commitment to quality and safety is recognized by leading industry organizations.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <div className="text-center space-y-2">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto luxury-shadow">
                <Shield className="h-10 w-10 text-primary" />
              </div>
              <p className="font-medium text-charcoal">FDA Approved</p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto luxury-shadow">
                <Leaf className="h-10 w-10 text-primary" />
              </div>
              <p className="font-medium text-charcoal">Cruelty-Free</p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto luxury-shadow">
                <Heart className="h-10 w-10 text-primary" />
              </div>
              <p className="font-medium text-charcoal">Dermatologist Tested</p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto luxury-shadow">
                <Award className="h-10 w-10 text-primary" />
              </div>
              <p className="font-medium text-charcoal">Award Winning</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-charcoal text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-slide-up">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">
              Join our journey of elegance
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Become part of the Xavarish community and discover how luxury beauty can transform your daily routine into a moment of self-celebration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-charcoal hover:bg-gray-100">
                <Link to="/shop">Shop Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-charcoal">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
