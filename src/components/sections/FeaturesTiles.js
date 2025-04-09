import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

import icon01 from './../../assets/images/feature-tile-icon-01.svg';
import icon02 from './../../assets/images/feature-tile-icon-02.svg';
import icon03 from './../../assets/images/feature-tile-icon-03.svg';
import puzzleIcon from './../../assets/images/puzzle-svgrepo-com.svg';
import icon05 from './../../assets/images/feature-tile-icon-05.svg';
import rocketIcon from './../../assets/images/rocket.svg';
import icon06 from './../../assets/images/feature-tile-icon-06.svg';
import webIcon from './../../assets/images/web-svgrepo-com.svg';
import convertShapeIcon from './../../assets/images/convertshape-2-svgrepo-com.svg';
import coinSendIcon from './../../assets/images/coin-send-svgrepo-com.svg';

const propTypes = {
  ...SectionTilesProps.types
};

const defaultProps = {
  ...SectionTilesProps.defaults
};

const FeaturesTiles = ({
                         className,
                         topOuterDivider,
                         bottomOuterDivider,
                         topDivider,
                         bottomDivider,
                         hasBgColor,
                         invertColor,
                         pushLeft,
                         ...props
                       }) => {
  const outerClasses = classNames(
      'features-tiles section',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
  );

  const innerClasses = classNames(
      'features-tiles-inner section-inner pt-0',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
      'tiles-wrap center-content',
      pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Where Ideas Come to Life: Explore Our Signature Software Projects',
    paragraph: `Embark on a journey of innovation and discovery as you delve into our realm of technology brilliance. At Piarcha Software, we believe in turning imaginative concepts into tangible, groundbreaking solutions. Our projects aren't just lines of code; they're the manifestation of bold ideas and relentless dedication. Explore our curated showcase of signature software projects, where creativity meets functionality, and innovation thrives. Witness firsthand how we breathe life into ideas, crafting digital experiences that redefine possibilities. Join us on this exploration of ingenuity and discover the transformative power of our signature software projects.`
  };

  const tileData = [
    { icon: icon01, title: '81 Guides', description: 'Embark on an enriching journey through Turkey with our immersive touring application...' },
    { icon: icon02, title: 'Piarcha', description: 'Embark on an enriching journey worldwide with our immersive touring application...' },
    { icon: icon03, title: 'Yeşildoğa', description: 'We are dedicated to making the world a better place by focusing on the health of our planet...' },
    { icon: puzzleIcon, title: 'Slide & Learn', description: 'Introduce your little ones to a world of fun and learning with our delightful sliding puzzle game...' },
    { icon: icon05, title: 'Procedural Dungeons', description: 'Embark on an ever-changing adventure with our captivating game featuring multiple procedural dungeons...' },
    { icon: rocketIcon, title: 'An Unusual Refrugee', description: 'Embark on a thrilling online survival adventure, seamlessly playable on both browsers and phones...' },
    { icon: icon06, title: 'piarkasoftware.com', description: 'This website is designed and created by us too :)' },
    { icon: webIcon, title: 'www.dogabudak.com', description: 'Personal website for Doga Budak' },
    { icon: convertShapeIcon, title: 'node-csv-ts', description: 'Introducing our state-of-the-art TypeScript library for seamless CSV to JSON conversion...' },
    { icon: coinSendIcon, title: 'btc-websockets', description: 'Elevate your cryptocurrency trading experience with our cutting-edge coin trading library...' },
    { icon: coinSendIcon, title: 'Mini Productions', description: 'Elevate your cryptocurrency trading experience with our cutting-edge coin trading library...' }
  ];

  return (
      <section {...props} className={outerClasses}>
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className="center-content" />
            <div className={tilesClasses}>
              {tileData.map((tile, index) => (
                  <div
                      className="tiles-item reveal-from-bottom"
                      data-reveal-delay={(index % 3) * 200}
                      key={index}
                  >
                    <div className="tiles-item-inner">
                      <div className="features-tiles-item-header">
                        <div className="features-tiles-item-image mb-16">
                          <Image
                              src={tile.icon}
                              alt={`Features tile icon ${index + 1}`}
                              width={64}
                              height={64}
                          />
                        </div>
                      </div>
                      <div className="features-tiles-item-content">
                        <h4 className="mt-0 mb-8">{tile.title}</h4>
                        <p className="m-0 text-sm">{tile.description}</p>
                      </div>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </div>
      </section>
  );
};

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;
