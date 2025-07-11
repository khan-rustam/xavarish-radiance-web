import { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Settings, Package, Heart, LogOut, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export const UserDropdown = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // This would come from auth context

  const userMenuItems = [
    { icon: User, label: 'My Profile', href: '/profile' },
    { icon: Package, label: 'My Orders', href: '/orders' },
    { icon: Heart, label: 'Wishlist', href: '/wishlist' },
    { icon: CreditCard, label: 'Payment Methods', href: '/payment-methods' },
    { icon: Settings, label: 'Account Settings', href: '/settings' },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="text-charcoal hover:text-primary relative">
          <User className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-white border-pink-100" align="end">
        {isLoggedIn ? (
          <>
            <DropdownMenuLabel className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src="" alt="User" />
                <AvatarFallback className="bg-primary/10 text-primary">JD</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">Jane Doe</p>
                <p className="text-xs text-muted-foreground">jane@example.com</p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            {userMenuItems.map((item) => (
              <DropdownMenuItem key={item.href} asChild>
                <Link to={item.href} className="flex items-center gap-2 cursor-pointer">
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </Link>
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-600 focus:text-red-600" onClick={() => setIsLoggedIn(false)}>
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </DropdownMenuItem>
          </>
        ) : (
          <>
            <DropdownMenuItem asChild>
              <Link to="/login" className="cursor-pointer">
                Sign In
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/register" className="cursor-pointer">
                Create Account
              </Link>
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};