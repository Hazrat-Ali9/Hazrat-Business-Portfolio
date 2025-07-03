import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Lightbulb, Users, Award, Coffee, Heart } from 'lucide-react';

const skills = [
  { name: 'Frontend Development', level: 95, color: 'from-blue-500 to-cyan-500' },
  { name: 'Backend Development', level: 90, color: 'from-green-500 to-teal-500' },
  { name: 'UI/UX Design', level: 85, color: 'from-purple-500 to-pink-500' },
  { name: 'DevOps & Cloud', level: 80, color: 'from-orange-500 to-red-500' },
  { name: 'Mobile Development', level: 75, color: 'from-indigo-500 to-purple-500' },
  { name: 'Data Analysis', level: 70, color: 'from-teal-500 to-blue-500' },
];

const achievements = [
  { icon: Code, title: 'Clean Code Advocate', description: 'Writing maintainable and scalable code' },
  { icon: Lightbulb, title: 'Innovation Driver', description: 'Bringing creative solutions to complex problems' },
  { icon: Users, title: 'Team Collaborator', description: 'Building strong relationships with clients and teams' },
  { icon: Award, title: 'Quality Focused', description: 'Delivering exceptional results on every project' },
];

export const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" ref={ref} className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Passionate about creating digital experiences that make a difference. 
            I combine technical expertise with creative vision to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Personal info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-white/20 dark:border-gray-700/20">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <Coffee className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Hazrat Ali</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">Full Stack Developer & Tech Consultant</p>
                </div>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                With over 5 years of experience in software development, I specialize in creating 
                robust, scalable applications that solve real-world problems. My journey began with 
                a passion for technology and has evolved into a mission to help businesses thrive 
                in the digital age.
              </p>

              <div className="flex flex-wrap gap-4">
                {['React', 'Node.js', 'TypeScript', 'Python', 'AWS', 'Docker'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                  className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 border border-white/20 dark:border-gray-700/20"
                >
                  <achievement.icon className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-3" />
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{achievement.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{achievement.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-white/20 dark:border-gray-700/20">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Heart className="w-6 h-6 text-red-500 mr-2" />
                My Skills
              </h3>
              
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1.5, delay: 0.6 + index * 0.1 }}
                        className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Personal touch */}
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/5 dark:to-purple-500/5 rounded-2xl p-6 border border-blue-200/20 dark:border-blue-700/20">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Beyond Code
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, mentoring aspiring developers, 
                or enjoying a good cup of coffee while reading about the latest industry trends. I believe in 
                continuous learning and giving back to the community that has given me so much.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};