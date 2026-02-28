import React from 'react';
export default function Section({ id, title, subtitle, children, className = "" }) {
  return (
    <section id={id} className={`py-24 px-6 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold mb-4">{title}</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">{subtitle}</p>
        </div>
        {children}
      </div>
    </section>
  );
}
