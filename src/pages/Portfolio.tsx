import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const [filter, setFilter] = useState("All");

  const filters = ["All", "Web", "App", "Motion", "Branding"];

  const projects = [
    {
      title: "TechFlow App",
      category: "App",
      description: "A productivity app for modern teams",
      gradient: "from-blue-500 to-purple-600",
    },
    {
      title: "FinanceHub Web",
      category: "Web",
      description: "Financial dashboard for startups",
      gradient: "from-green-500 to-teal-600",
    },
    {
      title: "BrandCo Identity",
      category: "Branding",
      description: "Complete brand refresh and guidelines",
      gradient: "from-pink-500 to-rose-600",
    },
    {
      title: "FitLife Mobile",
      category: "App",
      description: "Health and fitness tracking application",
      gradient: "from-orange-500 to-red-600",
    },
    {
      title: "StartupLaunch Website",
      category: "Web",
      description: "Landing page for SaaS startup",
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      title: "Logo Animation",
      category: "Motion",
      description: "Animated brand identity for tech company",
      gradient: "from-violet-500 to-purple-600",
    },
  ];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="min-h-screen pt-24 pb-20 px-4">
      <div className="container mx-auto">
        {/* Hero */}
        <div className="text-center mb-20 animate-fade-in relative">
          <div className="absolute inset-0 gradient-mesh opacity-30 blur-3xl" />
          <h1 className="text-6xl md:text-7xl font-bold mb-8 relative z-10">
            Our <span className="text-gradient">Portfolio</span>
          </h1>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto relative z-10">
            Explore our latest work across web design, mobile apps, branding, and motion design
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {filters.map((filterOption) => (
            <Button
              key={filterOption}
              variant={filter === filterOption ? "hero" : "outline"}
              onClick={() => setFilter(filterOption)}
              size="lg"
              className="px-8 hover:scale-105 transition-spring"
            >
              {filterOption}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden group cursor-pointer hover-lift border-2 border-border/50 hover:border-primary/50 transition-smooth"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`h-64 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-smooth" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-smooth">
                  <Button variant="secondary" size="lg" className="shadow-glow-xl">
                    View Project
                  </Button>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-4 py-2 bg-background/95 backdrop-blur-sm text-sm font-bold rounded-full shadow-lg">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-smooth">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed">{project.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-32">
            <div className="w-32 h-32 rounded-full gradient-primary mx-auto mb-6 flex items-center justify-center animate-scale-in">
              <div className="text-6xl">🔍</div>
            </div>
            <p className="text-muted-foreground text-2xl">No projects found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
