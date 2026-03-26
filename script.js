// ===== Navigation Active Tab =====
document.addEventListener('DOMContentLoaded', () => {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-tabs a');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    const linkPage = href.split('/').pop();
    if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
      link.classList.add('active');
    }
  });
});

// ===== LocalStorage Helpers =====
const Storage = {
  get(key, fallback = null) {
    try {
      const val = localStorage.getItem(key);
      return val ? JSON.parse(val) : fallback;
    } catch {
      return fallback;
    }
  },
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

// ===== Revision Status =====
function getRevisedQuestions() {
  return Storage.get('revisedQuestions', []);
}

function toggleRevised(questionId) {
  const revised = getRevisedQuestions();
  const idx = revised.indexOf(questionId);
  if (idx === -1) {
    revised.push(questionId);
  } else {
    revised.splice(idx, 1);
  }
  Storage.set('revisedQuestions', revised);
  return idx === -1; // returns true if now revised
}

function isRevised(questionId) {
  return getRevisedQuestions().includes(questionId);
}

// ===== Quiz Score History =====
function saveQuizScore(chapter, correct, total, timeTaken) {
  const scores = Storage.get('quizScores', []);
  scores.unshift({
    chapter,
    correct,
    total,
    timeTaken,
    date: new Date().toLocaleDateString()
  });
  // Keep only last 5
  if (scores.length > 5) scores.length = 5;
  Storage.set('quizScores', scores);
}

function getQuizScores() {
  return Storage.get('quizScores', []);
}

// ===== Chapter Progress =====
function getChapterProgress() {
  return Storage.get('chapterProgress', {});
}

function updateChapterProgress(chapter) {
  const progress = getChapterProgress();
  if (!progress[chapter]) progress[chapter] = 0;
  progress[chapter]++;
  Storage.set('chapterProgress', progress);
}

// ===== Utility Functions =====
function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function randomPick(arr, count) {
  return shuffleArray(arr).slice(0, count);
}

// ===== Flashcard Facts =====
const physicsFacts = [
  { q: "What is the SI unit of pressure?", a: "Pascal (Pa) — equal to 1 N/m²" },
  { q: "What is friction?", a: "The force that opposes the relative motion between two surfaces in contact" },
  { q: "Speed of sound in air at 25°C?", a: "Approximately 346 m/s" },
  { q: "What is the law of reflection?", a: "Angle of incidence = Angle of reflection" },
  { q: "What part of the eye controls light entry?", a: "The iris controls the size of the pupil to regulate light" },
  { q: "Why do we hear thunder after seeing lightning?", a: "Light travels much faster than sound" },
  { q: "Formula for Pressure?", a: "Pressure = Force ÷ Area" },
  { q: "What is static friction?", a: "Friction that acts on an object at rest, preventing it from moving" },
  { q: "What causes refraction?", a: "Change in speed of light when it passes from one medium to another" },
  { q: "Range of human hearing?", a: "20 Hz to 20,000 Hz (20 kHz)" },
  { q: "What is lateral inversion?", a: "The left-right reversal of an image in a plane mirror" },
  { q: "Why are treads on tyres important?", a: "They increase friction for better grip on wet roads" },
  { q: "What is the near point of a normal eye?", a: "25 cm (also called least distance of distinct vision)" },
  { q: "What is 1 Pascal?", a: "1 Pa = 1 Newton per square metre (1 N/m²)" },
  { q: "What type of mirror is used in torches?", a: "Concave mirror — to produce a parallel beam of light" }
];
