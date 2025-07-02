import React from 'react';
import { ShoppingBag, TrendingUp, Package, CreditCard, ArrowRight, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const EcommercePage = () => {
  const { t } = useTranslation();
  
  const platforms = [
    {
      name: t('integrations.ecommerce.platforms.shopify.name', 'Shopify'),
      logo: '🛍️',
      description: t('integrations.ecommerce.platforms.shopify.description', 'Complete Shopify integration with order management and customer sync'),
      features: [
        t('integrations.ecommerce.platforms.shopify.features.orders', 'Order tracking'), 
        t('integrations.ecommerce.platforms.shopify.features.catalog', 'Product catalog'), 
        t('integrations.ecommerce.platforms.shopify.features.customers', 'Customer profiles'), 
        t('integrations.ecommerce.platforms.shopify.features.inventory', 'Inventory sync')
      ],
      setupTime: t('integrations.ecommerce.platforms.shopify.setupTime', '5 minutes'),
      popularity: t('integrations.ecommerce.platforms.shopify.popularity', 'Most Popular')
    },
    {
      name: t('integrations.ecommerce.platforms.woocommerce.name', 'WooCommerce'),
      logo: '🛒',
      description: t('integrations.ecommerce.platforms.woocommerce.description', 'WordPress WooCommerce plugin for seamless store integration'),
      features: [
        t('integrations.ecommerce.platforms.woocommerce.features.orders', 'Order status'), 
        t('integrations.ecommerce.platforms.woocommerce.features.products', 'Product support'), 
        t('integrations.ecommerce.platforms.woocommerce.features.customers', 'Customer history'), 
        t('integrations.ecommerce.platforms.woocommerce.features.payments', 'Payment tracking')
      ],
      setupTime: t('integrations.ecommerce.platforms.woocommerce.setupTime', '8 minutes'),
      popularity: t('integrations.ecommerce.platforms.woocommerce.popularity', 'WordPress')
    },
    {
      name: t('integrations.ecommerce.platforms.magento.name', 'Magento'),
      logo: '🏪',
      description: t('integrations.ecommerce.platforms.magento.description', 'Enterprise Magento integration for large-scale e-commerce'),
      features: [
        t('integrations.ecommerce.platforms.magento.features.multistore', 'Multi-store support'), 
        t('integrations.ecommerce.platforms.magento.features.orders', 'Advanced orders'), 
        t('integrations.ecommerce.platforms.magento.features.segments', 'Customer segments'), 
        t('integrations.ecommerce.platforms.magento.features.catalog', 'Catalog sync')
      ],
      setupTime: t('integrations.ecommerce.platforms.magento.setupTime', '15 minutes'),
      popularity: t('integrations.ecommerce.platforms.magento.popularity', 'Enterprise')
    },
    {
      name: t('integrations.ecommerce.platforms.bigcommerce.name', 'BigCommerce'),
      logo: '🏬',
      description: t('integrations.ecommerce.platforms.bigcommerce.description', 'BigCommerce API integration for growing online stores'),
      features: [
        t('integrations.ecommerce.platforms.bigcommerce.features.orders', 'Order management'), 
        t('integrations.ecommerce.platforms.bigcommerce.features.products', 'Product data'), 
        t('integrations.ecommerce.platforms.bigcommerce.features.customers', 'Customer insights'), 
        t('integrations.ecommerce.platforms.bigcommerce.features.shipping', 'Shipping info')
      ],
      setupTime: t('integrations.ecommerce.platforms.bigcommerce.setupTime', '10 minutes'),
      popularity: t('integrations.ecommerce.platforms.bigcommerce.popularity', 'Growing')
    },
    {
      name: t('integrations.ecommerce.platforms.etsy.name', 'Etsy'),
      logo: '🎨',
      description: t('integrations.ecommerce.platforms.etsy.description', 'Etsy marketplace integration for creative sellers'),
      features: [
        t('integrations.ecommerce.platforms.etsy.features.orders', 'Order support'), 
        t('integrations.ecommerce.platforms.etsy.features.shop', 'Shop management'), 
        t('integrations.ecommerce.platforms.etsy.features.messages', 'Customer messages'), 
        t('integrations.ecommerce.platforms.etsy.features.listings', 'Listing help')
      ],
      setupTime: t('integrations.ecommerce.platforms.etsy.setupTime', '12 minutes'),
      popularity: t('integrations.ecommerce.platforms.etsy.popularity', 'Creative')
    },
    {
      name: t('integrations.ecommerce.platforms.amazon.name', 'Amazon Seller'),
      logo: '📦',
      description: t('integrations.ecommerce.platforms.amazon.description', 'Amazon Seller Central integration for marketplace sellers'),
      features: [
        t('integrations.ecommerce.platforms.amazon.features.orders', 'Order tracking'), 
        t('integrations.ecommerce.platforms.amazon.features.fba', 'FBA support'), 
        t('integrations.ecommerce.platforms.amazon.features.service', 'Customer service'), 
        t('integrations.ecommerce.platforms.amazon.features.returns', 'Returns handling')
      ],
      setupTime: t('integrations.ecommerce.platforms.amazon.setupTime', '20 minutes'),
      popularity: t('integrations.ecommerce.platforms.amazon.popularity', 'Marketplace')
    }
  ];

  const benefits = [
    {
      icon: Package,
      title: t('integrations.ecommerce.benefits.orders.title', 'Order Management'),
      description: t('integrations.ecommerce.benefits.orders.description', 'Handle order inquiries, tracking, and updates automatically'),
      metric: '80%'
    },
    {
      icon: TrendingUp,
      title: t('integrations.ecommerce.benefits.sales.title', 'Sales Increase'),
      description: t('integrations.ecommerce.benefits.sales.description', 'Convert support conversations into additional sales'),
      metric: '25%'
    },
    {
      icon: CreditCard,
      title: t('integrations.ecommerce.benefits.payment.title', 'Payment Support'),
      description: t('integrations.ecommerce.benefits.payment.description', 'Assist with payment issues and billing questions'),
      metric: '95%'
    },
    {
      icon: ShoppingBag,
      title: t('integrations.ecommerce.benefits.cart.title', 'Cart Recovery'),
      description: t('integrations.ecommerce.benefits.cart.description', 'Reduce cart abandonment with proactive support'),
      metric: '40%'
    }
  ];

  const featuresFromTranslation = t('integrations.ecommerce.features', { returnObjects: true });
  const features = Array.isArray(featuresFromTranslation) ? featuresFromTranslation : [];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-pink-800 to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <ShoppingBag className="w-16 h-16 text-purple-300 mr-4" />
              <h1 className="text-5xl md:text-6xl font-bold">
                {t('integrations.ecommerce.title', 'E-commerce Integrations')}
              </h1>
            </div>
            <p className="text-2xl text-purple-200 mb-8 max-w-4xl mx-auto">
              {t('integrations.ecommerce.subtitle', 'Connect SeaChat with your online store to provide exceptional customer support, increase sales, and reduce cart abandonment.')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-purple-500 hover:bg-purple-400 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105">
                {t('integrations.ecommerce.connectButton', 'Connect Your Store')}
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all">
                {t('integrations.ecommerce.demoButton', 'View E-commerce Demo')}
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
              {t('integrations.ecommerce.platformsTitle', 'Supported E-commerce Platforms')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('integrations.ecommerce.platformsSubtitle', 'Integrate with all major e-commerce platforms and marketplaces for unified customer support.')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="text-4xl">{platform.logo}</div>
                  <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium">
                    {platform.popularity}
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
                    {t('integrations.ecommerce.setup')}: <span className="font-medium text-gray-900">{platform.setupTime}</span>
                  </div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-3 px-6 rounded-lg font-semibold transition-all transform hover:scale-105">
                  {t('integrations.ecommerce.connectPlatform', 'Connect')} {platform.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('integrations.ecommerce.benefitsTitle', 'E-commerce Support Benefits')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('integrations.ecommerce.benefitsSubtitle', 'Transform your customer support into a sales-driving, retention-boosting powerhouse.')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-purple-600 mb-4">{benefit.metric}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {t('integrations.ecommerce.supportTitle', 'Complete E-commerce Support Suite')}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {t('integrations.ecommerce.supportSubtitle', 'Everything you need to provide exceptional customer support for your online store, from order tracking to product recommendations.')}
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
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('integrations.ecommerce.scenarioTitle', 'Customer Support Scenario')}</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-sm text-gray-600 mb-2">{t('integrations.ecommerce.customer', 'Customer')}</div>
                  <p className="text-gray-800">{t('integrations.ecommerce.orderQuestion', '"Where is my order #12345?"')}</p>
                </div>
                
                <div className="bg-purple-100 rounded-lg p-4">
                  <div className="text-sm text-purple-600 mb-2">{t('integrations.ecommerce.seachatAI', 'SeaChat AI')}</div>
                  <p className="text-gray-800">{t('integrations.ecommerce.orderResponse', '"Your order #12345 shipped yesterday and is currently in transit. Expected delivery: Tomorrow by 6 PM. Track it here: [tracking link]"')}</p>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-sm text-gray-600 mb-2">{t('integrations.ecommerce.customer', 'Customer')}</div>
                  <p className="text-gray-800">{t('integrations.ecommerce.recommendationQuestion', '"Great! Can you recommend similar products?"')}</p>
                </div>
                
                <div className="bg-purple-100 rounded-lg p-4">
                  <div className="text-sm text-purple-600 mb-2">{t('integrations.ecommerce.seachatAI', 'SeaChat AI')}</div>
                  <p className="text-gray-800">{t('integrations.ecommerce.recommendationResponse', '"Based on your purchase, you might like these items: [Product A], [Product B]. Would you like a 10% discount on your next order?"')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('integrations.ecommerce.ctaTitle', 'Ready to Boost Your E-commerce Sales?')}
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            {t('integrations.ecommerce.ctaSubtitle', 'Connect your online store and start providing exceptional customer support that drives sales and loyalty.')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              {t('integrations.ecommerce.ctaConnectButton', 'Connect Your Store Now')}
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all flex items-center justify-center">
              {t('integrations.ecommerce.ctaGuideButton', 'View Integration Guide')}
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EcommercePage;