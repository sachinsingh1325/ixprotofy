import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Filter } from "lucide-react";

type FilterType = "All" | "Web" | "App" | "Motion" | "Branding";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>("All");

  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web" as FilterType,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      description: "Modern online shopping experience with seamless checkout",
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      title: "Fitness Tracking App",
      category: "App" as FilterType,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      description: "Mobile app for health-conscious individuals",
      gradient: "from-green-500 to-emerald-400",
    },
    {
      title: "Brand Identity - TechCorp",
      category: "Branding" as FilterType,
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop",
      description: "Complete brand redesign for tech startup",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Product Launch Animation",
      category: "Motion" as FilterType,
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
      description: "Stunning motion graphics for product reveal",
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "SaaS Dashboard",
      category: "Web" as FilterType,
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
      description: "Analytics dashboard with beautiful data visualization",
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      title: "Food Delivery App",
      category: "App" as FilterType,
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
      description: "Delightful food ordering experience",
      gradient: "from-yellow-500 to-orange-400",
    },
    {
      title: "Logo Animation Reel",
      category: "Motion" as FilterType,
      image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800&h=600&fit=crop",
      description: "Collection of animated logos for various brands",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      title: "Startup Brand Kit",
      category: "Branding" as FilterType,
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop",
      description: "Full branding package including logo, colors, and guidelines",
      gradient: "from-cyan-500 to-blue-500",
    },
  ];

  const filters: FilterType[] = ["All", "Web", "App", "Motion", "Branding"];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Floating Blobs Background */}
      <div className="blob blob-purple w-96 h-96 top-20 left-10" style={{ animationDelay: "1s" }} />
      <div className="blob blob-blue w-80 h-80 bottom-40 right-20" style={{ animationDelay: "3s" }} />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative">
        <div className="gradient-mesh absolute inset-0 opacity-50" />
        <div className="container mx-auto text-center relative z-10">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Our <span className="text-gradient">Portfolio</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Explore our latest projects and see how we've helped brands and startups succeed
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="pb-12 px-4 relative">
        <div className="container mx-auto relative z-10">
          <div className="glass-card rounded-2xl p-4 flex flex-wrap gap-3 justify-center items-center">
            <Filter className="w-5 h-5 text-primary" />
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "hero" : "outline"}
                className={`transition-spring ${
                  activeFilter === filter 
                    ? "shadow-neon-blue" 
                    : "glass hover:glass-card"
                }`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20 px-4 relative">
        <div className="gradient-hero absolute inset-0" />
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={index}
                className="glass-card group cursor-pointer overflow-hidden border-0 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden rounded-t-xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-spring group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-40 transition-smooth`} />
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-smooth">
                    <div className="w-12 h-12 rounded-full glass flex items-center justify-center shadow-neon-blue">
                      <ExternalLink className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold group-hover:text-gradient transition-smooth">{project.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${project.gradient} text-white shadow-neon-blue`}>
                      {project.category}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20 animate-scale-in">
              <div className="water-glow max-w-md mx-auto p-12">
                <p className="text-2xl text-gradient font-bold mb-4">No projects found</p>
                <p className="text-muted-foreground">Try selecting a different filter</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 relative">
        <div className="gradient-mesh absolute inset-0 opacity-50" />
        <div className="container mx-auto text-center relative z-10">
          <div className="water-glow max-w-4xl mx-auto p-16 animate-scale-in">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Want to see your <span className="text-gradient">project here?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Let's collaborate and create something amazing that we'll both be proud to showcase
            </p>
            <Button asChild size="lg" variant="hero" className="shadow-neon-blue hover:shadow-neon-purple transition-bounce text-lg px-12 py-7">
              <a href="/contact">Start Your Project</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
