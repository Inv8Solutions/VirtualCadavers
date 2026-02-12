export default function Home() {
  return (
    <div className="h-screen overflow-hidden bg-white">
      {/* Main Container - Full Screen */}
      <main className="h-full flex flex-col">
        {/* Blue Section - 70% of screen */}
        <div className="h-[70vh] rounded-3xl mx-4 mt-4" style={{ background: 'linear-gradient(to right, #1f4ed8, #0b1f3b)' }}>
          {/* Header/Navigation */}
          <header className="flex items-center justify-between px-10 py-6">
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

          {/* Content Container */}
          <div className="flex items-center gap-12 px-10 h-[calc(100%-88px)]">
            {/* Left Content */}
            <div className="w-[45%]">
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

            {/* Right Side - Scene Image */}
            <div className="w-[55%]">
              <div className="bg-white/90 rounded-3xl p-6 shadow-2xl">
                <img
                  src="/images/scene.png"
                  alt="Forensic Training Simulation"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Academic Origin Section - 30% of screen */}
        <section className="h-[30vh] px-10 py-8 bg-white">
          <div className="flex items-stretch gap-4 h-full">
            {/* Left Text Card - 50% */}
            <div className="w-1/2 bg-[#EEF2F6] backdrop-blur-sm rounded-2xl p-8 flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-black mb-2">Academic Origin and Contributors</h2>
              <p className="text-black text-sm leading-relaxed">
                This project was developed by students from the University of the Cordilleras, College of Criminal Justice Education, as part of an academic initiative in forensic education.
              </p>
            </div>

            {/* Right Side - 50% with two logo cards */}
            <div className="w-1/2 flex gap-4">
              {/* UC Logo */}
              <div className="flex-1 bg-[#EEF2F6] backdrop-blur-sm rounded-2xl flex items-center justify-center p-6">
                <img
                  src="/images/uc_logo.png"
                  alt="University of the Cordilleras Logo"
                  width="160"
                  height="160"
                  className="object-contain max-w-full h-auto"
                />
              </div>

              {/* CCJE Logo */}
              <div className="flex-1 bg-[#EEF2F6] backdrop-blur-sm rounded-2xl flex items-center justify-center p-6">
                <img
                  src="/images/ccje_logo.png"
                  alt="College of Criminal Justice Education Logo"
                  width="160"
                  height="160"
                  className="object-contain max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
