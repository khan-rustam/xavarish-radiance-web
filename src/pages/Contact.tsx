
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 lg:py-24 brand-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-charcoal mb-6">
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-slide-up">
            <Card className="luxury-shadow">
              <CardContent className="p-8">
                <h2 className="text-2xl font-serif font-bold text-charcoal mb-6">
                  Send us a Message
                </h2>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Enter your first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Enter your last name" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="What's this about?" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us how we can help you..."
                      rows={6}
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-2xl font-serif font-bold text-charcoal mb-6">
                Contact Information
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Have questions about our products or need personalized beauty advice? We're here to help you discover your perfect look.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-soft-gold p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-charcoal mb-1">Visit Our Flagship Store</h3>
                      <p className="text-muted-foreground">
                        123 Beauty Avenue<br />
                        New York, NY 10001
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-soft-gold p-3 rounded-full">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-charcoal mb-1">Call Us</h3>
                      <p className="text-muted-foreground">
                        +1 (555) 123-4567<br />
                        Monday - Friday, 9 AM - 7 PM EST
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-soft-gold p-3 rounded-full">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-charcoal mb-1">Email Us</h3>
                      <p className="text-muted-foreground">
                        hello@xavarish.com<br />
                        We'll respond within 24 hours
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-soft-gold p-3 rounded-full">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-charcoal mb-1">Store Hours</h3>
                      <div className="text-muted-foreground">
                        <p>Monday - Friday: 10 AM - 8 PM</p>
                        <p>Saturday: 10 AM - 6 PM</p>
                        <p>Sunday: 12 PM - 5 PM</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Social Media */}
            <div className="pt-8 border-t border-pink-200">
              <h3 className="font-semibold text-charcoal mb-4">Follow Us</h3>
              <p className="text-muted-foreground mb-4">
                Stay connected for beauty tips, new arrivals, and exclusive offers.
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm">Instagram</Button>
                <Button variant="outline" size="sm">Facebook</Button>
                <Button variant="outline" size="sm">Twitter</Button>
                <Button variant="outline" size="sm">TikTok</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="py-16 bg-soft-pink">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-charcoal mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground">
                Quick answers to common questions about our products and services.
              </p>
            </div>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-charcoal mb-2">What is your return policy?</h3>
                  <p className="text-muted-foreground">
                    We offer a 30-day return policy for all unused products in their original packaging. 
                    If you're not completely satisfied, we'll provide a full refund or exchange.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-charcoal mb-2">Do you offer free shipping?</h3>
                  <p className="text-muted-foreground">
                    Yes! We offer free standard shipping on all orders over $50 within the United States. 
                    Express shipping options are also available for faster delivery.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-charcoal mb-2">Are your products cruelty-free?</h3>
                  <p className="text-muted-foreground">
                    Absolutely! All Xavarish products are 100% cruelty-free and we never test on animals. 
                    We're also certified by Leaping Bunny, the gold standard for cruelty-free certification.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-charcoal mb-2">How can I find the right shade for me?</h3>
                  <p className="text-muted-foreground">
                    We offer virtual try-on tools on our website, detailed shade guides, and free color matching 
                    consultations. You can also visit our flagship store for personalized assistance.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
