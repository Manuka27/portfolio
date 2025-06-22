import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Smartphone, Globe, Database, ShoppingCart, MessageCircle, Calendar } from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'Smart Kidz Games',
      description: 'An interactive educational mobile application featuring alphabetical letter drawing games. Built with Flutter/Dart, it helps children learn letter recognition and writing skills through engaging touch-based mechanics.',
      image: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Flutter', 'Dart', 'Firebase', 'Custom Animations'],
      icon: Smartphone,
      github: '#',
      demo: '#',
      category: 'Mobile App'
    },
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce web application with user authentication, product catalog, shopping cart, and payment integration. Features admin dashboard for inventory management.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
      icon: ShoppingCart,
      github: '#',
      demo: '#',
      category: 'Web Application'
    },
    {
      title: 'Task Management System',
      description: 'A collaborative project management tool with real-time updates, team collaboration features, and progress tracking. Includes drag-and-drop functionality and deadline notifications.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'TypeScript', 'Socket.io', 'PostgreSQL'],
      icon: Calendar,
      github: '#',
      demo: '#',
      category: 'Web Application'
    },
    {
      title: 'Weather Analytics Dashboard',
      description: 'A data visualization dashboard that displays weather patterns and analytics. Features interactive charts, location-based forecasts, and historical data comparison.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'Django', 'Chart.js', 'Weather API'],
      icon: Database,
      github: '#',
      demo: '#',
      category: 'Data Analytics'
    },
    {
      title: 'Chat Application',
      description: 'Real-time messaging application with group chats, file sharing, and emoji reactions. Built with modern web technologies for seamless communication.',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
      icon: MessageCircle,
      github: '#',
      demo: '#',
      category: 'Web Application'
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing projects and skills. Features smooth animations, modern design, and optimized performance.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      icon: Globe,
      github: '#',
      demo: '#',
      category: 'Web Application'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my recent work and personal projects demonstrating various technologies and skills
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm p-2 rounded-full">
                    <project.icon className="w-5 h-5 text-primary-600" />
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex space-x-3">
                    <a
                      href={project.github}
                      className="p-2 bg-gray-100 rounded-full hover:bg-primary-100 transition-colors group"
                    >
                      <Github className="w-5 h-5 text-gray-600 group-hover:text-primary-600" />
                    </a>
                    <a
                      href={project.demo}
                      className="p-2 bg-gray-100 rounded-full hover:bg-primary-100 transition-colors group"
                    >
                      <ExternalLink className="w-5 h-5 text-gray-600 group-hover:text-primary-600" />
                    </a>
                  </div>
                  <button className="text-primary-600 font-medium hover:text-primary-700 transition-colors">
                    Learn More →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/manuka"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center space-x-2"
          >
            <Github className="w-5 h-5" />
            <span>View More on GitHub</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;