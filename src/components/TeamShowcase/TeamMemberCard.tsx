import React from 'react';
import { Mail, Linkedin, Twitter, Github } from 'lucide-react';
import { TeamMember } from './types';

interface TeamMemberCardProps {
  member: TeamMember;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
      <div className="h-48 overflow-hidden bg-gradient-to-r from-blue-100 to-blue-50">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
        />
      </div>
      <div className="p-6">
        <span className="inline-block bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full font-medium uppercase tracking-wide mb-3">
          {member.type === 'technical' ? 'Technical' : 'Non-Technical'}
        </span>
        <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
        <p className="text-red-600 font-medium mb-3">{member.role}</p>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{member.bio}</p>
        
        <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
          <span className="text-xs text-gray-500">Joined {member.yearJoined}</span>
          <div className="flex space-x-2">
            {member.social?.email && (
              <a href={`mailto:${member.social.email}`} aria-label="Email" className="text-gray-400 hover:text-gray-900 transition-colors">
                <Mail size={16} />
              </a>
            )}
            {member.social?.linkedin && (
              <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-red-600 transition-colors">
                <Linkedin size={16} />
              </a>
            )}
            {member.social?.twitter && (
              <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-400 hover:text-red-400 transition-colors">
                <Twitter size={16} />
              </a>
            )}
            {member.social?.github && (
              <a href={member.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-400 hover:text-gray-900 transition-colors">
                <Github size={16} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;