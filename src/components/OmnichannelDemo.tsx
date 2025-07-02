import React, { useState } from 'react';
import { MessageCircle, Instagram, Facebook, Twitter, Mail, Phone, Globe, ShoppingBag, Palette, MessageSquare, Zap, ArrowRight, Check, Info } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const OmnichannelDemo = () => {
  const { t } = useTranslation();
  const [activeChannel, setActiveChannel] = useState('website');
  
  const channels = [
    {
      id: 'website',
      name: t('omnichannelDemo.channels.website.name', 'Website'),
      icon: Globe,
      color: 'bg-blue-500',
      description: t('omnichannelDemo.channels.website.description', 'Universal widget that works on any HTML website'),
      stats: { messages: '3.2K', responseTime: '< 15s' },
      features: [
        'Universal compatibility',
        'Custom styling',
        'Mobile responsive',
        'Real-time sync'
      ]
    },
    {
      id: 'whatsapp',
      name: t('omnichannelDemo.channels.whatsapp.name', 'WhatsApp'),
      icon: MessageCircle,
      color: 'bg-green-500',
      description: t('omnichannelDemo.channels.whatsapp.description', 'Connect with customers on the world\'s most popular messaging app'),
      stats: { messages: '2.8K', responseTime: '< 30s' },
      features: [
        'Business API integration',
        'Rich media support',
        'Template messages',
        'Group messaging'
      ]
    },
    {
      id: 'instagram',
      name: t('omnichannelDemo.channels.instagram.name', 'Instagram'),
      icon: Instagram,
      color: 'bg-pink-500',
      description: t('omnichannelDemo.channels.instagram.description', 'Manage Instagram DMs and story replies in one unified inbox'),
      stats: { messages: '1.5K', responseTime: '< 45s' },
      features: [
        'Story reply management',
        'Media sharing',
        'Quick responses',
        'Automated greetings'
      ]
    },
    {
      id: 'facebook',
      name: t('omnichannelDemo.channels.facebook.name', 'Facebook'),
      icon: Facebook,
      color: 'bg-blue-600',
      description: t('omnichannelDemo.channels.facebook.description', 'Provide customer support through Facebook\'s messaging platform'),
      stats: { messages: '1.2K', responseTime: '< 1min' },
      features: [
        'Page integration',
        'Automated responses',
        'Rich cards',
        'Persistent menu'
      ]
    },
    {
      id: 'email',
      name: t('omnichannelDemo.channels.email.name', 'Email'),
      icon: Mail,
      color: 'bg-red-500',
      description: t('omnichannelDemo.channels.email.description', 'Manage email tickets with intelligent routing'),
      stats: { messages: '1.4K', responseTime: '< 30min' },
      features: [
        'Smart categorization',
        'Auto-responses',
        'Email templates',
        'Priority handling'
      ]
    },
    {
      id: 'phone',
      name: t('omnichannelDemo.channels.phone.name', 'Phone Call'),
      icon: Phone,
      color: 'bg-purple-500',
      description: t('omnichannelDemo.channels.phone.description', 'Handle voice support with AI voice agents'),
      stats: { messages: '650', responseTime: '< 2min' },
      features: [
        'Natural conversations',
        'Call routing',
        'Voicemail transcription',
        'Conference calls'
      ]
    },
    {
      id: 'ecommerce',
      name: t('omnichannelDemo.channels.ecommerce.name', 'E-commerce'),
      icon: ShoppingBag,
      color: 'bg-orange-500',
      description: t('omnichannelDemo.channels.ecommerce.description', 'Integrate with online stores for order management'),
      stats: { messages: '2.1K', responseTime: '< 20s' },
      features: [
        'Order tracking',
        'Product information',
        'Inventory checks',
        'Shopping cart recovery'
      ]
    }
  ];

  const platformIcons = {
    'Generic Website': Globe,
    'WordPress': Palette,
    'Shopify': ShoppingBag,
    'Wix': Palette,
    'Squarespace': Palette,
    'MailerLite': Zap
  };

  const getChannel = (id) => channels.find(channel => channel.id === id) || channels[0];
  const currentChannel = getChannel(activeChannel);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('omnichannelDemo.title', 'Deploy Everywhere Your Customers Are')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('omnichannelDemo.subtitle', 'Seamlessly connect all your customer touchpoints across websites, social media, and communication platforms.')}
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Channel List */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-teal-500 p-4">
                <h3 className="text-xl font-bold text-white">
                  {t('omnichannelDemo.title', 'Communication Channels')}
                </h3>
              </div>
              <div className="divide-y">
                {channels.map((channel) => {
                  const IconComponent = channel.icon;
                  return (
                    <button
                      key={channel.id}
                      onClick={() => setActiveChannel(channel.id)}
                      className={`w-full p-4 flex items-center space-x-4 text-left transition-colors ${
                        activeChannel === channel.id ? 'bg-blue-50' : 'hover:bg-gray-50'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-lg ${channel.color} flex items-center justify-center flex-shrink-0`}>
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-900">{channel.name}</h4>
                        <p className="text-sm text-gray-600 truncate">{channel.description}</p>
                      </div>
                      {activeChannel === channel.id && (
                        <Check className="w-5 h-5 text-blue-600" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Channel Details */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full">
              <div className={`${currentChannel.color} p-6 text-white`}>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    {React.createElement(currentChannel.icon, { className: "w-6 h-6" })}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{currentChannel.name}</h3>
                    <p className="text-white/80">{currentChannel.description}</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-gray-900">{currentChannel.stats.messages}</div>
                    <div className="text-sm text-gray-600">{t('omnichannelDemo.messagesPerDay', 'Messages/day')}</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-green-600">{currentChannel.stats.responseTime}</div>
                    <div className="text-sm text-gray-600">{t('omnichannelDemo.responseTime', 'Response time')}</div>
                  </div>
                </div>

                {/* Features */}
                <h4 className="font-semibold text-gray-900 mb-4">{t('omnichannelDemo.keyFeatures', 'Key Features')}</h4>
                <div className="space-y-3 mb-8">
                  {currentChannel.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-blue-600" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Integration Button */}
                <button className="w-full bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2">
                  <span>{t('omnichannelDemo.integrateChannel', 'Integrate')} {currentChannel.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Platform Categories */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-lg text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6">
              <Globe className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('omnichannelDemo.platformCategories.website.title', 'Website Integration')}</h3>
            <p className="text-gray-600 mb-4">{t('omnichannelDemo.platformCategories.website.description', 'Deploy on any website platform with our universal widget')}</p>
            <div className="flex flex-wrap justify-center gap-2">
              {['Generic Website', 'WordPress', 'Shopify', 'Wix', 'Squarespace'].map((platform) => (
                <span key={platform} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                  {platform}
                </span>
              ))}
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-lg text-center">
            <div className="w-16 h-16 bg-pink-100 rounded-lg flex items-center justify-center mx-auto mb-6">
              <MessageSquare className="w-8 h-8 text-pink-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('omnichannelDemo.platformCategories.socialMedia.title', 'Social Media')}</h3>
            <p className="text-gray-600 mb-4">{t('omnichannelDemo.platformCategories.socialMedia.description', 'Connect with customers on their favorite social platforms')}</p>
            <div className="flex flex-wrap justify-center gap-2">
              {['WhatsApp', 'Instagram', 'Facebook', 'Twitter'].map((platform) => (
                <span key={platform} className="bg-pink-50 text-pink-700 px-3 py-1 rounded-full text-sm">
                  {platform}
                </span>
              ))}
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-lg text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-6">
              <Phone className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('omnichannelDemo.platformCategories.traditional.title', 'Traditional Channels')}</h3>
            <p className="text-gray-600 mb-4">{t('omnichannelDemo.platformCategories.traditional.description', 'Maintain support through classic communication methods')}</p>
            <div className="flex flex-wrap justify-center gap-2">
              {['Phone Call', 'Email', 'Contact Form'].map((platform) => (
                <span key={platform} className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm">
                  {platform}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Setup Guide */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-teal-500 rounded-2xl p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">{t('omnichannelDemo.quickSetup.title', 'Ready to Deploy Everywhere?')}</h3>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              {t('omnichannelDemo.quickSetup.subtitle', 'Get started in minutes with our simple integration process')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {(t('omnichannelDemo.quickSetup.steps', { returnObjects: true }) || []).map((step, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">{index + 1}</span>
                </div>
                <h4 className="font-semibold mb-2">{step.title}</h4>
                <p className="text-blue-100 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
              {t('omnichannelDemo.quickSetup.button', 'Start Free Deployment')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OmnichannelDemo;