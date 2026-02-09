import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white p-4">
      {/* Blue Frame */}
      <div className="min-h-[calc(100vh-2rem)] rounded-3xl" style={{ background: 'linear-gradient(to right, #1f4ed8, #0b1f3b)' }}>
        {/* Header/Navigation */}
        <header className="flex items-center justify-between px-10 py-6 max-w-7xl mx-auto">
          <div className="text-2xl font-bold text-white">Vircads</div>
          <nav className="flex items-center gap-8">
            <a href="#about" className="text-white hover:text-blue-100 transition-colors">
              About
            </a>
            <a href="#how-it-works" className="text-white hover:text-blue-100 transition-colors">
              How it Works
            </a>
            <a href="#contact" className="text-white hover:text-blue-100 transition-colors">
              Contact Us
            </a>
            <button className="bg-blue-400 hover:bg-blue-300 text-white px-6 py-2 rounded-full font-medium transition-colors">
              Start Now
            </button>
          </nav>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-10 py-12">
          <div className="flex items-center gap-12">
            {/* Left Content */}
            <div className="w-[40%]">
              <div className="inline-block bg-blue-500/50 border border-blue-300 rounded-full px-4 py-2 mb-6">
                <span className="text-white text-sm font-medium">Virtual Forensic Training Platform</span>
              </div>
              
              <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
                VirCads
              </h1>
              
              <p className="text-blue-100 text-lg mb-10 leading-relaxed max-w-lg">
                A comprehensive educational web application for forensics and criminal justice students to practice postmortem examination techniques in a safe, interactive environment.
              </p>
              
              <div className="flex gap-6">
                <button className="flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
                  <span className="text-xl">▶</span> Start Simulation
                </button>
                <button className="flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
                  <span className="text-xl">📖</span> Learn More
                </button>
              </div>
            </div>

            {/* Right Side - Image Placeholder */}
          <div className="w-[60%]">
              <div className="bg-white/90 rounded-3xl p-6 shadow-2xl">
                <div className="bg-gray-200 rounded-2xl aspect-square flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-gray-500 text-lg font-medium">Forensic Training Image</p>
                    <p className="text-gray-400 text-sm">(Placeholder for simulation mockup)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Academic Origin Section */}
      <section className="max-w-full mx-auto px-4 py-10">
        <div className="flex items-center gap-4">
          {/* Text Card */}
          <div className="flex-1 bg-gray-100 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Academic Origin and Contributors</h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              This project was developed by students from the University of the Cordilleras, College of Criminal Justice Education, as part of an academic initiative in forensic education.
            </p>
          </div>

          {/* UC Logo Placeholder */}
          <div className="w-40 h-40 bg-gray-100 rounded-2xl flex items-center justify-center shrink-0">
            <span className="text-gray-400 text-xs text-center">UC Logo</span>
          </div>

          {/* CCJE Logo Placeholder */}
          <div className="w-40 h-40 bg-gray-100 rounded-2xl flex items-center justify-center shrink-0">
            <span className="text-gray-400 text-xs text-center">CCJE Logo</span>
          </div>
        </div>
      </section>

    </div>
  );
}
