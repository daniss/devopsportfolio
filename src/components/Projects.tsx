const projects = [
  {
    name: "Azure Infrastructure as Code Automation (ft_iac)",
    description: "Designed and deployed a highly available web stack on Azure using Terraform. Automated multi-zone VM provisioning, load balancing with sticky sessions, autoscaling, secure secrets (Key Vault), and real-time alerts. Included modular IaC, region/size presets, and HA/scalability test scripts.",
    tech: ["Azure", "Terraform", "Infrastructure as Code", "Key Vault", "Azure Monitor", "Linux"],
    link: "https://github.com/daniss/ft_iac-azure-terraform",
    status: "Demo"
  },
  {
    name: "Kubernetes GitOps Lab (Inception-of-Things)",
    description: "Built a Kubernetes lab with K3s/K3d: automated cluster setup via Vagrant, Ingress host routing for replicated apps, and GitOps deployment with Argo CD. Enabled auto-sync of app versions (v1→v2) from GitHub to cluster. Fully scripted, reproducible, and validated with live upgrades.",
    tech: ["Kubernetes", "K3s", "K3d", "Argo CD", "Vagrant", "Docker", "GitOps"],
    link: "https://github.com/daniss/inception-of-things-k3s-k3d-argocd",
    status: "Demo"
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Production': return 'bg-green-100 text-green-800';
    case 'Active': return 'bg-blue-100 text-blue-800';
    case 'Open Source': return 'bg-gray-100 text-gray-800';
    case 'Development': return 'bg-yellow-100 text-yellow-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

export const Projects = () => (
  <section className="py-20 px-4 md:px-8 bg-white">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Featured Projects
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Infrastructure automation, CI/CD pipelines, and cloud-native solutions that scale
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div 
            key={project.name} 
            className="group bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                {project.name}
              </h3>
              <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getStatusColor(project.status)}`}>
                {project.status}
              </span>
            </div>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech) => (
                <span 
                  key={tech} 
                  className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full border border-gray-200 hover:border-blue-300 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors group-hover:gap-3"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View on GitHub
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);
