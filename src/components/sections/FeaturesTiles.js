import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
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
    paragraph: 'Embark on a journey of innovation and discovery as you delve into our realm of technology brilliance. At Piarcha Software, we believe in turning imaginative concepts into tangible, groundbreaking solutions. Our projects aren\'t just lines of code; they\'re the manifestation of bold ideas and relentless dedication. Explore our curated showcase of signature software projects, where creativity meets functionality, and innovation thrives. Witness firsthand how we breathe life into ideas, crafting digital experiences that redefine possibilities. Join us on this exploration of ingenuity and discover the transformative power of our signature software projects.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-01.svg')}
                      alt="Features tile icon 01"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    81 Guides
                    </h4>
                  <p className="m-0 text-sm">
                    Embark on an enriching journey through Turkey with our immersive touring application. Unveiling the rich tapestry of 81 cities, each guided by a knowledgeable local expert, this app is your passport to a personalized and authentic exploration of Turkey. Immerse yourself in the diverse cultures, historical gems, and hidden wonders as you navigate through this comprehensive guide, ensuring a seamless and unforgettable travel experience.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-02.svg')}
                      alt="Features tile icon 02"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Piarcha
                    </h4>
                  <p className="m-0 text-sm">
                    Embark on an enriching journey worldwide with our immersive touring application. Unveiling the rich tapestry of cities across the globe, each guided by a knowledgeable local expert, this app is your passport to a personalized and authentic exploration of the world. Immerse yourself in diverse cultures, historical gems, and hidden wonders as you navigate through this comprehensive global guide, ensuring a seamless and unforgettable travel experience.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-03.svg')}
                      alt="Features tile icon 03"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Yeşildoğa
                    </h4>
                  <p className="m-0 text-sm">
                    We are dedicated to making the world a better place by focusing on the health of our planet and environment. Every penny earned through our initiatives is directed towards charitable causes aimed at sustainability, conservation, and environmental stewardship. Join us in the journey towards a brighter, greener future, where your support not only fosters positive change but also contributes to a more sustainable and harmonious world.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/puzzle-svgrepo-com.svg')}
                      alt="Features tile icon 04"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Slide & Learn
                    </h4>
                  <p className="m-0 text-sm">
                    Introduce your little ones to a world of fun and learning with our delightful sliding puzzle game for kids. Featuring adorable animals and their playful sounds, this game engages young minds in a captivating puzzle-solving adventure. Watch as your children explore, solve, and giggle their way through a menagerie of entertaining challenges, combining education with entertainment in a delightful package.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-05.svg')}
                      alt="Features tile icon 05"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Procedural Dungeons
                    </h4>
                  <p className="m-0 text-sm">
                    Embark on an ever-changing adventure with our captivating game featuring multiple procedural dungeons. Immerse yourself in a dynamic gaming experience where each dungeon is a unique challenge, generated on-the-fly for endless exploration. Navigate through a world of unpredictability, uncovering new twists, turns, and treasures with each playthrough. Are you ready to test your skills in a world where no two dungeons are ever the same?
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/rocket.svg')}
                      alt="Features tile icon 06"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    An Unusual Refrugee
                    </h4>
                  <p className="m-0 text-sm">
                    Embark on a thrilling online survival adventure, seamlessly playable on both browsers and phones. Immerse yourself in a visually stunning world where alliances are forged, and strategic decisions shape your fate. Craft your own destiny on an alien planet, navigating challenges and ensuring survival in a game that transcends platforms.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-06.svg')}
                      alt="Features tile icon 06"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    piarkasoftware.com
                    </h4>
                  <p className="m-0 text-sm">
                    This website is designed and created by us too :)
                    </p>
                </div>
              </div>
            </div>
            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                        src={require('./../../assets/images/web-svgrepo-com.svg')}
                        alt="Features tile icon 06"
                        width={64}
                        height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    www.dogabudak.com
                  </h4>
                  <p className="m-0 text-sm">
                    Personal website for Doga Budak
                  </p>
                </div>
              </div>
            </div>
            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                        src={require('./../../assets/images/convertshape-2-svgrepo-com.svg')}
                        alt="Features tile icon 06"
                        width={64}
                        height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    node-csv-ts
                  </h4>
                  <p className="m-0 text-sm">
                    Introducing our state-of-the-art TypeScript library for seamless CSV to JSON conversion. Elevate your data processing with a powerful and efficient tool designed for precision and performance. Whether you're handling large datasets or simple files, our library ensures a smooth transformation process, empowering developers to streamline their workflow and enhance data interoperability effortlessly
                  </p>
                </div>
              </div>
            </div>
            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                        src={require('./../../assets/images/coin-send-svgrepo-com.svg')}
                        alt="Features tile icon 06"
                        width={64}
                        height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    btc-websockets
                  </h4>
                  <p className="m-0 text-sm">
                    Elevate your cryptocurrency trading experience with our cutting-edge coin trading library tailored for BTCturk, meticulously crafted in Rust. This powerful and efficient tool empowers developers and traders alike with seamless access to trading functionalities, providing a robust foundation for secure and performant transactions. Dive into the world of digital asset trading with confidence, leveraging the reliability and speed of Rust to enhance your BTCturk trading endeavors
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;
