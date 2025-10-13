const techStack = [
  { 
    category: "Cloud Platforms", 
    icon: "☁️",
    techs: ["Azure", "AWS"]
  },
  { 
    category: "Kubernetes & Orchestration", 
    icon: "⎈",
    techs: ["Kubernetes (AKS)", "Helm", "Argo CD", "K3s/K3d"]
  },
  { 
    category: "Infrastructure as Code", 
    icon: "🏗️",
    techs: ["Terraform (HCL)", "Ansible"]
  },
  { 
    category: "CI/CD & Automation", 
    icon: "🔄",
    techs: ["GitHub Actions", "Azure DevOps", "SonarQube", "Playwright E2E"]
  },
  { 
    category: "Monitoring & Observability", 
    icon: "📊",
    techs: ["Prometheus", "Grafana", "Azure Monitor"]
  },
  { 
    category: "Security & Compliance", 
    icon: "🔒",
    techs: ["Azure Key Vault", "RBAC", "tfsec", "TFLint", "Trivy"]
  },
  { 
    category: "Containers & Runtime", 
    icon: "🐳",
    techs: ["Docker", "Docker Compose"]
  },
  { 
    category: "Programming & Scripting", 
    icon: "💻",
    techs: ["Python", "JavaScript", "Go", "Bash", "YAML"]
  }
];

export const Skills = () => (
  <section id="skills" className="py-20 px-4 md:px-8 bg-gray-50">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Technical Skills
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Building cloud-native infrastructure with modern DevOps tools and practices
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {techStack.map((category) => (
          <div 
            key={category.category} 
            className="group relative rounded-xl p-6 border-2 bg-blue-50 border-blue-200 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-100 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl text-blue-600">
                {category.icon}
              </span>
              <h3 className="text-lg font-bold text-blue-800">
                {category.category}
              </h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {category.techs.map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1 text-sm font-medium rounded-lg border bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-200 transition-all duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
