import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = [
    {
      degree: 'BSc (Hons.) in Computer Science',
      institution: 'NSBM Green University',
      location: 'Pitipana, Sri Lanka',
      period: 'January 2023 - Present',
      status: 'Currently Pursuing',
      description: 'Specializing in software engineering with focus on full-stack development, data structures, algorithms, and modern programming paradigms.',
      achievements: [
        'Maintained high academic performance',
        'Active participant in coding competitions',
        'Member of the Computer Science Society'
      ],
      relevantCourses: [
        'Data Structures & Algorithms',
        'Software Engineering',
        'Database Management Systems',
        'Web Development',
        'Mobile App Development',
        'Object-Oriented Programming'
      ]
    },
    {
      degree: 'G.C.E. Advanced Level - Physical Science Stream',
      institution: 'Mo/Dutugemunu Central College',
      location: 'Wellawaya, Sri Lanka',
      period: '2020',
      status: 'Completed',
      description: 'Completed Advanced Level examination in Physical Science stream with strong performance in Mathematics, Physics, and Chemistry.',
      achievements: [
        'Achieved 2S and 1C passes',
        'Strong foundation in Mathematics and Sciences',
        'Participated in inter-school science competitions'
      ],
      subjects: ['Combined Mathematics', 'Physics', 'Chemistry']
    },
    {
      degree: 'G.C.E. Ordinary Level',
      institution: 'Mo/Malwaththawela Central College',
      location: 'Wellawaya, Sri Lanka',
      period: '2016',
      status: 'Completed',
      description: 'Successfully completed Ordinary Level examination with excellent results across multiple subjects.',
      achievements: [
        'Achieved 9A passes',
        'Outstanding performance in Mathematics and Science',
        'Active in extracurricular activities'
      ],
      subjects: ['Mathematics', 'Science', 'English', 'Sinhala', 'History', 'Geography', 'Buddhism', 'Health & Physical Education', 'Art']
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Education</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Academic background and qualifications that have built my foundation in computer science and technology
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline line */}
              {index !== education.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-40 bg-gradient-to-b from-primary-600 to-primary-300" />
              )}

              <div className="flex items-start space-x-6">
                {/* Timeline dot */}
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-primary-600 to-primary-500 rounded-full flex items-center justify-center shadow-lg">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="flex-1 bg-gradient-to-br from-primary-50 to-blue-50 p-8 rounded-2xl shadow-lg card-hover">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">
                        {edu.degree}
                      </h3>
                      <h4 className="text-xl font-semibold text-primary-600 mb-3">
                        {edu.institution}
                      </h4>
                      <p className="text-gray-700 mb-4">{edu.description}</p>
                    </div>
                    <div className="flex flex-col md:items-end space-y-2 md:ml-6">
                      <div className="flex items-center text-gray-600">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="font-medium">{edu.period}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{edu.location}</span>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        edu.status === 'Currently Pursuing' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-blue-100 text-blue-700'
                      }`}>
                        {edu.status}
                      </span>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Achievements */}
                    <div>
                      <h5 className="flex items-center text-lg font-semibold text-gray-800 mb-3">
                        <Award className="w-5 h-5 mr-2 text-primary-600" />
                        Achievements
                      </h5>
                      <ul className="space-y-2">
                        {edu.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start">
                            <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Subjects/Courses */}
                    <div>
                      <h5 className="text-lg font-semibold text-gray-800 mb-3">
                        {edu.relevantCourses ? 'Relevant Courses' : 'Subjects'}
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {(edu.relevantCourses || edu.subjects)?.map((item, itemIndex) => (
                          <span
                            key={itemIndex}
                            className="bg-white text-primary-700 px-3 py-1 rounded-full text-sm font-medium shadow-sm"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
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

export default Education;