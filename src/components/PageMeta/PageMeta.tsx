// React 19 moves <title>, <meta> and <link> rendered here into <head>.
export const SITE_URL = "https://coonconvert.netlify.app";

interface PageMetaProps {
  title: string;
  description: string;
  path: string;
  // for pages that are not ready yet (coming soon) or not found
  noindex?: boolean;
}

const PageMeta = ({ title, description, path, noindex }: PageMetaProps) => (
  <>
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={`${SITE_URL}${path}`} />
    {noindex && <meta name="robots" content="noindex" />}
  </>
);

export default PageMeta;
