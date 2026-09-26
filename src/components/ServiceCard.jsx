import React from 'react';
import { Link } from 'react-router-dom';

export default function ServiceCard({ title, description, icon, tag }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 flex flex-col justify-between hover:shadow-xl transition group">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center font-bold text-xl group-hover:bg-sky-600 group-hover:text-white transition">
            {icon}
          </div>
          {tag && (
            <span className="text-xs font-semibold px-3 py-1 bg-cyan-50 text-cyan-700 rounded-full">
              {tag}
            </span>
          )}
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
        <p className="text-slate-600 text-sm leading-relaxed mb-6">{description}</p>
      </div>
      <Link
        to="/contact"
        className="inline-flex items-center text-sm font-bold text-sky-600 hover:text-sky-700"
      >
        Book This Service &rarr;
      </Link>
    </div>
  );
}