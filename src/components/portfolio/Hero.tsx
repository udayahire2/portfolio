export function Hero() {
  return (
    <section id="about" className="py-20 animate-fade-in">
      <div className="flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-12">
        {/* Text Content */}
        <div className="flex-1">
          <h1 className="text-4xl mb-2 dark:text-white">Uday</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">Web Developer</p>
          <p className="text-base text-gray-700 dark:text-gray-300 max-w-2xl leading-relaxed">
            I build web applications with modern JavaScript frameworks and focus on clean, maintainable code. 
            Currently working with React, TypeScript, and Node.js to create responsive, user-focused interfaces.
          </p>
        </div>

        {/* Profile Image */}
        <div className="flex-shrink-0">
          <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-gray-200 dark:border-gray-700 shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" 
              alt="Uday Ahire - Web Developer"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
