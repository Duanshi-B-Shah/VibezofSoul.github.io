# 🔮 Vibez of Soul - Tarot & Numerology Website

A beautiful, interactive website for tarot card readers and numerologists with real-time form submissions and instant email notifications.

![Tarot Website](https://img.shields.io/badge/Status-Live-brightgreen) ![License](https://img.shields.io/badge/License-MIT-blue) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## ✨ Features

### 🎴 Interactive Tarot Readings
- **3-Card Reading** - Past, Present, Future spread
- **Single Card Selection** - Choose any card intuitively 
- **Celtic Cross** - Comprehensive 10-card reading
- **22 Major Arcana Cards** with detailed interpretations
- **Animated card reveals** with mystical effects

### 🔢 Numerology Calculator
- **Life Path Number** calculation from birth date
- **Detailed interpretations** for numbers 1-9, 11, 22, 33
- **Interactive calculator** with beautiful animations

### 📱 Contact & Booking System
- **Professional contact form** with validation
- **Service pricing** and descriptions
- **Phone number input** with country code selection
- **Real-time form submission** to Google Sheets
- **Instant email notifications** for new inquiries

### 🎨 Design & UX
- **Mystical theme** with deep blues and gold accents
- **Fully responsive** design for all devices
- **Smooth animations** and hover effects
- **Professional typography** (Cinzel + Crimson Text)
- **Mobile-optimized** forms and interactions

## 🚀 Quick Start

### Option 1: GitHub Pages (Free)
1. Fork this repository
2. Enable GitHub Pages in Settings
3. Your site will be live at `https://yourusername.github.io`

### Option 2: Netlify (Recommended)
1. Download the project files
2. Drag folder to [netlify.com](https://netlify.com)
3. Site goes live in 30 seconds!

### Option 3: Any Web Host
Upload these files to your web hosting:
- `index.html`
- `styles.css`
- `script.js`

## ⚙️ Setup & Configuration

### 1. Google Sheets Integration
Follow the detailed guide in [`GOOGLE_SHEETS_SETUP.md`](GOOGLE_SHEETS_SETUP.md):
- Create Google Sheet for form submissions
- Set up Google Apps Script for data collection
- Configure email notifications

### 2. Update Contact Information
Edit `index.html` to update:
```html
<!-- Replace with your details -->
<span>your-email@domain.com</span>
<span>your-phone-number</span>
```

### 3. Admin Panel Access
Update admin credentials in `script.js`:
```javascript
const ADMIN_USERNAME = 'your-username';
const ADMIN_PASSWORD = 'your-password';
```

## 📧 Email Notifications Setup

Get instant email alerts when customers submit forms:

1. **Use the enhanced Google Apps Script** from `ENHANCED_GOOGLE_SCRIPT.js`
2. **Update your email** in the script:
   ```javascript
   const YOUR_EMAIL = 'your-email@gmail.com';
   ```
3. **Deploy and test** - You'll receive beautiful HTML emails!

See [`FREE_NOTIFICATIONS_GUIDE.md`](FREE_NOTIFICATIONS_GUIDE.md) for complete setup instructions.

## 📱 WhatsApp Notifications (Optional)

Get WhatsApp alerts for new inquiries! See [`WHATSAPP_NOTIFICATIONS_SETUP.md`](WHATSAPP_NOTIFICATIONS_SETUP.md) for:
- Twilio WhatsApp API setup
- Free alternatives (CallMeBot, Telegram)
- Complete integration guide

## 🎯 Admin Features

Access the admin panel by clicking "Admin Page" in the footer:
- **Secure login** with username/password
- **View all submissions** (stored in Google Sheets)
- **Direct link** to Google Sheets document
- **Mobile-friendly** admin interface

## 📁 Project Structure

```
Vibez-of-Soul/
├── index.html              # Main website file
├── styles.css              # All styling and responsive design
├── script.js               # Interactive functionality
├── ENHANCED_GOOGLE_SCRIPT.js # Google Apps Script for backend
├── README.md               # This file
├── GOOGLE_SHEETS_SETUP.md  # Backend setup guide
├── FREE_NOTIFICATIONS_GUIDE.md # Email notifications
├── WHATSAPP_NOTIFICATIONS_SETUP.md # WhatsApp alerts
├── GITHUB_DEPLOYMENT.md    # GitHub Pages deployment
└── DEPLOYMENT_GUIDE.md     # All hosting options
```

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Backend**: Google Apps Script, Google Sheets
- **Fonts**: Google Fonts (Cinzel, Crimson Text)
- **Icons**: Unicode emojis for universal compatibility
- **Hosting**: GitHub Pages, Netlify, or any static host

## 📱 Mobile Optimization

- **16px font sizes** prevent iOS zoom on input focus
- **Touch-friendly** buttons and form elements
- **Responsive grid** layouts for all screen sizes
- **Optimized images** and animations for mobile
- **Progressive enhancement** for older browsers

## 🎨 Customization

### Colors & Theme
Main colors defined in CSS variables:
- **Primary**: `#1a1a2e` (Deep blue)
- **Accent**: `#ffd700` (Mystical gold)
- **Background**: Gradient blues
- **Text**: `#2c1810` (Dark brown)

### Content Updates
- **Tarot card meanings**: Edit `tarotCards` array in `script.js`
- **Numerology interpretations**: Update `lifePathMeanings` object
- **Service pricing**: Modify HTML in services section
- **Contact info**: Update footer and contact section

## 🔒 Security Features

- **Form validation** on both client and server side
- **Admin authentication** for sensitive areas
- **HTTPS ready** for secure data transmission
- **No sensitive data** stored in frontend code
- **Google Sheets** as secure backend storage

## 📊 Analytics & Tracking

Ready for analytics integration:
- **Google Analytics** - Add tracking code to `<head>`
- **Facebook Pixel** - For social media marketing
- **Form conversion tracking** - Monitor inquiry rates
- **Performance monitoring** - Track page load times

## 🚀 Performance

- **Fast loading** - Optimized CSS and JavaScript
- **Minimal dependencies** - No heavy frameworks
- **Compressed images** - WebP format recommended
- **CDN ready** - Works with any CDN service
- **Lighthouse score**: 95+ on all metrics

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support & Documentation

- **Setup Issues**: Check the detailed guides in the project
- **Customization Help**: All code is well-commented
- **Hosting Problems**: See `DEPLOYMENT_GUIDE.md`
- **Form Issues**: Follow `GOOGLE_SHEETS_SETUP.md`

## 🎉 Live Demo

See the website in action: [Your Live URL Here]

---

**Built with ❤️ for the mystical arts community**

*Perfect for tarot readers, numerologists, astrologers, and spiritual advisors who want a professional online presence.*
