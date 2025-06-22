import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Lightbulb, Users, Target } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Proficient in both frontend and backend technologies with hands-on experience in React, Flutter, Java, and Python.',
    },
    {
      icon: Lightbulb,
      title: 'Problem Solving',
      description: 'Strong analytical skills with a passion for solving complex problems and creating efficient solutions.',
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Excellent communication skills and experience working in collaborative environments.',
    },
    {
      icon: Target,
      title: 'Goal-Oriented',
      description: 'Focused on delivering high-quality results and continuously learning new technologies.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm a motivated third-year Computer Science undergraduate at NSBM Green University 
            with strong multitasking abilities and proven problem-solving skills. Currently seeking 
            a software engineering internship to apply theoretical knowledge and technical expertise 
            in real-world development environments.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-primary-50 to-blue-50 card-hover"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-primary-500 text-white p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">My Mission</h3>
            <p className="text-lg">
              To contribute to innovative software solutions while gaining valuable industry experience 
              in full-stack development. I'm passionate about creating applications that make a positive 
              impact and am eager to learn from experienced professionals in the field.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;