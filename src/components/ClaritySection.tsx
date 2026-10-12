import React from "react";

export interface ClarityBullet {
  number?: string;
  title: string;
  desc: string;
}

export interface ClaritySectionProps {
  id?: string;
  badge?: string;
  title: string;
  description: React.ReactNode;
  bullets?: ClarityBullet[];
  ctaText?: string;
  ctaAction?: () => void;
  ctaHref?: string;
  stars?: number;
  quoteTitle?: string;
  quoteDesc?: string;
  authorName?: string;
  authorRole?: string;
  authorAvatar?: string;
  illustration: React.ReactNode;
  reversed?: boolean;
  withPattern?: boolean;
  bottomContent?: React.ReactNode;
  className?: string;
}

export default function ClaritySection({
  id,
  badge,
  title,
  description,
  bullets,
  ctaText,
  ctaAction,
  ctaHref,
  stars = 5,
  quoteTitle,
  quoteDesc,
  authorName,
  authorRole,
  authorAvatar = "https://cdn.rareblocks.xyz/collection/clarity/images/hero/1/avatar-female.png",
  illustration,
  reversed = false,
  withPattern = true,
  bottomContent,
  className = "",
}: ClaritySectionProps) {
  return (
    <section 
      id={id} 
      className={`relative py-12 sm:py-16 lg:py-24 border-b border-gray-200/80 scroll-mt-24 overflow-hidden text-left ${className}`}
    >
      {/* Background pattern matching Rareblocks Clarity */}
      {withPattern && (
        <div className="absolute bottom-0 right-0 overflow-hidden pointer-events-none opacity-40 select-none">
          <img
            className="w-full h-auto origin-bottom-right transform scale-150 lg:w-auto lg:mx-auto lg:object-cover lg:scale-75"
            src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/1/background-pattern.png"
            alt=""
          />
        </div>
      )}

      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 gap-y-12 lg:items-center lg:grid-cols-2 xl:grid-cols-2 gap-x-12 ${reversed ? "lg:grid-flow-dense" : ""}`}>
          
          {/* Left / Text column */}
          <div className={`text-center xl:col-span-1 lg:text-left md:px-8 lg:px-0 xl:pr-12 ${reversed ? "lg:col-start-2" : ""}`}>
            {badge && (
              <span className="inline-block px-3.5 py-1 mb-4 text-xs font-bold uppercase tracking-wider text-brand-primary bg-brand-primary/10 rounded-full border border-brand-primary/20">
                {badge}
              </span>
            )}

            <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl sm:leading-tight lg:text-5xl lg:leading-tight font-pj">
              {title}
            </h2>

            <div className="mt-3 text-base sm:text-lg text-gray-600 font-inter sm:mt-5 leading-relaxed space-y-3">
              {typeof description === "string" ? <p>{description}</p> : description}
            </div>

            {/* Structured 3-step or breakdown bullets if provided */}
            {bullets && bullets.length > 0 && (
              <div className="mt-6 sm:mt-8 space-y-3.5 text-left">
                {bullets.map((b, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-white/80 rounded-xl border border-gray-200/90 shadow-2xs">
                    {b.number ? (
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-900 text-white text-xs font-bold flex items-center justify-center font-pj">
                        {b.number}
                      </span>
                    ) : (
                      <span className="flex-shrink-0 w-2 h-2 rounded-full bg-brand-primary mt-2" />
                    )}
                    <div>
                      <h4 className="text-sm font-bold text-gray-900 font-pj leading-tight">
                        {b.title}
                      </h4>
                      <p className="text-xs text-gray-600 font-inter mt-0.5 leading-relaxed">
                        {b.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Call to action button */}
            {(ctaText || ctaAction || ctaHref) && (
              <div className="mt-8 sm:mt-10 flex justify-center lg:justify-start">
                {ctaHref ? (
                  <a
                    href={ctaHref}
                    target={ctaHref.startsWith("http") ? "_blank" : undefined}
                    rel={ctaHref.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="inline-flex px-8 py-4 text-base sm:text-lg font-bold text-white transition-all duration-200 bg-gray-900 border border-transparent rounded font-pj hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 shadow-md"
                  >
                    {ctaText || "Learn More"}
                  </a>
                ) : (
                  <button
                    onClick={ctaAction}
                    type="button"
                    className="inline-flex px-8 py-4 text-base sm:text-lg font-bold text-white transition-all duration-200 bg-gray-900 border border-transparent rounded font-pj hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 shadow-md cursor-pointer"
                  >
                    {ctaText || "Explore Section"}
                  </button>
                )}
              </div>
            )}

            {/* Testimonial / Quote / Key Insight Section */}
            {(quoteTitle || quoteDesc) && (
              <div className="mt-8 sm:mt-12 pt-6 border-t border-gray-200/80 text-left">
                {stars > 0 && (
                  <div className="flex items-center justify-center lg:justify-start gap-1">
                    {[...Array(stars)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-[#FDB241]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                )}

                <blockquote className="mt-4">
                  {quoteTitle && (
                    <p className="text-lg font-bold text-gray-900 font-pj">
                      {quoteTitle}
                    </p>
                  )}
                  {quoteDesc && (
                    <p className="mt-2 text-base leading-7 text-gray-600 font-inter">
                      {quoteDesc}
                    </p>
                  )}
                </blockquote>

                {authorName && (
                  <div className="flex items-center justify-center mt-3 lg:justify-start">
                    <img
                      className="flex-shrink-0 object-cover w-7 h-7 overflow-hidden rounded-full border border-gray-200"
                      src={authorAvatar}
                      alt={authorName}
                    />
                    <div className="ml-2.5">
                      <p className="text-sm font-bold text-gray-900 font-pj">
                        {authorName}
                      </p>
                      {authorRole && (
                        <p className="text-xs text-gray-500 font-inter">
                          {authorRole}
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Right / Visual Illustration Column */}
          <div className={`xl:col-span-1 ${reversed ? "lg:col-start-1" : ""}`}>
            <div className="w-full mx-auto">
              {illustration}
            </div>
          </div>

        </div>

        {/* Additional Image Placeholders & Visual Artifacts */}
        {bottomContent && (
          <div className="mt-12 sm:mt-16 pt-10 sm:pt-14 border-t border-gray-200/80">
            {bottomContent}
          </div>
        )}
      </div>
    </section>
  );
}
