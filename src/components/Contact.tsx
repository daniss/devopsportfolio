const contactMethods = [
  {
    icon: "📧",
    label: "Email",
    value: "daniscin@gmail.com",
    link: "mailto:daniscin@gmail.com"
  },
  {
    icon: "💼",
    label: "LinkedIn",
    value: "linkedin.com/in/danis-cindrak",
    link: "https://linkedin.com/in/danis-cindrak"
  },
  {
    icon: "🐙",
    label: "GitHub",
    value: "github.com/daniss",
    link: "https://github.com/daniss"
  }
];

export const Contact = () => (
  <section className="py-20 px-4 md:px-8 bg-white">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Contact
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Feel free to reach out for collaboration or opportunities
        </p>
      </div>

      {/* Contact methods */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {contactMethods.map((method) => (
          <a
            key={method.label}
            href={method.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-center">
                <div className="text-3xl mb-4">
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                  {method.label}
                </h3>
                <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors">
                  {method.value}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);
