// // components/Footer.tsx
// import Link from "next/link";

// export default function Footer() {
//   const currentYear = new Date().getFullYear();

//   const gameCategories = [
//     { name: "Action Games", href: "/games/action" },
//     { name: "Adventure Games", href: "/games/adventure" },
//     { name: "Puzzle Games", href: "/games/puzzle" },
//     { name: "Sports Games", href: "/games/sports" },
//     { name: "Multiplayer Games", href: "/games/multiplayer" },
//     { name: "Strategy Games", href: "/games/strategy" },
//   ];

//   const companyLinks = [
//     { name: "About Us", href: "/about" },
//     { name: "Contact", href: "/contact" },
//     { name: "Careers", href: "/careers" },
//     { name: "Blog", href: "/blog" },
//     { name: "Press", href: "/press" },
//   ];

//   const legalLinks = [
//     { name: "Terms of Service", href: "/terms" },
//     { name: "Privacy Policy", href: "/privacy" },
//     { name: "Cookie Policy", href: "/cookies" },
//     { name: "DMCA", href: "/dmca" },
//     { name: "GDPR", href: "/gdpr" },
//   ];

//   return (
//     <footer className="bg-gray-900 text-gray-300 mt-auto">
//       <div className="container mx-auto px-4 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {/* Game Categories */}
//           <div>
//             <h3 className="text-white font-bold text-lg mb-4">Game Categories</h3>
//             <ul className="space-y-2">
//               {gameCategories.map((category) => (
//                 <li key={category.name}>
//                   <Link
//                     href={category.href}
//                     className="hover:text-white transition-colors"
//                     aria-label={`Browse ${category.name}`}
//                   >
//                     {category.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Company Links */}
//           <div>
//             <h3 className="text-white font-bold text-lg mb-4">Company</h3>
//             <ul className="space-y-2">
//               {companyLinks.map((link) => (
//                 <li key={link.name}>
//                   <Link
//                     href={link.href}
//                     className="hover:text-white transition-colors"
//                     aria-label={`View ${link.name}`}
//                   >
//                     {link.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Legal Links */}
//           <div>
//             <h3 className="text-white font-bold text-lg mb-4">Legal</h3>
//             <ul className="space-y-2">
//               {legalLinks.map((link) => (
//                 <li key={link.name}>
//                   <Link
//                     href={link.href}
//                     className="hover:text-white transition-colors"
//                     aria-label={`View ${link.name}`}
//                   >
//                     {link.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* SEO Rich Text Section */}
//           <div>
//             <h3 className="text-white font-bold text-lg mb-4">About gameToworld</h3>
//             <p className="mb-4">
//               gameToworld is your premier destination for free online games. Play thousands
//               of high-quality HTML5 games in your browser with no downloads required.
//             </p>
//             <p className="mb-4">
//               Our collection includes action games, adventure games, puzzle games,
//               sports games, and multiplayer games updated daily.
//             </p>
//             <div className="flex space-x-4">
//               <Link
//                 href="/sitemap"
//                 className="text-blue-400 hover:underline"
//                 aria-label="View our sitemap"
//               >
//                 Sitemap
//               </Link>
//             </div>
//           </div>
//         </div>

//         {/* Copyright and Social */}
//         <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
//           <div className="mb-4 md:mb-0">
//             <p>&copy; {currentYear} gameToworld. All rights reserved.</p>
//           </div>
//           <div className="flex space-x-6">
//             <Link
//               href="https://twitter.com/gameToworld"
//               aria-label="Follow us on Twitter"
//               className="hover:text-white transition-colors"
//             >
//               <span className="sr-only">Twitter</span>
//               <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
//               </svg>
//             </Link>
//             <Link
//               href="https://facebook.com/gameToworld"
//               aria-label="Follow us on Facebook"
//               className="hover:text-white transition-colors"
//             >
//               <span className="sr-only">Facebook</span>
//               <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
//                 <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
//               </svg>
//             </Link>
//             <Link
//               href="https://instagram.com/gameToworld"
//               aria-label="Follow us on Instagram"
//               className="hover:text-white transition-colors"
//             >
//               <span className="sr-only">Instagram</span>
//               <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
//                 <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
//               </svg>
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Structured Data for SEO */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "WebSite",
//             "name": "gameToworld",
//             "url": "https://gameToworld.com",
//             "potentialAction": {
//               "@type": "SearchAction",
//               "target": "https://gameToworld.com/search?q={search_term_string}",
//               "query-input": "required name=search_term_string"
//             }
//           })
//         }}
//       />
//     </footer>
//   );
// }

// components/Footer.tsx
"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  FaSearch, 
  FaDiscord, 
  FaTwitter, 
  FaTwitch, 
  FaYoutube, 
  FaHeadset, 
  FaGamepad,
  FaChessKnight,
  FaRunning,
  FaCarCrash,
  FaPuzzlePiece
} from "react-icons/fa";
import { GiPistolGun, GiPlatform, GiSoccerBall, GiBrain, GiJoystick } from "react-icons/gi";

const Footer = () => {
  const categories = [
    {
      id: "all",
      name: "All Games",
      icon: <FaGamepad className="text-lg" />,
      color: "bg-gradient-to-r from-purple-500 to-indigo-600"
    },
    {
      id: "action",
      name: "Action",
      icon: <GiPistolGun className="text-lg" />,
      color: "bg-gradient-to-r from-red-500 to-orange-500"
    },
    {
      id: "adventure",
      name: "Adventure",
      icon: <GiPlatform className="text-lg" />,
      color: "bg-gradient-to-r from-green-500 to-teal-500"
    },
    {
      id: "sports",
      name: "Sports",
      icon: <GiSoccerBall className="text-lg" />,
      color: "bg-gradient-to-r from-blue-500 to-cyan-500"
    },
    {
      id: "racing",
      name: "Racing",
      icon: <FaCarCrash className="text-lg" />,
      color: "bg-gradient-to-r from-yellow-500 to-amber-500"
    },
    {
      id: "puzzle",
      name: "Puzzle",
      icon: <GiBrain className="text-lg" />,
      color: "bg-gradient-to-r from-pink-500 to-rose-500"
    },
  ];

  const socialLinks = [
    { icon: <FaDiscord />, color: "hover:bg-[#5865F2]", label: "Discord" },
    { icon: <FaTwitter />, color: "hover:bg-[#1DA1F2]", label: "Twitter" },
    { icon: <FaTwitch />, color: "hover:bg-[#9147FF]", label: "Twitch" },
    { icon: <FaYoutube />, color: "hover:bg-[#FF0000]", label: "YouTube" }
  ];

  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.footer 
      className="bg-gray-900 border-t border-gray-800 pt-16 pb-8"
      initial="hidden"
      whileInView="visible"
      variants={footerVariants}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center mb-5">
              <GiJoystick className="text-3xl text-purple-500 mr-3" />
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                GAMEHUB
              </h3>
            </div>
            <p className="text-gray-400 mb-6">
              The ultimate destination for free online games. Play anywhere, anytime!
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className={`w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 transition-colors ${social.color}`}
                  whileHover={{ y: -3 }}
                >
                  <span className="sr-only">{social.label}</span>
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Categories Column */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-lg text-white mb-6 flex items-center">
              <FaGamepad className="mr-2 text-purple-400" />
              Categories
            </h4>
            <ul className="space-y-3">
              {categories.slice(1).map((category) => (
                <motion.li 
                  key={category.id}
                  whileHover={{ x: 5 }}
                >
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  >
                    <span className={`w-8 h-8 rounded-full ${category.color} flex items-center justify-center mr-3 group-hover:scale-110 transition-transform`}>
                      {category.icon}
                    </span>
                    {category.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Support Column */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-lg text-white mb-6 flex items-center">
              <FaHeadset className="mr-2 text-blue-400" />
              Support
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Help Center", path: "#" },
                { name: "Contact Us", path: "#" },
                { name: "FAQ", path: "#" },
                { name: "Community", path: "#" }
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                >
                  <Link
                    href={item.path}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Legal Column */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-lg text-white mb-6 flex items-center">
              <FaPuzzlePiece className="mr-2 text-green-400" />
              Legal
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Terms of Service", path: "#" },
                { name: "Privacy Policy", path: "#" },
                { name: "Cookie Policy", path: "#" },
                { name: "Content Policy", path: "#" }
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                >
                  <Link
                    href={item.path}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div 
          className="border-t border-gray-800 my-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        />

        {/* Copyright */}
        <motion.div 
          className="text-center text-gray-500 text-sm"
          variants={itemVariants}
        >
          <p>
            © {new Date().getFullYear()} GameHub. All rights reserved. All games are property of their respective owners.
          </p>
          <p className="mt-2">
            Designed for gamers by gamers.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;