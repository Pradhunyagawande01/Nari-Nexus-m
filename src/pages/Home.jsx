import { Link } from "react-router-dom"

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-800 to-pink-600 text-white py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Empowering Women, Inspiring Futures
            </h1>
            <p className="text-lg md:text-xl mb-8 text-purple-100">
              Join our community of strong, supportive women dedicated to uplifting each other through mentorship,
              education, and advocacy.
            </p>
            <Link
              to="/join"
              className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full transition-colors shadow-lg"
            >
              Join the Movement
            </Link>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/placeholder.svg?height=400&width=500"
              alt="Women empowerment"
              className="rounded-lg shadow-2xl max-w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Featured Sections Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-purple-800">Discover Nari-Nexus</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About Preview */}
            <div className="bg-purple-50 rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-200 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg
                  className="w-8 h-8 text-purple-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4 text-purple-800">Our Mission</h3>
              <p className="text-gray-700 mb-6 text-center">
                Learn about our vision to create a world where every woman has the opportunity to thrive.
              </p>
              <div className="text-center">
                <Link to="/about" className="text-pink-600 hover:text-pink-700 font-medium">
                  Read More →
                </Link>
              </div>
            </div>

            {/* Initiatives Preview */}
            <div className="bg-pink-50 rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-pink-200 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg
                  className="w-8 h-8 text-pink-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4 text-pink-700">Our Initiatives</h3>
              <p className="text-gray-700 mb-6 text-center">
                Explore our programs designed to empower women through education, mentorship, and community.
              </p>
              <div className="text-center">
                <Link to="/initiatives" className="text-pink-600 hover:text-pink-700 font-medium">
                  Discover Programs →
                </Link>
              </div>
            </div>

            {/* Events Preview */}
            <div className="bg-purple-50 rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-200 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg
                  className="w-8 h-8 text-purple-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4 text-purple-800">Upcoming Events</h3>
              <p className="text-gray-700 mb-6 text-center">
                Join our workshops, webinars, and networking events designed to help you grow personally and
                professionally.
              </p>
              <div className="text-center">
                <Link to="/events" className="text-pink-600 hover:text-pink-700 font-medium">
                  View Calendar →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Preview */}
      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-purple-800">Success Stories</h2>
          <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
            Read inspiring stories from women who have transformed their lives through our community.
          </p>

          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-6 md:mb-0">
                <img
                  src="/placeholder.svg?height=150&width=150"
                  alt="Success story"
                  className="rounded-full w-32 h-32 object-cover mx-auto"
                />
              </div>
              <div className="md:w-2/3 md:pl-8">
                <blockquote className="italic text-gray-700 mb-4">
                  "Nari-Nexus gave me the confidence and skills I needed to start my own business. The mentorship
                  program was transformative, and I'm now able to support my family while doing what I love."
                </blockquote>
                <p className="font-semibold text-purple-800">- Priya Sharma</p>
                <p className="text-gray-600">Entrepreneur & Community Leader</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/success-stories"
              className="inline-block bg-purple-700 hover:bg-purple-800 text-white font-bold py-3 px-8 rounded-full transition-colors shadow-lg"
            >
              Read More Stories
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-pink-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Join Our Community?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Be part of a movement that's changing lives and creating opportunities for women everywhere.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/join"
              className="inline-block bg-white text-purple-700 hover:bg-purple-100 font-bold py-3 px-8 rounded-full transition-colors shadow-lg"
            >
              Become a Member
            </Link>
            <Link
              to="/contact"
              className="inline-block bg-transparent hover:bg-purple-600 text-white border-2 border-white font-bold py-3 px-8 rounded-full transition-colors shadow-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
