import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Testimonial = ({
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
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Customer testimonials',
    paragraph: 'Experience the voices of satisfaction and success through our customer testimonials. Delve into firsthand accounts of how our solutions have elevated businesses, transformed workflows, and exceeded expectations. From small enterprises to industry giants, hear the stories of partnership, innovation, and results that define our commitment to customer satisfaction and excellence.'
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

            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    — Working with PiarkaSoftware was a game-changer for our business. Their team's expertise and dedication helped us streamline our processes and launch our new platform ahead of schedule. Their commitment to our success is unmatched, and we look forward to continuing our partnership for future projects.
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Jane Doe</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a>CEO of TechSolutions Inc.</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    — I can't recommend PiarkaSoftware highly enough. Their innovative approach and attention to detail turned our vision into reality. From initial concept discussions to final product delivery, their team was responsive, collaborative, and always focused on delivering top-notch results. Thanks to them, we're now poised for rapid growth and expansion.
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">John Smith</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a>Founder of StartUpX</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-left" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    — Choosing PiarkaSoftware for our software needs was one of the best decisions we've made. Their solutions have not only streamlined our operations but have also helped us stay ahead of the competition. Their professionalism, expertise, and personalized support have made them an invaluable partner, and we're excited to see what we can achieve together in the future.
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Sarah Johnson</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a>Marketing Manager at GlobalTech Corp</a>
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;
