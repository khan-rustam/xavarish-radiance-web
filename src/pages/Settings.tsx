import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Bell, Shield, CreditCard, User, Mail, Phone, Globe } from 'lucide-react';
import { AdvancedScrollAnimations } from '@/components/animations/AdvancedScrollAnimations';

const Settings = () => {
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true,
    marketing: true
  });

  const [privacy, setPrivacy] = useState({
    profileVisible: true,
    orderHistory: false,
    wishlistVisible: true
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white">
      <Header />
      
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <AdvancedScrollAnimations animation="fadeUp">
          
          <div className="mb-8">
            <h1 className="text-3xl font-serif font-semibold text-charcoal mb-2">Account Settings</h1>
            <p className="text-muted-foreground">Manage your account preferences and privacy settings</p>
          </div>

          <Tabs defaultValue="profile" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4 bg-pink-50">
              <TabsTrigger value="profile" className="data-[state=active]:bg-white">Profile</TabsTrigger>
              <TabsTrigger value="notifications" className="data-[state=active]:bg-white">Notifications</TabsTrigger>
              <TabsTrigger value="privacy" className="data-[state=active]:bg-white">Privacy</TabsTrigger>
              <TabsTrigger value="security" className="data-[state=active]:bg-white">Security</TabsTrigger>
            </TabsList>

            <TabsContent value="profile" className="space-y-6">
              <Card className="border-pink-100 shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-charcoal">
                    <User className="h-5 w-5" />
                    Profile Information
                  </CardTitle>
                  <CardDescription>Update your personal information and preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" defaultValue="Jane" className="border-pink-200" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" defaultValue="Doe" className="border-pink-200" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" defaultValue="jane@example.com" className="border-pink-200" />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" defaultValue="+1 (555) 123-4567" className="border-pink-200" />
                  </div>
                  
                  <div>
                    <Label htmlFor="language">Language</Label>
                    <Select defaultValue="en">
                      <SelectTrigger className="border-pink-200">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="es">Spanish</SelectItem>
                        <SelectItem value="fr">French</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <Button className="bg-primary hover:bg-primary/90">Save Changes</Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="notifications" className="space-y-6">
              <Card className="border-pink-100 shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-charcoal">
                    <Bell className="h-5 w-5" />
                    Notification Preferences
                  </CardTitle>
                  <CardDescription>Choose how you want to receive updates</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <Label>Email Notifications</Label>
                      </div>
                      <p className="text-sm text-muted-foreground">Receive order updates and newsletters</p>
                    </div>
                    <Switch 
                      checked={notifications.email}
                      onCheckedChange={(checked) => setNotifications({...notifications, email: checked})}
                    />
                  </div>
                  
                  <Separator />
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <Label>SMS Notifications</Label>
                      </div>
                      <p className="text-sm text-muted-foreground">Get shipping updates via text</p>
                    </div>
                    <Switch 
                      checked={notifications.sms}
                      onCheckedChange={(checked) => setNotifications({...notifications, sms: checked})}
                    />
                  </div>
                  
                  <Separator />
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Push Notifications</Label>
                      <p className="text-sm text-muted-foreground">Browser notifications for new arrivals</p>
                    </div>
                    <Switch 
                      checked={notifications.push}
                      onCheckedChange={(checked) => setNotifications({...notifications, push: checked})}
                    />
                  </div>
                  
                  <Separator />
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Marketing Communications</Label>
                      <p className="text-sm text-muted-foreground">Promotions, tips, and beauty trends</p>
                    </div>
                    <Switch 
                      checked={notifications.marketing}
                      onCheckedChange={(checked) => setNotifications({...notifications, marketing: checked})}
                    />
                  </div>
                  
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="privacy" className="space-y-6">
              <Card className="border-pink-100 shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-charcoal">
                    <Globe className="h-5 w-5" />
                    Privacy Settings
                  </CardTitle>
                  <CardDescription>Control your privacy and data sharing preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Public Profile</Label>
                      <p className="text-sm text-muted-foreground">Allow others to see your profile information</p>
                    </div>
                    <Switch 
                      checked={privacy.profileVisible}
                      onCheckedChange={(checked) => setPrivacy({...privacy, profileVisible: checked})}
                    />
                  </div>
                  
                  <Separator />
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Order History</Label>
                      <p className="text-sm text-muted-foreground">Share purchase history for better recommendations</p>
                    </div>
                    <Switch 
                      checked={privacy.orderHistory}
                      onCheckedChange={(checked) => setPrivacy({...privacy, orderHistory: checked})}
                    />
                  </div>
                  
                  <Separator />
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Wishlist Visibility</Label>
                      <p className="text-sm text-muted-foreground">Let friends see your wishlist items</p>
                    </div>
                    <Switch 
                      checked={privacy.wishlistVisible}
                      onCheckedChange={(checked) => setPrivacy({...privacy, wishlistVisible: checked})}
                    />
                  </div>
                  
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="security" className="space-y-6">
              <Card className="border-pink-100 shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-charcoal">
                    <Shield className="h-5 w-5" />
                    Security Settings
                  </CardTitle>
                  <CardDescription>Manage your password and security preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  
                  <div>
                    <Label htmlFor="currentPassword">Current Password</Label>
                    <Input id="currentPassword" type="password" className="border-pink-200" />
                  </div>
                  
                  <div>
                    <Label htmlFor="newPassword">New Password</Label>
                    <Input id="newPassword" type="password" className="border-pink-200" />
                  </div>
                  
                  <div>
                    <Label htmlFor="confirmPassword">Confirm New Password</Label>
                    <Input id="confirmPassword" type="password" className="border-pink-200" />
                  </div>
                  
                  <Button className="bg-primary hover:bg-primary/90">Update Password</Button>
                  
                  <Separator />
                  
                  <div className="space-y-4">
                    <h4 className="font-medium text-charcoal">Two-Factor Authentication</h4>
                    <p className="text-sm text-muted-foreground">
                      Add an extra layer of security to your account
                    </p>
                    <Button variant="outline" className="border-pink-200">
                      Enable 2FA
                    </Button>
                  </div>
                  
                </CardContent>
              </Card>
            </TabsContent>
            
          </Tabs>
          
        </AdvancedScrollAnimations>
      </main>
      
      <Footer />
    </div>
  );
};

export default Settings;