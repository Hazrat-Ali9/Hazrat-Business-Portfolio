import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Linkedin, Mail, Users, Briefcase } from 'lucide-react';

const openPositions = [
  {
    title: 'Software Engineer',
    type: 'Full-time',
    location: 'Remote',
    experience: '2-4 years',
    skills: ['JavaScript', 'React', 'Node.js', 'Python'],
    urgent: true
  },
  {
    title: 'Frontend Engineer',
    type: 'Full-time',
    location: 'Remote',
    experience: '3-5 years',
    skills: ['React', 'Next.js', 'TailwindCSS', 'TypeScript'],
    urgent: false
  },
  {
    title: 'Backend Engineer',
    type: 'Full-time',
    location: 'Remote',
    experience: '3-6 years',
    skills: ['Node.js', 'Express/NestJS', 'MongoDB', 'PostgreSQL'],
    urgent: false
  },
  {
    title: 'Full Stack Developer',
    type: 'Contract',
    location: 'Remote',
    experience: '4-7 years',
    skills: ['React', 'Node.js', 'AWS', 'Docker'],
    urgent: true
  },
  {
    title: 'UI/UX Designer',
    type: 'Full-time',
    location: 'Remote',
    experience: '2-5 years',
    skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research'],
    urgent: false
  },
  {
    title: 'DevOps Engineer',
    type: 'Full-time',
    location: 'Remote',
    experience: '3-6 years',
    skills: ['CI/CD', 'Docker', 'Kubernetes', 'AWS'],
    urgent: false
  }
];

const teamMembers = [
  {
    name: 'Hazrat Ali',
    role: 'Lead Developer & Founder',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300',
    bio: 'Full-stack developer with 5+ years of experience in building scalable applications.',
    skills: ['React', 'Node.js', 'AWS', 'TypeScript'],
    linkedin: 'https://linkedin.com',
    github: 'https://github.com'
  },
  {
    name: 'Sarah Johnson',
    role: 'Senior Frontend Developer',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300',
    bio: 'Expert in React and modern frontend technologies with a passion for user experience.',
    skills: ['React', 'Vue.js', 'CSS', 'UX Design'],
    linkedin: 'https://linkedin.com',
    github: 'https://github.com'
  },
  {
    name: 'Michael Chen',
    role: 'Backend Architect',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=300',
    bio: 'Specialized in building robust backend systems and cloud infrastructure.',
    skills: ['Python', 'Django', 'PostgreSQL', 'Docker'],
    linkedin: 'https://linkedin.com',
    github: 'https://github.com'
  }
];

export const Team = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="team" ref={ref} className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Team</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Meet the talented individuals who make our projects come to life and help us deliver exceptional results.
          </p>
        </motion.div>

        {/* Current Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-gray-700/20 hover:shadow-xl transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="relative inline-block">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover ring-4 ring-blue-100 dark:ring-blue-900/30 group-hover:ring-blue-200 dark:group-hover:ring-blue-800/50 transition-all duration-300"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                      <Users className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {member.bio}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {member.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex justify-center space-x-4">
                  <a
                    href={member.linkedin}
                    className="p-2 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={member.github}
                    className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="mailto:contact@example.com"
                    className="p-2 text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Open Positions */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center">
              <Briefcase className="w-8 h-8 mr-3 text-blue-600 dark:text-blue-400" />
              Open Positions
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Join our team and help us build the future of technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {openPositions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                className="group relative"
              >
                <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 border border-white/20 dark:border-gray-700/20 hover:shadow-lg transition-all duration-300">
                  {position.urgent && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      Urgent
                    </div>
                  )}
                  
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {position.title}
                  </h4>
                  
                  <div className="flex items-center space-x-4 mb-3 text-sm text-gray-600 dark:text-gray-400">
                    <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-2 py-1 rounded">
                      {position.type}
                    </span>
                    <span>{position.location}</span>
                    <span>{position.experience}</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {position.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => document.getElementById('auth')?.scrollIntoView({ behavior: 'smooth' })}
                    className="w-full py-2 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-purple-600 hover:to-teal-600 transition-all duration-300"
                  >
                    Apply Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Join Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 border border-blue-200/20 dark:border-blue-700/20">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Don't See Your Role?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              We're always looking for talented individuals to join our team. Send us your resume 
              and let's discuss how you can contribute to our mission.
            </p>
            <motion.button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:from-purple-600 hover:to-teal-600 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};