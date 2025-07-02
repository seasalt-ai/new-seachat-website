import React, { useState } from 'react';
import { Users, Bot, BookOpen, Zap, Play, Check, Brain, Clock, Search, Database, FileText, Target } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const FeatureTabs = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('agent-chat');

  const tabs = [
    { id: 'agent-chat', label: t('featureTabs.tabs.agentChat'), icon: Users },
    { id: 'ai-agent', label: t('featureTabs.tabs.aiAgent'), icon: Bot },
    { id: 'advanced-ai', label: t('featureTabs.tabs.advancedAI'), icon: Brain },
    { id: 'knowledge-base', label: t('featureTabs.tabs.knowledgeBase'), icon: BookOpen },
    { id: 'integrations', label: t('featureTabs.tabs.integrations'), icon: Zap }
  ];

  const tabContent = {
    'agent-chat': {
      title: t('featureTabs.content.agentChat.title'),
      subtitle: t('featureTabs.content.agentChat.subtitle'),
      features: t('featureTabs.content.agentChat.features', { returnObjects: true }),
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop'
    },
    'ai-agent': {
      title: t('featureTabs.content.aiAgent.title'),
      subtitle: t('featureTabs.content.aiAgent.subtitle'),
      features: t('featureTabs.content.aiAgent.features', { returnObjects: true }),
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop'
    },
    'advanced-ai': {
      title: t('featureTabs.content.advancedAI.title'),
      subtitle: t('featureTabs.content.advancedAI.subtitle'),
      features: t('featureTabs.content.advancedAI.features', { returnObjects: true }),
      image: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      advancedFeatures: [
        {
          icon: Search,
          title: 'Retrieval Augmented Generation',
          description: 'Keyword, Vector, and Hybrid Search for precise information retrieval',
          details: ['Semantic vector search', 'Keyword matching', 'Hybrid search algorithms', 'Real-time content indexing']
        },
        {
          icon: Brain,
          title: 'Long Term Memory',
          description: 'Personalized experiences through persistent user memory',
          details: ['User preference tracking', 'Conversation history analysis', 'Behavioral pattern recognition', 'Cross-session continuity']
        },
        {
          icon: Clock,
          title: 'Time Awareness',
          description: 'Context-aware responses based on current time and timezone',
          details: ['Real-time timestamp integration', 'Timezone-aware scheduling', 'Time-sensitive recommendations', 'Business hours optimization']
        },
        {
          icon: Target,
          title: 'Context Extraction',
          description: 'Intelligent field mapping for better user comprehension',
          details: ['Custom field definitions', 'Automatic data extraction', 'User language preferences', 'Dynamic context building']
        },
        {
          icon: FileText,
          title: 'Referenced Results',
          description: 'Transparent AI responses with source citations',
          details: ['Source document linking', 'Citation tracking', 'Confidence scoring', 'Fact verification']
        },
        {
          icon: Database,
          title: 'Knowledge Refinement',
          description: 'Continuous improvement of knowledge base accuracy',
          details: ['Auto-updating content', 'Quality scoring', 'Relevance optimization', 'Performance analytics']
        }
      ]
    },
    'knowledge-base': {
      title: t('featureTabs.content.knowledgeBase.title'),
      subtitle: t('featureTabs.content.knowledgeBase.subtitle'),
      features: t('featureTabs.content.knowledgeBase.features', { returnObjects: true }),
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop'
    },
    'integrations': {
      title: t('featureTabs.content.integrations.title'),
      subtitle: t('featureTabs.content.integrations.subtitle'),
      features: t('featureTabs.content.integrations.features', { returnObjects: true }),
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop'
    }
  };

  const currentContent = tabContent[activeTab as keyof typeof tabContent];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('featureTabs.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('featureTabs.subtitle')}
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-12 bg-gray-100 rounded-2xl p-2 max-w-4xl mx-auto">
          {tabs.map((tab) => {
            const IconComponent = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-3 rounded-xl font-semibold transition-all duration-300 text-sm ${
                  activeTab === tab.id
                    ? 'bg-white text-blue-600 shadow-md transform scale-105'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                <IconComponent className="w-4 h-4" />
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        {activeTab === 'advanced-ai' ? (
          // Advanced AI Features Layout
          <div className="space-y-16">
            {/* Header */}
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {currentContent.title}
              </h3>
              <p className="text-xl text-gray-600 mb-8">
                {currentContent.subtitle}
              </p>
            </div>

            {/* Advanced Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentContent.advancedFeatures?.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 border border-blue-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h4 className="text-xl font-bold text-gray-900 mb-3">
                      {feature.title}
                    </h4>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {feature.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-700">
                          <div className="w-2 h-2 bg-teal-500 rounded-full mr-3 flex-shrink-0"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>

            {/* Demo Section */}
            <div className="bg-gradient-to-r from-blue-600 to-teal-500 rounded-2xl p-12 text-white text-center">
              <h3 className="text-3xl font-bold mb-4">{t('featureTabs.content.advancedAI.tryDemo')}</h3>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                See how our next-generation AI features work together to create truly intelligent customer support experiences.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
                  {t('featureTabs.content.advancedAI.tryDemo')}
                </button>
                <button className="flex items-center justify-center space-x-2 border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-all">
                  <Play className="w-5 h-5" />
                  <span>{t('featureTabs.content.advancedAI.watchAI')}</span>
                </button>
              </div>
            </div>
          </div>
        ) : (
          // Standard Tab Content Layout
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {currentContent.title}
                </h3>
                <p className="text-xl text-gray-600 mb-8">
                  {currentContent.subtitle}
                </p>
              </div>

              <div className="grid gap-4">
                {currentContent.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 group"
                  >
                    <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105">
                  {activeTab === 'agent-chat' ? t('featureTabs.content.agentChat.tryFeature') : 
                   activeTab === 'ai-agent' ? t('featureTabs.content.aiAgent.tryFeature') :
                   activeTab === 'knowledge-base' ? t('featureTabs.content.knowledgeBase.tryFeature') :
                   t('featureTabs.content.integrations.tryFeature')}
                </button>
                <button className="flex items-center justify-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold">
                  <Play className="w-5 h-5" />
                  <span>{activeTab === 'agent-chat' ? t('featureTabs.content.agentChat.watchDemo') : 
                         activeTab === 'ai-agent' ? t('featureTabs.content.aiAgent.watchDemo') :
                         activeTab === 'knowledge-base' ? t('featureTabs.content.knowledgeBase.watchDemo') :
                         t('featureTabs.content.integrations.watchDemo')}</span>
                </button>
              </div>
            </div>

            {/* Image/Demo */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img
                  src={currentContent.image}
                  alt={currentContent.title}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Live Demo Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeatureTabs;