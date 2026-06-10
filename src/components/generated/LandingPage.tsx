import React from 'react';

export const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="w-full h-[73px] bg-white flex items-center justify-between px-8 lg:px-16">
        <div className="w-[99px] h-[67px] bg-gray-300 rounded-md"></div>
        
        <nav className="hidden lg:flex items-center space-x-5">
          <div className="px-8 py-6 text-gray-600 hover:text-gray-900">Home</div>
          <div className="px-8 py-6 text-gray-600 hover:text-gray-900">Services</div>
          <div className="px-8 py-6 text-gray-600 hover:text-gray-900">About Us</div>
          <div className="px-8 py-6 text-gray-600 hover:text-gray-900">Blog</div>
        </nav>

        <div className="flex items-center gap-2">
          <button className="bg-blue-600 text-white px-5 py-3 rounded-full text-sm font-semibold hover:bg-blue-700">
            Get In Touch
          </button>
          <div className="w-12 h-11 bg-blue-600 rounded-full flex items-center justify-center">
            <svg width="16" height="12" fill="white" viewBox="0 0 16 12">
              <path d="M0 2L8 8L16 2V0H0V2Z"/>
            </svg>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative w-full h-[619px]" style={{ backgroundColor: 'rgb(37,13,97)' }}>
        <div className="absolute inset-0 bg-black opacity-30"></div>
        
        <div className="relative z-10 container mx-auto px-8 lg:px-16 h-full flex items-center">
          <div className="max-w-4xl">
            <div className="space-y-4 mb-8">
              <h1 className="text-white font-extrabold text-4xl lg:text-5xl leading-tight">
                Tech That Thinks Ahead So You Don't Have To :)
              </h1>
              
              <div className="space-y-5">
                <p className="text-white text-base max-w-2xl">
                  We build intelligent systems that simplify your workflow, scale with your growth, and keep your team ahead of the curve. Whether you're launching a startup or optimizing enterprise infrastructure, our tech adapts to you.
                </p>
                
                <div className="flex gap-2">
                  <button className="bg-transparent border border-white text-white px-5 py-2 rounded-full font-bold hover:bg-white hover:text-purple-900">
                    Get In Touch
                  </button>
                  <button className="bg-white text-purple-900 px-5 py-2 rounded-full font-bold hover:bg-gray-100">
                    Explore
                  </button>
                </div>
              </div>
            </div>

            {/* Reviews Section */}
            <div className="flex items-center gap-4 text-white">
              <div className="flex -space-x-3">
                {[1,2,3,4,5].map((i) => (
                  <div key={i} className="w-11 h-11 bg-gray-400 rounded-full border-2 border-white"></div>
                ))}
              </div>
              
              <div>
                <div className="flex items-center gap-1 mb-1">
                  {[1,2,3,4].map((i) => (
                    <svg key={i} width="15" height="14" fill="rgb(253,176,68)" viewBox="0 0 24 24">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                    </svg>
                  ))}
                  <svg width="15" height="14" fill="rgb(253,176,68)" viewBox="0 0 24 24">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77V2Z"/>
                  </svg>
                </div>
                <p className="text-sm">4.9/5 based on 1,200+ verified client reviews</p>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="hidden lg:block absolute right-16 top-1/2 transform -translate-y-1/2 space-y-4">
            {[
              { number: '4+', label: 'Years in Tech Excellence' },
              { number: '120+', label: 'Project Delivery' },
              { number: '100%', label: 'Project Running Worldwide' },
              { number: '95%', label: 'On-Time Project Delivery' }
            ].map((stat, i) => (
              <div key={i} className="bg-white rounded p-4 w-44 h-30 text-center">
                <div className="text-purple-900 font-extrabold text-xl mb-2">{stat.number}</div>
                <div className="text-purple-900 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-8 lg:px-16">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-blue-600 font-bold text-sm mb-4">Get to Know Us</p>
              <h2 className="text-purple-900 text-4xl mb-6">Your Tech Partner for Everything Digital</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Himotech Global is a leading technology solutions company specializing in Web3, Blockchain, Web Development, and IT Services. We combine innovation with technical excellence to help startups and enterprises achieve digital transformation.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {[
                  { icon: '🚀', text: 'Fast Deployment' },
                  { icon: '🔒', text: 'Secure Platform' },
                  { icon: '⏰', text: '24/7 Support' }
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 py-2">
                    <div className="w-8 h-8 bg-gray-200 rounded"></div>
                    <span className="text-purple-900">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-4 h-[458px]">
                <div className="bg-gray-300 rounded-lg h-full"></div>
                <div className="bg-gray-300 rounded-lg h-full"></div>
                <div className="bg-gray-300 rounded-lg h-full col-span-2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-8 lg:px-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="mb-12">
            <p className="text-blue-600 font-bold text-sm mb-4">Our Core Services</p>
            <h2 className="text-purple-900 text-4xl mb-6">End-to-End Development and Digital Solutions for Modern Businesses</h2>
            <div className="flex items-center gap-4">
              <p className="text-gray-600 max-w-md">We specialize in creating reliable, secure, and scalable digital products.</p>
              <button className="bg-purple-900 text-white px-5 py-2 rounded-full font-bold">Get In Touch</button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <div className="flex gap-6 pb-4" style={{ width: 'max-content' }}>
              {[
                { title: 'Web Development', desc: 'Clean, responsive, and high performing websites that reflect your brand and engage users.' },
                { title: 'Blockchain Development', desc: 'Build secure, decentralized solutions and smart contracts that power next-gen businesses.' },
                { title: 'Web3 Development', desc: 'Create immersive, user-friendly Web3 apps that connect communities and digital assets.' },
                { title: 'Marketing Services', desc: 'From SEO to social media campaigns, we help your brand grow, get noticed, and stay relevant.' },
                { title: 'Software Testing', desc: 'Ensure your software runs smoothly with our comprehensive testing and quality assurance.' },
                { title: 'DevOps Services', desc: 'Streamline development and deployment with our automated DevOps solutions.' }
              ].map((service, i) => (
                <div key={i} className="relative w-[357px] h-[438px] bg-gray-800 rounded-lg overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <button className="bg-white text-purple-900 px-4 py-2 rounded-full text-sm font-bold mb-3">
                      {service.title}
                    </button>
                    <p className="text-white text-sm leading-relaxed">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16" style={{ backgroundColor: 'rgb(37,13,97)' }}>
        <div className="container mx-auto px-8 lg:px-16">
          <div className="mb-12">
            <p className="text-blue-400 font-bold text-sm mb-4">Why Teams Stick With Us</p>
            <h2 className="text-white text-4xl mb-6">Smart Tech. Zero Headaches.</h2>
            <p className="text-white max-w-2xl">
              We make it feel effortless. Fast setup, clean interfaces, and support that actually responds — all wrapped in a platform that grows with you.
            </p>
          </div>

          <div className="relative">
            <div className="h-[532px] bg-gray-300 rounded-lg mb-8"></div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { icon: '⚙️', title: 'Full-Cycle Development', desc: 'From strategy to deployment, we handle it all.' },
                { icon: '👥', title: 'Expert Team', desc: 'Skilled developers, designers, and engineers.' },
                { icon: '🛡️', title: 'Secure & Scalable Solutions', desc: 'Built with performance and reliability in mind.' },
                { icon: '🎯', title: 'Client-Centric Approach', desc: 'Your goals are our priority.' },
                { icon: '💡', title: 'Innovation First', desc: 'We constantly explore emerging technologies.' }
              ].map((feature, i) => (
                <div key={i} className="text-center">
                  <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4"></div>
                  <h3 className="font-bold text-sm mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 px-8 lg:px-16">
        <div className="container mx-auto">
          <div className="flex justify-between items-start mb-12">
            <div>
              <p className="text-blue-600 font-bold text-sm mb-4">Our Work Speaks for Itself</p>
              <h2 className="text-purple-900 text-4xl">See how we've helped businesses achieve digital success.</h2>
            </div>
            <button className="bg-purple-900 text-white px-5 py-2 rounded-full font-bold">View All</button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1,2,3].map((i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative h-[285px] bg-gray-300 rounded-lg mb-4 overflow-hidden">
                  <div className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    ↗
                  </div>
                </div>
                <h3 className="text-purple-900 font-bold text-xl mb-3">Case Study Title</h3>
                <p className="text-purple-900 text-sm leading-relaxed">
                  Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 px-8 lg:px-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="mb-12">
            <p className="text-blue-600 font-bold text-sm mb-4">Industries We Serve</p>
            <h2 className="text-purple-900 text-4xl mb-8">Solutions That Scale Across Sectors</h2>
            
            <div className="flex flex-wrap gap-6 text-purple-900">
              {['FinTech', 'Healthcare', 'Enterprises', 'Startups', 'E-commerce', 'Education'].map((industry, i) => (
                <span key={i} className="py-2">{industry}</span>
              ))}
            </div>
          </div>

          <div className="h-[483px] relative">
            <div className="absolute inset-0 bg-purple-900 w-2/3 rounded-lg"></div>
            <div className="absolute top-8 right-0 grid grid-cols-3 gap-4 w-1/2">
              <div className="h-32 bg-gray-300 rounded"></div>
              <div className="h-32 bg-gray-300 rounded"></div>
              <div className="h-40 bg-gray-300 rounded"></div>
              <div className="h-32 bg-gray-300 rounded col-span-2"></div>
              <div className="h-40 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>