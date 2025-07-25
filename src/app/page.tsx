'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

// Project Data
const projects = [
  {
    title: 'Automated Quiz Generator',
    description: 'A C++ app that dynamically creates quizzes and exports them to PDF using hpdf.',
    tech: ['C++', 'OOP', 'PDF'],
  },
  {
    title: 'AI Note Summarizer (Desktop)',
    description: 'A desktop app using OCR and NLP to summarize typed and handwritten notes.',
    tech: ['Python', 'OpenCV', 'NLP'],
  },
  {
    title: 'AI Note Summarizer (Mobile)',
    description: 'A Kotlin Android app that summarizes typed notes and extracts key points.',
    tech: ['Kotlin', 'NLP', 'Android'],
  },
  {
    title: 'Class Management System',
    description: 'Python CLI system using CSV to manage students, grades, and admins.',
    tech: ['Python', 'CSV', 'CLI'],
  },
  {
    title: 'Library Management System',
    description: 'Full-stack PHP, JS, MySQL system to manage a digital library using XAMPP.',
    tech: ['PHP', 'MySQL', 'JS'],
  },
  {
    title: 'TruthLens Fake News Detector',
    description: 'Mobile app using ensemble ML + SHAP with DistilBERT for fake news detection.',
    tech: ['Kotlin', 'ML', 'SHAP'],
  },
  {
    title: 'ESP32 WiFi File Transfer',
    description: 'Custom interface on ESP32 to share files wirelessly between connected devices.',
    tech: ['C++', 'ESP32', 'Web'],
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="relative min-h-[80vh] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <img
            src="/hero-bg.jpg"
            alt="Background"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-black opacity-50" />
        </div>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center px-6 text-white"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl sm:text-6xl font-extrabold bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent"
          >
            Aiza Shafqat
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-lg sm:text-xl mt-4 max-w-xl mx-auto"
          >
            Computer Scientist | UI/UX Designer | Creative Wizard
          </motion.p>

          <motion.a
            href="#projects"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-6 inline-block px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow hover:bg-yellow-300 transition"
          >
            Here&apos;s my projects
          </motion.a>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-900 text-gray-200">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center"
        >
          <div className="flex justify-center">
            <Image
              src="/me.jpg"
              alt="Aiza Shafqat"
              width={256}
              height={256}
              className="rounded-2xl object-cover border-4 border-yellow-400 shadow-lg"
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <p className="text-lg mb-4">
              I&apos;m Aiza Shafqat, a senior Computer Science student at Institute of Space Technology. 
              With enthusiasm in Designing, I am pursuing my passion in UI/UX Designing in Web Development environment.
            </p>
            <p className="italic text-gray-400 mb-6">
              “Turning code into magic, and bugs into features.”
            </p>
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gray-950 text-gray-200">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Projects</h2>
          <p className="text-lg text-gray-400">These are my projects.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-yellow-400/20 transition-shadow"
            >
              <h3 className="text-xl font-semibold text-yellow-400 mb-2">{project.title}</h3>
              <p className="text-sm text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 text-xs">
                {project.tech.map((tech, i) => (
                  <span key={i} className="bg-gray-700 px-2 py-1 rounded text-gray-100">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-900 text-gray-200">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-400 mb-8">
            Whether you want to collaborate, ask something technical, or just say <i>salam</i> —
            drop me a message. I’ll read every word.
          </p>

          <form
            action="https://formspree.io/f/mgvzkknz"
            method="POST"
            className="space-y-4 text-left"
          >
            <div>
              <label htmlFor="name" className="block mb-1 text-sm">Your Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-2 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Aiza Shafqat"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-1 text-sm">Your Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-2 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-1 text-sm">Your Message</label>
              <textarea
                name="message"
                rows={5}
                required
                className="w-full px-4 py-2 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-yellow-400 text-black px-6 py-2 rounded hover:bg-yellow-300 transition font-semibold"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </section>
    </>
  );
}
