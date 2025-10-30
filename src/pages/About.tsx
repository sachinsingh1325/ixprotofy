import { Users, Target, Lightbulb } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const team = [
    {
      name: "Alex Rivera",
      role: "Creative Director",
      bio: "15+ years crafting digital experiences for Fortune 500 companies and startups alike.",
    },
    {
      name: "Maya Patel",
      role: "Lead UI/UX Designer",
      bio: "Passionate about user-centered design and creating intuitive interfaces.",
    },
    {
      name: "Jordan Kim",
      role: "Head of Development",
      bio: "Full-stack developer specializing in React, Next.js, and modern web technologies.",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 px-4">
      <div className="container mx-auto">
        {/* Hero */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold mb-6">
            About <span className="gradient-primary bg-clip-text text-transparent">DesignStudio</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're a passionate team of designers and developers dedicated to helping startups and brands create exceptional digital experiences.
          </p>
        </div>

        {/* Story */}
        <section className="mb-20">
          <Card className="p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2020, DesignStudio emerged from a simple belief: every startup deserves world-class design. We've worked with over 100+ clients, from early-stage startups to established brands, helping them bring their visions to life.
              </p>
              <p>
                Our approach combines creative excellence with technical expertise. We don't just design beautiful interfaces—we create solutions that drive business results and delight users.
              </p>
            </div>
          </Card>
        </section>

        {/* Mission & Values */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">What Drives Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4">
                <Target className="text-primary-foreground" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Mission</h3>
              <p className="text-muted-foreground">
                Empower startups and brands with design that makes an impact.
              </p>
            </Card>
            <Card className="p-6 text-center">
              <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="text-primary-foreground" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Vision</h3>
              <p className="text-muted-foreground">
                Be the go-to design partner for ambitious founders worldwide.
              </p>
            </Card>
            <Card className="p-6 text-center">
              <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4">
                <Users className="text-primary-foreground" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Values</h3>
              <p className="text-muted-foreground">
                Creativity, collaboration, and delivering exceptional results.
              </p>
            </Card>
          </div>
        </section>

        {/* Team */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">Meet The Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="w-24 h-24 rounded-full gradient-primary mx-auto mb-4 flex items-center justify-center text-4xl font-bold text-primary-foreground">
                  {member.name.split(" ").map(n => n[0]).join("")}
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
