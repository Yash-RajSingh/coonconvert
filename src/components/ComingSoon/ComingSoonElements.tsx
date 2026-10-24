import styled from "styled-components";

export const ComingSoonWrapper = styled.div`
  width: min(100%, 40rem);
  margin: 2.5rem auto 0;
  padding: 2.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  text-align: center;
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 1.25rem;
  box-shadow: 0 12px 32px -16px #0f172a26;
`;

export const ComingSoonBadge = styled.span`
  padding: 0.375rem 0.875rem;
  border-radius: 999px;
  background: #fef3c7;
  color: #92400e;
  font: 700 0.8125rem "Manrope";
  letter-spacing: 0.04em;
  text-transform: uppercase;
`;

export const PlaceholderImage = styled.img`
  width: min(100%, 18rem);
  height: auto;
  object-fit: contain;
`;

export const Message = styled.p`
  font: 500 1.0625rem / 1.6 "Manrope";
  color: var(--muted);
`;

export const BackLink = styled.a`
  font: 600 0.9375rem "Manrope";
  color: var(--theme-dark-blue);
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
