export type StateInfo = {
  slug: string;
  name: string;
  capital: string;
  region: "North" | "South" | "East" | "West" | "Central" | "North East" | "Union Territory";
  portal: string;
  highlights: string[];
};

export const states: StateInfo[] = [
  { slug: "andhra-pradesh", name: "Andhra Pradesh", capital: "Amaravati", region: "South", portal: "https://www.ap.gov.in", highlights: ["Jagananna welfare schemes", "Navasakam benefits", "Rythu Bharosa farmer support"] },
  { slug: "arunachal-pradesh", name: "Arunachal Pradesh", capital: "Itanagar", region: "North East", portal: "https://arunachalpradesh.gov.in", highlights: ["Tribal welfare schemes", "Hill area development support", "Education scholarships"] },
  { slug: "assam", name: "Assam", capital: "Dispur", region: "North East", portal: "https://assam.gov.in", highlights: ["Orunodoi assistance", "Assam scholarship schemes", "Self-employment support"] },
  { slug: "bihar", name: "Bihar", capital: "Patna", region: "East", portal: "https://state.bihar.gov.in", highlights: ["Student credit card scheme", "Kanya Utthan Yojana", "Skill development missions"] },
  { slug: "chhattisgarh", name: "Chhattisgarh", capital: "Raipur", region: "Central", portal: "https://cgstate.gov.in", highlights: ["Rajiv Gandhi Nyay Yojana", "Tribal welfare programmes", "Farmer support schemes"] },
  { slug: "goa", name: "Goa", capital: "Panaji", region: "West", portal: "https://goa.gov.in", highlights: ["Griha Aadhar support", "Dayanand Social Security", "Education grants"] },
  { slug: "gujarat", name: "Gujarat", capital: "Gandhinagar", region: "West", portal: "https://gujaratindia.gov.in", highlights: ["Digital Gujarat scholarships", "MSME support", "Women empowerment schemes"] },
  { slug: "haryana", name: "Haryana", capital: "Chandigarh", region: "North", portal: "https://haryana.gov.in", highlights: ["Parivar Pehchan Patra", "Pension schemes", "Education benefits"] },
  { slug: "himachal-pradesh", name: "Himachal Pradesh", capital: "Shimla", region: "North", portal: "https://himachal.nic.in", highlights: ["Sahara scheme", "Hill area scholarships", "Social security pensions"] },
  { slug: "jharkhand", name: "Jharkhand", capital: "Ranchi", region: "East", portal: "https://www.jharkhand.gov.in", highlights: ["Mukhyamantri schemes", "Tribal welfare support", "Farmer relief"] },
  { slug: "karnataka", name: "Karnataka", capital: "Bengaluru", region: "South", portal: "https://www.karnataka.gov.in", highlights: ["Seva Sindhu services", "Gruha Lakshmi support", "Vidyasiri scholarships"] },
  { slug: "kerala", name: "Kerala", capital: "Thiruvananthapuram", region: "South", portal: "https://kerala.gov.in", highlights: ["e-District services", "Welfare pension board", "Education scholarships"] },
  { slug: "madhya-pradesh", name: "Madhya Pradesh", capital: "Bhopal", region: "Central", portal: "https://mp.gov.in", highlights: ["Ladli Behna Yojana", "Samagra portal benefits", "Farmer schemes"] },
  { slug: "maharashtra", name: "Maharashtra", capital: "Mumbai", region: "West", portal: "https://www.maharashtra.gov.in", highlights: ["Aaple Sarkar services", "Mahadbt scholarships", "Farmer support"] },
  { slug: "manipur", name: "Manipur", capital: "Imphal", region: "North East", portal: "https://manipur.gov.in", highlights: ["Tribal development", "Education scholarships", "Self-help group support"] },
  { slug: "meghalaya", name: "Meghalaya", capital: "Shillong", region: "North East", portal: "https://meghalaya.gov.in", highlights: ["MOTHER scheme", "Hill area benefits", "Education grants"] },
  { slug: "mizoram", name: "Mizoram", capital: "Aizawl", region: "North East", portal: "https://mizoram.gov.in", highlights: ["Socio-economic development", "Education support", "Farmer schemes"] },
  { slug: "nagaland", name: "Nagaland", capital: "Kohima", region: "North East", portal: "https://www.nagaland.gov.in", highlights: ["Tribal welfare", "Skill development", "Education scholarships"] },
  { slug: "odisha", name: "Odisha", capital: "Bhubaneswar", region: "East", portal: "https://odisha.gov.in", highlights: ["KALIA farmer support", "Biju welfare schemes", "Mo Sarkar services"] },
  { slug: "punjab", name: "Punjab", capital: "Chandigarh", region: "North", portal: "https://punjab.gov.in", highlights: ["Connect citizen services", "Pension schemes", "Education benefits"] },
  { slug: "rajasthan", name: "Rajasthan", capital: "Jaipur", region: "North", portal: "https://rajasthan.gov.in", highlights: ["Jan Aadhaar benefits", "SSO portal services", "Palanhar scheme"] },
  { slug: "sikkim", name: "Sikkim", capital: "Gangtok", region: "North East", portal: "https://sikkim.gov.in", highlights: ["Hill area development", "Education scholarships", "Welfare pensions"] },
  { slug: "tamil-nadu", name: "Tamil Nadu", capital: "Chennai", region: "South", portal: "https://www.tn.gov.in", highlights: ["e-Sevai services", "Pudhumai Penn scheme", "Farmer welfare"] },
  { slug: "telangana", name: "Telangana", capital: "Hyderabad", region: "South", portal: "https://www.telangana.gov.in", highlights: ["Rythu Bandhu support", "Aasara pensions", "MeeSeva services"] },
  { slug: "tripura", name: "Tripura", capital: "Agartala", region: "North East", portal: "https://tripura.gov.in", highlights: ["Social welfare schemes", "Tribal development", "Education grants"] },
  { slug: "uttar-pradesh", name: "Uttar Pradesh", capital: "Lucknow", region: "North", portal: "https://up.gov.in", highlights: ["e-District UP services", "Kanya Sumangala Yojana", "Pension schemes"] },
  { slug: "uttarakhand", name: "Uttarakhand", capital: "Dehradun", region: "North", portal: "https://uk.gov.in", highlights: ["Hill area schemes", "Education scholarships", "Self-employment support"] },
  { slug: "west-bengal", name: "West Bengal", capital: "Kolkata", region: "East", portal: "https://wb.gov.in", highlights: ["Lakshmir Bhandar", "Kanyashree scholarships", "Swasthya Sathi health"] },
  { slug: "delhi", name: "Delhi", capital: "New Delhi", region: "Union Territory", portal: "https://delhi.gov.in", highlights: ["e-District Delhi services", "Pension schemes", "Education benefits"] },
  { slug: "jammu-and-kashmir", name: "Jammu & Kashmir", capital: "Srinagar / Jammu", region: "Union Territory", portal: "https://jk.gov.in", highlights: ["e-Services portal", "Welfare schemes", "Education scholarships"] },
  { slug: "ladakh", name: "Ladakh", capital: "Leh", region: "Union Territory", portal: "https://ladakh.gov.in", highlights: ["Hill area benefits", "Education support", "Welfare schemes"] },
  { slug: "puducherry", name: "Puducherry", capital: "Puducherry", region: "Union Territory", portal: "https://py.gov.in", highlights: ["Welfare board schemes", "Education scholarships", "Pension support"] },
  { slug: "chandigarh", name: "Chandigarh", capital: "Chandigarh", region: "Union Territory", portal: "https://chandigarh.gov.in", highlights: ["e-Sampark services", "Welfare schemes", "Education benefits"] },
];

export function getStateBySlug(slug: string): StateInfo | undefined {
  return states.find((s) => s.slug === slug);
}
