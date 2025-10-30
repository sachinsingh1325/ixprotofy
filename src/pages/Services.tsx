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
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold mb-6">
            Our <span className="gradient-primary bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive design solutions tailored for startups and growing businesses
          </p>
        </div>

        {/* Services Grid */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-8 hover:shadow-glow transition-smooth">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                    <service.icon className="text-primary-foreground" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <Check className="text-primary flex-shrink-0" size={16} />
                          <span>{feature}</span>
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
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Transparent Pricing</h2>
            <p className="text-xl text-muted-foreground">Choose the plan that fits your needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`p-8 ${plan.popular ? "border-2 border-primary shadow-glow-xl" : ""}`}
              >
                {plan.popular && (
                  <div className="gradient-primary text-primary-foreground text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold mb-2">
                  {plan.price}
                  <span className="text-lg text-muted-foreground font-normal">/project</span>
                </div>
                <p className="text-muted-foreground mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="text-primary flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant={plan.popular ? "hero" : "default"}
                  className="w-full"
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
