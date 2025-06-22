import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: 'Software Engineering Intern',
      company: 'Tech Solutions Lanka',
      location: 'Colombo, Sri Lanka',
      period: 'June 2024 - Present',
      description: [
        'Developing web applications using React and Node.js',
        'Collaborating with senior developers on client projects',
        'Participating in code reviews and agile development processes',
        'Contributing to mobile app development using Flutter'
      ],
      technologies: ['React', 'Node.js', 'Flutter', 'MongoDB', 'Git']
    },
    {
      title: 'Junior Developer',
      company: 'Digital Innovations',
      location: 'Remote',
      period: 'January 2024 - May 2024',
      description: [
        'Built responsive web interfaces using modern frontend technologies',
        'Implemented RESTful APIs and database integrations',
        'Worked on bug fixes and feature enhancements',
        'Gained experience in version control and team collaboration'
      ],
      technologies: ['JavaScript', 'Python', 'MySQL', 'CSS', 'HTML']
    },
    {
      title: 'Freelance Web Developer',
      company: 'Self-Employed',
      location: 'Wellawaya, Sri Lanka',
      period: 'August 2023 - December 2023',
      description: [
        'Developed custom websites for local businesses',
        'Created responsive designs and user-friendly interfaces',
        'Provided technical support and maintenance services',
        'Managed client relationships and project timelines'
      ],
      technologies: ['React', 'WordPress', 'PHP', 'JavaScript', 'CSS']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My professional journey and the experiences that have shaped my development skills
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-8 top-16 w-0.5 h-32 bg-gradient-to-b from-primary-600 to-primary-300" />
              )}

              <div className="flex items-start space-x-6">
                {/* Timeline dot */}
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-primary-600 to-primary-500 rounded-full flex items-center justify-center shadow-lg">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="flex-1 bg-white p-8 rounded-2xl shadow-lg card-hover">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">
                        {experience.title}
                      </h3>
                      <h4 className="text-xl font-semibold text-primary-600 mb-2">
                        {experience.company}
                      </h4>
                    </div>
                    <div className="flex flex-col md:items-end space-y-2">
                      <div className="flex items-center text-gray-600">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="font-medium">{experience.period}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{experience.location}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {experience.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;