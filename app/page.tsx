import Image from 'next/image';
import Link from 'next/link';
import prepImage from './images/prep.png';
import externalImage from './images/external.png';
import injuryIdentificationImage from './images/injuryIdentification.png';
import internalImage from './images/internal.png';
import causeImage from './images/cause.png';
import performanceImage from './images/performance.png';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Container - Full Screen */}
      <main className="flex flex-col">
        {/* Blue Section - 70% of screen */}
        <div className="min-h-[70vh] md:h-[70vh] rounded-3xl mx-3 sm:mx-4 mt-3 sm:mt-4" style={{ background: 'linear-gradient(to right, #1f4ed8, #0b1f3b)' }}>
          {/* Header/Navigation */}
          <header className="flex flex-wrap items-center justify-between gap-3 px-4 sm:px-6 lg:px-10 py-4 sm:py-6">
            <div className="text-xl sm:text-[32px] font-bold text-white">Vircads</div>
            <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm lg:text-base">
              <a href="#about" className="text-white hover:text-blue-100 transition-colors">
                About
              </a>
              <a href="#how-it-works" className="text-white hover:text-blue-100 transition-colors">
                How it Works
              </a>
              <a href="#contact" className="text-white hover:text-blue-100 transition-colors">
                Contact Us
              </a>
              <button className="bg-blue-400 hover:bg-blue-300 text-white px-5 py-2 rounded-full font-medium transition-colors">
                Start Now
              </button>
            </nav>
          </header>

          {/* Content Container */}
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 px-4 sm:px-6 lg:px-10 pb-6 lg:pb-0 h-auto lg:h-[calc(100%-88px)]">
            {/* Left Content */}
            <div className="w-full lg:w-[45%]">
              <div className="inline-block bg-blue-500/50 border border-blue-300 rounded-full px-3 sm:px-4 py-2 mb-4 sm:mb-6">
                <span className="text-white text-xs sm:text-sm font-medium">Virtual Forensic Training Platform</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight text-white">
                VirCads
              </h1>
              
              <p className="text-blue-100 text-sm sm:text-base lg:text-lg mb-6 sm:mb-10 leading-relaxed max-w-lg">
                A comprehensive educational web application for forensics and criminal justice students to practice postmortem examination techniques in a safe, interactive environment.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
                <Link
                  href="https://vircads-game.vercel.app/"
                  className="flex items-center justify-center gap-2 bg-white text-blue-600 px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors text-sm sm:text-base"
                >
                  <span className="text-xl">▶</span> Start Simulation
                </Link>
                <button className="flex items-center justify-center gap-2 border-2 border-white text-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors text-sm sm:text-base">
                  <span className="text-xl">📖</span> Learn More
                </button>
              </div>
            </div>

            {/* Right Side - Scene Image */}
            <div className="w-full lg:w-[55%]">
              <div className="bg-white/90 rounded-3xl p-3 sm:p-4 lg:p-6 shadow-2xl">
                <Image
                  src="/images/scene.png"
                  alt="Forensic Training Simulation"
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Academic Origin Section - 30% of screen */}
        <section className="px-4 sm:px-6 lg:px-10 py-6 sm:py-8 bg-white">
          <div className="flex flex-col lg:flex-row items-stretch gap-4">
            {/* Left Text Card - 50% */}
            <div className="w-full lg:w-1/2 bg-[#EEF2F6] backdrop-blur-sm rounded-2xl p-5 sm:p-6 lg:p-8 flex flex-col justify-center">
              <h2 className="text-xl sm:text-2xl font-bold text-black mb-2 leading-tight">Academic Origin and Contributors</h2>
              <p className="text-black text-sm sm:text-base leading-relaxed">
                This project was developed by students from the University of the Cordilleras, College of Criminal Justice Education, as part of an academic initiative in forensic education.
              </p>
            </div>

            {/* Right Side - 50% with two logo cards */}
            <div className="w-full lg:w-1/2 flex gap-4">
              {/* UC Logo */}
              <div className="flex-1 bg-[#EEF2F6] backdrop-blur-sm rounded-2xl flex items-center justify-center p-4 sm:p-6">
                <Image
                  src="/images/uc_logo.png"
                  alt="University of the Cordilleras Logo"
                  width={160}
                  height={160}
                  className="object-contain max-w-full h-auto"
                />
              </div>

              {/* CCJE Logo */}
              <div className="flex-1 bg-[#EEF2F6] backdrop-blur-sm rounded-2xl flex items-center justify-center p-4 sm:p-6">
                <Image
                  src="/images/ccje_logo.png"
                  alt="College of Criminal Justice Education Logo"
                  width={160}
                  height={160}
                  className="object-contain max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section className="px-4 py-8 bg-white">

            {/* About Us Title */}
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-8">About Us</h2>
            <div className="max-w-7xl mx-auto">
              
              {/* Content Grid */}
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                {/* Left Side - What we Do */}
                <div className="w-full lg:w-[45%]">
                  <div className="bg-[#EEF2F6] rounded-3xl p-5 sm:p-6 lg:p-8 h-full">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-5 sm:mb-6">What we Do</h3>
                    <div className="space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">
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
                <div className="w-full lg:w-[55%] flex flex-col gap-4 sm:gap-6">
                  {/* Feature 1 */}
                  <div className="flex gap-4 sm:gap-6 items-start bg-[#EEF2F6] rounded-3xl p-4 sm:p-6">
                    <div className="shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(to right, #1f4ed8, #0b1f3b)' }}>
                      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 leading-tight">Support forensic education through structured simulation</h4>
                      <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                        To provide students with a detailed, step-by-step postmortem examination workflow that aligns with standard medico-legal protocols and classroom instruction.
                      </p>
                    </div>
                  </div>

                  {/* Feature 2 */}
                  <div className="flex gap-4 sm:gap-6 items-start bg-[#EEF2F6] rounded-3xl p-4 sm:p-6">
                    <div className="shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(to right, #1f4ed8, #0b1f3b)' }}>
                      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 leading-tight">Improve injury recognition and forensic reasoning</h4>
                      <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                        To help learners accurately identify, classify, and interpret injuries while understanding their medico-legal significance.
                      </p>
                    </div>
                  </div>

                  {/* Feature 3 */}
                  <div className="flex gap-4 sm:gap-6 items-start bg-[#EEF2F6] rounded-3xl p-4 sm:p-6">
                    <div className="shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(to right, #1f4ed8, #0b1f3b)' }}>
                      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 leading-tight">Promote ethical and safe learning environments</h4>
                      <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                        To enable repeated practice and decision-making in a controlled, respectful, and non-harmful setting without reliance on real or identifiable cases.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </section>

        {/* How the Simulation Works Section */}
        <section className="px-4 py-8 bg-white">
          <div
            className="rounded-3xl p-6 sm:p-8 lg:p-12"
            style={{
              backgroundImage: "linear-gradient(to right, rgba(31, 78, 216, 0.28), rgba(11, 31, 59, 0.32)), url('/images/Rectangle 5.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            {/* Badge and Title */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-blue-500/30 border border-blue-300/50 rounded-full px-4 py-2 mb-6">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-white text-sm font-medium">Clinical Training Interface</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">How the Simulation Works</h2>
              <p className="text-white/80 text-base sm:text-lg max-w-3xl mx-auto">
                The simulation follows the step-by-step postmortem process, allowing learners to practice forensic procedures, injury classification, and cause-of-death analysis.
              </p>
            </div>

            {/* Grid of 6 Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {/* Card 1: Preparation and PPE */}
              <div className="bg-blue-900/10 backdrop-blur-sm rounded-2xl p-4 border border-white hover:border-white/30 transition-all">
                <div
                  className="rounded-xl mb-4 aspect-video overflow-hidden border border-white/20"
                  style={{
                    backgroundImage: `url(${prepImage.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                </div>
                <h3 className="text-white font-bold text-base sm:text-xl mb-2">Preparation and PPE</h3>
                <p className="text-white/70 text-lg">Proper safety protocols and equipment preparation</p>
              </div>

              {/* Card 2: External examination */}
              <div className="bg-blue-900/10 backdrop-blur-sm rounded-2xl p-4 border border-white hover:border-white/30 transition-all">
                <div
                  className="rounded-xl mb-4 aspect-video overflow-hidden border border-white/20"
                  style={{
                    backgroundImage: `url(${externalImage.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                </div>
                <h3 className="text-white font-bold text-base sm:text-xl mb-2">External examination</h3>
                <p className="text-white/70 text-lg">Systematic external body assessment</p>
              </div>

              {/* Card 3: Injury identification */}
              <div className="bg-blue-900/10 backdrop-blur-sm rounded-2xl p-4 border border-white hover:border-white/30 transition-all">
                <div
                  className="rounded-xl mb-4 aspect-video overflow-hidden border border-white/20"
                  style={{
                    backgroundImage: `url(${injuryIdentificationImage.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                </div>
                <h3 className="text-white font-bold text-base sm:text-xl mb-2">Injury identification</h3>
                <p className="text-white/70 text-lg">Classification of contusions, abrasions, lacerations</p>
              </div>

              {/* Card 4: Internal examination */}
              <div className="bg-blue-900/10 backdrop-blur-sm rounded-2xl p-4 border border-white hover:border-white/30 transition-all">
                <div
                  className="rounded-xl mb-4 aspect-video overflow-hidden border border-white/20"
                  style={{
                    backgroundImage: `url(${internalImage.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                </div>
                <h3 className="text-white font-bold text-base sm:text-xl mb-2">Internal examination</h3>
                <p className="text-white/70 text-lg">Structured internal organ examination procedures</p>
              </div>

              {/* Card 5: Cause and manner analysis */}
              <div className="bg-blue-900/10 backdrop-blur-sm rounded-2xl p-4 border border-white hover:border-white/30 transition-all">
                <div
                  className="rounded-xl mb-4 aspect-video overflow-hidden border border-white/20"
                  style={{
                    backgroundImage: `url(${causeImage.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                </div>
                <h3 className="text-white font-bold text-base sm:text-xl mb-2">Cause and manner analysis</h3>
                <p className="text-white/70 text-lg">Determination of death cause and manner</p>
              </div>

              {/* Card 6: Performance review */}
              <div className="bg-blue-900/10 backdrop-blur-sm rounded-2xl p-4 border border-white hover:border-white/30 transition-all">
                <div
                  className="rounded-xl mb-4 aspect-video overflow-hidden border border-white/20"
                  style={{
                    backgroundImage: `url(${performanceImage.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                </div>
                <h3 className="text-white font-bold text-base sm:text-xl mb-2">Performance review</h3>
                <p className="text-white/70 text-lg">Assessment of procedural accuracy</p>
              </div>
            </div>
          </div>
        </section>

        {/* What Students Are Saying Section */}
        <section className="px-4 py-12 sm:py-16 bg-white">
          <div className="max-w-7xl p-7 rounded-3xl py-4 mx-auto bg-[#EEF2F6]">
            {/* Title */}
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">What Students Are Saying</h2>
              <p className="text-gray-600 text-base sm:text-lg">Real feedback from forensic science and criminal justice students.</p>
            </div>

            {/* Testimonial Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {/* Testimonial 1 */}
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  &quot;VirCads helped me understand the proper sequence of a postmortem examination. Seeing each step in order made it easier to remember what to document and why each observation matters.&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                    AS
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Tina A.</div>
                    <div className="text-sm text-gray-500">Forensic Science Student</div>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  &quot;The injury classification part of the simulation clarified the differences between contusions, abrasions, and lacerations. It was helpful to practice identifying injuries before applying them to case analysis.&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold">
                    MK
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Joshua C.</div>
                    <div className="text-sm text-gray-500">Criminal Justice Student</div>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  &quot;Using the simulation reinforced what we discussed in class, especially in interpreting findings and determining the manner of death. It made the concepts more concrete without feeling overwhelming.&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">
                    JL
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Kristine D.</div>
                    <div className="text-sm text-gray-500">Forensic Science Student</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Features with Checkmarks */}
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 font-medium">No Credit Card Required</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 font-medium">100% Free Access</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 font-medium">Instant Start</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 font-medium">Academic Citations Included</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Ready to Begin */}
        <section className="px-4 py-12 sm:py-16 bg-white">
          <div className="relative rounded-3xl overflow-hidden">
            {/* Gold Gradient Base Layer */}
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: 'linear-gradient(to right, #FFB900, #705100)'
              }}
            />
            {/* Image Overlay with Lower Opacity */}
            <div 
              className="absolute inset-0 opacity-90"
              style={{
                backgroundImage: 'url(/images/Rectangle6.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
            
            {/* Content */}
            <div className="relative z-10 text-center py-14 sm:py-20 px-5 sm:px-8">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                Ready to Begin the Simulation?
              </h2>
              <p className="text-white text-sm sm:text-base lg:text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
                VirCads is designed for academic use, allowing students to practice postmortem procedures, interpret injuries, and make informed forensic decisions in a structured learning environment.
              </p>
              
              <Link
                href="https://vircads-game.vercel.app/"
                className="text-white px-6 sm:px-10 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base lg:text-lg transition-colors inline-flex items-center gap-2 sm:gap-3 shadow-lg"
                style={{ background: 'linear-gradient(to right, #1f4ed8, #0b1f3b)' }}
              >
                <span className="text-2xl">▶</span>
                Begin Your First Autopsy Now
              </Link>
              
              <p className="text-yellow-100 text-sm mt-6">
                ✨ No signup required • Start immediately • 100% free
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Logo */}
            <div className="text-xl sm:text-2xl font-bold" style={{ backgroundImage: 'linear-gradient(to right, #1f4ed8, #0b1f3b)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
              VirCads
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-sm sm:text-base">
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">
                About
              </a>
              <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 transition-colors">
                How it Works
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                Contact Us
              </a>
            </nav>

            {/* Copyright */}
            <div className="text-gray-600 text-xs sm:text-sm text-center md:text-right">
              Copyright @ 2026 VirCads
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
