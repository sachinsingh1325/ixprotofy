import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // WhatsApp integration
    const whatsappNumber = "1234567890"; // Replace with actual number
    const message = `Hi! I'm ${formData.name}. Email: ${formData.email}. Message: ${formData.message}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, "_blank");
    
    toast({
      title: "Opening WhatsApp",
      description: "Redirecting you to WhatsApp to send your message.",
    });

    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Hero */}
        <div className="text-center mb-20 animate-fade-in relative">
          <div className="absolute inset-0 gradient-mesh opacity-30 blur-3xl" />
          <h1 className="text-6xl md:text-7xl font-bold mb-8 relative z-10">
            Get In <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto relative z-10">
            Have a project in mind? Let's discuss how we can help bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-10 hover-lift border-2 transition-smooth">
            <h2 className="text-3xl font-bold mb-8">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="group">
                <label htmlFor="name" className="block text-sm font-bold mb-3 group-focus-within:text-primary transition-smooth">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="h-12 text-base border-2 focus:border-primary transition-smooth"
                  required
                />
              </div>
              <div className="group">
                <label htmlFor="email" className="block text-sm font-bold mb-3 group-focus-within:text-primary transition-smooth">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="h-12 text-base border-2 focus:border-primary transition-smooth"
                  required
                />
              </div>
              <div className="group">
                <label htmlFor="message" className="block text-sm font-bold mb-3 group-focus-within:text-primary transition-smooth">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows={6}
                  className="text-base border-2 focus:border-primary transition-smooth"
                  required
                />
              </div>
              <Button type="submit" variant="hero" className="w-full text-lg py-7 hover:scale-105 transition-spring" size="lg">
                Send Message via WhatsApp <Send className="ml-2" size={20} />
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="p-8 hover-lift border-2 transition-smooth group">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-spring shadow-glow">
                  <Mail className="text-primary-foreground" size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-smooth">Email Us</h3>
                  <p className="text-muted-foreground text-base">hello@designstudio.com</p>
                  <p className="text-muted-foreground text-base">support@designstudio.com</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover-lift border-2 transition-smooth group">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-spring shadow-glow">
                  <Phone className="text-primary-foreground" size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-smooth">Call Us</h3>
                  <p className="text-muted-foreground text-base">+91 123 456 7890</p>
                  <p className="text-muted-foreground text-base">Mon-Fri, 9am-6pm IST</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover-lift border-2 transition-smooth group">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-spring shadow-glow">
                  <MapPin className="text-primary-foreground" size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-smooth">Visit Us</h3>
                  <p className="text-muted-foreground text-base">123 Design Street</p>
                  <p className="text-muted-foreground text-base">Mumbai, India 400001</p>
                </div>
              </div>
            </Card>

            <Card className="p-10 gradient-primary text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-primary-foreground mb-4">
                  Book a Free Call
                </h3>
                <p className="text-primary-foreground/90 mb-6 text-lg">
                  Schedule a 30-minute consultation to discuss your project
                </p>
                <Button variant="secondary" size="lg" className="px-10 py-6 text-lg hover:scale-105 transition-spring shadow-glow-xl">
                  Schedule Now
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
