import { Card, CardContent } from "@/components/ui/card";

const TechStackSection = () => {
  const technologies = [
    {
      name: "Java",
      icon: "☕",
      category: "Language",
      color: "text-java"
    },
    {
      name: "Spring Boot",
      icon: "🍃",
      category: "Framework",
      color: "text-spring"
    },
    {
      name: "Docker",
      icon: "🐳",
      category: "Containerization",
      color: "text-docker"
    },
    {
      name: "AWS",
      icon: "☁️",
      category: "Cloud",
      color: "text-aws"
    },
    {
      name: "MySQL",
      icon: "🗄️",
      category: "Database",
      color: "text-mysql"
    },
    {
      name: "DynamoDB",
      icon: "⚡",
      category: "NoSQL",
      color: "text-primary"
    },
    {
      name: "Git",
      icon: "📝",
      category: "Version Control",
      color: "text-foreground"
    },
    {
      name: "Kafka",
      icon: "📨",
      category: "Messaging",
      color: "text-accent"
    },
    {
      name: "Hibernate",
      icon: "🔄",
      category: "ORM",
      color: "text-muted-foreground"
    },
    {
      name: "JavaScript",
      icon: "⚡",
      category: "Language",
      color: "text-aws"
    },
    {
      name: "GitHub Actions",
      icon: "🚀",
      category: "CI/CD",
      color: "text-primary"
    },
    {
      name: "Microservices",
      icon: "🏗️",
      category: "Architecture",
      color: "text-accent"
    }
  ];

  const categories = ["Language", "Framework", "Cloud", "Database", "Tools"];

  return (
    <section id="tech-stack" className="py-20 px-6 bg-secondary/10">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 code-font">
            Technical <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks I use to build 
            robust, scalable backend systems and cloud-native applications.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <Card 
              key={tech.name} 
              className="tech-icon p-6 text-center cursor-pointer group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <h3 className={`font-semibold text-lg mb-2 ${tech.color} group-hover:text-primary transition-colors duration-300`}>
                  {tech.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {tech.category}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8 text-foreground">Key Specializations</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg bg-card border border-border">
              <h4 className="text-lg font-semibold mb-4 text-primary">Backend Development</h4>
              <ul className="text-muted-foreground space-y-2 text-left">
                <li>• RESTful API Design & Implementation</li>
                <li>• Microservices Architecture</li>
                <li>• Spring Boot & Spring Cloud</li>
                <li>• JPA/Hibernate ORM</li>
              </ul>
            </div>
            
            <div className="p-6 rounded-lg bg-card border border-border">
              <h4 className="text-lg font-semibold mb-4 text-accent">Cloud & DevOps</h4>
              <ul className="text-muted-foreground space-y-2 text-left">
                <li>• AWS Services (EC2, ECS, S3, SNS, SQS)</li>
                <li>• Docker Containerization</li>
                <li>• CI/CD Pipelines</li>
                <li>• Infrastructure as Code</li>
              </ul>
            </div>
            
            <div className="p-6 rounded-lg bg-card border border-border">
              <h4 className="text-lg font-semibold mb-4 text-primary">Data & Messaging</h4>
              <ul className="text-muted-foreground space-y-2 text-left">
                <li>• MySQL & DynamoDB</li>
                <li>• Apache Kafka Event Streaming</li>
                <li>• Database Design & Optimization</li>
                <li>• Event-Driven Architecture</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;