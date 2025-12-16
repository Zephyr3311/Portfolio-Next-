import { type ExperienceShowcaseListItemProps } from "@/components/experience/experience-showcase-list-item";

export const EXPERIENCE: ExperienceShowcaseListItemProps[] = [
  {
    title: "Senior Backend Deveoper",
    date: "04/2022 - 12/2022",
    location: "Santa Monica",
    description: `- Maintained an application's back-end nodes in Python and C++ to book train tickets in multiple providers.
- Implemented new back-end nodes in Python for storing data in MongoDB and made them accessible through a REST API.
- Performed a functional and technical analysis of new features to be implemented in the Python backends.`,
  },
  {
    title: "Senior Frontend Deveoper",
    date: "12/2022 - 09/2023",
    location: "Santa Monica",
    description: `- Improved time loading speed, refactoring some queries only to fetch needed data, minimized rendering overhead, and reduced initial page load times using the code split technique.
- Consistently worked closely with the CTO to craft the optimal user experience and gain a deeper understanding of the product's requirements.
- Worked in a fast-paced work environment, efficiently utilizing a Kanban board to track bugs and features. Demonstrated an unwavering commitment to meeting deadlines, consistently delivering tasks promptly, and ensuring seamless project execution.
- Contributed to elevated code quality by serving as a code reviewer, ensuring robust and efficient solutions for the company.`,
  },
  {
    title: "Web3 and blockchain Developer",
    date: "09/2023 - 11/2024",
    location: "Remote",
    description: `- Developed a crypto payment streaming system to enable real-time token transfers for user subscriptions and purchases, enhancing transaction efficiency and platform scalability.
- Created a dynamic deposit status tracker using React and ethers.js, allowing users to monitor incoming cryptocurrencies (ETH, TRON, BTC, USDC, USDT, etc.) with real- time updates via WebSockets and event listeners.
- Improved the user experience by reducing confusion around deposit confirmations, leading to a 40% decrease in support tickets related to payment issues.
- Built backend services with Node.js and Express to index blockchain events and cache user transaction states using Redis, increasing status retrieval speed by 60%.`,
  },
  {
    title: "Senior Software Engineer",
    date: "11/2024 - Present",
    location: "Remote",
    description: `- Led the dev team with CTO to build a distributed ticket booking system and admin dashboard using Next.js for frontend and NestJS for backend with Typescript. 
- Built secure user and admin portals with JWT-based authentication, impersonation features, and role-based access control.
- Integrated Redis for caching frequently accessed data (event listings, seat availability), reducing query latency by 45% and significantly enhancing real-time performance.
- Developed a dynamic, mobile-friendly frontend with Next.js, including animated dashboards, multi-step checkout, and QR code-based ticket scanning using rotating TOTP tokens.`,
  },
];
