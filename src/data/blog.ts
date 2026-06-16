export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readingTime: string;
  content: { heading?: string; paragraphs: string[]; list?: string[] }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-check-government-scheme-eligibility",
    title: "How to Check Your Eligibility for Government Schemes in India",
    excerpt:
      "A practical guide to discovering which central and state welfare schemes you qualify for based on income, age, occupation and state.",
    category: "Schemes",
    author: "India Assist Editorial",
    date: "2026-01-12",
    readingTime: "6 min read",
    content: [
      {
        paragraphs: [
          "India runs hundreds of welfare schemes across housing, health, agriculture, education and pensions. The challenge for most citizens is not the lack of schemes but knowing which ones apply to them.",
          "This guide walks through a structured way to assess eligibility so you spend time only on the benefits you can actually claim.",
        ],
      },
      {
        heading: "Start with your core profile",
        paragraphs: [
          "Most schemes filter applicants by a handful of attributes. Gather these before you begin so you can match quickly.",
        ],
        list: [
          "Age and gender",
          "State of residence",
          "Annual household income",
          "Occupation category (farmer, worker, student, senior citizen)",
          "Social category if applicable",
        ],
      },
      {
        heading: "Use the eligibility engine",
        paragraphs: [
          "Our eligibility engine takes these inputs and instantly returns the schemes that match your profile, along with the documents you need and the official application link.",
          "Always verify final eligibility and current rules on the official government portal before applying.",
        ],
      },
    ],
  },
  {
    slug: "emi-vs-sip-where-should-you-focus",
    title: "EMI vs SIP: Balancing Loan Repayment and Wealth Creation",
    excerpt:
      "Understand how loan EMIs and SIP investments interact, and how to plan your monthly cash flow for both.",
    category: "Finance",
    author: "India Assist Editorial",
    date: "2026-02-03",
    readingTime: "7 min read",
    content: [
      {
        paragraphs: [
          "Equated Monthly Instalments and Systematic Investment Plans pull in opposite directions: one repays debt, the other builds assets. Managing both well is the foundation of personal finance.",
        ],
      },
      {
        heading: "Know your numbers first",
        paragraphs: [
          "Before deciding how to split your monthly surplus, calculate your exact EMI obligation and the projected growth of a SIP using our calculators.",
        ],
        list: [
          "Use the EMI calculator to fix your loan instalment",
          "Use the SIP calculator to project long-term returns",
          "Keep total EMIs within a healthy share of monthly income",
        ],
      },
      {
        heading: "A simple rule of thumb",
        paragraphs: [
          "High-interest debt should generally be cleared faster, while long-term goals benefit from staying invested. Run both calculators and compare the effective cost and return before deciding.",
        ],
      },
    ],
  },
  {
    slug: "documents-checklist-before-applying-schemes",
    title: "The Essential Documents Checklist Before Applying for Any Scheme",
    excerpt:
      "Keep these documents ready to make every scheme, scholarship and certificate application smooth and fast.",
    category: "Documents",
    author: "India Assist Editorial",
    date: "2026-02-20",
    readingTime: "5 min read",
    content: [
      {
        paragraphs: [
          "Most application rejections happen because of missing or mismatched documents. A ready folder of verified documents saves time and avoids repeat visits.",
        ],
      },
      {
        heading: "The universal checklist",
        paragraphs: ["Keep both digital and physical copies of the following."],
        list: [
          "Aadhaar Card linked with an active mobile number",
          "PAN Card for financial applications",
          "Income certificate for benefit-linked schemes",
          "Caste or category certificate where applicable",
          "Bank passbook with account linked to Aadhaar",
          "Recent passport-size photographs",
        ],
      },
      {
        heading: "Keep them consistent",
        paragraphs: [
          "Ensure your name, date of birth and address match across all documents. Even small spelling differences can delay verification.",
        ],
      },
    ],
  },
  {
    slug: "i-tried-applying-for-pm-kisan-what-actually-happened",
    title: "I Tried Applying for PM-KISAN — Here's What Actually Happened",
    excerpt:
      "My honest, start-to-finish experience registering for PM-KISAN for my father's land, including the e-KYC headache nobody warns you about.",
    category: "Schemes",
    author: "Rohit Sharma",
    date: "2026-03-04",
    readingTime: "8 min read",
    content: [
      {
        paragraphs: [
          "So last month my father kept asking me, beta, everyone in the village is getting this Rs. 6,000 from the government, why are we not getting it? He has two acres in our name back home in UP, and honestly I had been postponing it for almost a year. Finally one Sunday morning, chai in hand, I sat down to actually do it. I thought it would take ten minutes. It did not take ten minutes.",
          "I am writing this down because when I searched online, most articles just listed the steps like a textbook. Nobody told me where I would actually get stuck. So here is the real version.",
        ],
      },
      {
        heading: "Step one: the registration was the easy part",
        paragraphs: [
          "I went to the official PM-KISAN portal and clicked on New Farmer Registration. You enter the Aadhaar number, pick rural farmer, choose the state, and an OTP comes to the linked mobile. This part was smooth, I will give them that. The form asks for land details — khasra/khatauni number, area, and bank account information.",
          "Small tip from my mistake: keep the land record document open in front of you before you start. I had to get up twice to find the papers and the session almost timed out. Also make sure the bank account is the one linked to Aadhaar, otherwise the money simply does not come even if you are approved.",
        ],
      },
      {
        heading: "Step two: e-KYC, where I lost an afternoon",
        paragraphs: [
          "Here is the thing nobody mentioned. Registration alone is not enough. You have to complete e-KYC or your instalment gets stuck. The portal has an OTP-based e-KYC option, and for my father it failed three times saying authentication error. No clear reason. I tried again at night thinking maybe the server was busy in the morning — same problem.",
          "Turns out his Aadhaar was linked to a very old mobile number that we had stopped using. This is so common in our parents' generation. If OTP e-KYC keeps failing, the realistic fix is to go to a CSC (Common Service Centre) and do biometric e-KYC with fingerprint. That actually worked in one go.",
        ],
      },
      {
        heading: "What I would tell anyone before they start",
        paragraphs: [
          "If I had to do it again, I would check three things first instead of jumping straight into the form.",
        ],
        list: [
          "Confirm the Aadhaar-linked mobile number is active — most failures start here",
          "Make sure the bank account is seeded with Aadhaar, not just any account",
          "Keep land records ready, and double-check the spelling of the name matches Aadhaar exactly",
          "If OTP e-KYC fails twice, just go to a CSC for biometric — do not waste a week retrying online",
        ],
      },
      {
        heading: "Did the money come?",
        paragraphs: [
          "Yes, eventually. The next instalment showed up in his account, and you can check the beneficiary status on the portal under the Know Your Status section using the registration number or mobile. My father was genuinely happy, and honestly so was I — not for the amount as much as finally getting that to stop being a pending item on my mind.",
          "Was it frustrating? A bit. But it is doable in a weekend if you go in prepared. If you want to first confirm whether your family even qualifies before doing all this, run your details through our eligibility engine — it saved my cousin from filling the whole form only to realise he was not eligible because of an income-tax-payer rule.",
        ],
      },
    ],
  },
  {
    slug: "government-schemes-most-indians-missing-out-2026",
    title: "Which Government Schemes Are Most Indians Missing Out On in 2026?",
    excerpt:
      "After helping friends and family apply, I noticed the same schemes keep getting ignored. Here are the ones people leave money on the table for.",
    category: "Schemes",
    author: "Ananya Iyer",
    date: "2026-03-18",
    readingTime: "7 min read",
    content: [
      {
        paragraphs: [
          "I have become the unofficial scheme person in my family. Cousins, neighbours, my mother's friends — somebody is always asking me to check something. And after doing this for a couple of years, I have noticed a pattern. It is not that schemes do not exist. It is that the most useful ones are quietly sitting there while people chase the famous ones they saw on the news.",
          "So here is my personal list of schemes that I think a lot of Indians are missing out on in 2026, based purely on what I keep seeing around me.",
        ],
      },
      {
        heading: "Atal Pension Yojana — the one young people ignore",
        paragraphs: [
          "Every time I mention APY to someone in their twenties, they say pension is an older person thing. That is exactly the mistake. The whole point is to start young because the monthly contribution is tiny when you are 25 and becomes painful if you start at 39. I genuinely think this is the most underused scheme for private-sector and gig workers who have no PF.",
        ],
      },
      {
        heading: "e-Shram card — millions register, then forget it exists",
        paragraphs: [
          "Our domestic help, the auto driver I take every morning, the delivery folks — most of them in the unorganised sector qualify for the e-Shram card, which comes with accident insurance cover. I helped our maid register and she did not even know it gave her any insurance. The registration is free and takes minutes. The problem is awareness, not eligibility.",
        ],
      },
      {
        heading: "Sukanya Samriddhi Yojana — parents underuse it",
        paragraphs: [
          "If you have a daughter under 10, this is one of the few things giving solid, safe, tax-free returns. I see parents pouring money into random insurance-cum-investment policies that an agent pushed, while ignoring SSY which is simpler and honestly better for a long horizon. Open it at the post office, done.",
        ],
      },
      {
        heading: "The ones people chase versus the ones they should",
        paragraphs: [
          "Here is my blunt take on where attention goes versus where it should go.",
        ],
        list: [
          "Everyone asks about PMAY housing — fewer ask about APY pension that they actually qualify for today",
          "People know PM-KISAN by name — but skip e-KYC and lose instalments",
          "Parents buy market products — but skip the safe, tax-free Sukanya Samriddhi",
          "Students know about big loans — but miss small scholarships that need zero repayment",
        ],
      },
      {
        heading: "How I check now",
        paragraphs: [
          "These days, instead of guessing, I just put the person's age, state, income and occupation into an eligibility checker and let it list what fits. It removes the emotional bias of going after the scheme that sounds impressive versus the one that is actually claimable. Boring schemes win more often than people expect.",
          "If you have not done this exercise for yourself or your parents, do it once. Most people are surprised to find at least one thing they were quietly leaving on the table.",
        ],
      },
    ],
  },
  {
    slug: "ayushman-bharat-does-it-actually-work",
    title: "Ayushman Bharat — Does It Actually Work?",
    excerpt:
      "We used a PM-JAY card during a real hospital admission for my uncle. Here is the honest account of what worked, what was confusing, and what to keep ready.",
    category: "Schemes",
    author: "Vikram Reddy",
    date: "2026-04-02",
    readingTime: "9 min read",
    content: [
      {
        paragraphs: [
          "I will be honest — I was a sceptic. You hear about Rs. 5 lakh health cover and a part of you thinks, sure, but will the hospital actually accept it when it matters, or will there be ten excuses at the counter? Then my uncle had to be admitted for a gallbladder surgery, and we ended up using his Ayushman Bharat card. So now I can talk from experience, not from a brochure.",
        ],
      },
      {
        heading: "First, finding an empanelled hospital",
        paragraphs: [
          "This is the part people get wrong. The card only works at empanelled hospitals — government and many private ones are on the list, but not every hospital near you. We initially went to a hospital that was not empanelled and they politely said the scheme does not apply here. Wasted half a day.",
          "Lesson learned: check the empanelled hospital list first, on the official PM-JAY portal, before you decide where to get admitted for a planned procedure. For emergencies it is different, but for a planned surgery you have time to choose right.",
        ],
      },
      {
        heading: "The Arogya Mitra desk is your best friend",
        paragraphs: [
          "Inside the empanelled hospital, there is usually a help desk with an Ayushman Mitra. Go to them directly. They verified my uncle's identity, did the card check, and started the pre-authorisation with the insurer. Honestly, once we found that desk, things moved. The mistake we made earlier was trying to explain the scheme to the general billing counter, who knew less than we did.",
        ],
      },
      {
        heading: "What was actually covered",
        paragraphs: [
          "The surgery, the room, and the listed package were cashless. We did not pay for the covered procedure, which still feels slightly unreal when you are used to hospital bills. But — and this is important — a few things outside the package, like one consumable and a follow-up that was not bundled, we paid separately. So it is not a magic word that makes everything free. It covers the defined package well.",
        ],
      },
      {
        heading: "Keep these ready to avoid stress",
        paragraphs: [
          "When you are already worried about a family member, you do not want paperwork drama. Keep this ready.",
        ],
        list: [
          "The Ayushman card or at least the beneficiary ID",
          "Aadhaar of the patient for identity verification",
          "A working mobile number for OTP during verification",
          "Go straight to the Ayushman Mitra desk, not the regular billing counter",
        ],
      },
      {
        heading: "So, does it work?",
        paragraphs: [
          "My honest verdict: yes, it works — but only if you do your homework on the hospital and use the help desk. The scheme is real and the cashless treatment genuinely happened for us. The friction is in the awareness and the first-time confusion, not in the scheme refusing to pay.",
          "If your parents or older relatives are eligible, get their card and e-KYC sorted now, while everyone is healthy. Doing this calmly in advance is so much better than scrambling at a hospital reception at 11 pm. Trust me on that one.",
        ],
      },
    ],
  },
  {
    slug: "how-i-used-emi-calculator-to-plan-home-loan",
    title: "How I Used the EMI Calculator to Plan My Home Loan",
    excerpt:
      "Before I signed anything, I spent an evening with an EMI calculator and it completely changed how much loan I took. Here is exactly how.",
    category: "Finance",
    author: "Sneha Kulkarni",
    date: "2026-04-20",
    readingTime: "8 min read",
    content: [
      {
        paragraphs: [
          "When we were buying our first flat in Pune, the bank relationship manager was very sweet and very quick to tell me I was eligible for a much bigger loan than I had imagined. And for about two days, I was excited. A bigger loan means a bigger flat, right? Then I actually sat down with an EMI calculator one evening, and that number on the screen sobered me up fast.",
        ],
      },
      {
        heading: "Seeing the EMI made it real",
        paragraphs: [
          "I punched in the loan amount the bank offered, the interest rate, and a 20-year tenure. The monthly EMI that came up was almost half my take-home salary. On paper the bank said it was fine. In real life, with a toddler, school fees coming, and the general cost of just living, half my salary going to an EMI felt like a trap waiting to happen.",
          "That is the thing — the bank looks at your eligibility. The calculator shows you your reality. Those are two very different numbers.",
        ],
      },
      {
        heading: "Playing with the tenure taught me the most",
        paragraphs: [
          "Then I started moving the tenure slider. A longer tenure dropped the monthly EMI, which felt nice, until I looked at the total interest figure. Over 25 years the total interest was frighteningly large compared to 15 years. A shorter tenure meant a higher EMI but lakhs saved in interest overall.",
          "I went back and forth like this for an hour. Reduce the loan amount a little, shorten the tenure, see the EMI, see the total interest. It is almost like a game, but a useful one. Eventually I found a combination where the EMI was around a third of my income and the total interest was something I could stomach.",
        ],
      },
      {
        heading: "The mistakes I almost made",
        paragraphs: [
          "Looking back, here is what the calculator saved me from.",
        ],
        list: [
          "Borrowing the maximum I was eligible for, instead of what I could comfortably repay",
          "Choosing the longest tenure just to see a smaller EMI, ignoring the huge interest cost",
          "Forgetting that EMI is not your only expense — maintenance, taxes and life still cost money",
          "Not keeping a buffer for the months when something unexpected comes up",
        ],
      },
      {
        heading: "My simple rule now",
        paragraphs: [
          "After all that, my personal rule became this: the EMI should feel boring, not scary. If looking at the EMI makes me anxious, the loan is too big. I would rather buy a slightly smaller home and sleep well than stretch for an extra bedroom and panic every month.",
          "If you are at this stage, genuinely spend one evening with an EMI calculator before you meet the bank, not after. Try the loan amount, then the eligibility tool to see what you realistically qualify for. Walking into that meeting already knowing your comfortable number changes the whole conversation. You stop being sold to and start deciding.",
        ],
      },
    ],
  },
  {
    slug: "best-scholarships-indian-students-nobody-talks-about",
    title: "Best Scholarships for Indian Students Nobody Talks About",
    excerpt:
      "Everyone fights over the famous scholarships. After helping my younger sister apply, I found the quieter ones with far less competition.",
    category: "Education",
    author: "Imran Khatri",
    date: "2026-05-08",
    readingTime: "7 min read",
    content: [
      {
        paragraphs: [
          "My younger sister started college last year, and being the elder brother, the scholarship hunting became my job. At first I did what everyone does — chased the big, famous names that thousands of students apply to. The competition was brutal. Then I realised something: there is a whole layer of scholarships that are quieter, less crowded, and honestly easier to actually win because fewer people bother applying.",
          "So here is what I learned, and the kinds of scholarships I wish someone had told us about on day one.",
        ],
      },
      {
        heading: "The National Scholarship Portal is a goldmine people skip",
        paragraphs: [
          "Everyone has heard of the NSP, but very few actually sit and read through all the schemes listed there. There are pre-matric, post-matric, merit-based, and minority-focused scholarships, many with modest applicant numbers because students assume they will not qualify. My sister found a post-matric one that fit her perfectly and it had nothing like the rush we saw elsewhere.",
        ],
      },
      {
        heading: "Scholarships for girls in technical courses",
        paragraphs: [
          "If you are a girl studying engineering or a technical course, there are dedicated schemes like the AICTE Pragati scholarship aimed exactly at you. The pool of eligible applicants is naturally smaller, which means your odds are genuinely better. I was surprised how few of my sister's classmates had even heard of it.",
        ],
      },
      {
        heading: "Means-cum-merit and category-specific ones",
        paragraphs: [
          "Then there are means-cum-merit scholarships and category-specific ones for OBC, EBC, SC and minority students. These are not glamorous and you will not see influencers talking about them, but they consistently pay out year after year to students who simply applied properly and on time.",
        ],
      },
      {
        heading: "What actually got us the scholarship",
        paragraphs: [
          "Honestly, the secret was not some hidden trick. It was just doing the boring things right.",
        ],
        list: [
          "Applying early — a lot of students miss out purely because of the deadline, not eligibility",
          "Keeping income certificate, caste certificate and marksheets ready and matching the Aadhaar name",
          "Reading the fine print on income limits instead of assuming we would not qualify",
          "Applying to the quieter, niche scholarships, not only the famous crowded ones",
        ],
      },
      {
        heading: "My advice to other students",
        paragraphs: [
          "Do not put all your hope into one big-name scholarship that lakhs of students are fighting for. Spread out. Apply to three or four of the smaller, specific ones that match your category, course or gender. The competition is lower and the money is just as real.",
          "And please, sort your documents before the deadline season, not during it. Half the heartbreak I saw around me was not about merit — it was about a missing certificate or a name mismatch on the last day. If you browse the scholarship directory once, calmly, you will spot options you did not know existed.",
        ],
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
