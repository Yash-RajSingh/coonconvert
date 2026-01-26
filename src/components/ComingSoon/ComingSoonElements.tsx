import styled from "styled-components";

export const ComingSoonWrapper = styled.div`
  width: 70%;
  height: 60vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const PlaceholderImage = styled.img`
  width: 50%;
  height: auto;
  object-fit: contain;
`;

export const Message = styled.p`
  font-size: var(--tools-card-title-font-size);
  text-align: center;
  font-weight: 500;
`;
