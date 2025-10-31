import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Palette, Smartphone, Layout, Zap, Star, Code2, Check, ArrowRight, Sparkles } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Layout,
      title: "Web Design",
      description: "Create stunning, responsive websites that captivate your audience and drive conversions. From landing pages to complex web applications, we design digital experiences that leave lasting impressions.",
      features: ["Responsive Design", "Modern UI/UX", "Performance Optimized", "SEO Friendly"],
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      icon: Smartphone,
      title: "App Design",
      description: "Design mobile-first experiences that users love. We create intuitive interfaces for iOS and Android that combine beautiful aesthetics with seamless functionality.",
      features: ["iOS & Android", "User-Centered", "Prototype Testing", "Design Systems"],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Craft user experiences that solve real problems. Through research, wireframing, and iterative design, we create interfaces that are both beautiful and functional.",
      features: ["User Research", "Wireframing", "Usability Testing", "Design Systems"],
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: Zap,
      title: "MVP & Prototype Design",
      description: "Launch your startup idea fast with a pixel-perfect MVP. We help you validate your concept with real users through rapid prototyping and iterative design.",
      features: ["Rapid Prototyping", "Market Validation", "Iterative Design", "Fast Delivery"],
      gradient: "from-green-500 to-emerald-400",
    },
    {
      icon: Sparkles,
      title: "Branding & Graphic Design",
      description: "Build a memorable brand identity that stands out. From logos to complete brand guidelines, we create visual identities that resonate with your target audience.",
      features: ["Logo Design", "Brand Guidelines", "Social Media Kits", "Print Design"],
      gradient: "from-yellow-500 to-orange-400",
    },
    {
      icon: Code2,
      title: "Motion Design",
      description: "Bring your brand to life with stunning animations. From logo animations to micro-interactions, we add that extra polish that makes your product unforgettable.",
      features: ["Logo Animations", "Lottie Files", "Micro-interactions", "Video Production"],
      gradient: "from-indigo-500 to-purple-500",
    },
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "₹9,999",
      description: "Perfect for getting started",
      features: [
        "1-page website design",
        "Responsive layout",
        "Basic SEO optimization",
        "1 revision round",
        "7-day delivery",
      ],
      popular: false,
    },
    {
      name: "Pro",
      price: "₹24,999",
      description: "Most popular for startups",
      features: [
        "Full app or web MVP",
        "Complete design system",
        "5+ page designs",
        "3 revision rounds",
        "Advanced interactions",
        "14-day delivery",
      ],
      popular: true,
    },
    {
      name: "Premium",
      price: "₹49,999",
      description: "Complete design package",
      features: [
        "All-inclusive design + motion",
        "Complete branding package",
        "Unlimited pages",
        "Unlimited revisions",
        "Motion design included",
        "Priority support",
        "30-day delivery",
      ],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Floating Blobs Background */}
      <div className="blob blob-blue w-96 h-96 top-10 right-10" style={{ animationDelay: "0s" }} />
      <div className="blob blob-purple w-80 h-80 bottom-20 left-20" style={{ animationDelay: "3s" }} />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative">
        <div className="gradient-mesh absolute inset-0 opacity-50" />
        <div className="container mx-auto text-center relative z-10">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              From concept to launch, we provide everything you need to build exceptional digital products
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 relative">
        <div className="gradient-hero absolute inset-0" />
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="glass-card group cursor-pointer border-0 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-spring shadow-neon-blue group-hover:shadow-neon-purple`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <CardTitle className="text-3xl mb-4 group-hover:text-gradient transition-smooth">{service.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed text-foreground">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-gradient-primary flex items-center justify-center shadow-neon-blue">
                            <Check className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-sm font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 relative">
        <div className="gradient-mesh absolute inset-0 opacity-30" />
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Simple <span className="text-gradient">Pricing</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect plan for your project. All plans include high-quality design and unlimited support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`glass-card relative border-0 animate-scale-in ${
                  plan.popular ? "water-glow scale-105" : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="gradient-primary px-6 py-2 rounded-full shadow-neon-purple animate-glow">
                      <span className="text-white font-bold text-sm flex items-center gap-2">
                        <Star className="w-4 h-4 fill-white" /> Most Popular
                      </span>
                    </div>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="text-sm">{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-5xl font-bold text-gradient">{plan.price}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 mb-6">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-gradient-primary flex items-center justify-center mt-0.5 shadow-neon-blue">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button
                    asChild
                    variant={plan.popular ? "hero" : "outline"}
                    className={`w-full ${plan.popular ? "shadow-neon-blue hover:shadow-neon-purple" : "glass hover:glass-card"}`}
                  >
                    <Link to="/contact">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 relative">
        <div className="gradient-hero absolute inset-0" />
        <div className="container mx-auto text-center relative z-10">
          <div className="water-glow max-w-4xl mx-auto p-16 animate-scale-in">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Ready to get <span className="text-gradient">started?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Let's discuss your project and create something amazing together
            </p>
            <Button asChild size="lg" variant="hero" className="shadow-neon-blue hover:shadow-neon-purple transition-bounce text-lg px-12 py-7">
              <Link to="/contact">
                Book a Free Call <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
