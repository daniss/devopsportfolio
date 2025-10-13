const timeline = [
  {
    year: "2025",
    title: "DevOps Engineer Intern",
    company: "LVMH",
    description: "Implemented infrastructure automation and CI/CD pipelines for luxury brands' digital platforms."
  },
  {
    year: "2024",
    title: "Backend Developer Intern",
    company: "Krafter",
    description: "Developed backend services and APIs, contributing to scalable and maintainable software solutions."
  },
  {
    year: "2023",
    title: "42 School Student",
    company: "École 42",
    description: "Intensive software engineering program focusing on systems programming, algorithms, and collaborative learning."
  }
];

export const About = () => (
  <section id="about" className="py-20 px-4 md:px-8 bg-white">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          About Me
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Passionate about building scalable, reliable infrastructure and automating everything
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              🚀 DevOps Engineer & Cloud Enthusiast
            </h3>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                I&apos;m a <span className="text-blue-600 font-semibold">23-year-old DevOps Engineer</span> with a passion for 
                cloud-native technologies and infrastructure automation. Currently studying at 
                <span className="text-blue-600 font-semibold"> École 42</span>, I&apos;m developing expertise in 
                systems programming and modern software engineering practices.
              </p>
              
              <p>
                During my internship at <span className="text-blue-600 font-semibold">LVMH</span>, I gained hands-on 
                experience with enterprise-scale infrastructure, implementing automated deployment pipelines 
                and managing cloud resources for high-traffic applications.
              </p>
              
              <p>
                I believe in the power of <span className="text-blue-600 font-semibold">Infrastructure as Code</span>, 
                continuous integration, and building systems that scale. My goal is to create robust, 
                secure, and efficient cloud infrastructure that enables teams to deploy with confidence.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">Available for opportunities</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">Remote friendly</span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">Open source contributor</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-8">Career Timeline</h3>
          <div className="space-y-8 relative">
            <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-blue-600 via-blue-400 to-blue-300"></div>
            
            {timeline.map((item) => (
              <div key={item.year} className="relative">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10">
                    {item.year.slice(-2)}
                  </div>
                  
                  <div className="flex-1 bg-white rounded-lg p-5 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-bold text-gray-800">{item.title}</h4>
                      <span className="text-sm text-blue-600 font-semibold">{item.year}</span>
                    </div>
                    <p className="text-blue-700 font-bold text-lg mb-2">{item.company}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
