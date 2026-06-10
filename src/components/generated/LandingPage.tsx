export const LandingPage = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <header className="bg-white h-[73px] flex items-center justify-between px-8 fixed top-0 left-0 right-0 z-50">
        <div className="flex items-center gap-2">
          <div className="w-[99px] h-[67px] bg-gray-300 rounded-md"></div>
        </div>
        
        <nav className="flex items-center gap-1">
          <div className="px-8 py-6 text-gray-600">Home</div>
          <div className="px-8 py-6 text-gray-600">Services</div>
          <div className="px-8 py-6 text-gray-600">About Us</div>
          <div className="px-8 py-6 text-gray-600">Blog</div>
        </nav>
        
        <div className="flex items-center gap-2">
          <button className="px-5 py-3 text-white rounded-full" style={{ backgroundColor: 'rgb(37,13,97)' }}>
            <div className="w-4 h-3 bg-white rounded mr-2 inline-block"></div>
            info@himotechglobal.com
          </button>
          <button className="px-5 py-3 bg-black text-white rounded-full font-semibold">
            Get In Touch
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative w-full h-[619px] mt-[73px]" style={{ backgroundColor: 'rgb(37,13,97)' }}>
        <div className="absolute inset-0 bg-gray-400"></div>
        <div className="absolute inset-0" style={{ backgroundColor: 'rgb(37,13,97)' }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-8 h-full flex items-center justify-between">
          <div className="w-[644px] space-y-4">
            <h1 className="text-white text-[52px] font-bold leading-tight">
              Tech That Thinks Ahead So You Don't Have To :)
            </h1>
            
            <div className="space-y-5">
              <p className="text-white text-[15px] leading-relaxed max-w-[602px]">
                We build intelligent systems that simplify your workflow, scale with your growth, and keep your team ahead of the curve. Whether you're launching a startup or optimizing enterprise infrastructure, our tech adapts to you.
              </p>
              
              <div className="flex items-center gap-2">
                <button className="px-5 py-2 rounded-full border border-white text-white font-bold">
                  Get In Touch
                </button>
                <button className="px-5 py-2 bg-white text-black rounded-full font-bold">
                  Explore
                </button>
              </div>
            </div>
          </div>
          
          <div className="relative w-[546px] h-[770px]">
            <div className="absolute w-[490px] h-[544px]" style={{ backgroundColor: 'rgb(101,198,185)' }}></div>
            <div className="absolute w-[497px] h-[750px] bg-gray-300"></div>
            <div className="absolute w-[88px] h-[66px]" style={{ backgroundColor: 'rgb(101,198,185)' }}></div>
            <div className="absolute w-[88px] h-[66px]" style={{ backgroundColor: 'rgb(101,198,185)' }}></div>
            <div className="absolute w-[88px] h-[66px]" style={{ backgroundColor: 'rgb(101,198,185)' }}></div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="absolute bottom-8 left-8 flex items-center gap-4">
          <div className="flex -space-x-3">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-[43px] h-[43px] bg-gray-300 rounded-full border-2 border-white"></div>
            ))}
          </div>
          
          <div className="space-y-1">
            <div className="flex items-center -space-x-1">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-6 h-6 text-yellow-400">★</div>
              ))}
              <div className="w-6 h-6 text-yellow-400">☆</div>
            </div>
            <p className="text-white text-[15px]">4.9/5 based on 1,200+ verified client reviews</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { number: '4+', text: 'Years in Tech Excellence' },
            { number: '120+', text: 'Project Delivery' },
            { number: '100%', text: 'Project Running Worldwide' },
            { number: '95%', text: 'On-Time Project Delivery' }
          ].map((stat, index) => (
            <div key={index} className="bg-white border rounded-md p-6 text-center relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-purple-50 rounded-md"></div>
              <div className="relative z-10">
                <div className="text-2xl font-bold mb-2" style={{ color: 'rgb(37,13,97)' }}>
                  {stat.number}
                </div>
                <div className="text-sm" style={{ color: 'rgb(37,13,97)' }}>
                  {stat.text}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="text-blue-600 text-sm font-bold">Get to Know Us</div>
            <h2 className="text-4xl font-normal" style={{ color: 'rgb(37,13,97)' }}>
              Your Tech Partner for Everything Digital
            </h2>
            <p className="text-gray-700 text-[15px] leading-relaxed">
              Himotech Global is a leading technology solutions company specializing in Web3, Blockchain, Web Development, and IT Services. We combine innovation with technical excellence to help startups and enterprises achieve digital transformation.
            </p>
            
            <div className="space-y-4">
              {[
                'Fast Deployment',
                'Secure Platform',
                '24/7 Support'
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-gray-300 rounded"></div>
                  <span style={{ color: 'rgb(37,13,97)' }}>{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-3 gap-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-full h-[458px] bg-gray-300 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-6">
            <div className="text-blue-600 text-sm font-bold">Our Core Services</div>
            <h2 className="text-4xl font-normal max-w-4xl mx-auto" style={{ color: 'rgb(37,13,97)' }}>
              End-to-End Development and Digital Solutions for Modern Businesses
            </h2>
            <div className="flex items-center justify-center gap-4">
              <p className="text-gray-700 text-[15px] max-w-lg">
                We specialize in creating reliable, secure, and scalable digital products.
              </p>
              <button className="px-5 py-2 bg-black text-white rounded-full font-bold">
                Get In Touch
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Web Development',
                description: 'Clean, responsive, and high performing websites that reflect your brand and engage users.',
                image: 'bg-blue-500'
              },
              {
                title: 'Blockchain Development',
                description: 'Build secure, decentralized solutions and smart contracts that power next-gen businesses.',
                image: 'bg-green-500'
              },
              {
                title: 'Web3 Development',
                description: 'Create immersive, user-friendly Web3 apps that connect communities and digital assets.',
                image: 'bg-purple-500'
              },
              {
                title: 'Marketing Services',
                description: 'From SEO to social media campaigns, we help your brand grow, get noticed, and stay relevant.',
                image: 'bg-pink-500'
              },
              {
                title: 'Software Testing',
                description: 'Ensure your software runs smoothly with our comprehensive testing and quality assurance.',
                image: 'bg-indigo-500'
              },
              {
                title: 'DevOps Services',
                description: 'Ensure your software runs smoothly with our comprehensive testing and quality assurance.',
                image: 'bg-red-500'
              }
            ].map((service, index) => (
              <div key={index} className="relative h-[438px] rounded-lg overflow-hidden group">
                <div className={`absolute inset-0 ${service.image}`}></div>
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <div className="absolute bottom-8 left-8 text-white space-y-3">
                  <button className="px-5 py-2 bg-white text-black rounded-full font-bold">
                    {service.title}
                  </button>
                  <p className="text-white text-[16px] leading-relaxed max-w-[225px]">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-8" style={{ backgroundColor: 'rgb(37,13,97)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-6">
            <div className="text-blue-400 text-sm font-bold">Why Teams Stick With Us</div>
            <h2 className="text-4xl text-white max-w-2xl mx-auto">
              Smart Tech. Zero Headaches.
            </h2>
            <p className="text-white text-[15px] max-w-2xl mx-auto">
              We make it feel effortless. Fast setup, clean interfaces, and support that actually responds — all wrapped in a platform that grows with you.
            </p>
          </div>
          
          <div className="relative">
            <div className="bg-gray-300 h-[532px] rounded-lg mb-8"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {[
                {
                  title: 'Full-Cycle Development',
                  description: 'From strategy to deployment, we handle it all.',
                  icon: 'bg-gray-400'
                },
                {
                  title: 'Expert Team',
                  description: 'Skilled developers, designers, and engineers.',
                  icon: 'bg-gray-400'
                },
                {
                  title: 'Secure & Scalable Solutions',
                  description: 'Built with performance and reliability in mind.',
                  icon: 'bg-gray-400'
                },
                {
                  title: 'Client-Centric Approach',
                  description: 'Your goals are our priority.',
                  icon: 'bg-gray-400'
                },
                {
                  title: 'Innovation First',
                  description: 'We constantly explore emerging technologies.',
                  icon: 'bg-gray-400'
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg text-center space-y-4">
                  <div className={`w-20 h-20 ${feature.icon} rounded-full mx-auto`}></div>
                  <h3 className="font-bold text-black text-[15px]">{feature.title}</h3>
                  <p className="text-black text-[15px] leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-16">
            <div className="space-y-6">
              <div className="text-blue-600 text-sm font-bold">Our Work Speaks for Itself</div>
              <h2 className="text-4xl font-normal max-w-4xl" style={{ color: 'rgb(37,13,97)' }}>
                See how we've helped businesses achieve digital success.
              </h2>
            </div>
            <button className="px-5 py-2 bg-black text-white rounded-full font-bold">
              View All
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="space-y-6">
                <div className="bg-gray-400 h-[285px] rounded-lg"></div>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold" style={{ color: 'rgb(37,13,97)' }}>
                    Case Study Title
                  </h3>
                  <p className="text-gray-700 text-[16px]" style={{ color: 'rgb(37,13,97)' }}>
                    Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.
                  </p>
                </div>
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                  <div className="w-3 h-2 bg-gray-600"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 px-