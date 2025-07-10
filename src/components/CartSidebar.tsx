
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Minus, Plus, X, ShoppingBag } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { Link } from 'react-router-dom';

const CartSidebar = () => {
  const { items, removeItem, updateQuantity, getTotalPrice, getTotalItems, isOpen, setIsOpen } = useCart();

  if (items.length === 0) {
    return (
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent className="w-full sm:max-w-lg">
          <SheetHeader>
            <SheetTitle className="font-serif">Shopping Bag</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col items-center justify-center h-full space-y-4">
            <ShoppingBag className="h-16 w-16 text-muted-foreground" />
            <div className="text-center space-y-2">
              <h3 className="font-medium">Your bag is empty</h3>
              <p className="text-sm text-muted-foreground">Start shopping to add items to your bag</p>
            </div>
            <Button asChild onClick={() => setIsOpen(false)}>
              <Link to="/shop">Continue Shopping</Link>
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="w-full sm:max-w-lg flex flex-col">
        <SheetHeader>
          <SheetTitle className="font-serif">Shopping Bag ({getTotalItems()})</SheetTitle>
        </SheetHeader>
        
        <div className="flex-1 overflow-y-auto py-4">
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.id} className="flex space-x-4 p-4 bg-soft-pink rounded-lg">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div className="flex-1 space-y-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium text-sm">{item.name}</h4>
                      {item.variant && (
                        <p className="text-xs text-muted-foreground">{item.variant}</p>
                      )}
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6"
                      onClick={() => removeItem(item.id)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-6 w-6"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="text-sm font-medium w-8 text-center">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-6 w-6"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                    <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t pt-4 space-y-4">
          <div className="flex justify-between items-center text-lg font-semibold">
            <span>Total</span>
            <span>${getTotalPrice().toFixed(2)}</span>
          </div>
          
          <div className="space-y-2">
            <Button asChild className="w-full" onClick={() => setIsOpen(false)}>
              <Link to="/cart">View Cart</Link>
            </Button>
            <Button asChild variant="outline" className="w-full" onClick={() => setIsOpen(false)}>
              <Link to="/checkout">Checkout</Link>
            </Button>
          </div>
          
          <Button 
            variant="ghost" 
            className="w-full" 
            onClick={() => setIsOpen(false)}
          >
            Continue Shopping
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CartSidebar;
