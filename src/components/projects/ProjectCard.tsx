import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, Calendar, Users } from 'lucide-react';
import { ProjectData } from '../../data/projects';
import { Link } from 'react-router-dom';
// Project card
interface ProjectCardProps {
  project: ProjectData;
  index: number;
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 dark:border-gray-700/20 hover:shadow-2xl transition-all duration-300">
        {project.featured && (
          <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
            <span>⭐</span>
            <span>Featured</span>
          </div>
        )}
        
        <div className="relative overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Hover overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex space-x-4">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github className="w-5 h-5" />
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>
            <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
              {project.category}
            </span>
          </div>
          
          <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
            {project.shortDescription}
          </p>

          {/* Tech Stack Icons */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techIcons.slice(0, 4).map((tech, techIndex) => (
              <div
                key={techIndex}
                className="flex items-center space-x-1 px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-xs"
                style={{ color: tech.color }}
              >
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: tech.color }} />
                <span className="text-gray-700 dark:text-gray-300">{tech.name}</span>
              </div>
            ))}
            {project.techIcons.length > 4 && (
              <div className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-xs text-gray-500 dark:text-gray-400">
                +{project.techIcons.length - 4} more
              </div>
            )}
          </div>

          {/* Project Meta */}
          <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
            <div className="flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
              <span>{project.completionDate}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="w-4 h-4" />
              <span>{project.teamSize} members</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between">
            <div className="flex space-x-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
            
            <Link
              to={`/project/${project.id}`}
              className="group/btn flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-purple-600 hover:to-teal-600 transition-all duration-300"
            >
              <span>View Details</span>
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};