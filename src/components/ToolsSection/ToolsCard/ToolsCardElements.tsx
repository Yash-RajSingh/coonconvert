import styled from "styled-components";

export const ToolsCardBody = styled.button<{ color: string }>`
  all: unset;
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  transition:
    transform 0.2s,
    box-shadow 0.2s,
    border-color 0.2s;
  &::after {
    content: "→";
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    font: 600 1.25rem "Manrope";
    color: ${({ color }) => color};
    opacity: 0;
    transform: translateX(-6px);
    transition: 0.2s;
  }
  &:hover,
  &:focus-visible {
    transform: translateY(-4px);
    border-color: ${({ color }) => `${color}66`};
    box-shadow: 0 16px 32px -12px ${({ color }) => `${color}55`};
  }
  &:hover::after,
  &:focus-visible::after {
    opacity: 1;
    transform: none;
  }
  &:focus-visible {
    outline: 3px solid ${({ color }) => `${color}66`};
    outline-offset: 2px;
  }
  @media (max-width: 450px) {
    flex-direction: row;
    align-items: center;
    gap: 0.875rem;
    padding: 0.875rem 1rem;
    &::after {
      display: none;
    }
  }
`;
export const ToolsCardIconTile = styled.span<{ color: string }>`
  display: grid;
  place-items: center;
  flex-shrink: 0;
  width: 3rem;
  height: 3rem;
  border-radius: 0.75rem;
  background: ${({ color }) => `${color}1f`};
  @media (max-width: 450px) {
    width: 2.25rem;
    height: 2.25rem;
    border-radius: 0.625rem;
  }
`;
export const ToolsCardIcon = styled.img`
  width: 1.75rem;
  aspect-ratio: 1/1;
  @media (max-width: 450px) {
    width: 1.25rem;
  }
`;
export const ToolsCardContentWrapper = styled.span`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;
export const ToolsCardTitle = styled.span`
  font: 700 1.125rem / 1.4 "Manrope";
  color: var(--theme-font-color);
  @media (max-width: 450px) {
    font-size: 0.9375rem;
  }
`;
export const ToolsCardDescription = styled.span`
  font: 400 0.9375rem / 1.5 "Manrope";
  color: var(--muted);
  @media (max-width: 450px) {
    font-size: 0.8125rem;
  }
`;

export const ToolHeader = styled.h1`
  font: 700 clamp(1.875rem, 4vw, 2.75rem) / 1.2 "StackSans";
  letter-spacing: -0.02em;
  text-align: center;
  margin: 3.5rem auto 0;
  @media (max-width: 450px) {
    margin: 2rem auto 0;
  }
`;

export const ToolSubtitle = styled.p`
  font: 400 1.0625rem / 1.6 "Manrope";
  color: var(--muted);
  text-align: center;
  max-width: 34rem;
  margin: 0.75rem auto 0;
  @media (max-width: 450px) {
    font-size: 0.9375rem;
  }
`;
