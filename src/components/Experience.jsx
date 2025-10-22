import { motion } from "framer-motion";
import { Calendar, MapPin, Building2, ChevronRight } from "lucide-react";

const experienceData = [
  {
    id: 1,
    title: "FullStack Developer",
    company: "ParentalPal Ltd",
    period: "March 2025 – Present",
    location: "Remote",
    achievements: [
      "Developed a full-stack childcare platform using Next.js, TypeScript, MongoDB Atlas, and Tailwind CSS, featuring multi-step booking flows, role-based authentication, and real-time analytics dashboards that serve over 500 users.",
      "Built a dynamic admin dashboard with interactive data tables, advanced filtering, and smooth Framer Motion animations, reducing load time by 40% through image optimization and lazy loading.",
      "Architected a scalable backend infrastructure with RESTful APIs, MongoDB native driver integration, and automated data backup to Google Sheets, while ensuring type safety and robust error handling with TypeScript.",
      "Implemented advanced form validation systems including email verification, and multi-tab registration with real-time pricing and custom toast notifications using React Hot Toast.",
      "Implemented a payment gateway using Paystack.",
      "Integrated third-party services such as Cloudinary for optimized image handling and NextAuth.js for secure session management, then deployed to Vercel with a CI/CD pipeline ensuring responsive design across all devices.",
    ],
  },
  {
    id: 2,
    title: "FullStack Developer",
    company: "FashionSmith",
    period: "March 2024 – February 2025",
    location: "Remote",
    achievements: [
      "Created a full-stack tailoring platform enabling clients to customize and order garments through a seamless web experience. Implemented secure JWT authentication with refresh/access tokens and httpOnly cookies for robust session management.",
      "Built RESTful APIs in Express.js and MongoDB, ensuring scalable data handling and optimized query performance.",
      "Designed a responsive, component-based UI with React and Tailwind CSS, achieving above 93% Lighthouse accessibility and mobile responsiveness.",
      "Integrated role-based dashboards for tailors and clients, supporting order tracking, measurements, and profile management.",
      "Deployed to Vercel with automated builds, environment configuration, and version-controlled CI/CD workflow.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative scroll-mt-24 overflow-hidden bg-white py-24 lg:py-32 dark:bg-gray-900"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 dark:opacity-50">
        <div className="absolute top-20 left-10 size-72 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute right-10 bottom-20 size-96 rounded-full bg-accent/5 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 size-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary/5 blur-3xl"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        {/* Header Section */}
        <div className="mb-20 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-6 text-3xl font-bold md:text-4xl lg:text-5xl"
          >
            <span className="gradient-text">Work Experience</span>
          </motion.h1>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute top-0 bottom-0 left-8 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/30 md:left-1/2 md:-translate-x-px"></div>

          <div className="space-y-12">
            {experienceData.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.1 * index,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row md:items-start ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute top-6 left-6 size-4 rounded-full bg-primary ring-4 ring-background md:left-1/2 md:-translate-x-1/2 dark:ring-gray-900"></div>

                {/* Content */}
                <div
                  className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}
                >
                  <div className="ml-16 md:ml-0">
                    <div className="rounded-2xl border border-border/30 bg-card/50 p-6 shadow-lg backdrop-blur-sm dark:border-gray-700 dark:bg-gray-800/50">
                      {/* Header */}
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-foreground dark:text-white">
                          {experience.title}
                        </h3>
                        <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-muted-foreground dark:text-gray-400">
                          <div className="flex items-center gap-1">
                            <Building2 className="size-4" />
                            <span className="font-medium">
                              {experience.company}
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="size-4" />
                            <span>{experience.period}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="size-4" />
                            <span>{experience.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Achievements */}
                      <div className="space-y-3">
                        {experience.achievements.map(
                          (achievement, achievementIndex) => (
                            <motion.div
                              key={achievementIndex}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{
                                duration: 0.4,
                                delay: 0.1 * achievementIndex,
                              }}
                              viewport={{ once: true }}
                              className="flex items-start gap-3"
                            >
                              <ChevronRight className="mt-0.5 size-4 flex-shrink-0 text-primary" />
                              <p className="text-sm leading-relaxed text-muted-foreground dark:text-gray-300">
                                {achievement}
                              </p>
                            </motion.div>
                          ),
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden w-1/2 md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
