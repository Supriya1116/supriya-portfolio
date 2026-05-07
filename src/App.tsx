import React from "react";
import { motion } from "framer-motion";
// Simple local components (no shadcn dependency)
const Card = ({ children, className }: any) => (
  <div className={className}>{children}</div>
);

const CardContent = ({ children, className }: any) => (
  <div className={className}>{children}</div>
);

const Button = ({ children, className, ...props }: any) => (
  <button className={className} {...props}>{children}</button>
);

const skills = [
  "Python",
  "TypeScript",
  "JavaScript",
  "Java",
  "SQL",
  "AWS Glue",
  "AWS Lambda",
  "Step Functions",
  "S3",
  "CloudFormation",
  "Redshift",
  "Athena",
  "SQL Server",
  "SSIS",
  "SSMS",
  "BigQuery",
  "Power BI",
  "Azure DevOps",
  "GitHub",
  "Airflow",
  "MySQL",
  "MongoDB",
  "Neo4j",
  "Pega"
];

const impactMetrics = [
  { label: "Production systems", value: "AWS", detail: "Glue, Lambda, S3, Step Functions" },
  { label: "Students supported", value: "200+", detail: "per semester as GTA" },
  { label: "Pega credentials", value: "3", detail: "CSA, CSSA, CPDC" },
  { label: "Efficiency impact", value: "30%", detail: "improvement in prior web work" }
];

const highlights = [
  {
    icon: "SDLC",
    title: "End-to-end ownership",
    text: "Planning, design, development, testing, deployment, and production operations."
  },
  {
    icon: "AWS",
    title: "AWS data engineering",
    text: "Hands-on with Glue, Lambda, Step Functions, S3, Redshift, Athena, and CloudFormation."
  },
  {
    icon: "OPS",
    title: "Production reliability",
    text: "On-call support, pipeline monitoring, integration test stabilization, and operational ownership."
  },
  {
    icon: "ART",
    title: "Creative technologist",
    text: "A painter who brings visual thinking, creativity, and clean design instincts into engineering work."
  }
];

const projects = [
  {
    title: "Hosted Software Usage Pipeline Migration",
    eyebrow: "Amazon EC2 Spark Team",
    description:
      "Migrated hosted software usage reporting logic from Redshift to AWS Glue with S3-backed pipelines for Microsoft SQL Standard, SQL Enterprise, SQL Web, SUSE, RedHat, and Ubuntu Pro.",
    tags: ["AWS Glue", "S3", "Redshift", "Athena", "SDLC"]
  },
  {
    title: "Lambda Reporting Modernization",
    eyebrow: "Serverless Reporting",
    description:
      "Converting partner-team reporting workflows into Python-based AWS Lambda functions, reducing duplicate logic in SUSE reports and standardizing reporting automation.",
    tags: ["AWS Lambda", "Python", "S3", "Reporting"]
  },
  {
    title: "Lightswitch Integration Test Stabilization",
    eyebrow: "Reliability Engineering",
    description:
      "Fixed and stabilized integration tests for the Lightswitch application, improving deployment confidence and reliability for application workflows.",
    tags: ["Integration Testing", "Reliability", "Backend"]
  },
  {
    title: "ETL and Analytics Pipelines",
    eyebrow: "UPS Data Engineering",
    description:
      "Designed SQL Server and SSIS-based ETL pipelines, automated deployments through Azure DevOps, and supported Power BI dashboards for stakeholder reporting.",
    tags: ["SSIS", "SQL Server", "Power BI", "Azure DevOps"]
  }
];

const experience = [
  {
    role: "Software Development Engineer I",
    company: "Amazon - EC2 Spark Team",
    period: "Nov 2025 - Present",
    summary:
      "Building AWS data pipelines, reporting automation, integration test reliability, and production operations for EC2 Spark workflows.",
    bullets: [
      "Migrated reporting logic from Redshift to AWS Glue with S3-backed data processing.",
      "Built end-to-end pipelines for hosted software usage across Microsoft, SUSE, RedHat, and Ubuntu Pro vendors.",
      "Converted partner-team reporting workflows into Python AWS Lambda functions while reducing duplicate SUSE reporting logic.",
      "Fixed and stabilized integration tests for the Lightswitch application to improve reliability and deployment confidence.",
      "Participate in on-call rotation and operations work, monitoring pipelines and supporting production reliability."
    ]
  },
  {
    role: "Data Engineer",
    company: "UPS",
    period: "Jan 2024 - Nov 2025",
    summary:
      "Delivered SQL Server, SSIS, Power BI, Azure DevOps, and cloud analytics work across reporting and ETL systems.",
    bullets: [
      "Led end-to-end software development from requirements and architecture to implementation and post-deployment support.",
      "Designed and optimized complex T-SQL queries and stored procedures in SSMS for analytics and reporting.",
      "Created reusable SSIS templates with parameterized configurations for scalable ETL architecture.",
      "Configured Azure DevOps release pipelines to automate deployments of SSIS packages and database scripts.",
      "Built Power BI dashboards and leveraged BigQuery and cloud storage for scalable analytics workflows."
    ]
  },
  {
    role: "Graduate Teaching Assistant",
    company: "Georgia State University",
    period: "Jan 2022 - Dec 2023",
    summary:
      "Supported instruction across computer science fundamentals, programming, labs, and student mentoring.",
    bullets: [
      "Supported 200+ students per semester in Computer Organization, Programming, and Data Structures.",
      "Developed and graded tests, assignments, and labs while holding weekly office hours for coursework support."
    ]
  },
  {
    role: "Associate Business Analyst",
    company: "Infosys",
    period: "May 2019 - Jan 2022",
    summary:
      "Worked across Pega, databases, automation, web applications, and AWS-based deployment support.",
    bullets: [
      "Designed and optimized relational and NoSQL database solutions using MySQL and Neo4j.",
      "Automated workflows with Python and supported infrastructure operations to improve efficiency and reliability.",
      "Built and maintained web applications using JavaScript, CSS, PHP, and APIs, improving project efficiency by 30%.",
      "Contributed to AWS deployments using EC2, S3, and RDS for scalable cloud environments."
    ]
  }
];

const certifications = [
  "Certified Pega Decisioning Consultant (2021)",
  "Certified Pega Senior System Architect (2020)",
  "Certified Pega System Architect (2019)"
];

const creativeInterests = [
  "Painting",
  "Visual storytelling",
  "Creative problem solving",
  "Design-minded engineering"
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
};

function IconBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-400/15 text-xs font-bold tracking-wide text-blue-200">
      {children}
    </span>
  );
}

function runContentChecks() {
  const requiredSkills = ["AWS Glue", "AWS Lambda", "S3", "Pega"];
  const requiredSections = [experience, projects, certifications, creativeInterests];

  console.assert(requiredSkills.every((skill) => skills.includes(skill)), "Missing required skills");
  console.assert(requiredSections.every((section) => section.length > 0), "A portfolio section is empty");
  console.assert(experience[0].company.includes("EC2 Spark"), "Amazon EC2 Spark experience is missing");
  console.assert(highlights.every((item) => typeof item.icon === "string"), "Highlights should use local text icons only");
}

runContentChecks();

export default function PortfolioWebsite() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section id="top" className="relative min-h-screen overflow-hidden px-6 py-20 md:px-16 lg:px-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.28),transparent_34%),radial-gradient(circle_at_top_left,rgba(168,85,247,0.22),transparent_30%)]" />
        <div className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-10 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />
        <div className="absolute inset-x-0 top-0 z-10 border-b border-white/10 bg-slate-950/50 backdrop-blur-xl">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-0 py-4 text-sm text-slate-300">
            <a href="#top" className="font-semibold text-white">SP</a>
            <div className="hidden gap-6 md:flex">
              <a href="#work" className="hover:text-blue-300">Work</a>
              <a href="#experience" className="hover:text-blue-300">Experience</a>
              <a href="#tech" className="hover:text-blue-300">Tech</a>
              <a href="#contact" className="hover:text-blue-300">Contact</a>
            </div>
          </nav>
        </div>

        <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:items-center">
          {/* LEFT SIDE */}
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.7 }}>
            {/* Profile Photo */}
            <div className="mb-6 flex items-center gap-4">
              <div className="rounded-full bg-gradient-to-br from-blue-300 to-purple-300 p-[2px] shadow-lg shadow-blue-950/30">
                <img
                  src="/profile.jpg"
                  alt="Supriya Parvatham profile photo"
                  className="h-20 w-20 rounded-full border border-slate-950 object-cover"
                />
              </div>
              <div>
                <p className="text-3xl md:text-5xl font-bold tracking-tight">Supriya Parvatham</p>
                <p className="mt-1 text-sm md:text-base text-slate-400">Software Engineer</p>
              </div>
            </div>
            <p className="mb-5 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-slate-200 shadow-lg backdrop-blur">
              Software Development Engineer • AWS Data Pipelines • Creative Technologist
            </p>

            <h1 className="max-w-4xl text-3xl md:text-5xl font-semibold tracking-tight">
              Software engineer building <span className="bg-gradient-to-r from-blue-200 via-cyan-200 to-purple-200 bg-clip-text text-transparent">reliable cloud data systems</span>.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              I am Supriya Parvatham, an SDE on Amazon&apos;s EC2 Spark team. I build scalable AWS data pipelines, serverless reporting workflows, backend services, and reliable integrations across Glue, Lambda, S3, Redshift, Athena, and Step Functions. Outside engineering, I paint and bring a creative, design-minded lens to problem solving.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/resume.pdf" download aria-label="Download Supriya Parvatham resume">
                <Button className="rounded-2xl bg-blue-600 px-6 py-6 text-base shadow-lg shadow-blue-950/30 hover:bg-blue-500">
                  Download Resume
                </Button>
              </a>
              <a href="#work">
                <Button className="rounded-2xl px-6 py-6 text-base shadow-lg shadow-blue-950/30">
                  View Projects <span className="ml-2">↗</span>
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/supriya-p-731613178/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="rounded-2xl border-white/20 bg-white/5 px-6 py-6 text-base text-white hover:bg-white/10">
                  Contact Me
                </Button>
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-5 text-sm text-slate-300">
              <span>Bellevue / Redmond, WA</span>
              <span>supriyaparvatham116@gmail.com</span>
              <a href="https://www.linkedin.com/in/supriya-p-731613178/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 underline">LinkedIn</a>
              <span>GitHub</span>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.94, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }} className="lg:pt-14">
            <Card className="overflow-hidden rounded-[2rem] border-white/10 bg-white/10 shadow-2xl backdrop-blur">
              <CardContent className="p-0">
                <div className="border-b border-white/10 bg-white/[0.04] p-5">
                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400" />
                    <span className="h-3 w-3 rounded-full bg-green-400" />
                    <span className="ml-3">pipeline-overview.ts</span>
                  </div>
                </div>

                <div className="space-y-5 p-7">
                  <IconBadge>AWS</IconBadge>
                  <h2 className="text-2xl font-semibold text-white">Current focus</h2>
                  <div className="space-y-3 text-sm leading-7 text-slate-300">
                    <p><span className="text-blue-200">01.</span> Redshift to AWS Glue migration for hosted software usage reporting.</p>
                    <p><span className="text-blue-200">02.</span> Python Lambda reporting modernization with S3 inputs and outputs.</p>
                    <p><span className="text-blue-200">03.</span> Integration test reliability and on-call production operations.</p>
                  </div>
                  <div className="grid grid-cols-3 gap-3 pt-2 text-center">
                    <div className="rounded-2xl bg-white/10 p-4"><p className="font-bold text-blue-200">DATA</p><p className="mt-2 text-xs text-slate-300">Pipelines</p></div>
                    <div className="rounded-2xl bg-white/10 p-4"><p className="font-bold text-blue-200">AWS</p><p className="mt-2 text-xs text-slate-300">Cloud</p></div>
                    <div className="rounded-2xl bg-white/10 p-4"><p className="font-bold text-blue-200">API</p><p className="mt-2 text-xs text-slate-300">Backend</p></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="px-6 pb-10 md:px-16 lg:px-28">
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-4">
          {impactMetrics.map((metric, index) => (
            <motion.div key={metric.label} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.45, delay: index * 0.06 }}>
              <Card className="rounded-3xl border-white/10 bg-white/[0.06] text-white">
                <CardContent className="p-5">
                  <p className="text-3xl font-bold text-blue-200">{metric.value}</p>
                  <p className="mt-2 text-sm font-medium text-white">{metric.label}</p>
                  <p className="mt-1 text-xs text-slate-400">{metric.detail}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-6 py-12 md:px-16 lg:px-28">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-4">
          {highlights.map((item, index) => (
            <motion.div key={item.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.5, delay: index * 0.08 }}>
              <Card className="h-full rounded-3xl border-white/10 bg-white/[0.06] text-white transition hover:-translate-y-1 hover:bg-white/[0.09]">
                <CardContent className="p-6">
                  <div className="mb-4"><IconBadge>{item.icon}</IconBadge></div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-300">{item.text}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="experience" className="px-6 py-16 md:px-16 lg:px-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8">
            <div className="mb-3 flex items-center gap-3 text-blue-300">
              <IconBadge>EXP</IconBadge>
              <p className="text-sm font-semibold uppercase tracking-[0.25em]">Experience</p>
            </div>
            <h2 className="text-3xl font-bold md:text-4xl">Engineering timeline</h2>
          </div>

          <div className="relative grid gap-6">
            <div className="absolute left-4 top-3 hidden h-[calc(100%-1rem)] w-px bg-white/10 md:block" />
            {experience.map((item, index) => (
              <motion.div key={item.role + item.company} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.5, delay: index * 0.06 }} className="relative md:pl-12">
                <div className="absolute left-[9px] top-8 hidden h-3 w-3 rounded-full bg-blue-300 shadow-[0_0_0_6px_rgba(96,165,250,0.12)] md:block" />
                <Card className="rounded-3xl border-white/10 bg-white/[0.06] text-white transition hover:bg-white/[0.08]">
                  <CardContent className="p-6">
                    <div className="flex flex-col justify-between gap-2 md:flex-row md:items-start">
                      <div>
                        <h3 className="text-xl font-semibold">{item.role}</h3>
                        <p className="text-blue-200">{item.company}</p>
                      </div>
                      <p className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-300">{item.period}</p>
                    </div>
                    <p className="mt-4 rounded-2xl bg-blue-400/10 p-4 leading-7 text-blue-50">{item.summary}</p>
                    <ul className="mt-5 space-y-3 text-slate-300">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3 leading-7">
                          <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-300" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="px-6 py-16 md:px-16 lg:px-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex items-center gap-3 text-blue-300">
            <IconBadge>WORK</IconBadge>
            <p className="text-sm font-semibold uppercase tracking-[0.25em]">Selected work</p>
          </div>
          <h2 className="mb-8 text-3xl font-bold md:text-4xl">Projects that show ownership</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <motion.div key={project.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.5, delay: index * 0.08 }}>
                <Card className="group h-full rounded-3xl border-white/10 bg-white/[0.06] text-white transition hover:-translate-y-1 hover:bg-white/[0.09]">
                  <CardContent className="p-6">
                    <div className="mb-5 flex items-start justify-between gap-4">
                      <div>
                        <p className="mb-2 text-sm font-medium text-blue-200">{project.eyebrow}</p>
                        <h3 className="text-xl font-semibold">{project.title}</h3>
                      </div>
                      <span className="text-slate-400 transition group-hover:text-blue-200">↗</span>
                    </div>
                    <p className="leading-7 text-slate-300">{project.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="rounded-full bg-blue-400/10 px-3 py-1 text-xs text-blue-200">{tag}</span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="tech" className="px-6 py-16 md:px-16 lg:px-28">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <Card className="rounded-3xl border-white/10 bg-white/[0.06] text-white">
            <CardContent className="p-8">
              <div className="mb-4 flex items-center gap-3"><IconBadge>TECH</IconBadge><h2 className="text-2xl font-bold">Tech Stack</h2></div>
              <p className="leading-7 text-slate-300">Tools and platforms I use across backend engineering, cloud data pipelines, reporting, and enterprise systems.</p>
            </CardContent>
          </Card>
          <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-8">
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span key={skill} className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-slate-200 transition hover:border-blue-300/40 hover:bg-blue-400/10 hover:text-blue-100">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-16 lg:px-28">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/10 bg-white/[0.06] p-8">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <div className="mb-4 flex items-center gap-3 text-blue-300"><IconBadge>ART</IconBadge><p className="text-sm font-semibold uppercase tracking-[0.25em]">Creative side</p></div>
              <h2 className="text-3xl font-bold md:text-4xl">Engineering with an artist&apos;s eye.</h2>
              <p className="mt-4 leading-7 text-slate-300">
                I paint and love all things creative. That creative side shows up in how I approach engineering: simplifying complex systems, designing cleaner workflows, and turning messy ideas into thoughtful, usable solutions.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {creativeInterests.map((interest) => (
                <div key={interest} className="rounded-2xl border border-white/10 bg-white/10 p-4 text-slate-200">
                  <span className="mb-3 block text-blue-200">✦</span>
                  {interest}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-16 lg:px-28">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3">
          <Card className="rounded-3xl border-white/10 bg-white/[0.06] text-white">
            <CardContent className="p-6">
              <div className="mb-4 flex items-center gap-3"><IconBadge>CERT</IconBadge><h2 className="text-2xl font-bold">Certifications</h2></div>
              <ul className="space-y-3 text-slate-300">
                {certifications.map((cert) => (
                  <li key={cert} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-300" />{cert}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="rounded-3xl border-white/10 bg-white/[0.06] text-white">
            <CardContent className="p-6">
              <div className="mb-4 flex items-center gap-3"><IconBadge>EDU</IconBadge><h2 className="text-2xl font-bold">Education</h2></div>
              <p className="font-semibold">M.S. in Computer Science</p>
              <p className="text-slate-300">Georgia State University • GPA 3.9/4.0</p>
              <p className="mt-4 font-semibold">B.S. in Computer Science</p>
              <p className="text-slate-300">K L University • GPA 4.0/4.0</p>
            </CardContent>
          </Card>

          <Card className="rounded-3xl border-white/10 bg-white/[0.06] text-white">
            <CardContent className="p-6">
              <div className="mb-4 flex items-center gap-3"><IconBadge>FOCUS</IconBadge><h2 className="text-2xl font-bold">Focus Areas</h2></div>
              <p className="leading-7 text-slate-300">
                Cloud data engineering, serverless reporting automation, ETL design, SQL optimization, test reliability, BI enablement, Pega systems, production operations, and creative problem solving.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contact" className="px-6 pb-20 md:px-16 lg:px-28">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/10 bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-8 text-center shadow-2xl">
          <h2 className="text-3xl font-bold">Let&apos;s build reliable data systems.</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">
            Open to backend, data engineering, cloud platform, and enterprise systems opportunities where ownership, reliability, scalable design, and creative problem solving matter.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href="https://www.linkedin.com/in/supriya-p-731613178/" target="_blank" rel="noopener noreferrer">
              <Button className="rounded-2xl px-6 py-6 text-base">Get in touch</Button>
            </a>
            <a href="https://www.linkedin.com/in/supriya-p-731613178/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="rounded-2xl border-white/20 bg-white/5 px-6 py-6 text-base text-white hover:bg-white/10">LinkedIn</Button>
            </a>
            <a href="/resume.pdf" download>
              <Button variant="outline" className="rounded-2xl border-white/20 bg-white/5 px-6 py-6 text-base text-white hover:bg-white/10">Resume</Button>
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-10 text-center text-sm text-slate-400">
        © 2026 Supriya Parvatham. Built with React, Tailwind CSS, and production-minded storytelling.
      </footer>
    </main>
  );
}
