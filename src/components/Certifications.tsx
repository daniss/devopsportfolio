const certifications = [
  {
    name: "Certified Kubernetes Administrator (CKA)",
    issuer: "Cloud Native Computing Foundation",
    date: "2025",
    badge: "🎯",
    description: "Advanced Kubernetes administration and troubleshooting",
    credentialUrl: "https://www.credly.com/badges/c2b733d9-4ca7-4fc7-9ce4-880a226473c1/public_url"
  },
  {
    name: "Microsoft Azure Fundamentals",
    issuer: "Microsoft",
    date: "2023",
    badge: "☁️",
    description: "Cloud services and Azure platform fundamentals",
    credentialUrl: ""
  }
];

export const Certifications = () => (
  <section id="certifications" className="py-20 px-4 md:px-8 bg-gray-50">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Certifications
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Industry-recognized certifications validating expertise in cloud and DevOps technologies
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        {certifications.map((cert) => (
          <div 
            key={cert.name} 
            className="relative group bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 w-full max-w-sm md:w-80"
          >
            <div className="p-6">
              {/* Badge */}
              <div className="text-center mb-4">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-100 text-blue-600 text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {cert.badge}
                </div>
              </div>

              {/* Content */}
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                  {cert.name}
                </h3>
                <p className="text-gray-600 text-sm mb-2">{cert.issuer}</p>
                <p className="text-gray-500 text-sm mb-4">{cert.date}</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {cert.description}
                </p>
              </div>

              {/* Verify Credential Button */}
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 group/btn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Verify Credential
                <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>

              {/* Verification badge */}
              <div className="absolute top-4 right-4">
                <div className="flex items-center gap-1 bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Verified
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional info */}
      <div className="text-center mt-12">
        <p className="text-gray-600">
          🎓 Currently pursuing additional certifications in 
          <span className="text-blue-600 font-semibold"> AWS Solutions Architect</span> and 
          <span className="text-blue-600 font-semibold"> Kubernetes Security Specialist</span>
        </p>
      </div>
    </div>
  </section>
);
