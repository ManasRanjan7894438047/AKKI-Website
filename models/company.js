// Model for company data
const companyData = {
  name: 'AKKI',
  tagline: 'Building Tomorrow\'s Solutions Today',
  description: 'Leading technology company delivering innovative solutions',
  founded: 2020,
  email: 'dev@akki.co.in',
  phone: '+91 8249820167',
  address: 'Bengaluru,Karnataka,India',
  social: {
    facebook: '#',
    twitter: '#',
    linkedin: '#',
    instagram: '#'
  },
  app: {
    name: 'AKKI Solutions',
    tagline: 'Discover a realm of boundless experiences waiting just for you.',
    rating: 5.0,
    reviews: 10,
    downloads: '100+',
    ageRating: '12+',
    description: 'AKKI Solutions is a comprehensive mobile app designed to deliver seamless experiences across all your devices. Explore unlimited possibilities with our innovative platform.',
    downloadLinks: {
      appStore: 'https://apps.apple.com/us/app/akki-solutions/id123456789',
      googlePlay: 'https://play.google.com/store/apps/details?id=com.tr.hive&pcampaignid=web_share'
    },
    coreFeatures: [
      {
        id: 1,
        title: '🎨 Beautiful Gallery',
        description: 'Capture and showcase stunning experiences with our intuitive gallery interface',
        details: 'High-resolution image support, cloud storage integration, and smart organization'
      },
      {
        id: 2,
        title: '🔔 Real-time Notifications',
        description: 'Stay updated with instant alerts and push notifications',
        details: 'Customizable notifications, activity feeds, and priority alerts'
      },
      {
        id: 3,
        title: '✨ Seamless Experience',
        description: 'Intuitive UI/UX design for effortless navigation',
        details: 'Fast-loading screens, smooth animations, and user-friendly interface'
      },
      {
        id: 4,
        title: '📱 Cross-Platform Sync',
        description: 'Work seamlessly across iOS and Android devices',
        details: 'Cloud sync, data backup, and unified experience across platforms'
      },
      {
        id: 5,
        title: '🔒 Enterprise Security',
        description: 'Bank-level security for your data and privacy',
        details: 'End-to-end encryption, two-factor authentication, and regular security audits'
      },
      {
        id: 6,
        title: '👥 Social Integration',
        description: 'Connect and share with your community',
        details: 'Share experiences, follow friends, and build your network'
      },
      {
        id: 7,
        title: '🌐 Offline Mode',
        description: 'Access content even without internet connection',
        details: 'Automatic sync when online, cached content, and offline browsing'
      },
      {
        id: 8,
        title: '⚙️ Customization',
        description: 'Personalize your app experience',
        details: 'Theme options, layout preferences, and notification settings'
      },
      {
        id: 9,
        title: '🚀 Performance',
        description: 'Lightning-fast app performance and minimal battery usage',
        details: 'Optimized code, efficient caching, and background processes'
      },
      {
        id: 10,
        title: '💬 In-App Chat',
        description: 'Direct messaging and instant communication',
        details: 'Group chats, multimedia messages, and conversation history'
      },
      {
        id: 11,
        title: '📊 Analytics Dashboard',
        description: 'Track your activity and insights',
        details: 'Usage statistics, performance metrics, and personalized recommendations'
      },
      {
        id: 12,
        title: '🎯 Smart Search',
        description: 'Find what you need instantly',
        details: 'Advanced filters, voice search, and intelligent suggestions'
      }
    ],
    advantages: [
      {
        icon: '⚡',
        title: 'Lightning Fast',
        description: 'Optimized performance for instant loading'
      },
      {
        icon: '🔐',
        title: 'Highly Secure',
        description: 'Your data is protected with enterprise-grade encryption'
      },
      {
        icon: '🎨',
        title: 'Modern Design',
        description: 'Beautiful and intuitive user interface'
      },
      {
        icon: '🤝',
        title: 'Community Driven',
        description: 'Connect with millions of users worldwide'
      },
      {
        icon: '📈',
        title: 'Constantly Evolving',
        description: 'Regular updates with new features and improvements'
      },
      {
        icon: '🌍',
        title: 'Global Support',
        description: '24/7 customer support in multiple languages'
      }
    ],
    techStack: {
      platforms: ['iOS 12+', 'Android 6+'],
      technologies: ['React Native', 'Firebase', 'Machine Learning', 'Cloud Storage'],
      storage: '150 MB',
      permissions: ['Camera', 'Photo Library', 'Contacts', 'Location', 'Notifications']
    }
  }
};

module.exports = companyData;
