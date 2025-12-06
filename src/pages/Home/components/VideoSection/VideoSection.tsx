import { Container } from '@shared/ui/Container/Container';
import { HOME_VIDEO_URL } from '@shared/constants';

import './VideoSection.scss';

export const VideoSection = () => (
  <section className="home-video">
    <Container>
      <div className="home-video__player-wrapper">
        <div className="home-video__player-ratio">
          <iframe
            className="home-video__iframe"
            src={HOME_VIDEO_URL}
            title="Свадебное видео агентства «Счастье»"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </Container>
  </section>
);
