import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

export default function ProjectCard({ title, desc, tags, image }) {
  return (
    <div className="group relative rounded-3xl overflow-hidden glass-card transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20">
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center gap-4">
          <button className="p-3 bg-white text-slate-900 rounded-full hover:scale-110 transition-transform"><Github size={20}/></button>
          <button className="p-3 bg-primary text-white rounded-full hover:scale-110 transition-transform"><ExternalLink size={20}/></button>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <div className="flex gap-2 mb-4">
          {tags.map(tag => (
            <span key={tag} className="px-3 py-1 text-[10px] font-bold bg-primary/10 text-primary rounded-full uppercase tracking-wider">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
}
