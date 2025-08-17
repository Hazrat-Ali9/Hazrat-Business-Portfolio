import { motion } from 'framer-motion';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  ExternalLink, 
  Github, 
  Calendar, 
  Users, 
  User,
  CheckCircle,
  AlertTriangle,
  Lightbulb,
  Play,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { projectsData, ProjectData } from '../../data/projects';
import { LoadingSpinner } from '../ui/LoadingSpinner';
// project details
export const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<ProjectData | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      const foundProject = projectsData.find(p => p.id === id);
      setProject(foundProject || null);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [id]);

  const getNextProject = () => {
    if (!project) return null;
    const currentIndex = projectsData.findIndex(p => p.id === project.id);
    const nextIndex = (currentIndex + 1) % projectsData.length;
    return projectsData[nextIndex];
  };

  const getPrevProject = () => {
    if (!project) return null;
    const currentIndex = projectsData.findIndex(p => p.id === project.id);
    const prevIndex = currentIndex === 0 ? projectsData.length - 1 : currentIndex - 1;
    return projectsData[prevIndex];
  };

  const nextProject = getNextProject();
  const prevProject = getPrevProject();

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
        <LoadingSpinner text="Loading project details..." />
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertTriangle className="w-8 h-8 text-red-600 dark:text-red-400" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Project Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            The project you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Portfolio</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between mb-8"
        >
          <button
            onClick={() => navigate(-1)}
            className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back</span>
          </button>

          <div className="flex items-center space-x-4">
            {prevProject && (
              <Link
                to={`/project/${prevProject.id}`}
                className="flex items-center space-x-2 px-4 py-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-lg border border-white/20 dark:border-gray-700/20 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="hidden sm:block">Previous</span>
              </Link>
            )}
            {nextProject && (
              <Link
                to={`/project/${nextProject.id}`}
                className="flex items-center space-x-2 px-4 py-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-lg border border-white/20 dark:border-gray-700/20 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-colors"
              >
                <span className="hidden sm:block">Next</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            )}
          </div>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-white/20 dark:border-gray-700/20 mb-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                  {project.title}
                </h1>
                {project.featured && (
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-3 py-1 rounded-full text-sm font-medium">
                    ⭐ Featured
                  </span>
                )}
              </div>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
                {project.description}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Completed</p>
                    <p className="font-medium text-gray-900 dark:text-white">{project.completionDate}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Team Size</p>
                    <p className="font-medium text-gray-900 dark:text-white">{project.teamSize} members</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <User className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">My Role</p>
                    <p className="font-medium text-gray-900 dark:text-white">{project.role}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-500 rounded text-white text-xs flex items-center justify-center font-bold">
                    C
                  </span>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Category</p>
                    <p className="font-medium text-gray-900 dark:text-white">{project.category}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-purple-600 hover:to-teal-600 transition-all duration-300"
                  >
                    <Play className="w-5 h-5" />
                    <span>Live Demo</span>
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-6 py-3 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-900 dark:hover:bg-gray-600 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span>View Code</span>
                  </a>
                )}
              </div>
            </div>

            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 lg:h-80 object-cover rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl" />
            </div>
          </div>
        </motion.div>

        {/* Technology Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-white/20 dark:border-gray-700/20 mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Technology Stack
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {project.techIcons.map((tech, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-4 bg-white/40 dark:bg-gray-800/40 rounded-xl border border-white/20 dark:border-gray-700/20"
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm"
                  style={{ backgroundColor: tech.color }}
                >
                  {tech.name.charAt(0)}
                </div>
                <span className="font-medium text-gray-900 dark:text-white">{tech.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Project Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-white/20 dark:border-gray-700/20 mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Project Overview
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
            {project.overview}
          </p>
        </motion.div>

        {/* Key Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-white/20 dark:border-gray-700/20 mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400 mr-2" />
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.keyFeatures.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600 dark:text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Screenshots Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-white/20 dark:border-gray-700/20 mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Project Screenshots
          </h2>
          
          <div className="relative">
            <img
              src={project.screenshots[currentImageIndex]}
              alt={`${project.title} screenshot ${currentImageIndex + 1}`}
              className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
            />
            
            {project.screenshots.length > 1 && (
              <>
                <button
                  onClick={() => setCurrentImageIndex(prev => 
                    prev === 0 ? project.screenshots.length - 1 : prev - 1
                  )}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                
                <button
                  onClick={() => setCurrentImageIndex(prev => 
                    prev === project.screenshots.length - 1 ? 0 : prev + 1
                  )}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {project.screenshots.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </motion.div>

        {/* Challenges and Solutions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-white/20 dark:border-gray-700/20"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <AlertTriangle className="w-6 h-6 text-orange-600 dark:text-orange-400 mr-2" />
              Challenges
            </h2>
            <div className="space-y-4">
              {project.challenges.map((challenge, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <AlertTriangle className="w-5 h-5 text-orange-600 dark:text-orange-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">{challenge}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-white/20 dark:border-gray-700/20"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <Lightbulb className="w-6 h-6 text-yellow-600 dark:text-yellow-400 mr-2" />
              Solutions
            </h2>
            <div className="space-y-4">
              {project.solutions.map((solution, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Lightbulb className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">{solution}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Navigation to Next/Previous Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 border border-blue-200/20 dark:border-blue-700/20"
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Explore More Projects
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {prevProject && (
              <Link
                to={`/project/${prevProject.id}`}
                className="group flex items-center space-x-4 p-4 bg-white/60 dark:bg-gray-800/60 rounded-xl hover:bg-white/80 dark:hover:bg-gray-800/80 transition-colors"
              >
                <ArrowLeft className="w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:-translate-x-1 transition-transform" />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Previous Project</p>
                  <p className="font-medium text-gray-900 dark:text-white">{prevProject.title}</p>
                </div>
              </Link>
            )}
            
            {nextProject && (
              <Link
                to={`/project/${nextProject.id}`}
                className="group flex items-center justify-end space-x-4 p-4 bg-white/60 dark:bg-gray-800/60 rounded-xl hover:bg-white/80 dark:hover:bg-gray-800/80 transition-colors"
              >
                <div className="text-right">
                  <p className="text-sm text-gray-500 dark:text-gray-400">Next Project</p>
                  <p className="font-medium text-gray-900 dark:text-white">{nextProject.title}</p>
                </div>
                <ArrowRight className="w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};