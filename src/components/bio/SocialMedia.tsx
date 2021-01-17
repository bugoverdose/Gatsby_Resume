import * as React from 'react';
import { rem } from 'polished';
import { styled } from '~/src/components/themeContext';
import { ReactComponent as FacebookIconSvg } from '~/src/components/bio/facebook.svg';
import { ReactComponent as GithubIconSvg } from '~/src/components/bio/github.svg';
import { ReactComponent as InstagramIconSvg } from '~/src/components/bio/instagram.svg';
import { ReactComponent as LinkedInIconSvg } from '~/src/components/bio/linkedin.svg';
import { ReactComponent as YoutubeIconSvg } from '~/src/components/bio/youtube.svg';

type SocialMediaProps = {
  type: (
    | 'Github'
    | 'Facebook'
    | 'Instagram'
    | 'LinkedIn'
    | 'Youtube'
  ),
}

const SocialMediaIcon = styled.svg({
  height: rem(20),
  marginRight: rem(6),
});

const FacebookIcon = SocialMediaIcon.withComponent(FacebookIconSvg);
const GithubIcon = SocialMediaIcon.withComponent(GithubIconSvg);
const InstagramIcon = SocialMediaIcon.withComponent(InstagramIconSvg);
const LinkedInIcon = SocialMediaIcon.withComponent(LinkedInIconSvg);
const YoutubeIcon = SocialMediaIcon.withComponent(YoutubeIconSvg);

const SocialMedia: React.FC<SocialMediaProps> = ({ type }) => {
  switch (type) {
    case 'Facebook':
      return (<><FacebookIcon /><span>Facebook</span></>);
    case 'Github':
      return (<><GithubIcon /><span>Github</span></>);
    case 'Instagram':
      return (<><InstagramIcon /><span>Instagram</span></>);
    case 'LinkedIn':
      return (<><LinkedInIcon /><span>LinkedIn</span></>);
    case 'Youtube':
      return (<><YoutubeIcon /><span>Youtube</span></>);
  }
}

export default SocialMedia;