
// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React, { useState } from 'react';

// images 
import Anvarsha from './images/Anvarsha.JPG';
import cover from './images/cover.jpg';
import award from './images/award.jpg';
import first from './images/1.jpg';
import second from './images/2.jpg';
import third from './images/3.jpg';
import fourth from './images/4.jpg';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState('home');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavItemClick = (item: string) => {
    setActiveNavItem(item);
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 bg-gray-900 text-white shadow-lg z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <a href="#home" className="text-2xl font-serif font-bold text-white flex items-center">
          <span className="text-yellow-400">A</span>dvocate <span className="text-yellow-400 ml-2">A</span>nvarsha <span className="text-yellow-400 ml-2">S</span>hamsu
          </a>
          
          <div className="hidden md:flex space-x-8">
            {['home', 'profile', 'qualifications', 'services', 'gallery', 'contact'].map((item) => (
              <a 
                key={item}
                href={`#${item}`}
                className={`capitalize hover:text-yellow-400 transition duration-300 ${activeNavItem === item ? 'text-yellow-400 border-b-2 border-yellow-400' : ''} cursor-pointer whitespace-nowrap`}
                onClick={() => handleNavItemClick(item)}
              >
                {item}
              </a>
            ))}
          </div>

          <button 
            className="md:hidden text-white focus:outline-none cursor-pointer !rounded-button whitespace-nowrap"
            onClick={toggleMenu}
          >
            <i className={`fa ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 shadow-xl">
            <div className="container mx-auto px-4 py-2">
              {['home', 'profile', 'qualifications', 'services', 'gallery', 'contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item}`}
                  className="block py-3 px-4 capitalize hover:bg-gray-700 hover:text-yellow-400 transition duration-300 cursor-pointer"
                  onClick={() => handleNavItemClick(item)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 relative min-h-screen flex items-center" style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 32, 0.7), rgba(0, 0, 32, 0.7)), url('https://readdy.ai/api/search-image?query=professional%20law%20office%20interior%20with%20elegant%20wooden%20desk%2C%20law%20books%2C%20gavel%2C%20modern%20office%20with%20large%20windows%2C%20soft%20lighting%2C%20navy%20blue%20and%20gold%20accents%2C%20professional%20atmosphere&width=1440&height=800&seq=hero1&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="container mx-auto px-6 py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">
              <span className="text-yellow-400">Anvarsha Shamsu</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-white font-light mb-6">
              Dedicated Legal Counsel & Representation
            </h2>
            <p className="text-lg md:text-xl text-gray-200 mb-8">
              Providing exceptional legal services with integrity, expertise, and a commitment to achieving the best possible outcomes for my clients.
            </p>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300 transform hover:scale-105 cursor-pointer !rounded-button whitespace-nowrap">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section id="profile" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Professional Profile</h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
          </div>

          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/3 mb-10 md:mb-0">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src={Anvarsha}
                  alt="Anvarsha Shamsu" 
                  className="w-full h-auto object-cover object-top"
                />
              </div>
            </div>
            
            <div className="w-full md:w-2/3 md:pl-16">
              <h3 className="text-2xl font-serif font-bold text-gray-800 mb-4">About Me</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                With over 8 years of experience in legal practice, I specialize in providing comprehensive legal solutions tailored to meet the unique needs of each client. My approach combines thorough legal knowledge with practical problem-solving skills to deliver results that exceed expectations.
              </p>
              
              <div className="mb-8">
                <h4 className="text-xl font-serif font-semibold text-gray-800 mb-3">Areas of Expertise</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { icon: 'fa fa-balance-scale', title: 'Corporate Law' },
                    { icon: 'fa fa-gavel', title: 'Civil Litigation' },
                    { icon: 'fa fa-home', title: 'Real Estate Law' },
                    { icon: 'fa fa-user', title: 'Criminal Law' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg shadow-sm">
                      <i className={`${item.icon} text-yellow-500 text-xl mr-3`}></i>
                      <span className="font-medium">{item.title}</span>
                    </div>
                  ))}
                  
                </div>
              </div>
              
              <div>
                <h4 className="text-xl font-serif font-semibold text-gray-800 mb-3">Professional Achievements</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Successfully represented over 500 clients in various legal matters</li>
                  <li>Recognized by best junior award (2022)</li>
                  <li>Published author in several prestigious legal journals</li>
                  <li>Guest lecturer at National Law University</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications Section */}
      <section id="qualifications" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Qualifications</h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Timeline */}
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-yellow-400"></div>
              
              {[
                {
                  year: '2016',
                  title: 'Bachelor OfLaws (LLB)',
                  institution: 'Govt Law College, Thrissur',
                  description: 'Graduated with honors, focusing on Corporate and International Law.'
                },
                {
                  year: '2017',
                  title: 'Bar Admission',
                  institution: 'State Bar Association',
                  description: 'Licensed to practice law in multiple jurisdictions.'
                },
                {
                  year: '2012',
                  title: 'Master of Business Administration(MBA)',
                  institution: 'MG University',
                  description: 'Magna Cum Laude with distinction in research and academic excellence.'
                },
                {
                  year: '2010',
                  title: 'Bachelor of Commerce(B.com)',
                  institution: 'MG University',
                  description: 'Graduated with honors, focusing on Corporate and International Law..'
                }
              ].map((item, index) => (
                <div key={index} className={`relative z-10 mb-12 ${index % 2 === 0 ? 'md:ml-auto md:mr-0 md:text-right' : 'md:mr-auto md:ml-0'} md:w-5/12`}>
                  <div className="p-6 bg-white rounded-lg shadow-lg">
                    <span className="inline-block px-4 py-2 bg-yellow-400 text-gray-900 font-bold rounded-full mb-4">{item.year}</span>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <h4 className="text-gray-600 font-medium mb-3">{item.institution}</h4>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                  <div className="absolute top-6 hidden md:block">
                    <div className={`h-4 w-4 rounded-full bg-yellow-500 border-4 border-white shadow ${index % 2 === 0 ? '-ml-10' : '-mr-6'}`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-serif font-bold text-gray-800 mb-4">Professional Memberships</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <i className="fa fa-check-circle text-yellow-500 mr-3"></i>
                  <span>Perumbavoor Bar Association</span>
                </li>
                <li className="flex items-center">
                  <i className="fa fa-check-circle text-yellow-500 mr-3"></i>
                  <span>International Law Society</span>
                </li>
                <li className="flex items-center">
                  <i className="fa fa-check-circle text-yellow-500 mr-3"></i>
                  <span>Corporate Law Alliance</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-serif font-bold text-gray-800 mb-4">Certifications</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <i className="fa fa-certificate text-yellow-500 mr-3"></i>
                  <span>Certified Trial Lawyer</span>
                </li>
                <li className="flex items-center">
                  <i className="fa fa-certificate text-yellow-500 mr-3"></i>
                  <span>Alternative Dispute Resolution</span>
                </li>
                <li className="flex items-center">
                  <i className="fa fa-certificate text-yellow-500 mr-3"></i>
                  <span>Intellectual Property Specialist</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-serif font-bold text-gray-800 mb-4">Languages</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <i className="fa fa-language text-yellow-500 mr-3"></i>
                  <span>Malayalam (Native)</span>
                </li>
                <li className="flex items-center">
                  <i className="fa fa-language text-yellow-500 mr-3"></i>
                  <span>English (Fluent)</span>
                </li>
                <li className="flex items-center">
                  <i className="fa fa-language text-yellow-500 mr-3"></i>
                  <span>Hindi (Proficient)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Legal Services</h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-gray-600">
              Providing comprehensive legal solutions tailored to meet your specific needs with the highest standards of professionalism and expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: 'fa fa-building',
                title: 'Corporate Law',
                description: 'Expert guidance for businesses on formation, governance, compliance, and corporate transactions.'
              },
              {
                icon: 'fa fa-gavel',
                title: 'Civil Litigation',
                description: 'Strong representation in civil disputes, focusing on efficient and favorable resolutions.'
              },
              {
                icon: 'fa fa-home',
                title: 'Real Estate Law',
                description: 'Comprehensive legal services for property transactions, leases, and real estate disputes.'
              },
              {
                icon: 'fa fa-user',
                title: 'Criminal Law',
                description: 'Advising, defending, and representing clients in criminal proceedings to safeguard their rights and ensure a fair legal process.'
              },
              {
                icon: 'fa fa-university',
                title: 'Constitutional Law',
                description: 'Specialized expertise in constitutional rights, governmental powers, and related litigation.'
              },
              {
                icon: 'fa fa-balance-scale',
                title: 'Family Law',
                description: 'Compassionate legal support for divorce, child custody, and other family-related matters.'
              }
            ].map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="p-8">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <i className={`${service.icon} text-gray-900 text-2xl`}></i>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-center mb-4">{service.title}</h3>
                  <p className="text-gray-600 text-center">{service.description}</p>
                </div>
                <div className="bg-gray-100 py-4 px-8 text-center">
                  <button className="text-yellow-600 hover:text-yellow-800 font-medium cursor-pointer !rounded-button whitespace-nowrap">
                    Learn More <i className="fa fa-arrow-right ml-2"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Gallery</h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Office Reception',
                image: third
              },
              {
                title: 'With My Mendors',
                image: cover
              },
              {
                title: 'My associate in the legal practice... ',
                image: first
              },
              {
                title: 'The Partner in life and law',
                image: second
              },
              {
                title: 'Organization',
                image: fourth             },
              {
                title: 'Award Ceremony',
                image: award
              }
            ].map((item, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-4 bg-white">
                  <h3 className="text-lg font-serif font-semibold">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Contact Me</h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-gray-600">
              Have a legal question or need representation? Get in touch today for a consultation.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2 lg:pr-10 mb-10 lg:mb-0">
              <form className="bg-gray-50 rounded-lg shadow-lg p-8">
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    placeholder="Your name"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    placeholder="Your email"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    placeholder="Your phone number"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message</label>
                  <textarea 
                    id="message" 
                    rows={5} 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    placeholder="How can I help you?"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-6 rounded-lg transition duration-300 cursor-pointer !rounded-button whitespace-nowrap"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            <div className="w-full lg:w-1/2">
              <div className="bg-gray-50 rounded-lg shadow-lg p-8 h-full">
                <h3 className="text-2xl font-serif font-bold text-gray-800 mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-yellow-400 rounded-full p-3 mr-4">
                      <i className="fa fa-map-marker text-gray-900"></i>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Office Address</h4>
                      <p className="text-gray-600">
                      Adam complex, Perumbavoor, <br />
                      Ernakulam-683542
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-yellow-400 rounded-full p-3 mr-4">
                      <i className="fa fa-phone text-gray-900"></i>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Phone</h4>
                      <a href="tel:+91 9037 387 814" className="text-gray-600 hover:text-yellow-600 transition duration-300">
                        +91 9037 387 814
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-yellow-400 rounded-full p-3 mr-4">
                      <i className="fa fa-whatsapp text-gray-900"></i>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">WhatsApp</h4>
                      <a href="https://wa.me/+91 9037 387 814" className="text-gray-600 hover:text-yellow-600 transition duration-300">
                      +91 9037 387 814
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-yellow-400 rounded-full p-3 mr-4">
                      <i className="fa fa-envelope text-gray-900"></i>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Email</h4>
                      <a href="mailto:anvarsha@legalcounsel.com" className="text-gray-600 hover:text-yellow-600 transition duration-300">
                      anvarshashamsu@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-yellow-400 rounded-full p-3 mr-4">
                      <i className="fa fa-clock-o text-gray-900"></i>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Office Hours</h4>
                      <p className="text-gray-600">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: By appointment only
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="font-bold mb-4">Find Me On</h4>
                  <div className="flex space-x-4">
                    <a href="https://www.instagram.com/adv_anvarsha_shamsu/" target='_blank' className="bg-gray-200 hover:bg-yellow-400 text-gray-800 rounded-full w-10 h-10 flex items-center justify-center transition duration-300 cursor-pointer">
                      <i className="fa fa-instagram"></i>
                    </a>
                    <a href="#" className="bg-gray-200 hover:bg-yellow-400 text-gray-800 rounded-full w-10 h-10 flex items-center justify-center transition duration-300 cursor-pointer">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a href="https://www.facebook.com/anvarsha.shamsu" target='_blank' className="bg-gray-200 hover:bg-yellow-400 text-gray-800 rounded-full w-10 h-10 flex items-center justify-center transition duration-300 cursor-pointer">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16">
            <div className="rounded-lg overflow-hidden shadow-lg h-96">
             
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d490.9804411827378!2d76.4747124!3d10.111891!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07e3357118bc57%3A0xb9d410b98b42e292!2sAnvar%20%26Amal%20Associates!5e0!3m2!1sen!2sin!4v1747134562347!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <h3 className="text-2xl font-serif font-bold mb-4">
                <span className="text-yellow-400">A</span>nvarsha <span className="text-yellow-400">S</span>hamsu
              </h3>
              <p className="text-gray-400 max-w-md">
                Dedicated to providing exceptional legal services with integrity, expertise, and a commitment to achieving the best possible outcomes for my clients.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-lg font-bold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><a href="#home" className="text-gray-400 hover:text-yellow-400 transition duration-300">Home</a></li>
                  <li><a href="#profile" className="text-gray-400 hover:text-yellow-400 transition duration-300">Profile</a></li>
                  <li><a href="#qualifications" className="text-gray-400 hover:text-yellow-400 transition duration-300">Qualifications</a></li>
                  <li><a href="#services" className="text-gray-400 hover:text-yellow-400 transition duration-300">Services</a></li>
                  <li><a href="#contact" className="text-gray-400 hover:text-yellow-400 transition duration-300">Contact</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-bold mb-4">Legal</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition duration-300">Privacy Policy</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition duration-300">Terms of Service</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition duration-300">Disclaimer</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-bold mb-4">Connect</h4>
                <div className="flex space-x-4">
                  <a href="https://www.instagram.com/adv_anvarsha_shamsu/" className="text-gray-400 hover:text-yellow-400 transition duration-300">
                    <i className="fa fa-instagram text-xl"></i>                    
                  </a>
                  <a href="#" className="text-gray-400 hover:text-yellow-400 transition duration-300">
                    <i className="fa fa-twitter text-xl"></i>
                  </a>
                  <a href="https://www.facebook.com/anvarsha.shamsu/" className="text-gray-400 hover:text-yellow-400 transition duration-300">
                    <i className="fa fa-facebook-f text-xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Anvarsha Shamsu. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <p className="text-gray-500 text-sm">
                Designed with <i className="fas fa-heart text-yellow-400"></i> for exceptional legal service
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

