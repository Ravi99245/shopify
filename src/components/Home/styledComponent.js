import styled from "styled-components";

export const Section = styled.section`
  margin-bottom: 10px;
  padding-top: var(--global-header);
  position: relative;
  z-index: 10;
  display: grid;
  place-items: center;
  min-height: 720px;
  max-height: 90dvh;
  overflow: hidden;
  background-size: cover;
  background-image: url("https://cdn.shopify.com/b/shopify-brochure2-assets/bc2165e8963e937c15a77355632344df.webp?originalWidth=1620&originalHeight=2160&width=1080&height=1440");

  @media (min-width: 711px) {
    background-image: url("https://cdn.shopify.com/b/shopify-brochure2-assets/339113bc828c2c7ab760a434e1703b93.webp?originalWidth=3840&originalHeight=2160&width=1920&height=1080");
  }
`;

export const Picture = styled.picture`
  position: absolute;
  inset: 0;
  display: flex;
  min-height: 100%;
  object-fit: center;
  aspect-ratio: 3 / 4;
  z-index: -20;

  @media (min-width: 481px) {
    aspect-ratio: 16 / 9;
  }

  img {
    width: 100%;
    object-fit: cover;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: -10;
`;

export const Container = styled.div`
  display: flex;
  padding: 0 4rem;
  z-index: 30;
  left: 0px;
`;

export const Content = styled.div`
  grid-column: span 4;
  display: flex;
  flex-direction: column;
  gap: var(--xl);

  @media (min-width: 640px) {
    grid-column: span 6;
  }

  @media (min-width: 768px) {
    grid-column: span 5;
  }
`;

export const Title = styled.h1`
  color: white;
  font-size: var(--t1);
`;

export const Paragraph = styled.p`
  color: white;
  font-size: var(--body-lg);
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--lg);
  margin-top: 0;
  margin-bottom: var(--3xl);

  @media (min-width: 640px) {
    flex-direction: row;
  }

  @media (min-width: 768px) {
    margin-bottom: 0;
    transform: translateY(-1.5rem);
  }
`;

export const Button = styled.a`
  display: inline-block;
  padding: var(--button-px) var(--button-py);
  border: 2px solid transparent;
  border-radius: var(--button-radius);
  font-size: var(--button-size);
  font-weight: var(--button-weight);
  text-align: center;
  color: var(--button-dark-primary-text);
  background: var(--button-dark-primary-bg);
  transition: all 0.15s ease-in-out;

  &:hover {
    border-color: var(--button-dark-primary-border-hover);
    background: transparent;
    color: white;
  }

  &:focus {
    outline: 2px solid var(--state-focus);
  }

  &:active {
    background: rgba(161, 161, 170, 1);
    color: black;
  }

  &:disabled {
    color: var(--button-dark-primary-text-disabled);
    background: var(--button-dark-primary-bg-disabled);
    border-color: var(--button-dark-primary-border-disabled);
  }

  @media (min-width: 768px) {
    padding: var(--button-lg-px) var(--button-lg-py);
    font-size: var(--button-lg-size);
    width: auto;
  }
`;

export const Disclaimer = styled.div`
  p {
    color: white;
    font-size: var(--body-sm);
    text-align: center;

    @media (min-width: 640px) {
      text-align: left;
    }

    @media (min-width: 768px) {
      width: 13rem;
    }
  }
`;

export const VideoButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--lg);
  padding: 0.5rem 1.25rem;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: var(--button-radius-full);
  background: rgba(255, 255, 255, 0.15);
  color: white;
  font-size: 1.125rem;
  text-align: center;
  transition: all 0.2s linear;

  &:hover {
    background: white;
    color: black;
  }
`;

export const Main = styled.div`
  width: 100vw;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Heading = styled.h1`
  width: 25%;
  font-size: 3.5rem;
  color: #fff;
`;
