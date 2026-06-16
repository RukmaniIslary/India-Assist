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
  {
    slug: "ayushman-bharat-card-name-missing-from-list",
    title: "How to Get an Ayushman Bharat Card if Your Name Is Missing From the List",
    excerpt:
      "My uncle's name wasn't showing up, and we almost gave up. Here's what actually worked to get the card sorted.",
    category: "Schemes",
    author: "Deepak Verma",
    date: "2026-03-09",
    readingTime: "7 min read",
    content: [
      {
        paragraphs: [
          "The first time I checked, I typed my uncle's mobile number into the Ayushman Bharat portal, hit search, and got that dreaded message — no beneficiary found. My heart sank a little, because we genuinely needed the cover and everyone kept saying he qualified.",
          "Turns out, a name not showing up does not always mean you are not eligible. It often just means the records are incomplete or you are searching the wrong way. Here is what I learned going through it.",
        ],
      },
      {
        heading: "Try every search option, not just the mobile number",
        paragraphs: [
          "The portal lets you search by mobile, ration card, or Aadhaar. The mobile number drew a blank for us, but searching by ration card actually pulled up the family. So before panicking, try all the options one by one. Small thing, but it saved us a trip.",
        ],
      },
      {
        heading: "If you are genuinely not on the list",
        paragraphs: [
          "Some states have expanded the scheme beyond the original SECC list, and there are extra categories now, including senior citizens. If you still do not appear, the practical route is to visit a Common Service Centre or an empanelled hospital's Ayushman Mitra desk with your documents.",
        ],
        list: [
          "Carry Aadhaar, ration card and a mobile number for OTP",
          "Ask them to check eligibility under the latest state expansion",
          "If eligible, they complete the e-KYC and generate the card on the spot",
          "Keep the acknowledgement until the card is ready",
        ],
      },
      {
        heading: "What finally worked for us",
        paragraphs: [
          "For my uncle, the CSC operator found him under a newer category that the online search had not surfaced. Ten minutes of e-KYC and the card was done. So my honest advice: do not trust a single failed online search. The data and the rules keep changing, and a human at the CSC often sees more than the public portal shows you.",
        ],
      },
    ],
  },
  {
    slug: "pm-mudra-yojana-is-it-easy-to-get",
    title: "PM Mudra Yojana — Is It Actually Easy to Get?",
    excerpt:
      "I applied for a Mudra loan for my cousin's tailoring unit. Here's the honest version, not the brochure version.",
    category: "Finance",
    author: "Faisal Ahmed",
    date: "2026-03-25",
    readingTime: "8 min read",
    content: [
      {
        paragraphs: [
          "Everywhere you read, PM Mudra Yojana sounds almost magical — collateral-free loans for small businesses, just walk into a bank. So when my cousin wanted to expand his small tailoring unit, I thought, easy, we will get a Shishu or Kishore loan in no time. The reality was a bit more grounded than the headlines.",
        ],
      },
      {
        heading: "The good part is real",
        paragraphs: [
          "The core promise holds up. There is genuinely no collateral for the smaller categories, and the scheme exists exactly to fund people like my cousin who would never get a fancy business loan otherwise. The interest was reasonable and the paperwork was less scary than a regular loan.",
        ],
      },
      {
        heading: "But the bank still has a say",
        paragraphs: [
          "Here is what nobody tells you clearly: Mudra is a scheme, not an entitlement. The bank still assesses you. The first branch we went to was lukewarm and kept asking for things. The manager was not rude, just cautious. A loan is still a loan, and they want to see that the business is real.",
        ],
        list: [
          "Keep a simple, believable business plan — even one page helps",
          "Carry Aadhaar, PAN, and proof of your business activity",
          "Have a bank account with some transaction history if possible",
          "Be ready to explain how you will repay, not just what you need",
        ],
      },
      {
        heading: "What got it moving",
        paragraphs: [
          "We went to a second bank where my cousin already had an account, and that made a real difference. They could see his transactions, trusted the relationship, and the Kishore loan came through. So the trick is less about the scheme and more about walking in prepared, to a bank that already knows you.",
          "Is it easy? Easier than a normal business loan, yes. Automatic, no. Go in like you are pitching a small, honest business and your odds jump.",
        ],
      },
    ],
  },
  {
    slug: "best-government-schemes-for-women-2026",
    title: "Best Government Schemes for Women in 2026",
    excerpt:
      "From my mother to my sister to our neighbour, here are the schemes I keep recommending to the women in my life.",
    category: "Schemes",
    author: "Priya Nair",
    date: "2026-04-11",
    readingTime: "7 min read",
    content: [
      {
        paragraphs: [
          "Being the person everyone calls for scheme help, I have noticed the women in my family and neighbourhood often miss out simply because nobody pointed them to the right thing at the right time. So here is the list I actually share when someone asks, what is there for women right now.",
        ],
      },
      {
        heading: "Sukanya Samriddhi for the girl child",
        paragraphs: [
          "If there is a daughter under 10 in the house, I always bring this up first. Safe, tax-free, solid returns, and it builds a real corpus for her education or marriage. I have seen parents pour money into random policies an agent pushed while ignoring this simpler, better option sitting at the post office.",
        ],
      },
      {
        heading: "Ujjwala for a clean kitchen",
        paragraphs: [
          "For women in low-income households still cooking on smoky fuel, the free LPG connection under Ujjwala is genuinely life-changing for their health. Our domestic help got hers and could not believe it was free. The application is simple at the gas distributor.",
        ],
      },
      {
        heading: "Maternity and pension support",
        paragraphs: [
          "There is real, practical help most people forget about.",
        ],
        list: [
          "Pradhan Mantri Matru Vandana Yojana and Janani Suraksha for new mothers",
          "The NSAP widow pension for widows from BPL households",
          "Stand-Up India loans for women who want to start a business",
          "Mahila Samman savings options for safe, decent returns",
        ],
      },
      {
        heading: "My honest tip",
        paragraphs: [
          "Sit with the women in your family for ten minutes and just run their details through an eligibility check. Age, income, whether there is a daughter, marital status. Almost every time, at least one scheme pops up that they did not know applied to them. The schemes exist; the awareness is what is missing.",
        ],
      },
    ],
  },
  {
    slug: "how-to-check-pm-kisan-payment-status-online",
    title: "How to Check Your PM Kisan Payment Status Online",
    excerpt:
      "The instalment didn't show up and my father was worried. Here's exactly how I checked the status and what the issue turned out to be.",
    category: "Schemes",
    author: "Suresh Patil",
    date: "2026-04-28",
    readingTime: "6 min read",
    content: [
      {
        paragraphs: [
          "When the PM Kisan instalment did not arrive on time, my father assumed the worst — that we had been removed from the scheme. Before worrying, I sat down to check the status online, and honestly it took less than five minutes. Most people just do not know where to look.",
        ],
      },
      {
        heading: "The Know Your Status page",
        paragraphs: [
          "On the official PM Kisan portal there is a Know Your Status option. You enter your registration number, and if you do not remember it, there is a way to find it using your mobile or Aadhaar number. Then an OTP, and it shows your instalment history clearly.",
        ],
        list: [
          "Open the official PM Kisan portal",
          "Click Know Your Status",
          "Enter your registration number (or fetch it via mobile/Aadhaar)",
          "Verify the OTP and view your instalment history",
        ],
      },
      {
        heading: "What the problem usually is",
        paragraphs: [
          "In our case, the status showed the instalment was held because e-KYC was pending. This is the single most common reason I see. Other times it is a name mismatch with the bank, or land records not verified. The status page usually hints at what is stuck.",
        ],
      },
      {
        heading: "How we fixed it",
        paragraphs: [
          "We completed the e-KYC — and since OTP kept failing on his old number, we did biometric e-KYC at a CSC. The next instalment came through normally after that. So if your money is stuck, do not assume you are removed. Check the status first, fix the small thing it points to, and it usually sorts itself out.",
        ],
      },
    ],
  },
  {
    slug: "government-schemes-most-farmers-dont-know-about",
    title: "Government Schemes Most Farmers Don't Know About",
    excerpt:
      "I grew up in a farming family, and even we missed out on schemes for years. Here are the ones that quietly fly under the radar.",
    category: "Schemes",
    author: "Manjeet Singh",
    date: "2026-05-15",
    readingTime: "8 min read",
    content: [
      {
        paragraphs: [
          "Everyone in our village knows PM Kisan because the money lands in the account. But beyond that one scheme, there is a whole list that most farmers I know have never used, simply because no one explained them. I learned about several only after losing a crop one bad season. Here is what I wish we had known earlier.",
        ],
      },
      {
        heading: "Crop insurance that actually pays",
        paragraphs: [
          "Pradhan Mantri Fasal Bima Yojana is the one I regret not taking sooner. The premium a farmer pays is small, and when the weather destroys a crop, the payout genuinely helps you survive the season. After the year we lost our crop with no cover, my father never skipped it again.",
        ],
      },
      {
        heading: "The Kisan Credit Card is not just for loans",
        paragraphs: [
          "Many think the KCC is some complicated bank thing. In reality it gives you cheap, timely credit for seeds, fertiliser and labour, and the interest is concessional if you repay on time. It beats borrowing from a local lender at scary rates, which sadly many still do.",
        ],
      },
      {
        heading: "The quieter ones worth checking",
        paragraphs: [
          "These rarely come up in village conversations but are worth your time.",
        ],
        list: [
          "Soil Health Card — free soil testing that tells you exactly what your land needs",
          "PM-KUSUM — subsidy for solar pumps, which cuts your diesel and power costs",
          "PM Kisan Maandhan — a small pension for when farming years are behind you",
          "Kisan Credit Card for allied work like dairy and fisheries too",
        ],
      },
      {
        heading: "Why we miss them",
        paragraphs: [
          "Honestly, it is not laziness. It is that nobody sits with farmers and explains these in plain language. The forms feel intimidating and the offices feel far away. But most of these start with the same documents — Aadhaar, land records, a bank account. Once you have that folder ready, applying to one more scheme is not a big deal.",
          "If you farm, or your family does, spend one afternoon checking which of these you qualify for. A single good year of crop insurance or one cheap KCC loan can change your whole season.",
        ],
      },
    ],
  },
  {
    slug: "how-to-apply-sukanya-samriddhi-yojana-step-by-step",
    title: "How to Apply for Sukanya Samriddhi Yojana, Step by Step",
    excerpt:
      "We opened an account for my niece last month. Here's the actual process, the small confusions, and what to keep ready.",
    category: "Finance",
    author: "Kavita Joshi",
    date: "2026-05-22",
    readingTime: "6 min read",
    content: [
      {
        paragraphs: [
          "When my brother had a daughter, the whole family kept saying open Sukanya, open Sukanya, but nobody actually knew the steps. So I took it on myself one Saturday, walked into the post office, and got it done. It was simpler than I feared, with one or two small hiccups. Here is exactly how it went.",
        ],
      },
      {
        heading: "Where to open it",
        paragraphs: [
          "You can open the account at most post offices and many authorised banks. We went to the post office because it was nearby and, honestly, the staff there deal with this every day. The girl child has to be below 10 years, which my niece comfortably was.",
        ],
      },
      {
        heading: "What to carry",
        paragraphs: [
          "Keep these ready so you are not running back home like I almost did.",
        ],
        list: [
          "The girl child's birth certificate",
          "Identity and address proof of the parent or guardian",
          "Passport-size photographs",
          "The opening deposit amount",
        ],
      },
      {
        heading: "Filling the form and first deposit",
        paragraphs: [
          "The form is short. You fill the child's details, the guardian's details, and choose your deposit amount. You can start small and add through the year up to the annual limit. We made the first deposit, got the passbook, and that was basically it.",
        ],
      },
      {
        heading: "One thing I would tell every parent",
        paragraphs: [
          "Do not overthink the amount in year one. Just open it and start. The account runs for 21 years and the magic is in consistency, not in a big first deposit. Set a small reminder each year to top it up, and by the time she needs it for college, there is a genuinely useful corpus waiting.",
        ],
      },
    ],
  },
  {
    slug: "e-shram-card-benefits-nobody-talks-about",
    title: "e-Shram Card Benefits Nobody Talks About",
    excerpt:
      "Most people register and forget it. After helping a few workers, here's what the card actually does for you.",
    category: "Schemes",
    author: "Ramesh Yadav",
    date: "2026-05-29",
    readingTime: "6 min read",
    content: [
      {
        paragraphs: [
          "Our building's security guard showed me his e-Shram card one day and asked, bhaiya, what is this even for? He had registered because someone told him to, but had no idea what it gave him. I realised this is the story for most unorganised workers. So let me lay out what the card quietly does.",
        ],
      },
      {
        heading: "The accident insurance most forget",
        paragraphs: [
          "The biggest one people miss: registration comes with accidental insurance cover. For a daily-wage worker with no other safety net, that is not a small thing. Many do not even know it exists until something happens and it is too late to claim.",
        ],
      },
      {
        heading: "A single identity that opens doors",
        paragraphs: [
          "The Universal Account Number on the card is meant to be your single identity as a worker across schemes. Over time it is how the government routes various welfare benefits to unorganised workers. The point is to be in the system so benefits can actually reach you.",
        ],
        list: [
          "Accidental insurance cover for registered workers",
          "A Universal Account Number recognised across states",
          "A gateway to social-security benefits as they roll out",
          "Free registration — no fee, takes minutes",
        ],
      },
      {
        heading: "My honest take",
        paragraphs: [
          "The card is only useful if you know what it carries and keep your details updated. I told our guard to make sure his mobile number and bank account on the card were current, because a benefit that cannot reach your account is useless. If you or someone working for you has the card, spend five minutes checking those details are right.",
        ],
      },
    ],
  },
  {
    slug: "how-to-get-bpl-card-in-india",
    title: "How to Get a BPL Card in India",
    excerpt:
      "A relative needed one and we had no clue where to start. Here's what the process actually looks like, plainly.",
    category: "Documents",
    author: "Anjali Mishra",
    date: "2026-06-05",
    readingTime: "7 min read",
    content: [
      {
        paragraphs: [
          "A BPL card unlocks a surprising number of benefits — subsidised ration, health schemes, pensions, housing assistance. So when a relative in our village needed one, I expected a clear, single process. The reality is that it is run by the states, so it varies a bit, but the broad path is the same everywhere. Here is how we approached it.",
        ],
      },
      {
        heading: "Understand it is income-based",
        paragraphs: [
          "A BPL card is issued to families whose income falls below the poverty line as defined by the state. Eligibility is assessed from survey data and the documents you submit, so do not expect it just for asking — you need to genuinely fall in the category and show it.",
        ],
      },
      {
        heading: "Where to apply and what to carry",
        paragraphs: [
          "We applied through the local authority. Depending on your state it could be the panchayat, a municipal office, or the food and civil supplies department, and many states now have an online e-District portal too.",
        ],
        list: [
          "Aadhaar cards of family members",
          "Income certificate",
          "Proof of residence",
          "Passport-size photographs and existing ration card if any",
        ],
      },
      {
        heading: "The wait and the verification",
        paragraphs: [
          "After submitting, there is usually a verification step where an official confirms your details, sometimes with a home visit. This is the part that takes time and patience. Keep your application reference number and follow up politely if it stalls.",
        ],
      },
      {
        heading: "What helped us",
        paragraphs: [
          "Two things made it smoother: getting the income certificate sorted first, and making sure names matched exactly across Aadhaar and other documents. A mismatch is the most common reason these get stuck. Once the card came through, the family could access subsidised ration and became eligible for health and pension schemes they had been missing.",
        ],
      },
    ],
  },
  {
    slug: "best-scholarships-sc-st-students-2026",
    title: "Best Scholarships for SC/ST Students in 2026",
    excerpt:
      "I helped my cousin through this maze last year. Here are the scholarships worth applying to, and how to not miss out.",
    category: "Education",
    author: "Sandeep Kumar",
    date: "2026-06-09",
    readingTime: "7 min read",
    content: [
      {
        paragraphs: [
          "My cousin is the first in our family to reach college, and as an SC student he was eligible for real support — but figuring out which scholarships and how to apply was genuinely confusing. After going through it together, here is the honest guide I wish we had at the start.",
        ],
      },
      {
        heading: "Start with the post-matric scholarship",
        paragraphs: [
          "For SC students continuing after Class 10, the Post-Matric Scholarship is the backbone. It covers tuition and gives a maintenance allowance, and the income limits are reasonable. For most SC/ST students in higher studies, this is the first one to lock in.",
        ],
      },
      {
        heading: "Do not skip the National Scholarship Portal",
        paragraphs: [
          "Almost everything routes through the National Scholarship Portal. Create one proper profile and you can see the central and state scholarships you qualify for, including pre-matric and merit-based ones. My cousin found two he did not know existed just by completing his profile fully.",
        ],
        list: [
          "Post-Matric Scholarship for SC/ST students",
          "Pre-Matric Scholarship for younger students",
          "PM YASASVI for OBC, EBC and DNT students",
          "State-specific scholarships listed on the same portal",
        ],
      },
      {
        heading: "The mistakes that cost people money",
        paragraphs: [
          "The two reasons SC/ST students lose out are almost never about merit. It is missed deadlines and document mismatches. The caste certificate, income certificate and marksheet must all match the Aadhaar name. Even a small spelling difference triggers rejection.",
        ],
      },
      {
        heading: "My advice",
        paragraphs: [
          "Sort the caste and income certificates before the application season opens, not during it. Apply early, because the portal gets painfully slow near deadlines. And apply to more than one — the post-matric is the anchor, but the smaller scholarships add up and have far less competition than people assume.",
        ],
      },
    ],
  },
  {
    slug: "how-mgnrega-works-on-the-ground",
    title: "How MGNREGA Actually Works on the Ground",
    excerpt:
      "Everyone's heard of the 100 days of work guarantee. Here's how it really plays out in a village, from what I've seen.",
    category: "Schemes",
    author: "Lakshmi Devi",
    date: "2026-06-13",
    readingTime: "8 min read",
    content: [
      {
        paragraphs: [
          "People in cities know MGNREGA as a line in the news — 100 days of guaranteed work. Back home in our village, it is much more concrete than that. I have watched neighbours use it to get through the lean months when there is no farm work. Here is how it actually functions, beyond the textbook version.",
        ],
      },
      {
        heading: "It starts with the job card",
        paragraphs: [
          "Nothing happens without the job card. The household registers at the gram panchayat and gets this card, which lists the members willing to work. Without it you are simply not in the system, so this is the first real step, not an afterthought.",
        ],
      },
      {
        heading: "Asking for work is your right",
        paragraphs: [
          "Here is the part many do not use properly: you have to apply for work. You submit a request, and the panchayat is supposed to provide work within fifteen days. If they cannot, there is even a provision for an unemployment allowance, though in practice people rarely push for that.",
        ],
        list: [
          "Register the household and get the job card",
          "Submit a dated request for work when you need it",
          "Work should be provided within 15 days, ideally nearby",
          "Wages go to the bank or post office account, not cash in hand",
        ],
      },
      {
        heading: "Where it gets bumpy",
        paragraphs: [
          "I will be honest — it is not always smooth. Wage payments can get delayed, and sometimes the work allotted is far or limited. The shift to bank payments cut down some old leakages but created new headaches when accounts or Aadhaar links have issues. Keeping your bank and Aadhaar details clean matters a lot here too.",
        ],
      },
      {
        heading: "Why it still matters",
        paragraphs: [
          "Despite the rough edges, MGNREGA is a genuine safety net in our village. In a bad season, it is the difference between staying put and migrating to a city in desperation. My honest advice to any rural family: get the job card now, while things are calm, so that when the lean months come, you can simply ask for work instead of scrambling.",
        ],
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
