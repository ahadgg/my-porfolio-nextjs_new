import Link from "next/link";

type AboutProps = {
  introduction: string[];
  company: {
    name: string;
    url: string;
  };
  skills: {
    frontend: string[];
    backend: string[];
    databases: string[];
    cloud: string[];
    ai: string[];
    // architecture: string[];
  };
  // achievements: string[];
};

export default function About({ 
  introduction, 
  company, 
  skills, 
  // achievements 
}: AboutProps) {
  const Chip: React.FC<{ children: React.ReactNode; variant?: 'primary' | 'secondary' }> = ({ 
    children, 
    variant = 'primary' 
  }) => (
    <span 
      className={`
        inline-block px-2 py-1 mx-1 text-sm font-medium rounded-md transition-all duration-200
        ${variant === 'primary' 
          ? 'text-teal-300 bg-teal-300/10 hover:bg-teal-300/20 border border-teal-300/20' 
          : 'text-slate-300 bg-slate-700/50 hover:bg-slate-600/50 border border-slate-600/50'
        }
        hover:scale-105 focus-visible:scale-105 focus-visible:outline-2 focus-visible:outline-teal-300
      `}
    >
      {children}
    </span>
  );

  const SkillCategory: React.FC<{ 
    title: string; 
    skills: string[]; 
    description: string;
  }> = ({ title, skills, description }) => (
    <div className="mb-6 p-4 rounded-lg bg-slate-800/30 border border-slate-700/50 hover:border-slate-600/50 transition-colors duration-200">
      <h4 className="text-lg font-semibold text-slate-200 mb-2 flex items-center">
        <span className="w-2 h-2 bg-teal-400 rounded-full mr-3"></span>
        {title}
      </h4>
      <p className="text-slate-400 text-sm mb-3 leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-1">
        {skills.map((skill, i) => (
          <Chip key={`${title}-${i}`} variant="secondary">{skill}</Chip>
        ))}
      </div>
    </div>
  );

  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About me"
    >
      {/* Section Header */}
      <div className="sticky top-0 z-20 -mx-6 mb-8 w-screen bg-slate-900/90 px-6 py-5 backdrop-blur-md border-b border-slate-800/50 md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0 lg:border-none">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          About
        </h2>
      </div>

      <div className="space-y-8">
        {/* Introduction */}
        <div className="selection:bg-teal-400 selection:text-slate-900">
          {introduction.map((paragraph, index) => (
            <p key={index} className="mb-6 text-slate-300 leading-8 text-lg">
              {index === 1 ? (
                <>
                  Currently, I'm a Software Engineer at{" "}
                  <Link
                    className="font-semibold text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 transition-colors duration-200 underline decoration-teal-300/30 hover:decoration-teal-300/70"
                    href={company.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={`${company.name} (opens in a new tab)`}
                  >
                    {company.name}
                  </Link>
                  , where I lead the development of enterprise-grade applications and drive technical strategy for complex software initiatives. My expertise encompasses the entire technology stack, from modern front-end frameworks to scalable backend architectures.
                </>
              ) : (
                paragraph
              )}
            </p>
          ))}
        </div>


        {/* Technical Skills */}
        <div>
          <h3 className="text-2xl font-bold text-slate-200 mb-6 flex items-center">
            <span className="w-3 h-3 bg-teal-400 rounded-full mr-3"></span>
            Technical Expertise
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <SkillCategory
              title="Frontend Development"
              skills={skills.frontend}
              description="Modern React ecosystem with TypeScript, state management, and performance optimization"
            />
            
            <SkillCategory
              title="Backend Engineering"
              skills={skills.backend}
              description="Scalable server-side solutions with robust API design and microservices architecture"
            />
            
            <SkillCategory
              title="Database & Storage"
              skills={skills.databases}
              description="Multi-paradigm database design, optimization, and real-time data processing"
            />
            
            <SkillCategory
              title="Cloud & DevOps"
              skills={skills.cloud}
              description="Infrastructure as code, container orchestration, and automated deployment pipelines"
            />
            
            <SkillCategory
              title="AI & Machine Learning"
              skills={skills.ai}
              description="Production-grade AI systems and intelligent automation"
            />
            
            {/* <SkillCategory
              title="Software Architecture"
              skills={skills.architecture}
              description="Enterprise-level system design patterns and architectural decision-making"
            /> */}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center p-8 bg-gradient-to-r from-teal-900/20 to-blue-900/20 rounded-xl border border-teal-700/30">
          <h3 className="text-xl font-semibold text-slate-200 mb-3">
            Let's Build Something Extraordinary
          </h3>
          <p className="text-slate-400 leading-7 max-w-2xl mx-auto">
            I'm passionate about solving complex problems through innovative technology solutions. 
            Whether it's architecting scalable systems, implementing AI-driven features, or mentoring development teams, 
            I'm always eager to take on new challenges that push the boundaries of what's possible.
          </p>
        </div>
      </div>
    </section>
  );
}
