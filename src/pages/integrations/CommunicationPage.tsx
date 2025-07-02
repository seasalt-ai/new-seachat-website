import React from 'react';
import { Phone, Mail, MessageSquare, Video, Slack, ArrowRight, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const CommunicationPage = () => {
  const { t } = useTranslation();
  
  const platforms = [
    {
      name: t('integrations.communication.platforms.slack.name', 'Slack'),
      icon: Slack,
      color: 'from-purple-500 to-indigo-500',
      description: t('integrations.communication.platforms.slack.description', 'Integrate with Slack for team collaboration and internal notifications'),
      features: [
        t('integrations.communication.platforms.slack.features.channels', 'Channel notifications'), 
        t('integrations.communication.platforms.slack.features.messages', 'Direct messages'), 
        t('integrations.communication.platforms.slack.features.commands', 'Bot commands'), 
        t('integrations.communication.platforms.slack.features.files', 'File sharing')
      ],
      setupTime: t('integrations.communication.platforms.slack.setupTime', '5 minutes'),
      category: t('integrations.communication.platforms.slack.category', 'Team Chat')
    },
    {
      name: t('integrations.communication.platforms.teams.name', 'Microsoft Teams'),
      icon: Video,
      color: 'from-blue-500 to-purple-500',
      description: t('integrations.communication.platforms.teams.description', 'Connect with Microsoft Teams for enterprise communication'),
      features: [
        t('integrations.communication.platforms.teams.features.channels', 'Team channels'), 
        t('integrations.communication.platforms.teams.features.calls', 'Video calls'), 
        t('integrations.communication.platforms.teams.features.files', 'File collaboration'), 
        t('integrations.communication.platforms.teams.features.apps', 'App integration')
      ],
      setupTime: t('integrations.communication.platforms.teams.setupTime', '8 minutes'),
      category: t('integrations.communication.platforms.teams.category', 'Enterprise')
    },
    {
      name: t('integrations.communication.platforms.discord.name', 'Discord'),
      icon: MessageSquare,
      color: 'from-indigo-500 to-purple-500',
      description: t('integrations.communication.platforms.discord.description', 'Community support through Discord servers and channels'),
      features: [
        t('integrations.communication.platforms.discord.features.server', 'Server integration'), 
        t('integrations.communication.platforms.discord.features.voice', 'Voice channels'), 
        t('integrations.communication.platforms.discord.features.moderation', 'Community moderation'), 
        t('integrations.communication.platforms.discord.features.bot', 'Bot features')
      ],
      setupTime: t('integrations.communication.platforms.discord.setupTime', '10 minutes'),
      category: t('integrations.communication.platforms.discord.category', 'Community')
    },
    {
      name: t('integrations.communication.platforms.zoom.name', 'Zoom'),
      icon: Video,
      color: 'from-blue-400 to-blue-600',
      description: t('integrations.communication.platforms.zoom.description', 'Video conferencing integration for face-to-face support'),
      features: [
        t('integrations.communication.platforms.zoom.features.scheduling', 'Meeting scheduling'), 
        t('integrations.communication.platforms.zoom.features.screen', 'Screen sharing'), 
        t('integrations.communication.platforms.zoom.features.recording', 'Recording'), 
        t('integrations.communication.platforms.zoom.features.webinar', 'Webinar support')
      ],
      setupTime: t('integrations.communication.platforms.zoom.setupTime', '12 minutes'),
      category: t('integrations.communication.platforms.zoom.category', 'Video')
    },
    {
      name: t('integrations.communication.platforms.telegram.name', 'Telegram'),
      icon: MessageSquare,
      color: 'from-blue-500 to-teal-500',
      description: t('integrations.communication.platforms.telegram.description', 'Telegram bot integration for instant messaging support'),
      features: [
        t('integrations.communication.platforms.telegram.features.api', 'Bot API'), 
        t('integrations.communication.platforms.telegram.features.groups', 'Group chats'), 
        t('integrations.communication.platforms.telegram.features.channels', 'Channel broadcasting'), 
        t('integrations.communication.platforms.telegram.features.files', 'File transfers')
      ],
      setupTime: t('integrations.communication.platforms.telegram.setupTime', '15 minutes'),
      category: t('integrations.communication.platforms.telegram.category', 'Messaging')
    },
    {
      name: t('integrations.communication.platforms.email.name', 'Email Platforms'),
      icon: Mail,
      color: 'from-gray-500 to-gray-700',
      description: t('integrations.communication.platforms.email.description', 'Connect with Gmail, Outlook, and other email providers'),
      features: [
        t('integrations.communication.platforms.email.features.routing', 'Email routing'), 
        t('integrations.communication.platforms.email.features.templates', 'Template responses'), 
        t('integrations.communication.platforms.email.features.attachments', 'Attachment handling'), 
        t('integrations.communication.platforms.email.features.threading', 'Threading')
      ],
      setupTime: t('integrations.communication.platforms.email.setupTime', '7 minutes'),
      category: t('integrations.communication.platforms.email.category', 'Email')
    }
  ];

  const benefits = [
    {
      title: t('integrations.communication.benefits.unified.title', 'Unified Communication'),
      description: t('integrations.communication.benefits.unified.description', 'Manage all communication channels from one central hub'),
      metric: '100%'
    },
    {
      title: t('integrations.communication.benefits.collaboration.title', 'Team Collaboration'),
      description: t('integrations.communication.benefits.collaboration.description', 'Improve internal team coordination and response times'),
      metric: '60%'
    },
    {
      title: t('integrations.communication.benefits.efficiency.title', 'Response Efficiency'),
      description: t('integrations.communication.benefits.efficiency.description', 'Faster resolution with integrated communication tools'),
      metric: '45%'
    },
    {
      title: t('integrations.communication.benefits.satisfaction.title', 'Customer Satisfaction'),
      description: t('integrations.communication.benefits.satisfaction.description', 'Better support experience across all channels'),
      metric: '92%'
    }
  ];

  const featuresFromTranslation = t('integrations.communication.features', { returnObjects: true });
  const features = Array.isArray(featuresFromTranslation) ? featuresFromTranslation : [];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-800 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <MessageSquare className="w-16 h-16 text-indigo-300 mr-4" />
              <h1 className="text-5xl md:text-6xl font-bold">
                {t('integrations.communication.title', 'Communication Tools')}
              </h1>
            </div>
            <p className="text-2xl text-indigo-200 mb-8 max-w-4xl mx-auto">
              {t('integrations.communication.subtitle', 'Integrate with popular communication platforms like Slack, Teams, Discord, and more to streamline your support workflow and team collaboration.')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-indigo-500 hover:bg-indigo-400 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105">
                {t('integrations.communication.connectButton', 'Connect Communication Tools')}
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-indigo-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all">
                {t('integrations.communication.demoButton', 'View Integration Demo')}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Supported Platforms */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('integrations.communication.platformsTitle', 'Popular Communication Platforms')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('integrations.communication.platformsSubtitle', 'Connect with the communication tools your team already uses for seamless workflow integration.')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platforms.map((platform, index) => {
              const IconComponent = platform.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${platform.color} rounded-2xl flex items-center justify-center`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <span className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm font-medium">
                      {platform.category}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{platform.name}</h3>
                  <p className="text-gray-600 mb-6">{platform.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {platform.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-sm text-gray-600">
                      {t('integrations.communication.setup')}: <span className="font-medium text-gray-900">{platform.setupTime}</span>
                    </div>
                  </div>
                  
                  <button className={`w-full bg-gradient-to-r ${platform.color} hover:opacity-90 text-white py-3 px-6 rounded-lg font-semibold transition-all transform hover:scale-105`}>
                    {t('integrations.communication.connectPlatform', 'Connect')} {platform.name}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('integrations.communication.benefitsTitle', 'Communication Integration Benefits')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('integrations.communication.benefitsSubtitle', 'Streamline your team communication and improve customer support efficiency.')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl font-bold text-indigo-600 mb-4">{benefit.metric}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {t('integrations.communication.suiteTitle', 'Complete Communication Suite')}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {t('integrations.communication.suiteSubtitle', 'Integrate all your communication tools for a unified support experience that keeps your team connected and customers satisfied.')}
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('integrations.communication.notificationTitle', 'Team Notification Example')}</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-purple-500">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">{t('integrations.communication.slackChannel', 'Slack #support')}</span>
                    <span className="text-sm text-purple-600">{t('integrations.communication.newTicket', 'New ticket')}</span>
                  </div>
                  <p className="text-sm text-gray-600">🎫 {t('integrations.communication.ticketAssigned', 'High priority ticket assigned to @sarah')}</p>
                  <p className="text-xs text-gray-500 mt-2">{t('integrations.communication.customerUrgent', 'Customer: "Urgent billing issue needs immediate attention"')}</p>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-blue-500">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">{t('integrations.communication.teamsChannel', 'Teams #customer-success')}</span>
                    <span className="text-sm text-blue-600">{t('integrations.communication.escalation', 'Escalation')}</span>
                  </div>
                  <p className="text-sm text-gray-600">📞 {t('integrations.communication.videoCall', 'Video call requested for technical support')}</p>
                  <p className="text-xs text-gray-500 mt-2">{t('integrations.communication.meetingScheduled', 'Meeting scheduled for 2:00 PM today')}</p>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-green-500">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">{t('integrations.communication.discordChannel', 'Discord #community')}</span>
                    <span className="text-sm text-green-600">{t('integrations.communication.resolved', 'Resolved')}</span>
                  </div>
                  <p className="text-sm text-gray-600">✅ {t('integrations.communication.questionAnswered', 'Community question answered successfully')}</p>
                  <p className="text-xs text-gray-500 mt-2">{t('integrations.communication.satisfaction', 'Customer satisfaction: 5/5 stars')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('integrations.communication.ctaTitle', 'Ready to Streamline Team Communication?')}
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            {t('integrations.communication.ctaSubtitle', 'Connect your communication tools and create a unified support workflow that keeps your team aligned and customers happy.')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              {t('integrations.communication.ctaConnectButton', 'Connect Communication Tools')}
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all flex items-center justify-center">
              {t('integrations.communication.ctaGuideButton', 'View Setup Guide')}
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommunicationPage;