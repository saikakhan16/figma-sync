export const Blog = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* Header */}
      <header className="w-full h-[73px] bg-white flex items-center justify-between px-8">
        <div className="w-[99px] h-[67px] rounded-md" style={{ backgroundColor: 'rgb(176,169,169)' }}></div>
        
        <nav className="flex items-center gap-1">
          <div className="px-8 py-7">
            <span className="text-gray-600 text-base font-normal">Home</span>
          </div>
          <div className="px-8 py-7">
            <span className="text-gray-600 text-base font-normal">Services</span>
          </div>
          <div className="px-8 py-7">
            <span className="text-gray-600 text-base font-normal">About Us</span>
          </div>
          <div className="px-8 py-7">
            <span className="text-gray-600 text-base font-normal">Blog</span>
          </div>
        </nav>

        <div className="flex items-center gap-2">
          <button className="px-5 py-3 rounded-full" style={{ backgroundColor: 'rgb(101,198,185)' }}>
            <span className="text-white text-base font-semibold">Get In Touch</span>
          </button>
          <button className="w-12 h-11 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgb(101,198,185)' }}>
            <div className="w-4 h-3" style={{ backgroundColor: 'white' }}></div>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full flex flex-col items-center px-4 py-16">
        <div className="max-w-4xl w-full flex flex-col items-center text-center space-y-6">
          <span className="text-base font-extrabold" style={{ color: 'rgb(101,198,185)' }}>
            Blogs
          </span>
          <h1 className="text-5xl font-extrabold max-w-[878px] leading-tight" style={{ color: 'rgb(37,13,97)' }}>
            Discover the Future of Technology
          </h1>
          <p className="text-base font-normal max-w-[616px] leading-relaxed" style={{ color: 'rgb(37,13,97)' }}>
            Stay ahead of the curve with the latest insights, trends, and innovations in Web3, Blockchain, and Digital Transformation — curated by the experts at Himotech Global.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="w-full flex justify-center px-4 mb-12">
        <div className="max-w-6xl w-full">
          <div className="flex flex-wrap items-center gap-1.5 mb-2">
            <div className="px-2.5 py-1" style={{ color: 'rgb(37,13,97)' }}>
              <span className="text-base font-bold">All</span>
            </div>
            <div className="px-2.5 py-1" style={{ color: 'rgb(37,13,97)' }}>
              <span className="text-base font-normal">Web Development</span>
            </div>
            <div className="px-2.5 py-1" style={{ color: 'rgb(37,13,97)' }}>
              <span className="text-base font-normal">Blockchain</span>
            </div>
            <div className="px-2.5 py-1" style={{ color: 'rgb(37,13,97)' }}>
              <span className="text-base font-normal">Web3</span>
            </div>
            <div className="px-2.5 py-1" style={{ color: 'rgb(37,13,97)' }}>
              <span className="text-base font-normal">DevOps</span>
            </div>
            <div className="px-2.5 py-1" style={{ color: 'rgb(37,13,97)' }}>
              <span className="text-base font-normal">Marketing</span>
            </div>
            <div className="px-2.5 py-1" style={{ color: 'rgb(37,13,97)' }}>
              <span className="text-base font-normal">Software Testing</span>
            </div>
            <div className="px-2.5 py-1" style={{ color: 'rgb(37,13,97)' }}>
              <span className="text-base font-normal">Company News</span>
            </div>
          </div>
          <div className="w-full h-px bg-gray-300"></div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="w-full flex justify-center px-4 mb-16">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Blog Post 1 */}
          <article className="w-full max-w-[389px] rounded-md overflow-hidden shadow-sm">
            <div className="w-full h-[227px] rounded-md mb-4" style={{ backgroundColor: 'rgb(176,169,169)' }}></div>
            <div className="p-4">
              <p className="text-sm font-normal mb-3" style={{ color: 'rgb(37,13,97)' }}>
                Sept 29, 2025
              </p>
              <div className="space-y-3">
                <h3 className="text-base font-bold leading-tight" style={{ color: 'rgb(37,13,97)' }}>
                  Web3 - From Blockchain to Metaverse – The Next Internet Evolution
                </h3>
                <p className="text-base font-normal leading-relaxed" style={{ color: 'rgb(37,13,97)' }}>
                  The internet is evolving once again, and Web3 is leading the way. But what exactly is Web3? Let's break it down.
                </p>
              </div>
            </div>
          </article>

          {/* Blog Post 2 */}
          <article className="w-full max-w-[389px] rounded-md overflow-hidden shadow-sm">
            <div className="w-full h-[227px] rounded-md mb-4" style={{ backgroundColor: 'rgb(176,169,169)' }}></div>
            <div className="p-4">
              <p className="text-sm font-normal mb-3" style={{ color: 'rgb(37,13,97)' }}>
                Sept 29, 2025
              </p>
              <div className="space-y-3">
                <h3 className="text-base font-bold leading-tight" style={{ color: 'rgb(37,13,97)' }}>
                  Web3 - From Blockchain to Metaverse – The Next Internet Evolution
                </h3>
                <p className="text-base font-normal leading-relaxed" style={{ color: 'rgb(37,13,97)' }}>
                  The internet is evolving once again, and Web3 is leading the way. But what exactly is Web3? Let's break it down.
                </p>
              </div>
            </div>
          </article>

          {/* Blog Post 3 */}
          <article className="w-full max-w-[389px] rounded-md overflow-hidden shadow-sm">
            <div className="w-full h-[227px] rounded-md mb-4" style={{ backgroundColor: 'rgb(176,169,169)' }}></div>
            <div className="p-4">
              <p className="text-sm font-normal mb-3" style={{ color: 'rgb(37,13,97)' }}>
                Sept 29, 2025
              </p>
              <div className="space-y-3">
                <h3 className="text-base font-bold leading-tight" style={{ color: 'rgb(37,13,97)' }}>
                  Why is Website Maintenance Important?
                </h3>
                <p className="text-base font-normal leading-relaxed" style={{ color: 'rgb(37,13,97)' }}>
                  A website that works smoothly offers a better experience to visitors. This helps users interact with the content more effectively.
                </p>
              </div>
            </div>
          </article>

          {/* Blog Post 4 */}
          <article className="w-full max-w-[389px] rounded-md overflow-hidden shadow-sm">
            <div className="w-full h-[227px] rounded-md mb-4" style={{ backgroundColor: 'rgb(176,169,169)' }}></div>
            <div className="p-4">
              <p className="text-sm font-normal mb-3" style={{ color: 'rgb(37,13,97)' }}>
                Sept 29, 2025
              </p>
              <div className="space-y-3">
                <h3 className="text-base font-bold leading-tight" style={{ color: 'rgb(37,13,97)' }}>
                  Why is Website Maintenance Important?
                </h3>
                <p className="text-base font-normal leading-relaxed" style={{ color: 'rgb(37,13,97)' }}>
                  A website that works smoothly offers a better experience to visitors. This helps users interact with the content more effectively.
                </p>
              </div>
            </div>
          </article>

          {/* Blog Post 5 */}
          <article className="w-full max-w-[389px] rounded-md overflow-hidden shadow-sm">
            <div className="w-full h-[227px] rounded-md mb-4" style={{ backgroundColor: 'rgb(176,169,169)' }}></div>
            <div className="p-4">
              <p className="text-sm font-normal mb-3" style={{ color: 'rgb(37,13,97)' }}>
                Sept 29, 2025
              </p>
              <div className="space-y-3">
                <h3 className="text-base font-bold leading-tight" style={{ color: 'rgb(37,13,97)' }}>
                  Crypto Wallets: Safeguarding Digital Assets in India
                </h3>
                <p className="text-base font-normal leading-relaxed" style={{ color: 'rgb(37,13,97)' }}>
                  Cryptocurrencies are increasingly becoming a part of the financial ecosystem, making secure storage and management essential.
                </p>
              </div>
            </div>
          </article>

          {/* Blog Post 6 */}
          <article className="w-full max-w-[389px] rounded-md overflow-hidden shadow-sm">
            <div className="w-full h-[227px] rounded-md mb-4" style={{ backgroundColor: 'rgb(176,169,169)' }}></div>
            <div className="p-4">
              <p className="text-sm font-normal mb-3" style={{ color: 'rgb(37,13,97)' }}>
                Sept 29, 2025
              </p>
              <div className="space-y-3">
                <h3 className="text-base font-bold leading-tight" style={{ color: 'rgb(37,13,97)' }}>
                  Crypto Wallets: Safeguarding Digital Assets in India
                </h3>
                <p className="text-base font-normal leading-relaxed" style={{ color: 'rgb(37,13,97)' }}>
                  Cryptocurrencies are increasingly becoming a part of the financial ecosystem, making secure storage and management essential.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Explore Button */}
      <section className="w-full flex justify-center px-4 mb-16">
        <button className="px-5 py-2.5 rounded-full" style={{ backgroundColor: 'rgb(101,198,185)' }}>
          <span className="text-white text-base font-bold">Explore</span>
        </button>
      </section>

      {/* Footer */}
      <footer className="w-full" style={{ backgroundColor: 'rgb(243,246,253)' }}>
        <div className="max-w-6xl mx-auto px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="w-[94px] h-[81px] rounded-md" style={{ backgroundColor: 'rgb(176,169,169)' }}></div>
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 bg-gray-800 rounded"></div>
                <div className="w-4 h-4 bg-gray-800 rounded"></div>
                <div className="w-5 h-4 bg-gray-800 rounded"></div>
                <div className="w-4 h-4 bg-gray-800 rounded"></div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-black mb-2">Quick links</h3>
              <p className="text-base font-normal text-black">About us</p>
              <p className="text-base font-normal text-black">Services</p>
              <p className="text-base font-normal text-black">Blogs</p>
              <p className="text-base font-normal text-black">Careers</p>
            </div>

            {/* Resources */}
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-black mb-2">Resources</h3>
              <p className="text-base font-normal text-black">Case Studies</p>
              <p className="text-base font-normal text-black">Documentation</p>
              <p className="text-base font-normal text-black">FAQs</p>
            </div>

            {/* Contact */}
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-black mb-2">Contact</h3>
              <p className="text-base font-normal text-black">info@himotechglobal.com</p>
              <p className="text-base font-normal text-black">+91-7011508191</p>
            </div>
          </div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-1 text-center">
            <span className="text-base font-normal text-black">
              Copyright © 2021 Himotech Global Pvt Ltd. All Rights Reserved.
            </span>
            <span className="text-base font-normal text-black">Privacy Policy</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Blog;