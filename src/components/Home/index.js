import Header from "../Header";

import {
  Section,
  Picture,
  Overlay,
  Container,
  Content,
  Title,
  Paragraph,
  ButtonContainer,
  Button,
  Disclaimer,
  VideoButton,
  Main,
} from "./styledComponent";

const Home = () => (
  <Main>
    <Section>
      <Header />
      <Picture>
        <source
          media="(max-width: 480px) and (orientation: portrait) and (prefers-reduced-motion: no-preference)"
          type="video/mp4; codecs=hvc1"
          srcSet="https://cdn.shopify.com/b/shopify-brochure2-assets/488d6fb493040e46e45a1dcb7e899e79.mp4"
        />
        <source
          media="(min-width: 481px) and (-webkit-min-device-pixel-ratio: 1) and (prefers-reduced-motion: no-preference)"
          type="video/mp4; codecs=hvc1"
          srcSet="https://cdn.shopify.com/b/shopify-brochure2-assets/033212561ae4fd44e663bcf0c28aa6fb.mp4"
        />
        <source
          media="(max-width: 480px) and (prefers-reduced-motion: no-preference)"
          type="image/avif"
          srcSet="https://cdn.shopify.com/b/shopify-brochure2-assets/82e5b0282bfbefccfd6579c35ee212f3.avif"
        />
        <source
          media="(min-width: 481px) and (prefers-reduced-motion: no-preference)"
          type="image/avif"
          srcSet="https://cdn.shopify.com/b/shopify-brochure2-assets/288aa2d76b4e7aaff082af1eb4279091.avif"
        />
        <img
          src="https://cdn.shopify.com/b/shopify-brochure2-assets/339113bc828c2c7ab760a434e1703b93.webp?originalWidth=3840&originalHeight=2160&width=1920&height=1080"
          alt=""
          loading="lazy"
        />
      </Picture>
      <Overlay />
    </Section>
  </Main>
);

export default Home;
