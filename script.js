/* ============================================
   charity: water — Higher or Lower Game
   Core Game Logic (script.js)
   ============================================ */

// ─── WATER FACTS DATA ──────────────────────────────────────────────────────────
const waterFacts = {
  charityWaterFacts: [
    {
      fact: "People served by charity: water since 2006",
      number: 17000000,
      display: "17 million",
      unit: "people",
      funFact: "charity: water has funded over 137,000 water projects in 29 countries.",
      source: "charitywater.org"
    },
    {
      fact: "Water projects funded by charity: water worldwide",
      number: 137000,
      display: "137,000",
      unit: "projects",
      funFact: "Each project serves an average of 125 people with clean drinking water.",
      source: "charitywater.org"
    },
    {
      fact: "Countries where charity: water has funded projects",
      number: 29,
      display: "29",
      unit: "countries",
      funFact: "charity: water focuses on the countries with the highest need across Africa, Asia, and Central/South America.",
      source: "charitywater.org"
    },
    {
      fact: "Cost to give one person clean water through charity: water",
      number: 40,
      display: "$40",
      unit: "dollars",
      funFact: "That's less than the cost of a pair of sneakers — but it changes a life forever.",
      source: "charitywater.org"
    },
    {
      fact: "Percentage of charity: water donations that go directly to water projects",
      number: 100,
      display: "100%",
      unit: "percent",
      funFact: "charity: water covers operating costs through a separate group of donors called The Well.",
      source: "charitywater.org"
    },
    {
      fact: "Remote sensors deployed by charity: water to monitor water flow",
      number: 130000,
      display: "130,000",
      unit: "sensors",
      funFact: "These sensors transmit real-time data via satellite so communities always have working water.",
      source: "charitywater.org"
    },
    {
      fact: "People who gain access to clean water through a single well in rural Africa",
      number: 250,
      display: "250",
      unit: "people per well",
      funFact: "A single well can transform an entire village — kids go to school, parents grow businesses.",
      source: "charitywater.org"
    },
    {
      fact: "Lifespan in years of a charity: water-funded well",
      number: 20,
      display: "20",
      unit: "years",
      funFact: "charity: water partners with local organizations to maintain wells long after they're built.",
      source: "charitywater.org"
    }
  ],

  casualFacts: [
    {
      fact: "Gallons of water used in an average American shower",
      number: 17,
      display: "17",
      unit: "gallons",
      funFact: "Cutting your shower by just 2 minutes saves about 5 gallons of water.",
      source: "EPA"
    },
    {
      fact: "Gallons of water needed to produce a single hamburger",
      number: 660,
      display: "660",
      unit: "gallons",
      funFact: "That's mostly from growing the grain to feed the cattle. Wild, right?",
      source: "USGS"
    },
    {
      fact: "Gallons of water an average American uses per day",
      number: 82,
      display: "82",
      unit: "gallons/day",
      funFact: "In parts of sub-Saharan Africa, people use as little as 2-5 gallons per day.",
      source: "USGS"
    },
    {
      fact: "Gallons of water needed to produce one pair of jeans",
      number: 1800,
      display: "1,800",
      unit: "gallons",
      funFact: "Fast fashion is one of the most water-intensive industries on the planet.",
      source: "World Wildlife Fund"
    },
    {
      fact: "Gallons of water needed to produce a single cotton t-shirt",
      number: 700,
      display: "700",
      unit: "gallons",
      funFact: "Think about that the next time you're scrolling through a clothing haul on TikTok.",
      source: "World Wildlife Fund"
    },
    {
      fact: "People worldwide without access to clean water (in millions)",
      number: 703,
      display: "703",
      unit: "million people",
      funFact: "That's roughly twice the entire population of the United States.",
      source: "WHO/UNICEF 2023"
    },
    {
      fact: "Hours women and girls spend collecting water globally each day (combined)",
      number: 200000000,
      display: "200 million",
      unit: "hours/day",
      funFact: "That's time that could be spent in school, at work, or just being a kid.",
      source: "UNICEF"
    },
    {
      fact: "Children who die every day from waterborne diseases",
      number: 1000,
      display: "1,000",
      unit: "children/day",
      funFact: "Most of these deaths are preventable with access to clean water and basic sanitation.",
      source: "WHO"
    },
    {
      fact: "Percentage of the Earth's water that is freshwater",
      number: 3,
      display: "3%",
      unit: "percent",
      funFact: "And most of that freshwater is locked in glaciers and ice caps. Only ~1% is accessible.",
      source: "USGS"
    },
    {
      fact: "Gallons of water a leaky faucet wastes per year",
      number: 3000,
      display: "3,000",
      unit: "gallons/year",
      funFact: "That's enough to take 180 showers. Fix that drip!",
      source: "EPA"
    },
    {
      fact: "Gallons of water used to produce 1 pound of chocolate",
      number: 3170,
      display: "3,170",
      unit: "gallons",
      funFact: "Your Valentine's Day box of chocolates has a hidden water footprint.",
      source: "Water Footprint Network"
    },
    {
      fact: "Gallons of water used to produce a single almond",
      number: 1,
      display: "1.1",
      unit: "gallons per almond",
      funFact: "California produces 80% of the world's almonds — in one of the driest states.",
      source: "UC Davis"
    },
    {
      fact: "Gallons of water needed to produce one avocado",
      number: 60,
      display: "60",
      unit: "gallons",
      funFact: "Still worth it for the guac though, right? (But think about it.)",
      source: "Water Footprint Network"
    },
    {
      fact: "Miles the average woman in Africa walks to collect water",
      number: 4,
      display: "3.7",
      unit: "miles round trip",
      funFact: "Imagine walking almost 4 miles before your day even starts. Every single day.",
      source: "The Water Project"
    },
    {
      fact: "Gallons of water used to produce one egg",
      number: 53,
      display: "53",
      unit: "gallons",
      funFact: "Water goes into growing the chicken's feed, keeping it hydrated, and processing.",
      source: "Water Footprint Network"
    },
    {
      fact: "Gallons of water used to produce one glass of milk",
      number: 30,
      display: "30",
      unit: "gallons",
      funFact: "Oat milk uses significantly less water — about 12 gallons per glass.",
      source: "Water Footprint Network"
    },
    {
      fact: "Percentage of the world's population facing water scarcity at least one month per year",
      number: 66,
      display: "66%",
      unit: "percent",
      funFact: "Two-thirds of the planet. Water scarcity isn't a distant problem — it's everyone's problem.",
      source: "UN Water"
    },
    {
      fact: "Gallons of water needed to produce a cup of coffee",
      number: 37,
      display: "37",
      unit: "gallons",
      funFact: "Your morning latte has a bigger footprint than you'd think.",
      source: "Water Footprint Network"
    },
    {
      fact: "Gallons of water used by a running toilet per day",
      number: 200,
      display: "200",
      unit: "gallons/day",
      funFact: "A silent toilet leak can waste 200 gallons a day without you even noticing.",
      source: "EPA"
    },
    {
      fact: "Gallons of water needed to produce one slice of bread",
      number: 11,
      display: "11",
      unit: "gallons",
      funFact: "A whole loaf? About 240 gallons. Sandwich, anyone?",
      source: "Water Footprint Network"
    },
    {
      fact: "Percentage of hospital beds in developing countries occupied by water-related illness patients",
      number: 50,
      display: "50%",
      unit: "percent",
      funFact: "Clean water doesn't just quench thirst — it's literally medicine.",
      source: "WHO"
    }
  ]
};

// ─── IMPACT FACTS (shown on game-over screen) ─────────────────────────────────
const impactFacts = [
  {
    stat: "703 million",
    text: "people worldwide don't have access to clean water close to home. That's nearly 1 in 10 people on the planet."
  },
  {
    stat: "200 million",
    text: "hours are spent every day by women and girls just collecting water. Time that could be spent in school or at work."
  },
  {
    stat: "$40",
    text: "can give one person access to clean water through charity: water. Less than your monthly streaming subscriptions."
  },
  {
    stat: "1,000",
    text: "children die every single day from unsafe water and poor sanitation. Most of these deaths are preventable."
  },
  {
    stat: "17 million",
    text: "people have been served with clean water thanks to charity: water donors since 2006."
  },
  {
    stat: "50%",
    text: "of hospital beds in the developing world are filled with patients suffering from water-related diseases."
  },
  {
    stat: "3.7 miles",
    text: "is the average distance women and girls in Africa walk every day just to get water for their families."
  },
  {
    stat: "100%",
    text: "of public donations to charity: water go directly to funding clean water projects. Every cent."
  }
];

// ─── DOM REFERENCES ────────────────────────────────────────────────────────────
const $ = (sel) => document.querySelector(sel);

const dom = {
  // Screens
  splashScreen:   $('#splash-screen'),
  gameScreen:     $('#game-screen'),
  resultsScreen:  $('#results-screen'),

  // Header
  hamburgerBtn:   $('#hamburger-btn'),
  headerNav:      $('#header-nav'),

  // Splash
  startBtn:       $('#start-btn'),

  // Game sub-header
  scoreEl:        $('#score'),
  timerEl:        $('#timer'),
  timerPill:      $('#timer-pill'),

  // Left card (reference)
  leftCategory:   $('#left-category'),
  leftLabel:      $('#left-label'),
  leftNumber:     $('#left-number'),
  leftUnit:       $('#left-unit'),

  // Right card (guess)
  rightCategory:  $('#right-category'),
  rightLabel:     $('#right-label'),
  rightNumber:    $('#right-number'),
  rightUnit:      $('#right-unit'),

  // Cards themselves
  cardLeft:       $('#card-left'),
  cardRight:      $('#card-right'),

  // Guess buttons
  guessButtons:   $('#guess-buttons'),
  btnHigher:      $('#btn-higher'),
  btnLower:       $('#btn-lower'),

  // Result feedback overlay
  resultFeedback: $('#result-feedback'),
  resultIcon:     $('#result-icon'),
  resultText:     $('#result-text'),
  funFact:        $('#fun-fact'),
  btnNext:        $('#btn-next'),

  // Results / game-over
  finalScore:     $('#final-score'),
  finalHighScore: $('#final-high-score'),
  newRecord:      $('#new-record'),
  awarenessStat:  $('#awareness-stat'),
  awarenessText:  $('#awareness-text'),
  playAgainBtn:   $('#play-again-btn'),
  shareBtn:       $('#share-btn'),
};

// ─── GAME STATE ────────────────────────────────────────────────────────────────
let currentScore = 0;
let bestScore = parseInt(localStorage.getItem('waterHL_bestScore')) || 0;
let factsPool = [];
let topCardFact = null;
let bottomCardFact = null;
let timeLeft = 10;
let timerInterval = null;
let isGuessing = false; // locks input while revealing

// ─── SCREEN MANAGEMENT ─────────────────────────────────────────────────────────
function showScreen(screen) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  screen.classList.add('active');
}

// ─── HAMBURGER MENU (mobile) ───────────────────────────────────────────────────
dom.hamburgerBtn.addEventListener('click', () => {
  dom.hamburgerBtn.classList.toggle('open');
  dom.headerNav.classList.toggle('open');
});

// Close mobile nav when clicking a link
dom.headerNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    dom.hamburgerBtn.classList.remove('open');
    dom.headerNav.classList.remove('open');
  });
});

// ─── UTILITY HELPERS ───────────────────────────────────────────────────────────
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function formatNumber(n) {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(n % 1_000_000 === 0 ? 0 : 1) + ' million';
  return n.toLocaleString();
}

// ─── INIT FACTS POOL ───────────────────────────────────────────────────────────
function buildFactsPool() {
  // Combine both arrays and shuffle
  const combined = [
    ...waterFacts.charityWaterFacts,
    ...waterFacts.casualFacts
  ];
  factsPool = shuffle(combined);
}

function getRandomFact() {
  if (factsPool.length === 0) {
    // Reshuffle if somehow exhausted (very long run)
    buildFactsPool();
  }
  return factsPool.pop();
}

// ─── CARD LOADING ──────────────────────────────────────────────────────────────
function loadCards() {
  // Reset card visual states
  dom.cardLeft.classList.remove('correct', 'wrong', 'card-enter');
  dom.cardRight.classList.remove('correct', 'wrong', 'card-enter');
  dom.rightNumber.classList.remove('reveal');
  dom.rightNumber.classList.add('card-number--hidden');
  dom.rightNumber.textContent = '???';

  // Populate left (reference) card
  dom.leftCategory.textContent = topCardFact.source || 'Water Fact';
  dom.leftLabel.textContent = topCardFact.fact;
  dom.leftNumber.textContent = topCardFact.display;
  dom.leftUnit.textContent = topCardFact.unit || '';

  // Populate right (guess) card
  dom.rightCategory.textContent = bottomCardFact.source || 'Water Fact';
  dom.rightLabel.textContent = bottomCardFact.fact;
  dom.rightUnit.textContent = bottomCardFact.unit || '';

  // Trigger entrance animation
  requestAnimationFrame(() => {
    dom.cardLeft.classList.add('card-enter');
    dom.cardRight.classList.add('card-enter');
  });

  // Re-enable guess buttons
  dom.guessButtons.classList.remove('hidden');
  dom.btnHigher.disabled = false;
  dom.btnLower.disabled = false;
  dom.btnHigher.removeAttribute('aria-disabled');
  dom.btnLower.removeAttribute('aria-disabled');
  isGuessing = false;
}

// ─── TIMER ─────────────────────────────────────────────────────────────────────
function startTimer() {
  timeLeft = 10;
  updateTimerDisplay();

  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();

    if (timeLeft <= 0) {
      stopTimer();
      endGame(); // Timer ran out = game over
    }
  }, 1000);
}

function updateTimerDisplay() {
  dom.timerEl.textContent = timeLeft;

  // Visual warning when running low
  if (timeLeft <= 3) {
    dom.timerPill.classList.add('warning');
  } else {
    dom.timerPill.classList.remove('warning');
  }
}

function stopTimer() {
  clearInterval(timerInterval);
}

// ─── HANDLE GUESS ──────────────────────────────────────────────────────────────
function handleGuess(guessedHigher) {
  if (isGuessing) return;
  isGuessing = true;
  stopTimer();

  // Disable buttons immediately to prevent double-clicks
  dom.btnHigher.disabled = true;
  dom.btnLower.disabled = true;
  dom.btnHigher.setAttribute('aria-disabled', 'true');
  dom.btnLower.setAttribute('aria-disabled', 'true');

  const topVal = topCardFact.number;
  const bottomVal = bottomCardFact.number;

  // Determine correctness
  let correct = false;
  if (guessedHigher && bottomVal >= topVal) correct = true;
  if (!guessedHigher && bottomVal <= topVal) correct = true;

  // Step 1: Reveal the number with animation
  dom.rightNumber.classList.remove('card-number--hidden');
  dom.rightNumber.classList.add('reveal');
  dom.rightNumber.textContent = bottomCardFact.display;

  // Step 2: After a beat, flash the card green/red
  setTimeout(() => {
    if (correct) {
      dom.cardRight.classList.add('correct');
      currentScore++;
      dom.scoreEl.textContent = currentScore;
    } else {
      dom.cardRight.classList.add('wrong');
    }

    // Step 3: After flash settles, show the overlay with fun fact
    setTimeout(() => {
      showResultFeedback(correct, bottomCardFact.funFact);
    }, 600);
  }, 400);
}

// ─── RESULT FEEDBACK OVERLAY ───────────────────────────────────────────────────
function showResultFeedback(correct, funFactText) {
  dom.resultFeedback.classList.remove('hidden');

  if (correct) {
    dom.resultIcon.textContent = '✅';
    dom.resultText.textContent = getCorrectMessage();
    dom.btnNext.textContent = 'Next →';
    dom.btnNext.onclick = () => {
      dom.resultFeedback.classList.add('hidden');
      advanceCards();
    };
  } else {
    dom.resultIcon.textContent = '❌';
    dom.resultText.textContent = getWrongMessage();
    dom.btnNext.textContent = 'See Results';
    dom.btnNext.onclick = () => {
      dom.resultFeedback.classList.add('hidden');
      endGame();
    };
  }

  dom.funFact.textContent = funFactText || '';
}

function getCorrectMessage() {
  const messages = [
    "Nailed it! 🔥",
    "You actually knew that?!",
    "Big brain energy 🧠",
    "Correct! Let's keep going",
    "Yep! You're on a roll",
    "Facts don't lie — neither do you",
    "Water expert in the making 💧"
  ];
  return messages[Math.floor(Math.random() * messages.length)];
}

function getWrongMessage() {
  const messages = [
    "Not quite 😬",
    "Oof. That one got you",
    "The water crisis hits different when you see the numbers",
    "Tough one — the real stats are wild",
    "So close! But nope.",
    "These numbers are eye-opening, right?"
  ];
  return messages[Math.floor(Math.random() * messages.length)];
}

// ─── ADVANCE CARDS (correct answer — shift right card to left) ─────────────────
function advanceCards() {
  topCardFact = bottomCardFact;
  bottomCardFact = getRandomFact();
  loadCards();
  startTimer();
}

// ─── START GAME ────────────────────────────────────────────────────────────────
function startGame() {
  // Reset state
  currentScore = 0;
  dom.scoreEl.textContent = '0';
  dom.resultFeedback.classList.add('hidden');

  // Build pool & pick first two facts
  buildFactsPool();
  topCardFact = getRandomFact();
  bottomCardFact = getRandomFact();

  // Switch screen
  showScreen(dom.gameScreen);
  loadCards();
  startTimer();
}

// ─── DISPLAY IMPACT FACT ────────────────────────────────────────────────────────
function displayImpactFact() {
  const impact = impactFacts[Math.floor(Math.random() * impactFacts.length)];
  dom.awarenessStat.textContent = impact.stat;
  dom.awarenessText.textContent = impact.text;
}

// ─── END GAME ──────────────────────────────────────────────────────────────────
function endGame() {
  stopTimer();

  // Check and update best score
  let isNewRecord = false;
  if (currentScore > bestScore) {
    bestScore = currentScore;
    localStorage.setItem('waterHL_bestScore', bestScore);
    isNewRecord = true;
  }

  // Populate results screen
  dom.finalScore.textContent = currentScore;
  dom.finalHighScore.textContent = bestScore;

  // Show or hide NEW RECORD banner
  if (isNewRecord && currentScore > 0) {
    dom.newRecord.classList.remove('hidden');
  } else {
    dom.newRecord.classList.add('hidden');
  }

  // Show random charity:water impact fact
  displayImpactFact();

  showScreen(dom.resultsScreen);
}

// ─── SHARE FUNCTIONALITY ───────────────────────────────────────────────────────
function showToast(message) {
  // Remove any existing toast
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  toast.setAttribute('role', 'status');
  toast.setAttribute('aria-live', 'polite');
  document.body.appendChild(toast);

  // Auto-dismiss after 2s
  setTimeout(() => {
    toast.classList.add('toast-out');
    toast.addEventListener('animationend', () => toast.remove());
  }, 2000);
}

function shareScore() {
  const shareText = `💧 I scored ${currentScore} on charity: water Higher/Lower! Can you beat me? ${window.location.href}`;

  // Try native share API first (mostly mobile)
  if (navigator.share) {
    navigator.share({
      title: 'Water Higher/Lower',
      text: shareText,
      url: window.location.href
    }).catch(() => {});
    return;
  }

  // Fallback: copy to clipboard
  navigator.clipboard.writeText(shareText).then(() => {
    showToast('✓ Copied to clipboard!');
  }).catch(() => {
    // Final fallback: open Twitter intent
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`;
    window.open(tweetUrl, '_blank');
  });
}

// ─── EVENT LISTENERS ───────────────────────────────────────────────────────────
dom.startBtn.addEventListener('click', startGame);
dom.btnHigher.addEventListener('click', () => handleGuess(true));
dom.btnLower.addEventListener('click', () => handleGuess(false));
dom.playAgainBtn.addEventListener('click', startGame);
dom.shareBtn.addEventListener('click', shareScore);

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
  // Handle Enter on result overlay
  if (e.key === 'Enter' && !dom.resultFeedback.classList.contains('hidden')) {
    dom.btnNext.click();
    return;
  }

  // Handle Enter on splash screen
  if (e.key === 'Enter' && dom.splashScreen.classList.contains('active')) {
    dom.startBtn.click();
    return;
  }

  // Handle Enter on results screen
  if (e.key === 'Enter' && dom.resultsScreen.classList.contains('active')) {
    dom.playAgainBtn.click();
    return;
  }

  // Only respond to game shortcuts during game screen
  if (!dom.gameScreen.classList.contains('active')) return;
  if (isGuessing) return;

  if (e.key === 'ArrowUp' || e.key.toLowerCase() === 'h') {
    handleGuess(true);
  } else if (e.key === 'ArrowDown' || e.key.toLowerCase() === 'l') {
    handleGuess(false);
  }
});

// ─── INIT ──────────────────────────────────────────────────────────────────────
(function init() {
  // Display stored best score in the game-over screen (preload)
  dom.finalHighScore.textContent = bestScore;

  // Set ARIA labels for interactive elements
  dom.btnHigher.setAttribute('aria-label', 'Guess higher');
  dom.btnLower.setAttribute('aria-label', 'Guess lower');
  dom.startBtn.setAttribute('aria-label', 'Start the game');
  dom.playAgainBtn.setAttribute('aria-label', 'Play again');
  dom.shareBtn.setAttribute('aria-label', 'Share your score');

  // Focus management: keep start button focusable
  dom.startBtn.focus();
})();
