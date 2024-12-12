// Response status
const _responseStatus = {
  SUCCESS: "success",
  ERROR: "error",
  WARNING: "warning",
};
export const responseStatus = Object.freeze(_responseStatus);

// Response error type
const _responseErrorType = {};
export const responseErrorType = Object.freeze(_responseErrorType);

// Dashboard sidebar navlinks
export const dashboardSidebarNavlinks = [
  {
    name: "Dashboard",
    url: "/dashboard",
  },
  {
    name: "Short Links",
    url: "/dashboard/links",
  },
  {
    name: "Analytics",
    url: "/dashboard/analytics",
  },

  {
    name: "Account",
    url: "/dashboard/account",
  },
];

// Main navbar links
export const mainHeaderNavlinks = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Dashboard",
    url: "/dashboard",
  },
  {
    name: "Features",
    url: "/features",
  },
  {
    name: "About",
    url: "/about",
  },
  {
    name: "Contact us",
    url: "/contact",
  },
];

// Home page

// 1.Landing page demo user list

export const userProfileImgs = [
  {
    url: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    url: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    url: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
  },
  {
    url: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
  },
];

// 2. Product details
export const productStats = [
  {
    no: "18K+",
    text: "Total Users",
  },
  {
    no: "1M+",
    text: "Links Created",
  },
  {
    no: "10M+",
    text: "Redirected Links",
  },
];

// 3. Product Features

import {
  analyticsImgUrl,
  communicationThree as urlShorteningImgUrl,
  qrCodeImgUrl,
  customiseUrlImgUrl,
} from "./imageUrls";

export const productFeatures = [
  {
    title: "Seamless URL Shortening",
    imgUrl: urlShorteningImgUrl,
    description:
      "Convert long, clunky URLs into short, shareable links in seconds. A simple and intuitive interface ensures hassle-free link generation.",
  },

  {
    title: "Advanced Link Analytics",
    imgUrl: analyticsImgUrl,
    description:
      "Gain insights with real-time tracking. Monitor clicks, geographic data, and device stats to understand your audience better.",
  },

  {
    title: "Customizable Links",
    imgUrl: customiseUrlImgUrl,
    description:
      "Make your links memorable. Personalize your short URLs with custom aliases and branding to reflect your identity.",
  },

  {
    title: "Generate QRs",
    imgUrl: qrCodeImgUrl,
    description:
      "Personalize your short URLs with custom QRs. QR Code solutions for every customer, business and brand experience.",
  },
];

// 4. Testimonials

export const testimonials = [
  {
    name: "Darrell Steward",
    username: "@darrels",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlfGVufDB8fDB8fHww",
    text: "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.",
    hashtag: "#another",
  },
  {
    name: "Leslie Alexander",
    username: "@lesslie",
    avatar:
      "https://images.unsplash.com/photo-1496203695688-3b8985780d6a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlfGVufDB8fDB8fHww",
    text: "Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.",
    hashtag: "#Celebration",
  },
  {
    name: "Jenny Wilson",
    username: "@jennywilson",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fHww",
    text: "This is a top quality product. No need to think twice before making it live on web.",
    hashtag: "#make_it_fast",
  },
  {
    name: "Kristin Watson",
    username: "@kristinwatson2",
    avatar:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
    text: "Finally, I’ve found a template that covers all bases for a bootstrapped startup. We were able to launch in days, not months.",
    hashtag: "#Celebration",
  },
  {
    name: "Guy Hawkins",
    username: "@guyhawkins",
    avatar:
      "https://plus.unsplash.com/premium_photo-1669703777437-27602d656c27?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
    text: "This is an exceptional product. My team and I have loved every minute of using it.",
    hashtag: "#team_love",
  },
  {
    name: "Marvin McKinney",
    username: "@marvin_mckinney",
    avatar:
      "https://images.unsplash.com/photo-1502323777036-f29e3972d82f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
    text: "I can't say enough great things about this product. It has been a total game-changer.",
    hashtag: "#game_changer",
  },
  {
    name: "Eleanor Pena",
    username: "@elliepena",
    avatar:
      "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-7.jpg",
    text: "The attention to detail and the support provided are unmatched. I’m so impressed with the results!",
    hashtag: "#attention_to_detail",
  },
  {
    name: "Cody Fisher",
    username: "@codyfish",
    avatar:
      "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-8.jpg",
    text: "This service has exceeded my expectations in every way. I can't imagine going back to the old way of doing things.",
    hashtag: "#exceeded_expectations",
  },
];

// 5. faq

export const faqs = [
  {
    title: "Is it free to use?",
    content: "Yes! Our basic URL shortening service is completely free.",
  },
  {
    title: "Can I customize my short links?",
    content:
      "Absolutely! You can personalize your links with custom aliases to make them more meaningful.",
  },
  {
    title: "How secure are my links?",
    content:
      "We use industry-standard encryption to ensure your links and data are safe.",
  },
  {
    title: "Can I track link performance",
    content:
      "Yes, our platform provides detailed analytics, including click counts, geographic data, and more.",
  },
];
