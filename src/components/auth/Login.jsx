import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { login } from "@/lib/auth";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!emailOrUsername || !password) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      await login(emailOrUsername, password);
      toast({
        title: "Success",
        description: "Welcome back!",
      });
      navigate('/events');
    } catch (error) {
      toast({
        title: "Error", 
        description: error instanceof Error ? error.message : "Login failed",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-accent-soft/10 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-accent/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary/5 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      <Card className="w-full max-w-md card-modern border-0 backdrop-blur-sm bg-card/95 animate-scale-in">
        <CardHeader className="space-y-3 text-center pb-6">
          <CardTitle className="text-3xl font-bold logo-text bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-fade-in">
            Eventify
          </CardTitle>
          <CardDescription className="text-base text-subtitle animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Sign in to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-3 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <Label htmlFor="emailOrUsername" className="text-sm font-semibold text-foreground">
                Email or Username
              </Label>
              <Input
                id="emailOrUsername"
                type="text"
                placeholder="Enter your email or username"
                value={emailOrUsername}
                onChange={(e) => setEmailOrUsername(e.target.value)}
                disabled={isLoading}
                className="h-12 border-border/50 focus:border-primary focus:ring-primary/20 transition-all duration-300 bg-background/50 backdrop-blur-sm"
              />
            </div>
            
            <div className="space-y-3 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <Label htmlFor="password" className="text-sm font-semibold text-foreground">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
                className="h-12 border-border/50 focus:border-primary focus:ring-primary/20 transition-all duration-300 bg-background/50 backdrop-blur-sm"
              />
            </div>

            <Button
              type="submit"
              className="w-full h-12 btn-primary text-base font-semibold animate-slide-up"
              disabled={isLoading}
              style={{ animationDelay: '0.4s' }}
            >
              {isLoading ? (
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 border-2 border-primary-foreground/20 border-t-primary-foreground rounded-full animate-spin"></div>
                  <span>Signing in...</span>
                </div>
              ) : (
                "Sign In"
              )}
            </Button>
          </form>

          <div className="mt-8 text-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <p className="text-sm text-subtitle">
              Don't have an account?{" "}
              <Link 
                to="/signup" 
                className="font-semibold text-primary hover:text-primary-glow transition-colors duration-200 hover:underline"
              >
                Sign up
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;