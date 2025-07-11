import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Calendar, MapPin, Phone, Mail, Edit3, Save, X } from 'lucide-react';
import { AdvancedScrollAnimations } from '@/components/animations/AdvancedScrollAnimations';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    firstName: 'Jane',
    lastName: 'Doe', 
    email: 'jane.doe@example.com',
    phone: '+1 (555) 123-4567',
    bio: 'Beauty enthusiast and skincare lover. Always looking for the latest trends in cosmetics.',
    location: 'New York, NY',
    birthday: '1990-05-15',
    memberSince: '2023-01-15'
  });

  const handleSave = () => {
    // Save profile logic here
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white">
      <Header />
      
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <AdvancedScrollAnimations animation="fadeUp" className="space-y-8">
          
          {/* Profile Header */}
          <Card className="border-pink-100 shadow-sm">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <Avatar className="h-24 w-24">
                  <AvatarImage src="" alt="Profile" />
                  <AvatarFallback className="bg-gradient-to-br from-primary to-pink-400 text-white text-2xl">
                    {profile.firstName[0]}{profile.lastName[0]}
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex-1 text-center md:text-left">
                  <h1 className="text-3xl font-serif font-semibold text-charcoal mb-2">
                    {profile.firstName} {profile.lastName}
                  </h1>
                  <p className="text-muted-foreground mb-4">{profile.bio}</p>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Mail className="h-4 w-4" />
                      {profile.email}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {profile.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      Member since {new Date(profile.memberSince).getFullYear()}
                    </div>
                  </div>
                </div>
                
                <Button
                  onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                  className="bg-primary hover:bg-primary/90"
                >
                  {isEditing ? <Save className="h-4 w-4 mr-2" /> : <Edit3 className="h-4 w-4 mr-2" />}
                  {isEditing ? 'Save Changes' : 'Edit Profile'}
                </Button>
                
                {isEditing && (
                  <Button
                    variant="outline"
                    onClick={() => setIsEditing(false)}
                    className="border-pink-200"
                  >
                    <X className="h-4 w-4 mr-2" />
                    Cancel
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Personal Information */}
            <Card className="border-pink-100 shadow-sm">
              <CardHeader>
                <CardTitle className="text-charcoal">Personal Information</CardTitle>
                <CardDescription>Manage your personal details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      value={profile.firstName}
                      disabled={!isEditing}
                      onChange={(e) => setProfile({...profile, firstName: e.target.value})}
                      className="border-pink-200 focus:border-primary"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      value={profile.lastName}
                      disabled={!isEditing}
                      onChange={(e) => setProfile({...profile, lastName: e.target.value})}
                      className="border-pink-200 focus:border-primary"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={profile.email}
                    disabled={!isEditing}
                    onChange={(e) => setProfile({...profile, email: e.target.value})}
                    className="border-pink-200 focus:border-primary"
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    value={profile.phone}
                    disabled={!isEditing}
                    onChange={(e) => setProfile({...profile, phone: e.target.value})}
                    className="border-pink-200 focus:border-primary"
                  />
                </div>
                
                <div>
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    value={profile.location}
                    disabled={!isEditing}
                    onChange={(e) => setProfile({...profile, location: e.target.value})}
                    className="border-pink-200 focus:border-primary"
                  />
                </div>
                
                <div>
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    id="bio"
                    value={profile.bio}
                    disabled={!isEditing}
                    onChange={(e) => setProfile({...profile, bio: e.target.value})}
                    className="border-pink-200 focus:border-primary min-h-[100px]"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Account Overview */}
            <Card className="border-pink-100 shadow-sm">
              <CardHeader>
                <CardTitle className="text-charcoal">Account Overview</CardTitle>
                <CardDescription>Your account statistics and preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-pink-50 rounded-lg">
                    <div className="text-2xl font-bold text-primary">12</div>
                    <div className="text-sm text-muted-foreground">Orders Placed</div>
                  </div>
                  <div className="text-center p-4 bg-pink-50 rounded-lg">
                    <div className="text-2xl font-bold text-primary">8</div>
                    <div className="text-sm text-muted-foreground">Wishlist Items</div>
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h4 className="font-medium mb-3 text-charcoal">Beauty Preferences</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-pink-100 text-pink-800">Skincare</Badge>
                    <Badge variant="secondary" className="bg-pink-100 text-pink-800">Makeup</Badge>
                    <Badge variant="secondary" className="bg-pink-100 text-pink-800">Fragrance</Badge>
                    <Badge variant="secondary" className="bg-pink-100 text-pink-800">Anti-aging</Badge>
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h4 className="font-medium mb-3 text-charcoal">Skin Type</h4>
                  <Badge className="bg-primary/10 text-primary border-primary/20">Combination</Badge>
                </div>
                
                <Separator />
                
                <div>
                  <h4 className="font-medium mb-3 text-charcoal">Member Since</h4>
                  <p className="text-muted-foreground">
                    {new Date(profile.memberSince).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </p>
                </div>
                
              </CardContent>
            </Card>
          </div>
          
        </AdvancedScrollAnimations>
      </main>
      
      <Footer />
    </div>
  );
};

export default Profile;