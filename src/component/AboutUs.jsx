import React from 'react';

const teamMembers = [
  {
    name: 'Danial',
    role: 'Founder & CEO',
    image: '/Images/vikas.jpg',
    link: '/team/vikas-kundal',
  },
  {
    name: 'Robert',
    role: 'Creative Director',
    image: '/Images/rashmil.jpg',
    link: '/team/rashmil',
  },
  {
    name: 'Jasmine',
    role: 'Marketing Head',
    image: '/Images/abhishek.jpg',
    link: '/team/abhishek',
  },
  {
    name: 'Michael',
    role: 'Operations Manager',
    image: '/Images/simran.jpg',
    link: '/team/simran',
  },
  {
    name: 'Jaz',
    role: 'Product Specialist',
    image: '/Images/kunal.jpg',
    link: '/team/kunal',
  },
];

const AboutUs = () => {
  return (
    <div className="bg-pink-50 text-gray-800 font-sans">
      {/* About Section */}
      <div className="py-16 px-4 md:px-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div>
            <img
              src="/Images/makeup1.jpg"
              alt="About Us"
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>

          {/* Text */}
          <div>
            <h2 className="text-4xl font-bold mb-6 text-rose-600 font-serif">About Us</h2>
            <p className="text-lg leading-relaxed mb-4">
              Welcome to <strong>Hair&Beauty</strong> – where elegance meets innovation. We’re not just a beauty brand — we’re a movement for those who embrace their individuality and set their own trends.
            </p>
            <p className="text-lg leading-relaxed">
              Every product we offer is thoughtfully curated to help you express your unique beauty. Our passionate team is dedicated to redefining what it means to feel beautiful, bold, and empowered.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-white py-16 px-4 md:px-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-rose-600 font-serif">Meet Our Team</h2>
          <p className="text-gray-600 mt-2 text-lg">
            The beauty enthusiasts and experts who make everything happen at Hair&Beauty.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center bg-rose-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition">
              <img
                src={member.image}
                alt={member.name}
                className="w-28 h-28 object-cover rounded-full border-4 border-rose-300 mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
              <p className="text-sm text-gray-600">{member.role}</p>
              <a
                href={member.link}
                className="mt-3 text-sm text-rose-500 hover:underline transition"
              >
                Read More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
