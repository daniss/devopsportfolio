'use client';
import { useState, useEffect } from 'react';

export const Hero = () => {
  const [text, setText] = useState('');
  const fullText = '$ whoami';
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(timer);
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center max-w-4xl mx-auto px-4">
        
        {/* Terminal Window */}
        <div className="bg-white rounded-lg shadow-lg border border-gray-200 mb-8">
          <div className="flex items-center gap-2 px-4 py-3 bg-gray-100 rounded-t-lg border-b border-gray-200">
            <div className="w-3 h-3 bg-red-400 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            <span className="ml-2 text-gray-500 text-sm font-mono">terminal</span>
          </div>
          <div className="p-6 font-mono text-left">
            <div className="text-blue-600 mb-2">{text}<span className="animate-pulse">|</span></div>
            <div className="text-gray-800">
              <span className="text-gray-600">Name:</span> Danis Cindrak<br/>
              <span className="text-gray-600">Role:</span> DevOps Engineer<br/>
              <span className="text-gray-600">Education:</span> 42 Student<br/>
              <span className="text-gray-600">Experience:</span> LVMH Internship<br/>
              <span className="text-gray-600">Status:</span> <span className="text-green-600">Available for opportunities</span>
            </div>
          </div>
        </div>

        <h1 className="text-6xl md:text-7xl font-bold text-gray-800 mb-6">
          Danis Cindrak
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-8 font-light">
          DevOps Engineer specializing in <span className="text-blue-600 font-medium">Kubernetes</span>, 
          <span className="text-blue-600 font-medium"> Cloud Infrastructure</span>, and 
          <span className="text-blue-600 font-medium"> Automation</span>
        </p>

        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="/cv_en.pdf" 
              download 
              className="group bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span className="flex items-center gap-2">
                📄 Download CV (EN)
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
            </a>
            
            <a 
              href="/cv_fr.pdf" 
              download 
              className="group bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span className="flex items-center gap-2">
                📄 Télécharger CV (FR)
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
            </a>
          </div>
          
          <a 
            href="/school_transcript.pdf" 
            download 
            className="group bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span className="flex items-center gap-2">
              🎓 Download School Transcript
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </span>
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};
