import { useEffect, useState } from 'react';
import Aurora from './Aurora';
import Threads from './Threads';
import SpotlightCard from './SpotlightCard';
import Squares from './Squares';
import './LandingPage.css';

const LandingPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="landing-page">
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-content">
          <div className="logo">NEXUS</div>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#about">About</a>
            <button className="nav-cta">Get Started</button>
          </div>
        </div>
      </nav>

      {/* Hero Section with Aurora + Threads */}
      <section className="hero">
        <div className="hero-background">
          <Aurora
            colorStops={['#0a4d68', '#088395', '#05bfdb']}
            amplitude={0.8}
            blend={1}
            speed={0.3}
          />
        </div>
        <div className="hero-threads">
          <Threads
            color={[0.03, 0.75, 0.86]}
            amplitude={0.5}
            distance={0.1}
            enableMouseInteraction={true}
          />
        </div>
        
        <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
          <div className="hero-badge">Powered by AI</div>
          <h1 className="hero-title">
            Transform Your
            <span className="gradient-text"> Workflow</span>
          </h1>
          <p className="hero-subtitle">
            The next-generation platform that adapts to your needs.
            Built for teams who refuse to compromise.
          </p>
          <div className="hero-cta">
            <button className="btn-primary">Start Free Trial</button>
            <button className="btn-secondary">Watch Demo</button>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-value">10M+</div>
              <div className="stat-label">Active Users</div>
            </div>
            <div className="stat">
              <div className="stat-value">99.9%</div>
              <div className="stat-label">Uptime</div>
            </div>
            <div className="stat">
              <div className="stat-value">150+</div>
              <div className="stat-label">Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with SpotlightCards */}
      <section className="features" id="features">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Built for Performance</h2>
            <p className="section-subtitle">
              Enterprise-grade features that scale with your ambitions
            </p>
          </div>

          <div className="features-grid">
            <SpotlightCard 
              className="feature-card"
              spotlightColor="rgba(8, 131, 149, 0.15)"
            >
              <div className="feature-icon">⚡</div>
              <h3 className="feature-title">Lightning Fast</h3>
              <p className="feature-description">
                Sub-millisecond response times powered by edge computing.
                Your users won't wait, and neither should you.
              </p>
              <ul className="feature-list">
                <li>Global CDN deployment</li>
                <li>Edge caching</li>
                <li>Optimized data pipelines</li>
              </ul>
            </SpotlightCard>

            <SpotlightCard 
              className="feature-card"
              spotlightColor="rgba(5, 191, 219, 0.15)"
            >
              <div className="feature-icon">🔒</div>
              <h3 className="feature-title">Enterprise Security</h3>
              <p className="feature-description">
                Bank-level encryption and compliance certifications.
                Your data is protected by military-grade security.
              </p>
              <ul className="feature-list">
                <li>SOC 2 Type II certified</li>
                <li>End-to-end encryption</li>
                <li>Advanced threat detection</li>
              </ul>
            </SpotlightCard>

            <SpotlightCard 
              className="feature-card"
              spotlightColor="rgba(10, 77, 104, 0.15)"
            >
              <div className="feature-icon">🤖</div>
              <h3 className="feature-title">AI-Powered Insights</h3>
              <p className="feature-description">
                Machine learning models that learn from your patterns.
                Make smarter decisions, faster.
              </p>
              <ul className="feature-list">
                <li>Predictive analytics</li>
                <li>Automated workflows</li>
                <li>Smart recommendations</li>
              </ul>
            </SpotlightCard>

            <SpotlightCard 
              className="feature-card"
              spotlightColor="rgba(8, 131, 149, 0.15)"
            >
              <div className="feature-icon">🌐</div>
              <h3 className="feature-title">Global Scale</h3>
              <p className="feature-description">
                Infrastructure that handles billions of requests daily.
                From startup to enterprise, we scale with you.
              </p>
              <ul className="feature-list">
                <li>99.9% uptime SLA</li>
                <li>Auto-scaling infrastructure</li>
                <li>Multi-region deployment</li>
              </ul>
            </SpotlightCard>

            <SpotlightCard 
              className="feature-card"
              spotlightColor="rgba(5, 191, 219, 0.15)"
            >
              <div className="feature-icon">🔌</div>
              <h3 className="feature-title">Seamless Integration</h3>
              <p className="feature-description">
                Connect with your existing tools in minutes.
                Pre-built integrations for everything you use.
              </p>
              <ul className="feature-list">
                <li>1000+ integrations</li>
                <li>REST & GraphQL APIs</li>
                <li>Webhook support</li>
              </ul>
            </SpotlightCard>

            <SpotlightCard 
              className="feature-card"
              spotlightColor="rgba(10, 77, 104, 0.15)"
            >
              <div className="feature-icon">📊</div>
              <h3 className="feature-title">Real-Time Analytics</h3>
              <p className="feature-description">
                Visualize your data as it happens.
                Custom dashboards that tell your story.
              </p>
              <ul className="feature-list">
                <li>Live data streaming</li>
                <li>Custom visualizations</li>
                <li>Advanced filtering</li>
              </ul>
            </SpotlightCard>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing" id="pricing">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Simple, Transparent Pricing</h2>
            <p className="section-subtitle">
              Choose the plan that fits your needs. Upgrade or downgrade anytime.
            </p>
          </div>

          <div className="pricing-grid">
            <SpotlightCard 
              className="pricing-card"
              spotlightColor="rgba(8, 131, 149, 0.1)"
            >
              <div className="pricing-header">
                <h3 className="pricing-name">Starter</h3>
                <div className="pricing-price">
                  <span className="price-currency">$</span>
                  <span className="price-amount">29</span>
                  <span className="price-period">/month</span>
                </div>
                <p className="pricing-description">
                  Perfect for individuals and small teams
                </p>
              </div>
              <ul className="pricing-features">
                <li className="feature-included">✓ Up to 10 team members</li>
                <li className="feature-included">✓ 100GB storage</li>
                <li className="feature-included">✓ Basic analytics</li>
                <li className="feature-included">✓ Email support</li>
                <li className="feature-excluded">Advanced integrations</li>
                <li className="feature-excluded">Custom branding</li>
              </ul>
              <button className="pricing-cta">Get Started</button>
            </SpotlightCard>

            <SpotlightCard 
              className="pricing-card featured"
              spotlightColor="rgba(5, 191, 219, 0.2)"
            >
              <div className="featured-badge">Most Popular</div>
              <div className="pricing-header">
                <h3 className="pricing-name">Professional</h3>
                <div className="pricing-price">
                  <span className="price-currency">$</span>
                  <span className="price-amount">99</span>
                  <span className="price-period">/month</span>
                </div>
                <p className="pricing-description">
                  For growing teams that need more power
                </p>
              </div>
              <ul className="pricing-features">
                <li className="feature-included">✓ Up to 50 team members</li>
                <li className="feature-included">✓ 1TB storage</li>
                <li className="feature-included">✓ Advanced analytics</li>
                <li className="feature-included">✓ Priority support</li>
                <li className="feature-included">✓ Advanced integrations</li>
                <li className="feature-included">✓ Custom branding</li>
              </ul>
              <button className="pricing-cta primary">Get Started</button>
            </SpotlightCard>

            <SpotlightCard 
              className="pricing-card"
              spotlightColor="rgba(8, 131, 149, 0.1)"
            >
              <div className="pricing-header">
                <h3 className="pricing-name">Enterprise</h3>
                <div className="pricing-price">
                  <span className="price-amount">Custom</span>
                </div>
                <p className="pricing-description">
                  For organizations with specific needs
                </p>
              </div>
              <ul className="pricing-features">
                <li className="feature-included">✓ Unlimited team members</li>
                <li className="feature-included">✓ Unlimited storage</li>
                <li className="feature-included">✓ Custom analytics</li>
                <li className="feature-included">✓ 24/7 dedicated support</li>
                <li className="feature-included">✓ White-label solutions</li>
                <li className="feature-included">✓ SLA guarantees</li>
              </ul>
              <button className="pricing-cta">Contact Sales</button>
            </SpotlightCard>
          </div>
        </div>
      </section>

      {/* Footer with Grid Animation */}
      <footer className="footer">
        <div className="footer-background">
          <Squares
            speed={0.3}
            squareSize={40}
            direction="diagonal"
            borderColor="#1a1a1a"
            hoverFillColor="#0a4d68"
          />
        </div>
        
        <div className="footer-content">
          <div className="footer-grid">
            <div className="footer-column">
              <div className="footer-logo">NEXUS</div>
              <p className="footer-tagline">
                Building the future of productivity, one feature at a time.
              </p>
              <div className="footer-social">
                <a href="#" className="social-link">Twitter</a>
                <a href="#" className="social-link">LinkedIn</a>
                <a href="#" className="social-link">GitHub</a>
              </div>
            </div>

            <div className="footer-column">
              <h4 className="footer-title">Product</h4>
              <a href="#" className="footer-link">Features</a>
              <a href="#" className="footer-link">Pricing</a>
              <a href="#" className="footer-link">Security</a>
              <a href="#" className="footer-link">Roadmap</a>
            </div>

            <div className="footer-column">
              <h4 className="footer-title">Company</h4>
              <a href="#" className="footer-link">About</a>
              <a href="#" className="footer-link">Blog</a>
              <a href="#" className="footer-link">Careers</a>
              <a href="#" className="footer-link">Press Kit</a>
            </div>

            <div className="footer-column">
              <h4 className="footer-title">Resources</h4>
              <a href="#" className="footer-link">Documentation</a>
              <a href="#" className="footer-link">API Reference</a>
              <a href="#" className="footer-link">Support</a>
              <a href="#" className="footer-link">Status</a>
            </div>

            <div className="footer-column">
              <h4 className="footer-title">Legal</h4>
              <a href="#" className="footer-link">Privacy Policy</a>
              <a href="#" className="footer-link">Terms of Service</a>
              <a href="#" className="footer-link">Cookie Policy</a>
              <a href="#" className="footer-link">GDPR</a>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="copyright">
              © 2024 Nexus. All rights reserved.
            </p>
            <div className="footer-bottom-links">
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
