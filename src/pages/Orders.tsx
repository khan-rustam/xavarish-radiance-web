import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Package, Truck, CheckCircle, Clock, Eye } from 'lucide-react';
import { AdvancedScrollAnimations } from '@/components/animations/AdvancedScrollAnimations';

const Orders = () => {
  const orders = [
    {
      id: 'ORD-2024-001',
      date: '2024-01-15',
      status: 'delivered',
      total: 89.97,
      items: [
        { name: 'Radiant Glow Serum', price: 49.99, quantity: 1, image: '/placeholder.svg' },
        { name: 'Luxury Lip Balm', price: 19.99, quantity: 2, image: '/placeholder.svg' }
      ]
    },
    {
      id: 'ORD-2024-002', 
      date: '2024-01-20',
      status: 'shipping',
      total: 129.98,
      items: [
        { name: 'Perfect Foundation', price: 65.00, quantity: 1, image: '/placeholder.svg' },
        { name: 'Blush Palette', price: 32.99, quantity: 2, image: '/placeholder.svg' }
      ]
    },
    {
      id: 'ORD-2024-003',
      date: '2024-01-25', 
      status: 'processing',
      total: 45.99,
      items: [
        { name: 'Eye Shadow Set', price: 45.99, quantity: 1, image: '/placeholder.svg' }
      ]
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'delivered': return <CheckCircle className="h-4 w-4" />;
      case 'shipping': return <Truck className="h-4 w-4" />;
      case 'processing': return <Clock className="h-4 w-4" />;
      default: return <Package className="h-4 w-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered': return 'bg-green-100 text-green-800';
      case 'shipping': return 'bg-blue-100 text-blue-800';
      case 'processing': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white">
      <Header />
      
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <AdvancedScrollAnimations animation="fadeUp">
          
          <div className="mb-8">
            <h1 className="text-3xl font-serif font-semibold text-charcoal mb-2">My Orders</h1>
            <p className="text-muted-foreground">Track and manage your recent purchases</p>
          </div>

          <div className="space-y-6">
            {orders.map((order) => (
              <Card key={order.id} className="border-pink-100 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg text-charcoal">{order.id}</CardTitle>
                      <CardDescription>
                        Placed on {new Date(order.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <Badge className={`${getStatusColor(order.status)} mb-2`}>
                        {getStatusIcon(order.status)}
                        <span className="ml-1 capitalize">{order.status}</span>
                      </Badge>
                      <div className="text-lg font-semibold text-charcoal">
                        ${order.total.toFixed(2)}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-3">
                    {order.items.map((item, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-12 h-12 rounded-lg object-cover bg-pink-50"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium text-charcoal">{item.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            Qty: {item.quantity} × ${item.price.toFixed(2)}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-charcoal">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <Separator className="my-4" />
                  
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-muted-foreground">
                      {order.items.length} item{order.items.length > 1 ? 's' : ''}
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="border-pink-200">
                        <Eye className="h-4 w-4 mr-2" />
                        View Details
                      </Button>
                      {order.status === 'delivered' && (
                        <Button size="sm" className="bg-primary hover:bg-primary/90">
                          Reorder
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {orders.length === 0 && (
            <Card className="border-pink-100 shadow-sm">
              <CardContent className="text-center py-12">
                <Package className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium text-charcoal mb-2">No orders yet</h3>
                <p className="text-muted-foreground mb-6">
                  When you place your first order, it will appear here.
                </p>
                <Button className="bg-primary hover:bg-primary/90">
                  Start Shopping
                </Button>
              </CardContent>
            </Card>
          )}
          
        </AdvancedScrollAnimations>
      </main>
      
      <Footer />
    </div>
  );
};

export default Orders;