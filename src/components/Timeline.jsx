const Timeline = ({ items, accent }) => {
  return (
    <div className="relative mt-16 w-full mx-auto">
      {/* Center line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-0 border-l-2 border-dashed border-slate-300 -translate-x-1/2 hidden md:block" />

      <div className="space-y-12 md:space-y-24">
        {items.map((item, i) => (
          <div key={i} className={`relative flex flex-col md:flex-row items-center ${i % 2 !== 0 ? "md:flex-row-reverse" : ""}`}>
            {/* Timeline Dot */}
            <div
              className="hidden md:block absolute left-1/2 top-1/2 w-4 h-4 rounded-full border-2 border-white -translate-y-1/2 -translate-x-1/2 z-10 shadow-sm"
              style={{ backgroundColor: accent }}
            />

            {/* Card */}
            <div className={`w-full md:w-1/2 ${i % 2 !== 0 ? "md:pl-12" : "md:pr-12"}`}>
              <div className="nb-card bg-white p-6 md:p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 text-sm font-semibold border border-slate-200 bg-white rounded-full text-slate-600">
                    {item.period}
                  </span>
                  {item.type && (
                    <span className="px-3 py-1 text-sm font-semibold rounded-full text-white" style={{ backgroundColor: accent }}>
                      {item.type}
                    </span>
                  )}
                </div>

                <h3 className="font-display font-bold text-2xl mb-1 text-slate-800">{item.title}</h3>
                <h4 className="text-lg text-slate-500 font-medium mb-4">{item.org}</h4>
                <p className="text-slate-600 leading-relaxed mb-4">{item.desc}</p>

                {item.bullets && (
                  <ul className="mb-6 space-y-2 list-none">
                    {item.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex gap-2 text-sm md:text-base text-slate-600 leading-relaxed">
                        <span className="mt-1 flex-shrink-0" style={{ color: accent }}>✦</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {item.certificateUrl && (
                  <div className="mb-6">
                    <a 
                      href={item.certificateUrl} 
                      target="_blank" 
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 text-sm font-semibold rounded-lg transition-colors shadow-sm"
                    >
                      <svg className="w-4 h-4" style={{ color: accent }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Lihat Sertifikat
                    </a>
                  </div>
                )}

                {item.tags && (
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 text-xs md:text-sm font-semibold border border-slate-200 bg-slate-50 rounded-full text-slate-600">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
