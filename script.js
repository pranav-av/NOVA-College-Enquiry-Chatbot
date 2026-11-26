/* NOVA uses fictional, predefined sample answers. No API or server is required. */
const answers = [
  {
    topic: 'courses',
    keywords: ['course', 'courses', 'program', 'programs', 'programme', 'programmes', 'degree', 'degrees', 'branch', 'branches', 'major', 'majors'],
    phrases: ['what can i study', 'what do you teach', 'available course', 'course list', 'what do you offer', 'academic program', 'program offered'],
    reply: 'Our fictional sample programmes are B.Sc. Computer Science, B.Sc. Data Science, B.Tech. Information Technology, BBA, and M.Sc. Applied Computing. Programme availability is sample information.'
  },
  {
    topic: 'durations',
    keywords: ['duration', 'durations', 'length'],
    phrases: ['how many years', 'how long does a course', 'course duration'],
    reply: 'Fictional sample course durations: B.Sc. and BBA are 3 years, B.Tech. is 4 years, and M.Sc. is 2 years.'
  },
  {
    topic: 'admissions',
    keywords: ['admission', 'admissions', 'apply', 'application', 'applications', 'enrol', 'enroll', 'enrollment', 'enrolment', 'registration', 'intake', 'enquiry', 'enquire', 'enquiring'],
    phrases: ['how do i join', 'how can i join', 'how do i get in', 'application process', 'how to apply', 'when can i apply', 'admission process'],
    reply: 'For this sample college, applications are shown as opening in March and closing in June. Submit the online application, school transcripts, a photo ID, and your programme preference. These dates and steps are fictional demonstration data.'
  },
  {
    topic: 'fees',
    keywords: ['fee', 'fees', 'tuition', 'cost', 'costs', 'price', 'pricing', 'payment', 'payments', 'installment', 'instalment'],
    phrases: ['how much', 'fee structure', 'what does it cost', 'annual fee', 'annual fees'],
    reply: 'Fictional sample annual tuition: B.Sc. Computer Science ₹85,000; B.Sc. Data Science ₹95,000; B.Tech. Information Technology ₹1,20,000; BBA ₹70,000; M.Sc. Applied Computing ₹90,000. These are demonstration figures only.'
  },
  {
    topic: 'eligibility',
    keywords: ['eligibility', 'eligible', 'qualify', 'qualification', 'qualifications', 'requirement', 'requirements', 'criteria', 'marks', 'percentage', 'cutoff', 'cut-off', 'entrance'],
    phrases: ['who can apply', 'can i apply', 'what do i need', 'minimum score', 'minimum marks', 'entry requirement'],
    reply: 'Fictional sample eligibility: B.Sc. and BBA applicants need Grade 12 with 50% marks; B.Tech. applicants need Grade 12 with Physics and Mathematics and 55%; M.Sc. applicants need a relevant bachelor’s degree with 50%. These are sample criteria only.'
  },
  {
    topic: 'timings',
    keywords: ['timing', 'timings', 'hours', 'schedule', 'class', 'classes', 'working', 'office', 'weekday', 'weekend'],
    phrases: ['what time', 'when are you open', 'college hours', 'class timing', 'working hours', 'office hours'],
    reply: 'Sample campus hours are Monday to Friday, 8:30 AM–4:30 PM. Administrative enquiries are shown as available until 5:00 PM on weekdays. These hours are fictional sample information.'
  },
  {
    topic: 'library',
    keywords: ['library', 'libraries', 'book', 'books', 'reading', 'journal', 'journals', 'ebook', 'catalogue', 'catalog'],
    phrases: ['study space', 'reading room', 'library facility', 'library open'],
    reply: 'The sample campus library has quiet study areas, course books, journals, and digital learning resources. In this example it is open from 8:00 AM to 6:00 PM on weekdays.'
  },
  {
    topic: 'laboratories',
    keywords: ['laboratory', 'laboratories', 'lab', 'labs', 'equipment', 'research', 'workshop', 'workshops', 'practical'],
    phrases: ['lab facility', 'lab facilities', 'science lab', 'computer lab', 'hands-on'],
    reply: 'NOVA’s fictional sample campus includes computer, electronics, and general science laboratories with supervised practical sessions. Facilities and equipment described here are illustrative sample data.'
  },
  {
    topic: 'hostel',
    keywords: ['hostel', 'hostels', 'accommodation', 'housing', 'dorm', 'dormitory', 'residence', 'residential', 'room', 'rooms', 'stay'],
    phrases: ['place to stay', 'live on campus', 'stay on campus', 'hostel facility', 'hostel facilities'],
    reply: 'Yes. The sample information describes separate supervised hostels for women and men, with shared rooms, Wi-Fi, and a dining hall. Sample accommodation is listed at ₹72,000 per academic year.'
  },
  {
    topic: 'location',
    keywords: ['location', 'address', 'located', 'directions', 'route', 'map', 'nearby'],
    phrases: ['how do i get there', 'how to get there', 'how can i get to campus', 'how do i get to campus', 'how can i reach', 'how do i reach campus', 'how do i reach nova', 'how do i reach the college', 'how to reach the college', 'where are you', 'where is the college', 'where can i find the college', 'where can i find nova', 'where is nova', 'where is campus', 'college address', 'campus address'],
    reply: 'For demonstration, Nova Institute of Science and Technology is placed at 42 Knowledge Park Road, Bengaluru, Karnataka 560001. This is a fictional sample address and is not a real campus location.'
  },
  {
    topic: 'contact',
    keywords: ['contact', 'phone', 'telephone', 'email', 'mail', 'call', 'helpline', 'connect', 'website'],
    phrases: ['contact details', 'contact information', 'how do i contact', 'how can i call', 'how can i email', 'get in touch', 'phone number', 'email address'],
    reply: 'Sample enquiry desk details: +91 80 5550 0123 and admissions@nova-example.edu. These contact details are fictional and provided only to demonstrate the chatbot.'
  },
  {
    topic: 'transport',
    keywords: ['transport', 'transportation', 'shuttle', 'bus', 'buses', 'commute', 'pickup', 'pick-up'],
    phrases: ['transport facility', 'transport facilities', 'college transportation', 'college bus', 'bus service', 'bus facility', 'bus facilities'],
    reply: 'Fictional sample transport: the college operates morning and evening shuttle buses on three routes within Bengaluru. Route lists and fares would be shared during enrolment.'
  },
  {
    topic: 'scholarships',
    keywords: ['scholarship', 'scholarships', 'bursary', 'bursaries', 'financial'],
    phrases: ['financial aid', 'fee assistance', 'scholarship details'],
    reply: 'In this fictional example, merit and need-based scholarships may cover 10–20% of annual tuition. Students submit a separate application with their marks and supporting documents.'
  },
  {
    topic: 'examinations',
    keywords: ['exam', 'exams', 'examination', 'examinations', 'assessment', 'assessments', 'test', 'tests', 'grading', 'grade'],
    phrases: ['exam schedule', 'exam pattern', 'how are students assessed'],
    reply: 'Fictional sample examinations include internal assessments during each term and end-of-semester written or practical exams. The academic office publishes a timetable before each examination period.'
  },
  {
    topic: 'placements',
    keywords: ['placement', 'placements', 'career', 'careers', 'internship', 'internships', 'recruiter', 'recruiters', 'job', 'jobs'],
    phrases: ['placement assistance', 'career support', 'campus recruitment'],
    reply: 'The sample college offers resume workshops, interview practice, and internship and recruiter information sessions. Placement support is fictional and does not guarantee a job.'
  },
  {
    topic: 'calendar',
    keywords: ['calendar', 'semester', 'semesters', 'term', 'terms', 'holiday', 'holidays', 'vacation', 'reopen', 'reopens', 'begins'],
    phrases: ['academic calendar', 'college calendar', 'term dates', 'academic schedule', 'academic year begin', 'academic year begins', 'academic year start', 'academic year starts', 'when does the academic year begin', 'when does the academic year start', 'when does college reopen', 'when does the college reopen', 'when will college reopen', 'college reopens'],
    reply: 'Fictional sample calendar: the academic year begins in July, with odd semesters from July to November and even semesters from January to April. Holiday and examination dates are shared at the start of each term.'
  }
];

const courseDetails = [
  { name: 'B.Sc. Computer Science', aliases: ['b sc computer science', 'bsc computer science', 'b sc cs', 'bsc cs', 'computer science'], fee: '₹85,000', duration: '3 years', eligibility: 'Grade 12 with 50% marks; Mathematics is recommended.' },
  { name: 'B.Sc. Data Science', aliases: ['b sc data science', 'bsc data science', 'data science'], fee: '₹95,000', duration: '3 years', eligibility: 'Grade 12 with 50% marks; Mathematics is recommended.' },
  { name: 'B.Tech. Information Technology', aliases: ['b tech information technology', 'btech information technology', 'information technology', 'b tech it'], fee: '₹1,20,000', duration: '4 years', eligibility: 'Grade 12 with Physics and Mathematics and 55% marks.' },
  { name: 'BBA', aliases: ['bba', 'business administration'], fee: '₹70,000', duration: '3 years', eligibility: 'Grade 12 with 50% marks in any stream.' },
  { name: 'M.Sc. Applied Computing', aliases: ['m sc applied computing', 'msc applied computing', 'applied computing'], fee: '₹90,000', duration: '2 years', eligibility: 'A relevant bachelor’s degree with 50% marks.' }
];

const friendlyReplies = {
  greeting: ['Hello! Welcome to NOVA. What would you like to know about the college?', 'Hi there! I’m happy to help with your college questions.', 'Hey! Ask me about courses, fees, admissions, or campus facilities.', 'Good to hear from you! How can I help with your NOVA enquiry?'],
  howAreYou: ['I’m doing well, thank you! How can I help with your college enquiry?', 'I’m great, thanks for asking! What would you like to know about NOVA?', 'Doing well and ready to help. What can I answer for you?'],
  thanks: ['You’re welcome! Let me know if you have another question.', 'Glad I could help! Anything else you’d like to know?', 'Happy to help. Feel free to ask another question!'],
  bye: ['Goodbye! Best wishes with your college search.', 'Take care, and thanks for visiting NOVA!', 'Bye for now! You can come back any time with another question.'],
  help: ['I can help with courses, course fees, admissions, eligibility, timings, facilities, transport, scholarships, exams, placements, and the academic calendar. What would you like to know?']
};
let replyCursor = 0;

function nextFriendlyReply(type) {
  const options = friendlyReplies[type];
  const reply = options[replyCursor % options.length];
  replyCursor += 1;
  return reply;
}

const conversation = document.querySelector('#conversation');
const form = document.querySelector('#chat-form');
const input = document.querySelector('#question-input');

function normalize(text) {
  return text.toLowerCase().replace(/[^\p{L}\p{N}\s-]/gu, ' ').replace(/\s+/g, ' ').trim();
}

function answerQuestion(question) {
  const normalized = normalize(question);
  const padded = ` ${normalized} `;
  const tokens = new Set(normalized.split(/\s+/).filter(Boolean));
  const hasPhrase = phrase => padded.includes(` ${normalize(phrase)} `);

  if (/^(hi|hello|hey|greetings)( there)?( nova)?$/.test(normalized) || /^(good morning|good afternoon|good evening)( nova)?$/.test(normalized)) {
    return nextFriendlyReply('greeting');
  }
  if (/^how are you( nova)?$/.test(normalized)) return nextFriendlyReply('howAreYou');
  if (/^(thanks|thank you|many thanks)( nova)?( so much)?$/.test(normalized)) return nextFriendlyReply('thanks');
  if (/^(bye|goodbye|see you|see you later)( nova)?( see you( later)?)?$/.test(normalized)) return nextFriendlyReply('bye');
  if (/^(help|help me|can you help|what can you help me with|what can you tell me)$/.test(normalized)) return nextFriendlyReply('help');

  const course = courseDetails.find(item => item.aliases.some(alias => hasPhrase(alias)));
  const asksFee = ['fee', 'fees', 'tuition', 'cost', 'costs', 'price', 'pricing'].some(word => tokens.has(word)) || ['how much', 'fee structure', 'annual fee', 'annual fees'].some(hasPhrase);
  const asksDuration = ['duration', 'length', 'long'].some(word => tokens.has(word)) || ['how many years', 'how long'].some(hasPhrase);
  const asksEligibility = ['eligibility', 'eligible', 'qualify', 'qualification', 'qualifications', 'requirement', 'requirements', 'criteria', 'marks', 'percentage', 'cutoff', 'entrance'].some(word => tokens.has(word)) || ['who can apply', 'what do i need', 'minimum marks', 'entry requirement'].some(hasPhrase);

  if (course && (asksFee || asksDuration || asksEligibility || hasPhrase('can i apply'))) {
    const details = [];
    if (asksFee) details.push(`annual tuition is ${course.fee}`);
    if (asksDuration) details.push(`duration is ${course.duration}`);
    if (asksEligibility || hasPhrase('can i apply')) details.push(`sample eligibility: ${course.eligibility}`);
    return `${course.name}: ${details.join('; ')}. This is fictional sample information.`;
  }

  // Prefer clear, specific campus topics over broad terms such as "campus" or "schedule".
  for (const topic of ['admissions', 'timings', 'library', 'laboratories', 'hostel', 'contact', 'transport', 'scholarships', 'examinations', 'placements', 'calendar', 'location']) {
    const item = answers.find(answer => answer.topic === topic);
    const topicKeywords = topic === 'examinations' ? item.keywords.filter(keyword => keyword !== 'grade') : item.keywords;
    const topicMatched = topicKeywords.some(keyword => tokens.has(normalize(keyword))) || item.phrases.some(hasPhrase);
    if (topicMatched) return item.reply;
  }

  if (course) {
    return `${course.name}: annual tuition is ${course.fee}; duration is ${course.duration}; sample eligibility: ${course.eligibility} This is fictional sample information.`;
  }

  if (tokens.has('fee') || tokens.has('fees') || tokens.has('tuition') || tokens.has('cost') || tokens.has('costs') || tokens.has('price') || tokens.has('pricing')) {
    const feeItem = answers.find(item => item.topic === 'fees');
    return feeItem.reply;
  }

  let bestMatch = null;
  let bestScore = 0;

  for (const item of answers) {
    const phraseMatch = item.phrases.some(hasPhrase);
    const keywordScore = item.keywords.reduce((score, keyword) => {
      const key = normalize(keyword);
      return score + (key.includes(' ') ? (hasPhrase(key) ? 2 : 0) : (tokens.has(key) ? 1 : 0));
    }, 0);
    const score = keywordScore + (phraseMatch ? 3 : 0);
    if (score > bestScore) {
      bestScore = score;
      bestMatch = item;
    }
  }

  if (bestMatch && bestScore > 0) return bestMatch.reply;
  return 'I’m sorry, I don’t have a sample answer for that yet. You can ask about a course or its fees, admissions, eligibility, timings, the library, labs, hostel, transport, scholarships, exams, placements, the academic calendar, location, or contact details.';
}

function currentTime() {
  return new Intl.DateTimeFormat(undefined, { hour: 'numeric', minute: '2-digit' }).format(new Date());
}

function addMessage(text, sender) {
  const row = document.createElement('article');
  row.className = `message-row ${sender === 'student' ? 'student-row' : 'bot-row'}`;

  const content = document.createElement('div');
  content.className = 'message-content';
  const meta = document.createElement('div');
  meta.className = 'message-meta';
  const name = document.createElement('span');
  name.textContent = sender === 'student' ? 'You' : 'NOVA Assistant';
  const time = document.createElement('time');
  time.dateTime = new Date().toISOString();
  time.textContent = currentTime();
  meta.append(name, time);

  const bubble = document.createElement('div');
  bubble.className = `bubble ${sender === 'student' ? 'student-bubble' : 'bot-bubble'}`;
  const paragraph = document.createElement('p');
  paragraph.textContent = text;
  bubble.append(paragraph);
  content.append(meta, bubble);

  if (sender === 'bot') {
    const avatar = document.createElement('div');
    avatar.className = 'message-avatar';
    avatar.setAttribute('aria-hidden', 'true');
    avatar.textContent = 'N';
    row.append(avatar, content);
  } else {
    row.append(content);
  }

  conversation.append(row);
  conversation.scrollTop = conversation.scrollHeight;
}

form.addEventListener('submit', event => {
  event.preventDefault();
  const question = input.value.trim();
  if (!question) return;

  addMessage(question, 'student');
  input.value = '';
  input.focus();
  window.setTimeout(() => addMessage(answerQuestion(question), 'bot'), 220);
});

document.querySelectorAll('.suggestion-chip').forEach(button => {
  button.addEventListener('click', () => {
    input.value = button.dataset.question;
    form.requestSubmit();
  });
});

document.querySelector('.message-meta time').textContent = currentTime();
