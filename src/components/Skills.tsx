const techStack = [
  { category: "Cloud Platforms", techs: ["Azure", "AWS"] },
  { category: "Kubernetes & GitOps", techs: ["Kubernetes (AKS)", "Helm", "Argo CD", "K3s/K3d"] },
  { category: "Infrastructure as Code", techs: ["Terraform (HCL)", "Ansible"] },
  { category: "CI/CD & Quality", techs: ["GitHub Actions", "Azure DevOps", "SonarQube", "Playwright E2E"] },
  { category: "Monitoring & Observability", techs: ["Prometheus", "Grafana", "Azure Monitor"] },
  { category: "Security & Secrets", techs: ["Azure Key Vault", "RBAC", "tfsec", "TFLint", "Trivy"] },
  { category: "Containers", techs: ["Docker", "Docker Compose"] },
  { category: "Programming & Scripting", techs: ["Python", "Bash", "YAML"] }
];

export const Skills = () => (
  <section className="py-20 px-4 md:px-8 bg-gray-50">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Skills & Technologies
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Expertise in cloud-native technologies, automation, and modern DevOps practices
        </p>
      </div>

      {/* Tech Stack */}
      <div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStack.map((category) => (
            <div key={category.category} className="bg-white rounded-lg p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <h4 className="text-lg font-bold text-blue-600 mb-4">{category.category}</h4>
              <div className="flex flex-wrap gap-2">
                {category.techs.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full border border-gray-200 hover:border-blue-300 hover:text-blue-600 transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);