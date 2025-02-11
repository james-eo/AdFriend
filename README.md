# AdFriend

> Transform your browsing experience with personalized, positive content.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Chrome Web Store](https://img.shields.io/badge/Chrome-Extension-blue)](https://chrome.google.com/webstore)
[![Made with React](https://img.shields.io/badge/Made%20with-React-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?logo=mongodb&logoColor=white)](https://www.mongodb.com/)

## 🎯 Overview

AdFriend is an innovative Chrome extension that transforms ad spaces into personalized wellness hubs. Using advanced machine learning and real-time content adaptation, it replaces intrusive advertisements with meaningful, positive content that enhances your browsing experience.

## ✨ Key Features

- **🤖 Smart Ad Detection**: ML-powered system identifies and intercepts ad elements
- **🎨 Seamless Content Replacement**: Preserves page layout while replacing ads
- **🎯 Personalized Experience**: AI-driven content tailored to your preferences
- **🤝 Community Integration**: Share inspirational content and participate in group challenges
- **🔒 Privacy-First**: Local processing with no data collection
- **🏆 Achievement System**: Gamified experience with blockchain-verified achievements

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MongoDB
- Chrome Browser
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/adfriend.git
cd adfriend
```

2. Install dependencies:
```bash
# Install extension dependencies
cd extension
npm install

# Install backend dependencies
cd ../backend
npm install

# Install dashboard dependencies
cd ../frontend-dashboard
npm install
```

3. Configure environment variables:
```bash
# In backend directory
cp .env.example .env
# Edit .env with your configuration
```

4. Start the development servers:
```bash
# Start backend server
cd backend
npm run dev

# Start dashboard
cd ../frontend-dashboard
npm run dev

# Build extension
cd ../extension
npm run build
```

5. Load the extension in Chrome:
- Open Chrome
- Go to `chrome://extensions/`
- Enable "Developer mode"
- Click "Load unpacked"
- Select the `extension/dist` directory

## 🏗️ Architecture

AdFriend follows a modern, scalable architecture:

```
├── Extension (React + TypeScript)
│   ├── Ad Detection
│   ├── Content Replacement
│   └── User Interface
├── Backend (Node.js + Express)
│   ├── Content Generation
│   ├── User Management
│   └── Analytics
└── ML Services (TensorFlow.js)
    ├── Ad Detection Model
    └── Content Recommendation
```

## 🛠️ Technology Stack

- **Frontend**: React, TypeScript, Redux Toolkit
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **ML Processing**: TensorFlow.js
- **Real-time**: Socket.io
- **Testing**: Jest, Cypress
- **CI/CD**: GitHub Actions

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Documentation

- [API Documentation](docs/API.md)
- [Development Guide](docs/DEVELOPMENT.md)
- [ML Model Training](docs/ML_TRAINING.md)

## 🔒 Privacy

AdFriend is built with privacy at its core:
- No personal data collection
- Local content processing
- Transparent data handling
- User-controlled preferences

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Chrome Extension Documentation](https://developer.chrome.com/docs/extensions/)
- [TensorFlow.js](https://www.tensorflow.org/js)
- [React](https://reactjs.org/)
- All our amazing contributors

## 📞 Support

- Create an issue
- Join our [Discord community](https://discord.gg/adfriend)
- Email: support@adfriend.com

---
