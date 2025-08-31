import { useAuth } from '@/contexts/AuthContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { PenTool, ArrowRight, Sparkles } from 'lucide-react';

const Index = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto text-center space-y-8 animate-in">
        <div className="space-y-6">
          <div className="mx-auto w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-glow">
            <PenTool className="w-10 h-10 text-white" />
          </div>
          
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              NoteFlow
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Your beautiful, organized note-taking experience. Capture thoughts, ideas, and memories with style.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={() => navigate('/auth')}
            size="lg"
            className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-glow"
          >
            Get Started
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          
          <div className="flex items-center text-sm text-muted-foreground">
            <Sparkles className="w-4 h-4 mr-2" />
            Free to use • Secure • Beautiful
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-16 text-left">
          <div className="space-y-3 p-6 rounded-xl bg-card/50 backdrop-blur-sm border">
            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
              <PenTool className="w-4 h-4 text-primary" />
            </div>
            <h3 className="font-semibold">Quick & Easy</h3>
            <p className="text-sm text-muted-foreground">
              Create and organize your notes instantly with our intuitive interface.
            </p>
          </div>
          
          <div className="space-y-3 p-6 rounded-xl bg-card/50 backdrop-blur-sm border">
            <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-accent" />
            </div>
            <h3 className="font-semibold">Beautiful Design</h3>
            <p className="text-sm text-muted-foreground">
              Enjoy a clean, modern interface that makes note-taking a pleasure.
            </p>
          </div>
          
          <div className="space-y-3 p-6 rounded-xl bg-card/50 backdrop-blur-sm border">
            <div className="w-8 h-8 bg-success/10 rounded-lg flex items-center justify-center">
              <ArrowRight className="w-4 h-4 text-success" />
            </div>
            <h3 className="font-semibold">Secure & Private</h3>
            <p className="text-sm text-muted-foreground">
              Your notes are protected with secure authentication and encryption.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
