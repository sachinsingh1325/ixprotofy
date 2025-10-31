import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Calendar } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    
    const whatsappMessage = `Hi! I'm ${name} (${email}). ${message}`;
    const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(whatsappMessage)}`;
    
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Floating Blobs Background */}
      <div className="blob blob-blue w-96 h-96 top-20 right-10" style={{ animationDelay: "0s" }} />
      <div className="blob blob-purple w-80 h-80 bottom-20 left-10" style={{ animationDelay: "2s" }} />
      <div className="blob blob-pink w-72 h-72 top-1/2 left-1/2" style={{ animationDelay: "4s" }} />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative">
        <div className="gradient-mesh absolute inset-0 opacity-50" />
        <div className="container mx-auto text-center relative z-10">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Let's <span className="text-gradient">Connect</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Ready to bring your vision to life? Get in touch and let's create something extraordinary together
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="pb-20 px-4 relative">
        <div className="gradient-hero absolute inset-0" />
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="water-glow border-0 animate-scale-in">
              <CardContent className="p-8 md:p-10">
                <h2 className="text-3xl font-bold mb-6 text-gradient">Send us a message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="group">
                    <label htmlFor="name" className="block text-sm font-medium mb-2 transition-smooth group-focus-within:text-primary">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      required
                      placeholder="John Doe"
                      className="glass border-2 border-glass-border focus:border-primary h-12 text-base transition-smooth"
                    />
                  </div>
                  <div className="group">
                    <label htmlFor="email" className="block text-sm font-medium mb-2 transition-smooth group-focus-within:text-primary">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      className="glass border-2 border-glass-border focus:border-primary h-12 text-base transition-smooth"
                    />
                  </div>
                  <div className="group">
                    <label htmlFor="message" className="block text-sm font-medium mb-2 transition-smooth group-focus-within:text-primary">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      placeholder="Tell us about your project..."
                      rows={6}
                      className="glass border-2 border-glass-border focus:border-primary text-base transition-smooth resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    variant="hero"
                    className="w-full shadow-neon-blue hover:shadow-neon-purple transition-bounce h-12"
                  >
                    Send Message <Send className="ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6 animate-slide-up">
              <Card className="glass-card group border-0">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-neon-blue group-hover:shadow-neon-purple transition-smooth group-hover:scale-110 transition-spring">
                      <Mail className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-gradient transition-smooth">Email Us</h3>
                      <p className="text-muted-foreground">hello@designstudio.com</p>
                      <p className="text-muted-foreground">support@designstudio.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card group border-0">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-neon-blue group-hover:shadow-neon-purple transition-smooth group-hover:scale-110 transition-spring">
                      <Phone className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-gradient transition-smooth">Call Us</h3>
                      <p className="text-muted-foreground">+91 123 456 7890</p>
                      <p className="text-muted-foreground">Mon-Fri, 9am-6pm IST</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card group border-0">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-neon-blue group-hover:shadow-neon-purple transition-smooth group-hover:scale-110 transition-spring">
                      <MapPin className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-gradient transition-smooth">Visit Us</h3>
                      <p className="text-muted-foreground">123 Design Street</p>
                      <p className="text-muted-foreground">Mumbai, India 400001</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="water-glow group border-0">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-400 flex items-center justify-center shadow-neon-blue group-hover:shadow-neon-purple transition-smooth group-hover:scale-110 transition-spring">
                      <Calendar className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-gradient transition-smooth">Book a Free Call</h3>
                      <p className="text-muted-foreground mb-4">Schedule a 30-minute consultation to discuss your project</p>
                      <Button
                        variant="hero"
                        className="w-full shadow-neon-blue hover:shadow-neon-purple transition-bounce"
                        asChild
                      >
                        <a href="https://calendly.com/yourlink" target="_blank" rel="noopener noreferrer">
                          Schedule Now
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Social Links Section */}
      <section className="pb-32 px-4 relative">
        <div className="gradient-mesh absolute inset-0 opacity-30" />
        <div className="container mx-auto text-center relative z-10">
          <div className="water-glow max-w-4xl mx-auto p-12 animate-scale-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Follow us on <span className="text-gradient">social media</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Stay updated with our latest projects and design insights
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              {["LinkedIn", "Twitter", "Instagram", "Dribbble", "Behance"].map((platform, index) => (
                <Button
                  key={platform}
                  variant="outline"
                  className="glass hover:glass-card hover-scale animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {platform}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
