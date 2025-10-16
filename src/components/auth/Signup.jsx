import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { signup } from "@/lib/auth";
import { useToast } from "@/hooks/use-toast";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !username || !password || !confirmPassword) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    if (password !== confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match",
        variant: "destructive",
      });
      return;
    }

    if (password.length < 6) {
      toast({
        title: "Error",
        description: "Password must be at least 6 characters long",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      await signup(email, username, password);
      toast({
        title: "Success",
        description: "Account created successfully! Welcome to Eventify!",
      });
      navigate('/events');
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Signup failed",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-accent-soft/10 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-20 right-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-28 h-28 bg-primary/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-accent/5 rounded-full blur-xl animate-float" style={{ animationDelay: '0.5s' }}></div>
      
      <Card className="w-full max-w-md card-modern border-0 backdrop-blur-sm bg-card/95 animate-scale-in">
        <CardHeader className="space-y-3 text-center pb-6">
          <CardTitle className="text-3xl font-bold logo-text bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-fade-in">
            Eventify
          </CardTitle>
          <CardDescription className="text-base text-subtitle animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Create your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-3 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <Label htmlFor="email" className="text-sm font-semibold text-foreground">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
                className="h-12 border-border/50 focus:border-primary focus:ring-primary/20 transition-all duration-300 bg-background/50 backdrop-blur-sm"
              />
            </div>

            <div className="space-y-3 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <Label htmlFor="username" className="text-sm font-semibold text-foreground">
                Username
              </Label>
              <Input
                id="username"
                type="text"
                placeholder="Choose a username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                disabled={isLoading}
                className="h-12 border-border/50 focus:border-primary focus:ring-primary/20 transition-all duration-300 bg-background/50 backdrop-blur-sm"
              />
            </div>
            
            <div className="space-y-3 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <Label htmlFor="password" className="text-sm font-semibold text-foreground">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
                className="h-12 border-border/50 focus:border-primary focus:ring-primary/20 transition-all duration-300 bg-background/50 backdrop-blur-sm"
              />
            </div>

            <div className="space-y-3 animate-slide-up" style={{ animationDelay: '0.5s' }}>
              <Label htmlFor="confirmPassword" className="text-sm font-semibold text-foreground">
                Confirm Password
              </Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                disabled={isLoading}
                className="h-12 border-border/50 focus:border-primary focus:ring-primary/20 transition-all duration-300 bg-background/50 backdrop-blur-sm"
              />
            </div>

            <Button
              type="submit"
              className="w-full h-12 btn-primary text-base font-semibold animate-slide-up"
              disabled={isLoading}
              style={{ animationDelay: '0.6s' }}
            >
              {isLoading ? (
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 border-2 border-primary-foreground/20 border-t-primary-foreground rounded-full animate-spin"></div>
                  <span>Creating account...</span>
                </div>
              ) : (
                "Sign Up"
              )}
            </Button>
          </form>

          <div className="mt-8 text-center animate-fade-in" style={{ animationDelay: '0.7s' }}>
            <p className="text-sm text-subtitle">
              Already have an account?{" "}
              <Link 
                to="/login" 
                className="font-semibold text-primary hover:text-primary-glow transition-colors duration-200 hover:underline"
              >
                Sign in
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Signup;