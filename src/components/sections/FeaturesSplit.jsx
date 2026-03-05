import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import ImgVar0 from './../../assets/images/features-split-image-01.jpg';
import ImgVar1 from './../../assets/images/features-split-image-02.jpg';
import ImgVar2 from './../../assets/images/features-split-image-03.jpg';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Explore Our Vision',
    paragraph: 'At Piarka Software, we combine engineering precision with creative innovation. Our mission is to deliver digital experiences that are both powerful and meaningful — from intelligent software solutions to inspiring interactive products. Each project in our portfolio reflects our dedication to building technology that truly connects with people.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

            {/* Feature 1 - Innovation & Vision */}
            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Purpose-Driven Innovation
                </div>
                <h3 className="mt-0 mb-12">
                  Turning Ideas into Impactful Digital Experiences
                </h3>
                <p className="m-0">
                  Every Piarka Software product begins with a clear purpose — to transform ideas into high-quality, functional results. 
                  From <strong>81 Guides</strong> and <strong>Piarcha</strong>, our immersive travel platforms, to <strong>Yeşildoğa</strong>, our sustainability-focused initiative, 
                  each project demonstrates our commitment to meaningful design, technical excellence, and long-term impact in the digital world.
                </p>
              </div>
              <div
                className={classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={ImgVar0}
                  alt="Purpose-driven innovation"
                  width={528}
                  height={396}
                />
              </div>
            </div>

            {/* Feature 2 - Seamless Integration */}
            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Connected Ecosystems
                </div>
                <h3 className="mt-0 mb-12">
                  Building Bridges Between Technologies, Platforms, and People
                </h3>
                <p className="m-0">
                  Our expertise lies in creating modular and scalable systems that connect tools, data, and users across platforms. 
                  From backend integrations like <strong>node-csv-ts</strong> and <strong>btc-websockets</strong> to high-performance APIs and analytics pipelines, 
                  Piarka Software delivers solutions that work seamlessly within existing ecosystems. 
                  We simplify complexity so businesses can focus on what truly matters — growth and innovation.
                </p>
              </div>
              <div
                className={classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={ImgVar1}
                  alt="Seamless integration"
                  width={528}
                  height={396}
                />
              </div>
            </div>

            {/* Feature 3 - Partnership & Support */}
            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Collaboration That Lasts
                </div>
                <h3 className="mt-0 mb-12">
                  Your Vision, Our Expertise — Every Step of the Journey
                </h3>
                <p className="m-0">
                  At Piarka Software, we believe strong partnerships create the best outcomes. 
                  Our dedicated team provides transparent communication, strategic guidance, and hands-on technical support from concept to deployment. 
                  Whether developing a game like <strong>Into the Light</strong> or launching a digital platform, 
                  we ensure every client receives the attention, insight, and care needed for long-term success.
                </p>
              </div>
              <div
                className={classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={ImgVar2}
                  alt="Partnership and support"
                  width={528}
                  height={396}
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
