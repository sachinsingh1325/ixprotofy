import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Palette, Smartphone, Layout, Zap, Star, Sparkles, Code2, ChevronDown } from "lucide-react";

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY;
        heroRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      icon: Layout,
      title: "Web Design",
      description: "Beautiful, responsive websites that convert visitors into customers",
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      icon: Smartphone,
      title: "App Design",
      description: "Intuitive mobile experiences that users love",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centered design that solves real problems",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: Zap,
      title: "MVP Development",
      description: "Launch your product fast with pixel-perfect execution",
      gradient: "from-green-500 to-emerald-400",
    },
    {
      icon: Sparkles,
      title: "Branding",
      description: "Build memorable brands that stand out",
      gradient: "from-yellow-500 to-orange-400",
    },
    {
      icon: Code2,
      title: "Motion Design",
      description: "Bring your brand to life with stunning animations",
      gradient: "from-indigo-500 to-purple-500",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      content: "The team transformed our vision into reality. Our app is now in the App Store and getting amazing reviews!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Founder, GrowthLab",
      content: "Professional, creative, and fast. They delivered beyond our expectations. Highly recommended!",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Product Manager, InnovateCo",
      content: "Working with this team was seamless. They understood our needs and created something beautiful.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Floating Blobs Background */}
      <div className="blob blob-blue w-96 h-96 top-10 left-10" style={{ animationDelay: "0s" }} />
      <div className="blob blob-purple w-80 h-80 top-40 right-20" style={{ animationDelay: "2s" }} />
      <div className="blob blob-pink w-72 h-72 bottom-20 left-1/3" style={{ animationDelay: "4s" }} />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="gradient-mesh absolute inset-0 opacity-50" />
        
        <div ref={heroRef} className="parallax container mx-auto text-center relative z-10">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              We turn your ideas into{" "}
              <span className="text-gradient">stunning digital</span>{" "}
              <span className="text-gradient-secondary">experiences</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
              World-class design agency specializing in creating premium digital products
              for startups and innovative brands
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" variant="hero" className="shadow-neon-blue hover:shadow-neon-purple transition-bounce text-lg px-10 py-6">
                <Link to="/contact">
                  Let's Build Your Vision <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="glass hover:glass-card text-lg px-10 py-6">
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
            <ChevronDown className="w-8 h-8 text-primary" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-4 relative">
        <div className="gradient-hero absolute inset-0" />
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Design that <span className="text-gradient">makes a difference</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're a passionate team of designers and developers creating exceptional
              digital experiences that help businesses grow and succeed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: "100+", label: "Projects Delivered" },
              { number: "50+", label: "Happy Clients" },
              { number: "5⭐", label: "Average Rating" },
            ].map((stat, index) => (
              <div
                key={index}
                className="water-glow text-center p-10 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-5xl md:text-6xl font-bold text-gradient mb-4">{stat.number}</div>
                <div className="text-lg text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4 relative">
        <div className="gradient-mesh absolute inset-0 opacity-30" />
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="text-gradient">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From concept to launch, we provide everything you need to build exceptional digital products
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="glass-card group cursor-pointer animate-scale-in border-0"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-spring shadow-neon-blue group-hover:shadow-neon-purple`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl group-hover:text-gradient transition-smooth">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-16">
            <Button asChild size="lg" variant="hero" className="shadow-neon-blue hover:shadow-neon-purple transition-bounce">
              <Link to="/services">
                View All Services <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 relative">
        <div className="gradient-hero absolute inset-0" />
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              What our <span className="text-gradient">clients say</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it - hear from startups and brands we've helped
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="water-glow animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400 animate-glow" style={{ animationDelay: `${i * 0.1}s` }} />
                    ))}
                  </div>
                  <CardDescription className="text-base italic text-foreground">"{testimonial.content}"</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-gradient">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 relative">
        <div className="gradient-mesh absolute inset-0 opacity-50" />
        <div className="container mx-auto text-center relative z-10">
          <div className="water-glow max-w-4xl mx-auto p-16 animate-scale-in">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Ready to bring your <span className="text-gradient">vision to life?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Let's create something amazing together. Book a free consultation call today
            </p>
            <Button asChild size="lg" variant="hero" className="shadow-neon-blue hover:shadow-neon-purple transition-bounce text-lg px-12 py-7">
              <Link to="/contact">
                Start Your Project <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
