import { Link } from "react-router-dom";
import { ArrowRight, Palette, Smartphone, Layout, Zap, Layers, Video, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroBg from "@/assets/hero-bg.jpg";
import { useEffect, useRef } from "react";

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY;
        heroRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: Layout,
      title: "Web Design",
      description: "Modern, responsive websites built with cutting-edge tech",
    },
    {
      icon: Smartphone,
      title: "App Design",
      description: "Beautiful mobile experiences for iOS & Android",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Data-driven interfaces users love",
    },
    {
      icon: Zap,
      title: "MVP Development",
      description: "Launch your startup idea quickly",
    },
    {
      icon: Layers,
      title: "Branding",
      description: "Memorable brand identities",
    },
    {
      icon: Video,
      title: "Motion Design",
      description: "Engaging animations & videos",
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Founder, TechStart",
      content: "Transformed our vision into a stunning MVP in just 3 weeks. The team's creativity and speed were incredible!",
      rating: 5,
    },
    {
      name: "Rahul Verma",
      role: "CEO, FinFlow",
      content: "Best design agency we've worked with. They understand startups and deliver pixel-perfect results.",
      rating: 5,
    },
    {
      name: "Ananya Patel",
      role: "Product Lead, ShopEase",
      content: "The branding and UI/UX work elevated our product. Highly recommend for any startup!",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Parallax */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          ref={heroRef}
          className="absolute inset-0 parallax"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 gradient-mesh opacity-50" />
        
        <div className="container mx-auto px-4 text-center z-10 relative">
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
              We turn your ideas into
              <br />
              <span className="text-gradient animate-scale-in">stunning digital experiences</span>
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Design agency helping startups and brands succeed with beautiful, functional digital products
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button variant="hero" size="lg" className="text-lg px-10 py-8 hover:scale-105 transition-spring" asChild>
              <Link to="/contact">
                Let's Build Your Vision <ArrowRight className="ml-2" size={24} />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-10 py-8 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-primary transition-spring" asChild>
              <Link to="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-30" />
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">What We Do</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive design solutions that transform ideas into reality
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="p-10 hover-lift bg-card/50 backdrop-blur-sm border-2 border-border/50 hover:border-primary/50 transition-smooth text-center group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6 inline-block">
                  <div className="w-20 h-20 rounded-2xl gradient-primary flex items-center justify-center mx-auto group-hover:scale-110 transition-spring">
                    <service.icon className="text-primary-foreground" size={32} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-smooth">{service.title}</h3>
                <p className="text-muted-foreground text-lg">{service.description}</p>
              </Card>
            ))}
          </div>
          <div className="text-center mt-16">
            <Button variant="hero" size="lg" className="text-lg px-10 py-8" asChild>
              <Link to="/services">
                Explore All Services <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-4 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground">Trusted by innovative startups worldwide</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="p-10 hover-lift bg-card border-2 transition-smooth group"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="fill-primary text-primary group-hover:scale-110 transition-spring" size={24} style={{ transitionDelay: `${i * 0.05}s` }} />
                  ))}
                </div>
                <p className="text-foreground mb-8 text-lg leading-relaxed italic">"{testimonial.content}"</p>
                <div className="border-t pt-6">
                  <p className="font-bold text-lg">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground mt-1">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-40" />
        <div className="container mx-auto relative z-10">
          <Card className="p-16 md:p-20 text-center gradient-primary relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
            <div className="relative z-10">
              <h2 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-8 animate-fade-in">
                Ready to bring your vision to life?
              </h2>
              <p className="text-2xl text-primary-foreground/90 mb-12 max-w-3xl mx-auto">
                Let's discuss your project and create something amazing together
              </p>
              <Button 
                variant="secondary" 
                size="lg" 
                className="text-lg px-12 py-8 hover:scale-105 transition-spring shadow-glow-xl" 
                asChild
              >
                <Link to="/contact">
                  Start Your Project <ArrowRight className="ml-2" size={24} />
                </Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;
