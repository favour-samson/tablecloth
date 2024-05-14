import {
  auto,
  brand2,
  brand1,
  brand3,
  brand4,
  brand5,
  brand6,
  mortgage,
  papersheet,
  retirement,
  verifieduser,
  moneytrasfer,
  chart,
  coin,
  donation,
  business,
  piggy,
  pouch,
  trust,
  footerlogo,
  stat1,
  stat2,
  stat3,
  investment1,
  investment2,
  investment3,
  investment4,
  profile,
  imgPerson,
  imgPersonsdie,
  blog2,
  like1,
  like2,
  blog1,
  bar,
  search,
  feature1,
  feature2,
  feature3,
  feature4,
  sideNav1,
  blogimg,
  blogimgg2,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About Us",
  },
  {
    id: "money",
    title: "Money Tools",
  },
];

export const features = [
  {
    id: "Credit Cards",
    title: "Credit Cards",
    img: moneytrasfer,
  },
  {
    id: "Debt Help",
    title: "Debt Help",
    img: donation,
  },
  {
    id: "Insurance",
    title: "Insurance",
    img: trust,
  },
  {
    id: "Investments",
    title: "Investments",
    img: chart,
  },
  {
    id: "Loans",
    title: "Loans",
    img: pouch,
  },
  {
    id: "Money Mindset",
    title: "Money Mindset",
    img: coin,
  },
  {
    id: "Mortgages",
    title: "Mortgages",
    img: business,
  },
  {
    id: "Retirement",
    title: "Retirement",
    img: piggy,
  },
];

export const brands = [
  {
    id: "brand1",
    img: brand1,
  },
  {
    id: "brand2",
    img: brand2,
  },
  {
    id: "brand3",
    img: brand3,
  },
  {
    id: "brand4",
    img: brand4,
  },
  {
    id: "brand5",
    img: brand5,
  },
  {
    id: "brand6",
    img: brand6,
  },
];

export const about1 = [
  {
    id: "Mortgage",
    img: mortgage,
    title: "Mortgage",
    desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor.",
  },
  {
    id: "Retirement",
    img: retirement,
    title: "Retirement",
    desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor.",
  },
  {
    id: "Cost of Living",
    img: verifieduser,
    title: "Cost of Living",
    desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor.",
  },
  
];
export const about2 = [
  {
    id: "Auto Loan",
    img: auto,
    title: "Auto Loan",
    desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor.",
  },
  {
    id: "Amortization",
    img: papersheet,
    title: "Amortization",
    desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor.",
  },
];

export const investments = [
  {
    id: 1,
    img: investment1,
    title: "Track and grow my net worth",
  },
  {
    id: 2,
    img: investment2,
    title: "Get insights on my cash flow",
  },
  {
    id: 3,
    img: investment3,
    title: "Monitor my credit score",
  },
  {
    id: 4,
    img: investment4,
    title: "Know my most rewarding card",
  },
];

export const stats = [
  {
    id: "NET WORTH",
    img: stat1,
    num:'178+',
    title: "NET WORTH",
  },
  {
    id: "CASH FLOW",
    img: stat2,
    num:'20+',
    title: "CASH FLOW",
  },
  {
    id: "CREDIT SCORE",
    img: stat3,
    num:'190+',
    title: "CREDIT SCORE",
  },
];

export const dashboardfeatures = [
  {
    id: "Checking",
    title: "Checking",
    img: feature1,
    text: "Link account",
  },
  {
    id: "Savings",
    title: "Savings",
    img: feature2,
    text: "Link account",
  },
  {
    id: "Investments",
    title: "Investments",
    img: feature3,
    text: "Link account",
  },
  {
    id: "Credit cards/loans",
    title: "Credit cards/loans",
    img: feature4,
    text: "Link account",
  },
];

export const posts = [
  {
    id: 1,
    img1: like1,
    img2: like2,
    title: "Add your bills to see ‘em all in one place",
    desc: "Always know what’s due and when, and see those upcoming expenses called out in your cash flow.",
    buttonText: "Add  my bills",
    question: "Was this helpful?",
  },
  {
    id: 1,
    img1: like1,
    img2: like2,
    title: "Add your bills to see ‘em all in one place",
    desc: "Always know what’s due and when, and see those upcoming expenses called out in your cash flow.",
    buttonText: "Add  my bills",
    question: "Was this helpful?",
  },
];

export const landingpageBlog = [
  {
    id: "1",
    buttonText: "Business",
    title: "Savings Account 101: Why You Need One and How to Build Your Own",
    date: "August 31, 2022",
    img: blogimg,
  },
  {
    id: "2",
    buttonText: "Business",
    title: "The Best Travel Loyalty Programs to Join This Year",
    date: "August 31, 2022",
    img: blogimgg2,
  },
];

export const blogPosts = [
  {
    id: "1",
    head: "INVESTING",
    title: "Best ETFs for September 2022",
    read: "17 min read",
    img: blog1,
  },
  {
    id: "2",
    head: "INVESTING",
    title: "8 best short - term investments in Septemeber 2022",
    read: "11 min read",
    img: blog2,
  },
  {
    id: "3",
    head: "INVESTING",
    title: "8 best short - term investments in Septemeber 2022",
    read: "11 min read",
    img: blog1,
  },
];

export const AUTH_TOKEN = 'auth-token';