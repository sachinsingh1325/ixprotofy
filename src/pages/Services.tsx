import { Link } from "react-router-dom";
import { Layout, Smartphone, Palette, Zap, Layers, Video, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Layout,
      title: "Web Design",
      description: "Modern, responsive websites that convert visitors into customers. Built with Next.js, React, and cutting-edge technologies.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Custom CMS"],
    },
    {
      icon: Smartphone,
      title: "App Design",
      description: "User-centered mobile applications for iOS and Android. Beautiful interfaces that users love to interact with.",
      features: ["iOS & Android", "Native Feel", "User Testing", "App Store Ready"],
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Data-driven design backed by user research. We create interfaces that are both beautiful and highly functional.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    },
    {
      icon: Zap,
      title: "MVP Development",
      description: "Launch your startup idea quickly. We help you build a minimum viable product to test your market.",
      features: ["Rapid Development", "Core Features Focus", "Market Testing", "Iterative Approach"],
    },
    {
      icon: Layers,
      title: "Branding & Graphics",
      description: "Complete brand identity from logo to social media kits. Stand out in your market with memorable branding.",
      features: ["Logo Design", "Brand Guidelines", "Social Media Kits", "Print Materials"],
    },
    {
      icon: Video,
      title: "Motion Design",
      description: "Engaging animations and video content. Bring your brand to life with stunning motion graphics.",
      features: ["Logo Animations", "Explainer Videos", "Lottie Files", "Micro-interactions"],
    },
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "₹9,999",
      description: "Perfect for single landing pages",
      features: [
        "1-page website design",
        "Mobile responsive",
        "Basic SEO",
        "2 rounds of revisions",
        "7-day delivery",
      ],
    },
    {
      name: "Pro",
      price: "₹24,999",
      description: "Ideal for MVPs and full apps",
      features: [
        "Full web or mobile app",
        "Up to 5 pages/screens",
        "Advanced interactions",
        "Design system included",
        "Unlimited revisions",
        "3-week delivery",
      ],
      popular: true,
    },
    {
      name: "Premium",
      price: "₹49,999",
      description: "Complete design package",
      features: [
        "All-inclusive design",
        "Unlimited pages/screens",
        "Motion design & animations",
        "Branding package",
        "Priority support",
        "Ongoing consultation",
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 px-4">
      <div className="container mx-auto">
        {/* Hero */}
        <div className="text-center mb-24 animate-fade-in relative">
          <div className="absolute inset-0 gradient-mesh opacity-30 blur-3xl" />
          <h1 className="text-6xl md:text-7xl font-bold mb-8 relative z-10">
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto relative z-10">
            Comprehensive design solutions tailored for startups and growing businesses
          </p>
        </div>

        {/* Services Grid */}
        <section className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="p-10 hover-lift bg-card/50 backdrop-blur-sm border-2 border-border/50 hover:border-primary/50 transition-smooth group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-spring shadow-glow">
                    <service.icon className="text-primary-foreground" size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold mb-4 group-hover:text-primary transition-smooth">{service.title}</h3>
                    <p className="text-muted-foreground mb-6 text-lg leading-relaxed">{service.description}</p>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <Check className="text-primary flex-shrink-0 group-hover:scale-110 transition-spring" size={20} />
                          <span className="text-base">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section className="relative">
          <div className="absolute inset-0 gradient-mesh opacity-20 blur-3xl" />
          <div className="text-center mb-20 relative z-10">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Transparent Pricing</h2>
            <p className="text-2xl text-muted-foreground">Choose the plan that fits your needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto relative z-10">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`p-10 hover-lift transition-smooth group ${
                  plan.popular 
                    ? "border-2 border-primary shadow-glow-xl scale-105 md:scale-110" 
                    : "border-2 border-border/50"
                }`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {plan.popular && (
                  <div className="gradient-primary text-primary-foreground text-sm font-bold px-4 py-2 rounded-full inline-block mb-6 shadow-glow animate-scale-in">
                    Most Popular
                  </div>
                )}
                <h3 className="text-3xl font-bold mb-4 group-hover:text-primary transition-smooth">{plan.name}</h3>
                <div className="text-5xl font-bold mb-3">
                  {plan.price}
                  <span className="text-xl text-muted-foreground font-normal">/project</span>
                </div>
                <p className="text-muted-foreground mb-8 text-lg">{plan.description}</p>
                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="text-primary flex-shrink-0 mt-1 group-hover:scale-110 transition-spring" size={20} />
                      <span className="text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant={plan.popular ? "hero" : "default"}
                  className="w-full text-lg py-6 hover:scale-105 transition-spring"
                  asChild
                >
                  <Link to="/contact">Get Started</Link>
                </Button>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
