import { Link } from "react-router-dom";
import { ArrowRight, Palette, Smartphone, Layout, Zap, Layers, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroBg from "@/assets/hero-bg.jpg";

const Home = () => {
  const services = [
    {
      icon: Layout,
      title: "Web Design",
      description: "Modern, responsive websites built with Next.js and React",
    },
    {
      icon: Smartphone,
      title: "App Design",
      description: "Mobile-first design that users love",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful interfaces backed by user research",
    },
    {
      icon: Zap,
      title: "MVP Development",
      description: "Launch your startup idea in weeks, not months",
    },
    {
      icon: Layers,
      title: "Branding",
      description: "Complete brand identity from logo to guidelines",
    },
    {
      icon: Video,
      title: "Motion Design",
      description: "Engaging animations and video content",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CEO, TechStart",
      content: "DesignStudio transformed our vision into a stunning MVP. Their attention to detail is unmatched.",
    },
    {
      name: "Michael Ross",
      role: "Founder, AppFlow",
      content: "Working with this team was seamless. They delivered beyond expectations and on time.",
    },
    {
      name: "Emily Davis",
      role: "Marketing Director, BrandCo",
      content: "The branding work they did completely elevated our market presence. Highly recommended!",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              We Turn Your Ideas Into{" "}
              <span className="gradient-primary bg-clip-text text-transparent">
                Stunning Digital Experiences
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              A creative design agency helping startups and brands build beautiful products that users love.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Let's Build Your Vision <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              End-to-end design solutions for startups and growing businesses
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-glow transition-smooth cursor-pointer group"
              >
                <div className="mb-4 w-12 h-12 rounded-lg gradient-primary flex items-center justify-center group-hover:scale-110 transition-smooth">
                  <service.icon className="text-primary-foreground" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="default" size="lg" asChild>
              <Link to="/services">
                Explore All Services <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">What Clients Say</h2>
            <p className="text-xl text-muted-foreground">
              Trusted by startups and brands worldwide
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <p className="text-muted-foreground mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <Card className="p-12 text-center gradient-primary">
            <h2 className="text-4xl font-bold mb-4 text-primary-foreground">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Let's discuss your vision and create something amazing together.
            </p>
            <Button
              variant="outline"
              size="lg"
              className="bg-background hover:bg-background/90"
              asChild
            >
              <Link to="/contact">Book a Free Call</Link>
            </Button>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;
