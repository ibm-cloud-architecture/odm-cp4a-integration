import React from 'react';
import { HomepageBanner, HomepageCallout } from 'gatsby-theme-carbon';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';
import { calloutLink } from './Homepage.module.scss';
import { withPrefix } from 'gatsby';

import Carbon from '../../images/frictionless.jpg';

const FirstRightText = () => (
  <p>
    Explore the different facets of integrating ODM with WML.
    <a
      className={calloutLink}
      href={withPrefix(`/introduction/`)}
    >
      Introduction →
    </a>
  </p>
);

const BannerText = () => <h1>ODM and WML Integration</h1>;

const customProps = {
  Banner: <HomepageBanner renderText={BannerText} image={Carbon} />,
  FirstCallout: (
    <HomepageCallout
      backgroundColor="#030303"
      color="white"
      rightText={FirstRightText}
    />
  ),
};

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
  return <HomepageTemplate {...props} {...customProps} />;
}

export default ShadowedHomepage;
