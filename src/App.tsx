
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { CartProvider } from "@/contexts/CartContext";
import { WishlistProvider } from "@/contexts/WishlistContext";

import { FloatingElements } from "@/components/animations/FloatingElements";
import { PageTransition } from "@/components/animations/PageTransition";
import { GlobalLoader } from "@/components/GlobalLoader";
import Index from "./pages/Index";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Checkout from "./pages/Checkout";
import Contact from "./pages/Contact";
import About from "./pages/About";
import ProductDetail from "./pages/ProductDetail";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Compare from "./pages/Compare";
import Profile from "./pages/Profile";
import Orders from "./pages/Orders";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CartProvider>
        <WishlistProvider>
          <GlobalLoader />
          <Toaster />
          <Sonner />
          
          <FloatingElements />
          <BrowserRouter>
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<PageTransition><Index /></PageTransition>} />
                <Route path="/shop" element={<PageTransition><Shop /></PageTransition>} />
                <Route path="/cart" element={<PageTransition><Cart /></PageTransition>} />
                <Route path="/wishlist" element={<PageTransition><Wishlist /></PageTransition>} />
                <Route path="/checkout" element={<PageTransition><Checkout /></PageTransition>} />
                <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
                <Route path="/about" element={<PageTransition><About /></PageTransition>} />
                <Route path="/product/:id" element={<PageTransition><ProductDetail /></PageTransition>} />
                <Route path="/blog" element={<PageTransition><Blog /></PageTransition>} />
                <Route path="/blog/:slug" element={<PageTransition><BlogPost /></PageTransition>} />
                <Route path="/compare" element={<PageTransition><Compare /></PageTransition>} />
                <Route path="/profile" element={<PageTransition><Profile /></PageTransition>} />
                <Route path="/orders" element={<PageTransition><Orders /></PageTransition>} />
                <Route path="/settings" element={<PageTransition><Settings /></PageTransition>} />
                <Route path="/login" element={<PageTransition><Login /></PageTransition>} />
                <Route path="/register" element={<PageTransition><Register /></PageTransition>} />
                <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
              </Routes>
            </AnimatePresence>
          </BrowserRouter>
        </WishlistProvider>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
