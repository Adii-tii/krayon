// Fullstack Pathway Shared Dataset
const PATHWAY_DATA = [
  {
    id: "git-github",
    title: "Git & GitHub",
    description: "Version control and collaborative workflow foundation.",
    icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>`,
    categories: [
      {
        id: "git-basics",
        title: "Git Basics",
        shortDesc: "Understand the core concepts of distributed version control systems.",
        fullDesc: "Learn how to manage source code history locally. Master the tracking of code changes, reverting to previous states, and ignoring temporary files.",
        topics: [
          { name: "Version Control (Why Git?)", detail: "Centralized vs Distributed version control, history tracking, and safety from code loss." },
          { name: "Repository (Local & Remote)", detail: "Understanding directory structures, the hidden .git folder, and tracking working files." },
          { name: "init, clone, add, commit", detail: "Initializing code bases, downloading remote repos, staging modifications, and saving snapshots with messages." },
          { name: "status, log, diff", detail: "Checking state changes, viewing historical commits, and comparing line-by-line file differences." },
          { name: ".gitignore", detail: "Excluding compile artifacts, system configuration files, node_modules, and environment variables from history." }
        ]
      },
      {
        id: "branching",
        title: "Branching",
        shortDesc: "Work on isolated streams of code without affecting production.",
        fullDesc: "Isolate feature development, hotfixes, and experiments. Learn strategies for merging code streams together, rebasing commits, and resolving code overrides.",
        topics: [
          { name: "Create & Switch Branches", detail: "Command tools like git branch, switch, and checkout to control isolated pointers." },
          { name: "Merge Branches", detail: "Combining histories with fast-forward, three-way merge commits, and keeping code unified." },
          { name: "Resolve Merge Conflicts", detail: "Identifying marker lines, comparing differences, and selecting correct code states manually." },
          { name: "Rebase (Basics)", detail: "Applying local commits on top of another base tip for linear, cleaner histories." }
        ]
      },
      {
        id: "remote-repos",
        title: "Remote Repositories",
        shortDesc: "Sync local source code and collaborate with external teams.",
        fullDesc: "Establish centralized collaboration on platforms like GitHub. Master syncing mechanisms, checking online progress, and managing directory differences.",
        topics: [
          { name: "GitHub Repositories", detail: "Creating remote repositories, setting up SSH keys, and managing access permissions." },
          { name: "Remote Origin", detail: "Managing alias names pointing to cloud servers (git remote add/remove)." },
          { name: "Push & Pull", detail: "Uploading local history chunks and downloading/merging remote code changes directly." },
          { name: "Fetch", detail: "Downloading remote branch metadata to inspect updates locally without merging immediately." },
          { name: "Fork vs Clone", detail: "Copying a public repository to your personal space vs. downloading a repository copy locally." }
        ]
      },
      {
        id: "pull-requests",
        title: "Pull Requests (PRs)",
        shortDesc: "The core mechanism for peer reviews and code quality gates.",
        fullDesc: "Create proposals for merging codebase modifications. Leverage review flows, comment threads, automation validation triggers, and task trackers.",
        topics: [
          { name: "Create PR", detail: "Drafting pull requests with descriptions, linked issues, and specifying base/compare branches." },
          { name: "Code Reviews", detail: "Reviewing code line-by-line, requesting changes, leaving comments, and giving approvals." },
          { name: "Merge Strategies", detail: "Using standard merge, squash and merge (clean history), and rebase merge options." },
          { name: "GitHub Issues (Basics)", detail: "Tracking bugs, features, and chores using tickets linked directly to pull requests." }
        ]
      }
    ]
  },
  {
    id: "frontend",
    title: "Frontend",
    description: "Crafting beautiful, accessible, and performant user interfaces.",
    icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>`,
    categories: [
      {
        id: "html-css",
        title: "HTML / CSS",
        shortDesc: "The fundamentals of visual layout and semantic page structures.",
        fullDesc: "Master HTML5 tags for semantic accessibility, and CSS layout engines to control sizing, alignment, animations, and media breakpoints.",
        topics: [
          { name: "Semantic HTML", detail: "Using tags like <main>, <article>, <nav> for screen readers and SEO optimization." },
          { name: "Forms & Validation", detail: "Inputs, textareas, drop-downs, submit validation rules, and client-side feedback." },
          { name: "Accessibility Basics", detail: "Understanding WCAG guidelines, ARIA attributes, color contrasts, and keyboard navigability." },
          { name: "CSS Box Model", detail: "Content box sizing, padding, borders, margins, and the border-box sizing standard." },
          { name: "Flexbox & Grid", detail: "One-dimensional and two-dimensional layout engines for advanced component grids and structures." },
          { name: "Responsive Design & Media Queries", detail: "Adapting content widths for mobile, tablet, and widescreen displays smoothly." },
          { name: "Animations & Transitions", detail: "Transform transitions, keyframe animation flows, and subtle interactive micro-effects." }
        ]
      },
      {
        id: "tailwind-css",
        title: "Tailwind CSS",
        shortDesc: "Modern utility-first CSS framework for rapid interface engineering.",
        fullDesc: "Build interfaces directly in code structure using micro-utility styles. Customize layouts, hover/focus events, media queries, and global themes.",
        topics: [
          { name: "Utility Classes", detail: "Styling elements on the fly with responsive and interactive CSS shorthands." },
          { name: "Responsive Design", detail: "Prefix modifiers (sm:, md:, lg:, xl:) to toggle layout states easily." },
          { name: "Layouts & Flex/Grid", detail: "Leveraging flex-col, grid-cols-N, and alignment tools within HTML templates." },
          { name: "Components & Reuse", detail: "Bundling styles with @apply directives or React component properties." },
          { name: "Custom Themes", detail: "Configuring custom colors, fonts, margins, and animations in tailwind.config.js." }
        ]
      },
      {
        id: "javascript",
        title: "JavaScript",
        shortDesc: "The functional engine enabling complex interactive experiences.",
        fullDesc: "Understand execution contexts, variable scopes, functional syntax, event processing, asynchronous pipelines, and modules.",
        topics: [
          { name: "Variables & Data Types", detail: "Comparing let, const, primitive types (String, Number, Boolean) vs references." },
          { name: "Operators & Functions", detail: "Logical selectors, arrow expressions, scope binding, and closure parameters." },
          { name: "Objects & Arrays", detail: "Iterators (map, filter, reduce), key pairings, and destructuring constructs." },
          { name: "Loops & DOM Manipulation", detail: "Dynamic UI modifications, traversing DOM nodes, and querying selectors." },
          { name: "Events & Listeners", detail: "Interactions, event delegation patterns, bubbles, and custom triggers." },
          { name: "ES6+ Standards", detail: "Template literals, spread operators, optional chaining, and nullish operators." },
          { name: "Async JS, Promises, Async/Await", detail: "Managing async tasks, fetch pipelines, task queues, and error try-catch blocks." },
          { name: "Modules", detail: "Separating code using ES modules (import / export statements)." }
        ]
      },
      {
        id: "react",
        title: "React",
        shortDesc: "A declarative component-driven framework for modern single-page apps.",
        fullDesc: "Deconstruct dynamic user interfaces into logical units. Manage props distribution, state, reactivity engines, performance loops, and API connections.",
        topics: [
          { name: "Components & JSX", detail: "Functional code structures returning React markup elements in Javascript files." },
          { name: "Props vs State", detail: "Immutable component inputs passed from parents vs. mutable internal state registers." },
          { name: "React Hooks", detail: "Managing state (useState), effects (useEffect), references (useRef), and memoization structures." },
          { name: "Context API", detail: "Sharing values across nested components without manual prop-drilling." },
          { name: "Lifecycle & Effects", detail: "Managing mounting states, update loops, and cleanup actions (e.g., closing listeners)." },
          { name: "API Calls", detail: "Integrating external data using native fetch or client libraries inside effect flows." },
          { name: "Performance Basics", detail: "Preventing unnecessary re-renders with memo, useMemo, and useCallback." }
        ]
      },
      {
        id: "state-management",
        title: "State Management",
        shortDesc: "Centralizing complex data models for reliable application workflows.",
        fullDesc: "Manage complex component coordination. Choose context providers, robust Redux Toolkit structures, or lightweight state managers.",
        topics: [
          { name: "Context API", detail: "React's native state sharing solution, ideal for simple configurations and settings." },
          { name: "Redux Toolkit", detail: "Standard store architecture with predictable state containers, slices, and middleware hooks." },
          { name: "Zustand (Optional)", detail: "Minimalist, hook-based state container that bypasses bulky boilerplate architectures." }
        ]
      },
      {
        id: "routing",
        title: "Routing",
        shortDesc: "Manage client-side browser navigation and path structures.",
        fullDesc: "Setup browser path tracking without page reloads. Control route structures, parameters, nested views, and route security gates.",
        topics: [
          { name: "React Router", detail: "Modern router engine mapping page views directly to browser search-bar endpoints." },
          { name: "Dynamic Routes", detail: "Configuring parameters like '/product/:id' to serve detail views dynamically." },
          { name: "Nested Routes & Layouts", detail: "Nesting child views inside shared container components (Outlets)." },
          { name: "Protected Routes", detail: "Restricting routes to authenticated users based on token validation states." }
        ]
      },
      {
        id: "ui-libraries",
        title: "UI Libraries & Tooling",
        shortDesc: "Standardized styling modules and validation tooling.",
        fullDesc: "Accelerate development using accessible component libraries, schema-based client-side form managers, and bundle configurations.",
        topics: [
          { name: "Material UI / Shadcn", detail: "Modular custom component kits designed for high-end styling controls." },
          { name: "React Hook Form", detail: "Lightweight form controller minimizing component updates and managing state validations." },
          { name: "Zod Validation", detail: "Defining schema validation shapes for checking raw inputs prior to submission." },
          { name: "Vite (Build Tool)", detail: "Ultra-fast modern development server and production bundler using ES modules." }
        ]
      }
    ]
  },
  {
    id: "backend",
    title: "Backend",
    description: "Designing server logic, secure databases, APIs, and real-time gateways.",
    icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path></svg>`,
    categories: [
      {
        id: "nodejs",
        title: "Node.js",
        shortDesc: "Server-side JavaScript environment driven by asynchronous events.",
        fullDesc: "Deploy Javascript on servers. Understand the non-blocking I/O loop, system file interfaces, memory streams, and package managers.",
        topics: [
          { name: "Event Loop", detail: "Asynchronous, single-threaded processing loop handling execution, timers, and callbacks." },
          { name: "Modules & CommonJS/ESM", detail: "Importing and organizing files using require statements or ES import configurations." },
          { name: "File System (FS)", detail: "Interacting with host paths, reading files, and writing directories asynchronously." },
          { name: "Streams & Buffers", detail: "Reading and processing large file chunks sequentially without overloading memory." },
          { name: "HTTP Module", detail: "Building raw web servers from scratch inside the Node ecosystem." },
          { name: "Environment Variables", detail: "Isolating secret API credentials and configs from codebases (process.env)." },
          { name: "npm (Node Package Manager)", detail: "Publishing and downloading modular external packages to accelerate code builds." }
        ]
      },
      {
        id: "expressjs",
        title: "Express.js",
        shortDesc: "The minimal and flexible web application framework for Node.",
        fullDesc: "Build scalable API servers using routing trees, request filters, middleware chains, controller models, and error handlers.",
        topics: [
          { name: "Server Setup & Routing", detail: "Creating API endpoints mapping HTTP verbs (GET, POST) to functions." },
          { name: "Middleware Chains", detail: "Functions executing during request-response cycles to validate, log, or restrict access." },
          { name: "MVC Architecture", detail: "Structuring servers into Models (data), Views (UI), and Controllers (business logic)." },
          { name: "Controllers", detail: "Organizing logic controllers to process HTTP inputs and direct responses." },
          { name: "Error Handling", detail: "Implementing global catch blocks to handle crashes cleanly without exposing stacks." }
        ]
      },
      {
        id: "databases",
        title: "Databases",
        shortDesc: "Architecting relational schemas and flexible document models.",
        fullDesc: "Persist app states. Design schemas, run queries, connect indices to speed up reads, and configure ORM pipelines.",
        topics: [
          { name: "SQL (Relational Databases)", detail: "Structured queries, schemas, database relationships, indexes, joins, and transactions." },
          { name: "MongoDB (NoSQL Document Store)", detail: "Unstructured JSON documents, collection grouping, lookup stages, and aggregation pipelines." },
          { name: "ORM / ODM (Prisma & Mongoose)", detail: "Interfacing code directly with databases using type-safe queries and object mapping models." }
        ]
      },
      {
        id: "authentication",
        title: "Authentication",
        shortDesc: "Managing user sessions, authorization keys, and access matrices.",
        fullDesc: "Verify user identities. Securely hash passwords, manage JWT tokens, install refresh mechanisms, and configure Role-Based Access Control.",
        topics: [
          { name: "bcrypt Password Hashing", detail: "Converting passwords into hashed outputs containing salts to block rainbow tables." },
          { name: "JWT (JSON Web Tokens)", detail: "Stateless base64 authorization strings for secure server identification." },
          { name: "Cookies & Sessions", detail: "Stateful user sessions recorded on server memories and saved securely in clients." },
          { name: "OAuth Protocols", detail: "Integrating external logins like Google, GitHub, or Discord into applications." },
          { name: "Refresh Tokens", detail: "Issuing short-lived access credentials combined with secure long-lived refresh tokens." },
          { name: "Role-Based Access Control (RBAC)", detail: "Managing authorization tiers (e.g., user vs moderator vs admin) across endpoints." }
        ]
      },
      {
        id: "api-development",
        title: "API Development",
        shortDesc: "Creating scalable, standardized services for client connections.",
        fullDesc: "Implement REST patterns, handle parameters, setup data validation blocks, document structures using Swagger, and run API tests.",
        topics: [
          { name: "REST Principles", detail: "Designing clean API architectures mapping endpoints to resources using standard actions." },
          { name: "Query Params, Pagination, Filtering", detail: "Restricting returned database record arrays for quick response delivery." },
          { name: "Input Validation", detail: "Screening request formats, headers, and body shapes before running database operations." },
          { name: "Swagger / OpenAPI Documentation", detail: "Designing self-documenting JSON schemas detailing all API outputs." },
          { name: "Postman Testing", detail: "Designing collection sets to simulate client requests and verify endpoint integrations." }
        ]
      },
      {
        id: "security-optimizations",
        title: "Security & Optimizations",
        shortDesc: "Hardening endpoints against vulnerabilities and caching queries.",
        fullDesc: "Safeguard servers against malicious attacks. Master rate limits, prevent injection vectors, and integrate memory caching for database optimization.",
        topics: [
          { name: "CORS (Cross-Origin Resource Sharing)", detail: "Configuring server headers to allow or block browser data requests from other domains." },
          { name: "Helmet Middleware", detail: "Setting secure HTTP response headers to defend against script insertions." },
          { name: "Rate Limiting", detail: "Restricting request quantities per client IP address to prevent brute force attacks." },
          { name: "SQL & NoSQL Injection Protection", detail: "Sanitizing incoming queries to block malicious script injections." },
          { name: "XSS & CSRF Mitigation", detail: "Blocking external cross-site scripting injections and request forge attempts." },
          { name: "Redis Caching", detail: "Saving frequent database outputs in RAM for rapid sub-millisecond retrievals." },
          { name: "Logging & Monitoring", detail: "Tracing errors using logger suites (e.g., Winston) to record performance analytics." }
        ]
      },
      {
        id: "websockets",
        title: "WebSockets",
        shortDesc: "Bi-directional real-time communication sockets.",
        fullDesc: "Open persistent, full-duplex TCP connections. Broadcast server notifications, design room groupings, and support chat architectures.",
        topics: [
          { name: "Socket.IO", detail: "Client-server abstraction library for WebSocket connections with fallback options." },
          { name: "Real-time Communication", detail: "Streaming updates instantly without HTTP polling." },
          { name: "Rooms & Events", detail: "Segmenting clients into isolated channels (e.g., specific chat rooms) and emitting custom payloads." },
          { name: "Notifications", detail: "Pushing alerts directly to connected user clients in real-time." }
        ]
      }
    ]
  },
  {
    id: "devops-deployment",
    title: "DevOps / Deployment",
    description: "Orchestrating container setups, host controls, automated pipelines, and cloud instances.",
    icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>`,
    categories: [
      {
        id: "linux-basics",
        title: "Linux Basics",
        shortDesc: "Command line operations, file control, and remote access systems.",
        fullDesc: "Understand server hosts. Control files, set permission matrices, run terminal pipes, configure daemons, and establish secure shell channels.",
        topics: [
          { name: "File System Structure", detail: "Understanding key directories like /etc (config), /var/log (logs), and root pathways." },
          { name: "Permissions (chmod, chown)", detail: "Configuring read, write, and execute permissions on directories and files." },
          { name: "Common Commands", detail: "Terminal command navigation (ls, cd, mkdir, cat, grep, tail, nano, vim)." },
          { name: "Process Management", detail: "Viewing running system memory processes (ps, top, htop, kill commands)." },
          { name: "SSH (Secure Shell)", detail: "Setting public-private keys to access remote machines securely." }
        ]
      },
      {
        id: "docker",
        title: "Docker",
        shortDesc: "Packaging code, system libraries, and rtimes into containers.",
        fullDesc: "Eliminate 'it works on my machine' issues. Author Dockerfiles, build modular images, connect private networks, and compose multi-service app stacks.",
        topics: [
          { name: "Docker Images & Containers", detail: "Packaging code vs executing sandboxed environments locally." },
          { name: "Dockerfile Configurations", detail: "Creating blueprints defining baseline images, commands, and open port structures." },
          { name: "Docker Compose", detail: "Declaring and running multi-container applications (e.g., Node server + MongoDB + Redis) using a single YAML script." },
          { name: "Volumes & Networks", detail: "Persisting container data states and linking virtual networks for safe container communication." }
        ]
      },
      {
        id: "deployment",
        title: "Deployment",
        shortDesc: "Publishing local applications to production servers.",
        fullDesc: "Configure environments for user access. Install reverse proxies, automate restart daemons, provision secure HTTPS domains, and host builds.",
        topics: [
          { name: "Environment Variables", detail: "Isolating production database URLs and tokens within secure host configs." },
          { name: "Build & Production Bundles", detail: "Optimizing codes, compiling assets, and starting node clusters." },
          { name: "Domains & HTTPS (SSL)", detail: "Connecting custom domain structures, setting up DNS records, and generating Let's Encrypt certificates." },
          { name: "Nginx (Basics)", detail: "Using high-performance HTTP servers as reverse proxies, load balancers, and static file routers." },
          { name: "PM2 Process Manager", detail: "Managing node application daemons to keep processes alive, handle restarts, and monitor resource loads." }
        ]
      },
      {
        id: "ci-cd",
        title: "CI/CD",
        shortDesc: "Automating validation tests and deployment schedules.",
        fullDesc: "Link version control commits to execution flows. Trigger automated checks on push/PR actions, and deploy automatically on successful builds.",
        topics: [
          { name: "GitHub Actions", detail: "Creating custom automation workflows using YAML specifications inside repositories." },
          { name: "Build Pipeline", detail: "Triggering automated lints, compilations, and tests to protect main branch code quality." },
          { name: "Automated Deployment", detail: "Pushing verified builds to host servers or container platforms automatically." }
        ]
      },
      {
        id: "cloud",
        title: "Cloud Services",
        shortDesc: "Leveraging cloud computing instances and simple hosting platforms.",
        fullDesc: "Compare cloud systems. Provision remote servers, utilize cloud asset stores, and leverage simple serverless deployment providers.",
        topics: [
          { name: "AWS Basics", detail: "Introduction to major services of Amazon Web Services (EC2, S3, IAM)." },
          { name: "EC2 Instances", detail: "Configuring raw virtual server spaces in the cloud for custom configurations." },
          { name: "S3 Storage", detail: "Storing application static assets, image uploads, and static builds in secure cloud buckets." },
          { name: "IAM (Identity & Access)", detail: "Creating fine-grained security permissions for system operations." },
          { name: "Vercel / Render / Railway", detail: "Deploying applications directly from GitHub using managed zero-config cloud hostings." }
        ]
      }
    ]
  }
];
