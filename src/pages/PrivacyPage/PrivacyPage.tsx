import PageMeta from "@/components/PageMeta/PageMeta";
import styled from "styled-components";
import Layout from "@/components/Layout/Layout";
import { ToolHeader, ToolSubtitle } from "@/components/ToolsSection/ToolsCard/ToolsCardElements";

const Policy = styled.article`
  width: min(100%, 44rem);
  margin: 2.5rem auto 0;
  padding: 2rem;
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 1.25rem;
  font: 400 0.9375rem / 1.7 "Manrope";
  color: var(--muted);
  & h2 {
    font: 700 1.0625rem / 1.4 "Manrope";
    color: var(--theme-font-color);
    margin: 1.75rem 0 0.5rem;
  }
  & h2:first-child {
    margin-top: 0;
  }
  & ul {
    padding-left: 1.25rem;
  }
  & a {
    color: var(--theme-dark-blue);
  }
  @media (max-width: 450px) {
    padding: 1.25rem;
    font-size: 0.875rem;
  }
`;

const PrivacyPage = () => (
  <Layout>
      <PageMeta
        title="Privacy Policy | CoonConvert"
        description="CoonConvert does not collect or upload your files. Read how our browser-based PDF tools handle your privacy."
        path="/privacy"
      />
    <ToolHeader>Privacy policy</ToolHeader>
    <ToolSubtitle>Last updated: 24 October 2026</ToolSubtitle>
    <Policy>
      <h2>The short version</h2>
      <p>
        CoonConvert does not collect, store or share your files or personal
        data. Every tool runs inside your browser, so your files never leave
        your device.
      </p>

      <h2>Your files</h2>
      <p>
        When you merge, split or convert a file, the work happens on your
        device using code that runs in your browser. Files are not uploaded to
        any server. They stay in your browser's memory until you close or
        reload the page.
      </p>

      <h2>What we store on your device</h2>
      <p>
        We keep a few small values in your browser's session storage, such as
        which tool you opened and its color. This is cleared when you close
        the tab. We do not use cookies.
      </p>

      <h2>Analytics and tracking</h2>
      <p>
        We do not use analytics, advertising or tracking tools, and we do not
        load third-party scripts. Fonts and images are served from our own
        site.
      </p>

      <h2>Hosting</h2>
      <p>
        Like any website, our hosting provider may keep standard server logs,
        such as your IP address, browser type and the pages you request, to
        deliver the site and keep it secure. We do not use these logs to
        identify you.
      </p>

      <h2>Your rights</h2>
      <p>
        Because we do not hold personal data about you, there is nothing for
        us to access, correct or delete. If you have a question about your
        data under the GDPR or any other law, contact us and we will help.
      </p>

      <h2>Changes</h2>
      <p>
        If this policy changes, we will update this page and the date at the
        top.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this policy? Open an issue on{" "}
        <a
          href="https://github.com/Yash-RajSingh/coonconvert/issues"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        .
      </p>
    </Policy>
  </Layout>
);

export default PrivacyPage;
