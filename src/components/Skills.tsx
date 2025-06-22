import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Java', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'JavaScript', level: 90 },
        { name: 'TypeScript', level: 75 },
        { name: 'Dart', level: 70 },
      ],
    },
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React', level: 85 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Flutter', level: 75 },
        { name: 'Responsive Design', level: 90 },
      ],
    },
    {
      title: 'Backend & Database',
      skills: [
        { name: 'Node.js', level: 80 },
        { name: 'MySQL', level: 75 },
        { name: 'MongoDB', level: 70 },
        { name: 'REST APIs', level: 85 },
        { name: 'Express.js', level: 75 },
      ],
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git', level: 85 },
        { name: 'VS Code', level: 95 },
        { name: 'Postman', level: 80 },
        { name: 'Figma', level: 70 },
        { name: 'IntelliJ IDEA', level: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg card-hover"
            >
              <h3 className="text-2xl font-bold mb-6 text-center gradient-text">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-primary-600 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <motion.div
                        className="bg-gradient-to-r from-primary-600 to-primary-400 h-3 rounded-full"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Soft Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {['Problem Solving', 'Team Collaboration', 'Adaptability', 'Time Management', 'Critical Thinking', 'Willingness to Learn'].map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  className="bg-gradient-to-r from-primary-100 to-blue-100 p-4 rounded-lg text-center"
                >
                  <span className="font-medium text-gray-700">{skill}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;