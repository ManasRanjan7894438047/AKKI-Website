// Model for company data
const companyData = {
  name: 'AKKI',
  tagline: 'Building Tomorrow\'s Solutions Today',
  description: 'Leading technology company delivering innovative solutions',
  founded: 2019,
  email: 'dev@akki.co.in',
  phone: '+91 8249820167',
  address: 'Bengaluru,Karnataka,India',
  social: {
    facebook: '#',
    twitter: '#',
    linkedin: 'https://www.linkedin.com/company/akki-solutions-opc-pvt-ltd/',
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
        title: '✏️ Create Experiences - Manual & AI',
        description: 'Create beautiful experiences manually or let AI assist you',
        details: 'Compose stories with text, images, and multimedia with intelligent AI suggestions and auto-enhancement'
      },
      {
        id: 2,
        title: '😂 Create Funny Images',
        description: 'Generate hilarious memes and funny images instantly',
        details: 'AI-powered image editor, meme templates, text overlays, filters, and instant sharing options'
      },
      {
        id: 3,
        title: '📖 Create Stories',
        description: 'Craft engaging stories with ease and creativity',
        details: 'Story templates, text effects, animations, transitions, and professional-grade editing tools'
      },
      {
        id: 4,
        title: '🎬 Create Videos from Photos',
        description: 'Transform your photos into stunning videos effortlessly',
        details: 'Photo-to-video conversion, music sync, effects library, transitions, and export options'
      },
      {
        id: 5,
        title: '🎨 Beautiful Gallery',
        description: 'Organize and showcase all your creations beautifully',
        details: 'High-resolution support, smart albums, cloud storage, and quick search functionality'
      },
      {
        id: 6,
        title: '🗺️ Smart Trip Planner',
        description: 'Plan end-to-end journeys in one place',
        details: 'Create day-wise itineraries, add stops and activities, and get optimized routes with real-time travel times'
      },
      {
        id: 7,
        title: '📡 Live Travel Updates',
        description: 'Stay informed every moment of your trip',
        details: 'Receive alerts for delays, route changes, weather, and nearby points of interest so you can adjust plans instantly'
      },
      {
        id: 8,
        title: '✨ AI-Powered Filters & Effects',
        description: 'Transform your content with advanced AI effects',
        details: 'Real-time filters, background removal, face enhancement, and smart suggestions'
      },
      {
        id: 9,
        title: '👥 Social Sharing',
        description: 'Share your creations instantly across all platforms',
        details: 'One-click sharing to Instagram, TikTok, Facebook, WhatsApp, and more'
      },
      {
        id: 10,
        title: '💬 In-App Chat & Comments',
        description: 'Connect with friends through messaging and engagement',
        details: 'Direct messaging, group chats, comments, likes, and real-time notifications'
      },
      {
        id: 11,
        title: '📱 Cross-Platform Sync',
        description: 'Seamlessly work across all your devices',
        details: 'Cloud sync, automatic backup, continue editing anywhere, unified experience'
      },
      {
        id: 12,
        title: '🌟 Premium Effects & Templates',
        description: 'Access exclusive filters, effects, and creative templates',
        details: 'Constantly updated library, trending effects, professional templates, and more'
      },
      {
        id: 13,
        title: '🔒 Privacy & Security',
        description: 'Your content and data are always protected',
        details: 'End-to-end encryption, two-factor authentication, privacy controls, and secure cloud backup'
      },
      {
        id: 14,
        title: '⚡ Fast Performance',
        description: 'Lightning-quick rendering and minimal battery usage',
        details: 'Optimized processing, smooth playback, efficient caching, and background operations'
      },
      {
        id: 15,
        title: '🎯 Smart Recommendations',
        description: 'Discover trending content and personalized suggestions',
        details: 'AI-curated feeds, trending creators, personalized discovery, and content analytics'
      },
      // {
      //   id: 16,
      //   title: '🌐 Offline Mode',
      //   description: 'Create and edit even without internet connection',
      //   details: 'Offline editing, automatic sync when online, cached templates, and draft saving'
      // }
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
