export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Container - Full Screen */}
      <main className="flex flex-col">
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

        {/* About Us Section */}
        <section className="px-4 py-2 bg-white">
          {/* About Us Title */}
          <h2 className="text-4xl font-bold text-white text-center mb-4 p-2 py-3 rounded-3xl" style={{ background: 'linear-gradient(to right, #1f4ed8, #0b1f3b)' }}>About Us</h2>
          <div className="rounded-3xl p-12" style={{ background: 'linear-gradient(to right, #1f4ed8, #0b1f3b)' }}>
            
            {/* Content Grid */}
            <div className="flex gap-8">
              {/* Left Side - What we Do */}
              <div className="w-[45%]">
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 h-full border border-white/20">
                  <h3 className="text-2xl font-bold text-white mb-6">What we Do</h3>
                  <div className="space-y-4 text-white/90 text-sm leading-relaxed">
                    <p>
                      VirCads is an academic virtual cadaver autopsy simulator developed as an educational initiative to support forensic science and criminal justice instruction. The platform is designed to help students understand and apply standard medico-legal procedures through a structured, step-by-step simulation of a postmortem examination.
                    </p>
                    <p>
                      By combining guided workflows, injury classification exercises, and decision checkpoints, VirCads reinforces proper documentation, analytical reasoning, and forensic judgment in a safe and controlled learning environment. The simulation is intended to complement classroom lectures and laboratory instruction, providing learners with opportunities for repeated practice without exposure to ethical, logistical, or safety constraints associated with real cases.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Side - Three Features with Checkmarks */}
              <div className="w-[55%] flex flex-col gap-6">
                {/* Feature 1 */}
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(to right, #1f4ed8, #0b1f3b)' }}>
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-2">Support forensic education through structured simulation</h4>
                    <p className="text-white/80 text-sm leading-relaxed">
                      To provide students with a detailed, step-by-step postmortem examination workflow that aligns with standard medico-legal protocols and classroom instruction.
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(to right, #1f4ed8, #0b1f3b)' }}>
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-2">Improve injury recognition and forensic reasoning</h4>
                    <p className="text-white/80 text-sm leading-relaxed">
                      To help learners accurately identify, classify, and interpret injuries while understanding their medico-legal significance.
                    </p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(to right, #1f4ed8, #0b1f3b)' }}>
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-2">Promote ethical and safe learning environments</h4>
                    <p className="text-white/80 text-sm leading-relaxed">
                      To enable repeated practice and decision-making in a controlled, respectful, and non-harmful setting without reliance on real or identifiable cases.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
