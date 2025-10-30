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
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold mb-6">
            Our <span className="gradient-primary bg-clip-text text-transparent">Portfolio</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our latest work across web design, mobile apps, branding, and motion design
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filterOption) => (
            <Button
              key={filterOption}
              variant={filter === filterOption ? "default" : "outline"}
              onClick={() => setFilter(filterOption)}
              size="sm"
            >
              {filterOption}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden group cursor-pointer hover:shadow-glow-xl transition-smooth"
            >
              <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-smooth" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-3 py-1 bg-background/90 backdrop-blur-sm text-xs font-semibold rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-smooth">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm">{project.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
