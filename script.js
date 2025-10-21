// Tarot Card Data with detailed information
const tarotCards = [
    {
        name: "The Fool",
        suit: "🌟",
        meaning: "New beginnings, innocence, spontaneity",
        description: "The Fool represents new beginnings, having faith in the future, being inexperienced, not knowing what to expect, having beginner's luck, improvisation and believing in the universe.",
        keywords: "Adventure, Beginnings, Innocence, Freedom",
        advice: "Take a leap of faith. Trust in the journey ahead, even if you can't see the destination."
    },
    {
        name: "The Magician",
        suit: "🎭",
        meaning: "Manifestation, resourcefulness, power",
        description: "The Magician is about making higher and better use of all of one's power. This card is about conscious awareness of what you're doing and why you're doing it.",
        keywords: "Manifestation, Power, Skill, Concentration",
        advice: "You have all the tools you need to succeed. Focus your energy and manifest your desires."
    },
    {
        name: "The High Priestess",
        suit: "🌙",
        meaning: "Intuition, sacred knowledge, divine feminine",
        description: "The High Priestess is about intuition, sacred knowledge and the divine feminine. She represents wisdom, serenity, knowledge and understanding.",
        keywords: "Intuition, Mystery, Subconscious, Higher Power",
        advice: "Trust your inner voice. The answers you seek lie within your subconscious mind."
    },
    {
        name: "The Empress",
        suit: "👑",
        meaning: "Femininity, beauty, nature, abundance",
        description: "The Empress represents femininity, beauty, nature, nurturing, and abundance. She is a symbol of Venus, the planet of love, creativity, fertility, art, and beauty.",
        keywords: "Fertility, Femininity, Beauty, Nature, Abundance",
        advice: "Embrace your creative and nurturing side. Allow abundance to flow into your life."
    },
    {
        name: "The Emperor",
        suit: "⚔️",
        meaning: "Authority, establishment, structure",
        description: "The Emperor represents authority, establishment, structure, a father figure, and the masculine principle. He is a symbol of Mars, the planet of action and energy.",
        keywords: "Authority, Father-figure, Structure, Solid Foundation",
        advice: "Take control of your situation. Establish order and structure in your life."
    },
    {
        name: "The Hierophant",
        suit: "📿",
        meaning: "Spiritual wisdom, religious beliefs, conformity",
        description: "The Hierophant represents spiritual wisdom, religious beliefs, conformity, tradition, and institutions. He is a bridge between heaven and earth.",
        keywords: "Tradition, Conformity, Morality, Ethics",
        advice: "Seek guidance from traditional wisdom. Sometimes following established paths leads to enlightenment."
    },
    {
        name: "The Lovers",
        suit: "💕",
        meaning: "Love, harmony, relationships, values alignment",
        description: "The Lovers represent love, harmony, relationships, and values alignment. This card is about choices and the consequences of those choices.",
        keywords: "Love, Union, Relationships, Values",
        advice: "Make choices based on love and your core values. Seek harmony in your relationships."
    },
    {
        name: "The Chariot",
        suit: "🏆",
        meaning: "Control, willpower, success, determination",
        description: "The Chariot represents control, willpower, success, determination, and action. It's about overcoming obstacles through confidence and control.",
        keywords: "Control, Willpower, Success, Determination",
        advice: "Stay focused on your goals. Your determination and willpower will lead you to victory."
    },
    {
        name: "Strength",
        suit: "🦁",
        meaning: "Strength, courage, persuasion, influence",
        description: "Strength represents inner strength, courage, persuasion, influence, and compassion. It's about the power of love over hate, of subtlety over force.",
        keywords: "Inner Strength, Courage, Patience, Control",
        advice: "Use gentle strength and patience. True power comes from inner courage and compassion."
    },
    {
        name: "The Hermit",
        suit: "🕯️",
        meaning: "Soul searching, introspection, inner guidance",
        description: "The Hermit represents soul searching, introspection, inner guidance, and seeking truth. It's about looking inward for answers.",
        keywords: "Introspection, Searching, Guidance, Solitude",
        advice: "Take time for self-reflection. The answers you seek can be found through quiet contemplation."
    },
    {
        name: "Wheel of Fortune",
        suit: "🎡",
        meaning: "Good luck, karma, life cycles, destiny",
        description: "The Wheel of Fortune represents good luck, karma, life cycles, destiny, and a turning point. It reminds us that life is full of changes.",
        keywords: "Luck, Karma, Destiny, Change",
        advice: "Embrace the changes coming your way. What goes around comes around - trust in the cycle of life."
    },
    {
        name: "Justice",
        suit: "⚖️",
        meaning: "Justice, fairness, truth, cause and effect",
        description: "Justice represents justice, fairness, truth, cause and effect, and law. It's about making decisions based on careful analysis and moral principles.",
        keywords: "Justice, Fairness, Truth, Law",
        advice: "Seek truth and fairness in all your dealings. Your actions have consequences - choose wisely."
    },
    {
        name: "The Hanged Man",
        suit: "🔄",
        meaning: "Suspension, restriction, letting go",
        description: "The Hanged Man represents suspension, restriction, letting go, and sacrifice. Sometimes we need to let go to move forward.",
        keywords: "Suspension, Letting Go, Sacrifice, New Perspective",
        advice: "Sometimes you need to let go and surrender to gain a new perspective on your situation."
    },
    {
        name: "Death",
        suit: "🦋",
        meaning: "Endings, beginnings, change, transformation",
        description: "Death represents endings, beginnings, change, transformation, and transition. It's about the end of one phase and the beginning of another.",
        keywords: "Transformation, Endings, Beginnings, Change",
        advice: "Embrace transformation. Every ending is a new beginning in disguise."
    },
    {
        name: "Temperance",
        suit: "🌈",
        meaning: "Balance, moderation, patience, purpose",
        description: "Temperance represents balance, moderation, patience, purpose, and meaning. It's about finding the middle path and maintaining equilibrium.",
        keywords: "Balance, Moderation, Patience, Harmony",
        advice: "Seek balance and moderation in all things. Patience and harmony will guide you to your purpose."
    },
    {
        name: "The Devil",
        suit: "😈",
        meaning: "Bondage, addiction, sexuality, materialism",
        description: "The Devil represents bondage, addiction, sexuality, materialism, and playfulness. It's about being trapped by material desires or unhealthy patterns.",
        keywords: "Bondage, Materialism, Addiction, Temptation",
        advice: "Examine what binds you. Break free from unhealthy patterns and material obsessions."
    },
    {
        name: "The Tower",
        suit: "⚡",
        meaning: "Sudden change, upheaval, chaos, revelation",
        description: "The Tower represents sudden change, upheaval, chaos, revelation, and awakening. It's about the destruction of false beliefs and structures.",
        keywords: "Sudden Change, Upheaval, Revelation, Awakening",
        advice: "Embrace sudden changes as opportunities for growth. Sometimes destruction clears the way for something better."
    },
    {
        name: "The Star",
        suit: "⭐",
        meaning: "Hope, faith, purpose, renewal, spirituality",
        description: "The Star represents hope, faith, purpose, renewal, and spirituality. It's about healing, inspiration, and spiritual guidance.",
        keywords: "Hope, Faith, Inspiration, Healing",
        advice: "Have faith in the future. Your hopes and dreams are within reach - keep believing."
    },
    {
        name: "The Moon",
        suit: "🌙",
        meaning: "Illusion, fear, anxiety, subconscious, intuition",
        description: "The Moon represents illusion, fear, anxiety, subconscious, and intuition. It's about navigating through uncertainty and trusting your intuition.",
        keywords: "Illusion, Fear, Intuition, Subconscious",
        advice: "Trust your intuition to guide you through uncertainty. Not everything is as it appears."
    },
    {
        name: "The Sun",
        suit: "☀️",
        meaning: "Positivity, fun, warmth, success, vitality",
        description: "The Sun represents positivity, fun, warmth, success, and vitality. It's about joy, success, and positive energy radiating in all directions.",
        keywords: "Joy, Success, Vitality, Positivity",
        advice: "Embrace joy and optimism. Success and happiness are shining upon you."
    },
    {
        name: "Judgement",
        suit: "📯",
        meaning: "Judgement, rebirth, inner calling, absolution",
        description: "Judgement represents judgement, rebirth, inner calling, and absolution. It's about spiritual awakening and answering a higher calling.",
        keywords: "Rebirth, Inner Calling, Awakening, Absolution",
        advice: "Listen to your inner calling. It's time for spiritual awakening and personal transformation."
    },
    {
        name: "The World",
        suit: "🌍",
        meaning: "Completion, accomplishment, travel, fulfillment",
        description: "The World represents completion, accomplishment, travel, and fulfillment. It's about achieving your goals and reaching a state of wholeness.",
        keywords: "Completion, Success, Fulfillment, Achievement",
        advice: "Celebrate your achievements. You have reached a significant milestone in your journey."
    }
];

// Numerology Life Path Meanings
const lifePathMeanings = {
    1: "The Leader - You are a natural born leader with strong independence and determination. You have the ability to initiate and pioneer new ideas.",
    2: "The Peacemaker - You are diplomatic, cooperative, and work well with others. You seek harmony and balance in all aspects of life.",
    3: "The Creative - You are artistic, expressive, and have excellent communication skills. You bring joy and inspiration to others.",
    4: "The Builder - You are practical, reliable, and hardworking. You have the ability to build solid foundations and achieve long-term goals.",
    5: "The Adventurer - You are freedom-loving, curious, and adaptable. You thrive on variety and new experiences.",
    6: "The Nurturer - You are caring, responsible, and family-oriented. You have a natural ability to heal and support others.",
    7: "The Seeker - You are analytical, introspective, and spiritually inclined. You seek deeper truths and understanding.",
    8: "The Achiever - You are ambitious, business-minded, and focused on material success. You have strong organizational skills.",
    9: "The Humanitarian - You are compassionate, generous, and concerned with the welfare of humanity. You have a broad perspective on life.",
    11: "The Intuitive - You are highly intuitive, inspirational, and spiritually aware. You have the potential to be a spiritual teacher.",
    22: "The Master Builder - You have the ability to turn dreams into reality on a large scale. You can build something of lasting value.",
    33: "The Master Teacher - You are here to uplift and inspire humanity through compassion and healing."
};

// Global Variables
let currentSpread = 'three-card';
let drawnCards = [];
let isReading = false;

// Utility Functions (defined early for global access)
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

function calculateLifePath() {
    console.log('Calculate button clicked');
    const birthdate = document.getElementById('birthdate').value;
    if (!birthdate) {
        alert('Please enter your birth date');
        return;
    }

    const date = new Date(birthdate);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    // Calculate life path number
    const lifePathNumber = reduceToSingleDigit(day + month + year);

    // Display result
    displayNumerologyResult(lifePathNumber);
}

function resetReading() {
    isReading = false;
    drawnCards = [];
    document.getElementById('card-spread').innerHTML = '';
    document.getElementById('reading-result').classList.add('hidden');
    document.getElementById('single-card-selection').classList.add('hidden');
}

// Update deck instruction based on spread type
function updateDeckInstruction() {
    const instructionElement = document.querySelector('.deck-instruction');
    if (instructionElement) {
        switch (currentSpread) {
            case 'single-card':
                instructionElement.textContent = 'Click to reveal the cards';
                break;
            case 'three-card':
                instructionElement.textContent = 'Click to draw 3 cards';
                break;
            case 'celtic-cross':
                instructionElement.textContent = 'Click to draw 10 cards';
                break;
            default:
                instructionElement.textContent = 'Click to draw cards';
        }
    }
}

// Single Card Selection Functions
function showSingleCardSelection() {
    // Hide other elements
    document.getElementById('card-spread').innerHTML = '';
    document.getElementById('reading-result').classList.add('hidden');

    // Show single card selection
    const selectionDiv = document.getElementById('single-card-selection');
    selectionDiv.classList.remove('hidden');

    // Populate card grid with shuffled cards
    const cardGrid = document.getElementById('card-grid');
    cardGrid.innerHTML = '';

    // Shuffle the cards array to randomize positions
    const shuffledCards = [...tarotCards].sort(() => Math.random() - 0.5);

    shuffledCards.forEach((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.className = 'selectable-card';
        cardElement.innerHTML = '🌟'; // All cards show the same star icon
        cardElement.setAttribute('data-card-index', index);
        cardElement.addEventListener('click', (e) => selectSingleCard(card, e.target));
        cardGrid.appendChild(cardElement);
    });
}

function selectSingleCard(card, clickedElement) {
    // Add visual feedback to the selected card
    if (clickedElement) {
        clickedElement.style.transform = 'scale(1.2)';
        clickedElement.style.background = 'linear-gradient(45deg, #ffd700, #ffed4e)';
        clickedElement.innerHTML = card.suit; // Reveal the actual card symbol
        clickedElement.style.color = '#1a1a2e';
    }

    // Wait a moment for the visual feedback, then show the reading
    setTimeout(() => {
        // Hide selection grid
        document.getElementById('single-card-selection').classList.add('hidden');

        // Show detailed card information
        const resultDiv = document.getElementById('reading-result');
        const interpretationDiv = document.getElementById('interpretation');

        interpretationDiv.innerHTML = `
            <div class="selected-card-display">
                <div class="card-title">${card.name}</div>
                <div class="card-symbol">${card.suit}</div>
                <div class="card-description">${card.description}</div>
                <div class="card-keywords">
                    <h5>Key Themes:</h5>
                    <p>${card.keywords}</p>
                </div>
                <div class="card-advice">
                    <strong>Guidance:</strong> ${card.advice}
                </div>
            </div>
        `;

        resultDiv.classList.remove('hidden');
        resultDiv.classList.add('fade-in');

        // Set reading as complete
        isReading = true;
    }, 800);
}

// One-time cleanup function to remove old localStorage data
function clearOldLocalStorageData() {
    try {
        // Check if there's any old data
        const oldData = localStorage.getItem('tarotSubmissions');
        if (oldData) {
            const submissions = JSON.parse(oldData);
            console.log(`Clearing ${submissions.length} old submissions from localStorage`);
            localStorage.removeItem('tarotSubmissions');
            console.log('✅ Old localStorage data cleared successfully');
        } else {
            console.log('No old localStorage data found');
        }
    } catch (error) {
        console.error('Error clearing localStorage:', error);
    }
}

// Initialize the website
document.addEventListener('DOMContentLoaded', function () {
    // Clear old localStorage data on first load
    clearOldLocalStorageData();

    initializeEventListeners();
    setupSmoothScrolling();
    updateDeckInstruction();
});

function initializeEventListeners() {
    // Spread selector buttons
    document.querySelectorAll('.spread-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            document.querySelectorAll('.spread-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentSpread = this.dataset.spread;
            updateDeckInstruction();
            resetReading();
        });
    });

    // Deck click handler
    document.getElementById('card-deck').addEventListener('click', drawCards);

    // Numerology calculate button - multiple ways to ensure it works
    const calculateBtn = document.querySelector('#numerology .btn.primary');
    if (calculateBtn) {
        calculateBtn.addEventListener('click', function (e) {
            e.preventDefault();
            calculateLifePath();
        });
    }

    // Also try by button text
    const buttons = document.querySelectorAll('button');
    buttons.forEach(btn => {
        if (btn.textContent.trim() === 'Calculate') {
            btn.addEventListener('click', function (e) {
                e.preventDefault();
                calculateLifePath();
            });
        }
    });

    // Contact form handler
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }

    // Service booking buttons
    document.querySelectorAll('.service-card .btn').forEach(btn => {
        btn.addEventListener('click', function () {
            scrollToSection('contact');
        });
    });
}

function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Tarot Reading Functions
function drawCards() {
    if (isReading) return;

    // Handle single card selection differently
    if (currentSpread === 'single-card') {
        showSingleCardSelection();
        return;
    }

    isReading = true;
    const cardCount = currentSpread === 'three-card' ? 3 : 10;

    // Clear previous reading
    document.getElementById('card-spread').innerHTML = '';
    document.getElementById('reading-result').classList.add('hidden');
    document.getElementById('single-card-selection').classList.add('hidden');

    // Shuffle and draw cards
    const shuffledCards = [...tarotCards].sort(() => Math.random() - 0.5);
    drawnCards = shuffledCards.slice(0, cardCount);

    // Create card elements
    drawnCards.forEach((card, index) => {
        setTimeout(() => {
            createCardElement(card, index);
        }, index * 300);
    });

    // Show interpretation after all cards are drawn
    setTimeout(() => {
        showInterpretation();
    }, cardCount * 300 + 500);
}

function createCardElement(card, index) {
    const cardElement = document.createElement('div');
    cardElement.className = 'tarot-card fade-in';
    cardElement.innerHTML = `
        <div class="card-name">${card.name}</div>
        <div class="card-suit">${card.suit}</div>
        <div class="card-meaning">${card.meaning}</div>
    `;

    cardElement.addEventListener('click', function () {
        this.classList.add('card-flip', 'glow');
        setTimeout(() => {
            this.classList.remove('card-flip');
        }, 600);
    });

    document.getElementById('card-spread').appendChild(cardElement);
}

function showInterpretation() {
    const resultDiv = document.getElementById('reading-result');
    const interpretationDiv = document.getElementById('interpretation');

    let interpretation = '';

    if (currentSpread === 'three-card') {
        interpretation = `
            <div class="three-card-reading">
                <h4>Past - Present - Future Reading</h4>
                <div class="card-interpretation">
                    <strong>Past (${drawnCards[0].name}):</strong> ${drawnCards[0].meaning}<br><br>
                    <strong>Present (${drawnCards[1].name}):</strong> ${drawnCards[1].meaning}<br><br>
                    <strong>Future (${drawnCards[2].name}):</strong> ${drawnCards[2].meaning}
                </div>
                <p class="reading-summary">
                    Your past experiences with ${drawnCards[0].name.toLowerCase()} have led you to your current situation of ${drawnCards[1].name.toLowerCase()}. 
                    The future holds the energy of ${drawnCards[2].name.toLowerCase()}, suggesting a path toward ${drawnCards[2].meaning.split(',')[0].toLowerCase()}.
                </p>
            </div>
        `;
    } else {
        interpretation = `
            <div class="celtic-cross-reading">
                <h4>Celtic Cross Reading</h4>
                <p>This comprehensive 10-card spread reveals deep insights into your situation:</p>
                <div class="card-list">
                    ${drawnCards.map((card, index) => {
            const positions = ['Present Situation', 'Challenge/Cross', 'Distant Past', 'Recent Past',
                'Possible Outcome', 'Immediate Future', 'Your Approach', 'External Influences',
                'Hopes and Fears', 'Final Outcome'];
            return `<div><strong>${positions[index]}:</strong> ${card.name} - ${card.meaning}</div>`;
        }).join('<br>')}
                </div>
            </div>
        `;
    }

    interpretationDiv.innerHTML = interpretation;
    resultDiv.classList.remove('hidden');
    resultDiv.classList.add('fade-in');
}

// Helper functions for numerology
function reduceToSingleDigit(number) {
    while (number > 9 && number !== 11 && number !== 22 && number !== 33) {
        number = number.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
    }
    return number;
}

function displayNumerologyResult(number) {
    const resultDiv = document.getElementById('numerology-result');
    const numberDisplay = document.getElementById('life-path-number');
    const interpretationDiv = document.getElementById('number-interpretation');

    numberDisplay.textContent = number;
    interpretationDiv.textContent = lifePathMeanings[number] || "This is a unique number with special significance.";

    resultDiv.classList.remove('hidden');
    resultDiv.classList.add('fade-in');

    // Add pulse animation to number
    numberDisplay.parentElement.classList.add('pulse');
    setTimeout(() => {
        numberDisplay.parentElement.classList.remove('pulse');
    }, 2000);
}

// Contact Form Handler with multiple submission options
function handleContactForm(e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const countryCode = formData.get('countryCode');
    const phone = formData.get('phone');
    const service = formData.get('service');
    const message = formData.get('message');

    // Simple validation
    if (!name || !countryCode || !phone || !service || !message) {
        showErrorMessage('Please fill in all required fields marked with *');
        return;
    }

    // Phone number validation (exactly 10 digits)
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
        showErrorMessage('Please enter exactly 10 digits for the phone number');
        return;
    }

    const fullPhone = countryCode + phone;

    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    // Immediate visual feedback for better UX
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    submitBtn.style.opacity = '0.7';

    // Choose your preferred submission method:

    // OPTION 1: EmailJS (requires setup)
    // sendViaEmailJS(name, email, service, message, submitBtn, originalText, e.target);

    // OPTION 2: Google Sheets (primary method)
    saveToGoogleSheets(name, fullPhone, service, message, submitBtn, originalText, e.target);

    // OPTION 3: External service (Formspree, Netlify Forms, etc.)
    // sendToExternalService(formData, submitBtn, originalText, e.target);
}

// OPTION 1: EmailJS Integration
function sendViaEmailJS(name, email, service, message, submitBtn, originalText, form) {
    // You need to set up EmailJS account and get these IDs
    const serviceID = 'YOUR_SERVICE_ID'; // Replace with your EmailJS service ID
    const templateID = 'YOUR_TEMPLATE_ID'; // Replace with your EmailJS template ID
    const userID = 'YOUR_USER_ID'; // Replace with your EmailJS user ID

    const templateParams = {
        from_name: name,
        from_email: email,
        service_type: service,
        message: message,
        to_email: 'your-email@example.com' // Replace with your email
    };

    emailjs.send(serviceID, templateID, templateParams, userID)
        .then(() => {
            alert(`Thank you, ${name}! Your message has been sent successfully. I'll get back to you within 24 hours about your ${service} inquiry.`);
            form.reset();
        })
        .catch((error) => {
            console.error('EmailJS Error:', error);
            alert('Sorry, there was an error sending your message. Please try again or contact me directly.');
        })
        .finally(() => {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        });
}

// Google Sheets Integration
function saveToGoogleSheets(name, phone, service, message, submitBtn, originalText, form) {
    // Google Sheets Web App URL - Replace with your actual URL
    const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbwNAJyxKP9mdhGhRbBYs0Sh9TA3e7OZfkBwltZprU6qwg4rPhMK7vvfLGEl72Nol9jy/exec';

    const data = {
        name: name,
        phone: phone,
        service: service,
        message: message,
        timestamp: new Date().toISOString()
    };

    // Show success immediately for better UX
    showSuccessModal(name);
    form.reset();
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;

    // Send to Google Sheets in background (non-blocking)
    fetch(GOOGLE_SHEETS_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
        .then(() => {
            console.log('✅ Data sent to Google Sheets successfully');
        })
        .catch((error) => {
            console.error('❌ Error sending to Google Sheets:', error);
            // Log error but don't show to user since they already saw success
            console.log('Form data that failed to send:', data);
        });
}

// Local storage functionality removed - now using Google Sheets only

// OPTION 3: External Service (Formspree example)
function sendToExternalService(formData, submitBtn, originalText, form) {
    // Replace with your Formspree endpoint or other service
    const endpoint = 'https://formspree.io/f/YOUR_FORM_ID';

    fetch(endpoint, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
        .then(response => {
            if (response.ok) {
                alert('Thank you! Your message has been sent successfully.');
                form.reset();
            } else {
                throw new Error('Network response was not ok');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Sorry, there was an error sending your message. Please try again.');
        })
        .finally(() => {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        });
}

// Success Modal
function showSuccessModal(name) {
    const modal = document.createElement('div');
    modal.className = 'success-modal';
    modal.innerHTML = `
        <div class="success-modal-content">
            <div class="success-icon">✨</div>
            <h3>Message Received!</h3>
            <p>Thank you, ${name}! Your inquiry has been recorded successfully. I'll get back to you within 24 hours.</p>
            <button class="btn" onclick="this.parentElement.parentElement.remove()">Close</button>
        </div>
    `;

    document.body.appendChild(modal);

    // Auto-close after 5 seconds
    setTimeout(() => {
        if (modal.parentElement) {
            modal.remove();
        }
    }, 5000);
}

// Admin Authentication
function authenticateAdmin() {
    const modal = document.createElement('div');
    modal.className = 'auth-modal';
    modal.id = 'auth-modal';
    modal.innerHTML = `
        <div class="auth-modal-content">
            <h3>🔐 Admin Access</h3>
            <p>Enter admin credentials to access submissions</p>
            <input type="text" id="admin-username" placeholder="Username" autocomplete="username">
            <input type="password" id="admin-password" placeholder="Password" autocomplete="current-password">
            <div class="btn-group">
                <button class="btn btn-primary" onclick="verifyAdmin()">Login</button>
                <button class="btn btn-secondary" onclick="closeAuthModal()">Cancel</button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // Focus on username field
    setTimeout(() => {
        document.getElementById('admin-username').focus();
    }, 300);

    // Handle Enter key
    modal.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            verifyAdmin();
        }
    });

    // Add click outside to close
    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            closeAuthModal();
        }
    });
}

function verifyAdmin() {
    const username = document.getElementById('admin-username').value;
    const password = document.getElementById('admin-password').value;

    // Admin credentials - Change these to your desired credentials
    const ADMIN_USERNAME = 'admin';
    const ADMIN_PASSWORD = 'mystic2024';

    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
        // Close auth modal
        closeAuthModal();
        // Show submissions
        showSubmissions();
    } else {
        showErrorMessage('Invalid credentials. Access denied.');
        // Clear password field
        document.getElementById('admin-password').value = '';
        document.getElementById('admin-password').focus();
    }
}

// Function to close authentication modal
function closeAuthModal() {
    const modal = document.getElementById('auth-modal');
    if (modal) {
        modal.remove();
    }
}

// Error Message
function showErrorMessage(message) {
    const errorDiv = document.createElement('div');
    errorDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #e74c3c;
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        z-index: 10000;
        font-weight: 500;
        box-shadow: 0 4px 12px rgba(231, 76, 60, 0.3);
        animation: slideInRight 0.3s ease-out;
    `;
    errorDiv.textContent = message;

    document.body.appendChild(errorDiv);

    setTimeout(() => {
        errorDiv.remove();
    }, 4000);
}

function showSubmissions() {
    // Show message that submissions are now in Google Sheets
    const modal = document.createElement('div');
    modal.className = 'success-modal';
    modal.id = 'no-submissions-modal';
    modal.innerHTML = `
        <div class="success-modal-content">
            <div class="success-icon">📊</div>
            <h3>Admin Dashboard</h3>
            <p>Form submissions are stored in Google Sheets for better data management and security.</p>
            <div class="admin-buttons">
                <button class="btn btn-primary" onclick="openGoogleSheets()" style="margin-right: 10px;">
                    📈 Open Google Sheets
                </button>
                <button class="btn btn-secondary" onclick="closeNoSubmissionsModal()">
                    Close
                </button>
            </div>
            <p style="font-size: 0.9rem; color: #666; margin-top: 1rem;">
                💡 Tip: Bookmark your Google Sheets URL for quick access
            </p>
        </div>
    `;
    document.body.appendChild(modal);
    return;

}

// Function to properly close admin modal
function closeAdminModal() {
    const modal = document.getElementById('admin-submissions-modal');
    if (modal) {
        modal.remove();
    }
}

// Function to close no submissions modal
function closeNoSubmissionsModal() {
    const modal = document.getElementById('no-submissions-modal');
    if (modal) {
        modal.remove();
    }
}

// Function to open Google Sheets
function openGoogleSheets() {
    // Google Sheets URL - Replace with your actual Google Sheets URL
    const GOOGLE_SHEETS_VIEW_URL = 'https://docs.google.com/spreadsheets/d/1FhQQF6b8dl3OLpIwVo6UN_1peINznD6z1YAZDRsGCaE/edit#gid=0';

    // Check if URL is configured
    if (GOOGLE_SHEETS_VIEW_URL.includes('YOUR_SHEET_ID')) {
        showErrorMessage('Google Sheets URL not configured. Please update the GOOGLE_SHEETS_VIEW_URL in script.js');
        return;
    }

    // Open Google Sheets in new tab
    window.open(GOOGLE_SHEETS_VIEW_URL, '_blank');

    // Optional: Close the admin modal after opening sheets
    closeNoSubmissionsModal();
}

// Download functionality removed - data is now in Google Sheets only

// Additional Interactive Features
function addMysticalEffects() {
    // Add floating particles effect
    createFloatingParticles();

    // Add hover effects to cards
    document.addEventListener('mouseover', function (e) {
        if (e.target.classList.contains('tarot-card')) {
            e.target.style.transform = 'translateY(-10px) rotateY(5deg)';
        }
    });

    document.addEventListener('mouseout', function (e) {
        if (e.target.classList.contains('tarot-card')) {
            e.target.style.transform = 'translateY(0) rotateY(0)';
        }
    });
}

function createFloatingParticles() {
    const particleContainer = document.createElement('div');
    particleContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
    `;

    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: #ffd700;
            border-radius: 50%;
            opacity: 0.6;
            animation: float ${5 + Math.random() * 10}s infinite linear;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
        `;
        particleContainer.appendChild(particle);
    }

    document.body.appendChild(particleContainer);
}

// Add CSS for floating animation
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 0.6;
        }
        90% {
            opacity: 0.6;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Initialize mystical effects when page loads
document.addEventListener('DOMContentLoaded', function () {
    setTimeout(addMysticalEffects, 1000);
});

// Scroll animations
function handleScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
}

// Initialize scroll animations
document.addEventListener('DOMContentLoaded', handleScrollAnimations);

// Easter egg: Konami code for special effect
let konamiCode = [];
const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // Up Up Down Down Left Right Left Right B A

document.addEventListener('keydown', function (e) {
    konamiCode.push(e.keyCode);
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }

    if (konamiCode.length === konamiSequence.length &&
        konamiCode.every((code, index) => code === konamiSequence[index])) {
        activateSpecialEffect();
        konamiCode = [];
    }
});

function activateSpecialEffect() {
    document.body.style.filter = 'hue-rotate(180deg)';
    setTimeout(() => {
        document.body.style.filter = '';
    }, 3000);

    // Show special message
    const message = document.createElement('div');
    message.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(0, 0, 0, 0.9);
        color: #ffd700;
        padding: 2rem;
        border-radius: 15px;
        text-align: center;
        z-index: 10000;
        font-family: 'Cinzel', serif;
        font-size: 1.5rem;
    `;
    message.innerHTML = '✨ The universe has noticed your curiosity! ✨<br>Special cosmic energy activated!';
    document.body.appendChild(message);

    setTimeout(() => {
        message.remove();
    }, 3000);
}

// Mobile menu toggle (if needed)
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('mobile-active');
}

// Add mobile menu styles
const mobileStyle = document.createElement('style');
mobileStyle.textContent = `
    @media (max-width: 768px) {
        .nav-links.mobile-active {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: rgba(26, 26, 46, 0.95);
            padding: 1rem;
            backdrop-filter: blur(10px);
        }
    }
`;
document.head.appendChild(mobileStyle);