import Layout from "@/components/Layout/Layout";
import PageMeta from "@/components/PageMeta/PageMeta";
import { ToolHeader, ToolSubtitle } from "@/components/ToolsSection/ToolsCard/ToolsCardElements";
import { BackLink } from "@/components/ComingSoon/ComingSoonElements";

const NotFoundPage = () => (
  <Layout>
    <PageMeta
      title="Page not found | CoonConvert"
      description="This page does not exist."
      path="/"
      noindex
    />
    <ToolHeader>Page not found</ToolHeader>
    <ToolSubtitle>
      The page you are looking for does not exist.{" "}
      <BackLink href="/#tools">Browse all tools</BackLink>
    </ToolSubtitle>
  </Layout>
);

export default NotFoundPage;
