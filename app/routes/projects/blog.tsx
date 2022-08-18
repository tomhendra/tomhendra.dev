import type {LinksFunction, MetaFunction} from '@remix-run/cloudflare';
import {CheckCircle, Eye, Target, TrendingUp, Users} from 'react-feather';
import Button from '~/components/Button';
import FeatureIcon from '~/components/FeatureIcon';
import MaxWidthContainer from '~/components/MaxWidthContainer';
import Tech from '~/components/Tech';
import Image from '~/components/Image';
import {getSeo} from '~/helpers/seo';

import {links as buttonLinks} from '~/components/Button';
import {links as featureIconLinks} from '~/components/FeatureIcon';
import {links as maxWidthContainerLinks} from '~/components/MaxWidthContainer';
import {links as techLinks} from '~/components/Tech';
import {links as imageLinks} from '~/components/Image';
import styles from '~/styles/projects.css';

const [seoMeta, seoLinks] = getSeo({
  title: 'Projects: Blog',
  description:
    'A developer blog built with Remix and markdown deployed to the Cloudflare platform.',
  openGraph: {
    /* todo og date for project */
  },
});

const links: LinksFunction = () => [
  ...seoLinks,
  ...maxWidthContainerLinks(),
  ...buttonLinks(),
  ...featureIconLinks(),
  ...techLinks(),
  ...imageLinks(),
  {rel: 'stylesheet', href: styles},
];

const meta: MetaFunction = () => ({
  ...seoMeta,
});

function Blog() {
  return (
    <main>
      <section id="hero">
        <MaxWidthContainer>
          <div className="hero-layout">
            <div className="hero-intro">
              <span className="section-prefix">Projects</span>
              <h1>Blog</h1>
              <div className="hero-intro-content">
                <h3 className="subheading">A technical blog for developers.</h3>
                <ul className="features-list">
                  <li>
                    <span className="feature">
                      <FeatureIcon>
                        <CheckCircle
                          size={14}
                          strokeWidth={3}
                          color="var(--color-primary-text)"
                        />
                      </FeatureIcon>
                      Markdown parsed from GitHub to Cloudflare CDN
                    </span>
                  </li>
                  <li>
                    <span className="feature">
                      <FeatureIcon>
                        <CheckCircle
                          size={14}
                          strokeWidth={3}
                          color="var(--color-primary-text)"
                        />
                      </FeatureIcon>
                      Optimised image delivery with Cloudinary
                    </span>
                  </li>
                  <li>
                    <span className="feature">
                      <FeatureIcon>
                        <CheckCircle
                          size={14}
                          strokeWidth={3}
                          color="var(--color-primary-text)"
                        />
                      </FeatureIcon>
                      Dark mode respective of system preferences
                    </span>
                  </li>
                </ul>
                <div className="btn-group">
                  <Button
                    as="externalLink"
                    href="https://github.com/tomhendra/blog"
                    size="xl"
                    variant="secondary-gray"
                  >
                    Source Code
                  </Button>
                  <Button
                    as="externalLink"
                    href="https://tomhendra.dev"
                    size="xl"
                    variant="primary"
                  >
                    Live Site
                  </Button>
                </div>
              </div>
            </div>
            <div className="hero-img-wrapper">
              <Image
                className="hero-img-desktop"
                src="blog-mockup-desktop-01-3x"
                alt="A screen shot of the blog project for desktop"
                width={1064}
                height={682}
                widths={[280, 560, 840, 1100, 1650, 2500, 2100, 3100]}
                sizes={[
                  '(max-width:34.375rem) 80vw', // if the viewport is 550px or less (mobile), the width of the slot the image will fill is 440px
                  '(max-width:68.75rem) 70vw', // if the viewport is 1100px or less (tablet), the width of the slot the image will fill is 770px
                  '(max-width:93.75rem) 60vw', // if the viewport is 1500px or less (laptop), the width of the slot the image will fill is 900px
                  '1100px', // default that is chosen when none of the media conditions are true: the width of the slot the image will fill is 1100px
                ]}
              />
              <Image
                className="hero-img-mobile"
                src="blog-mockup-mobile-with-device-01-3x"
                alt="An iPhone mockup showing a screen shot of the blog project for mobile"
                width={314}
                height={640}
                widths={[280, 560, 840, 1100, 1650, 2500, 2100, 3100]}
                sizes={[
                  '(max-width:34.375rem) 80vw', // if the viewport is 550px or less (mobile), the width of the slot the image will fill is 440px
                  '(max-width:68.75rem) 70vw', // if the viewport is 1100px or less (tablet), the width of the slot the image will fill is 770px
                  '(max-width:93.75rem) 60vw', // if the viewport is 1500px or less (laptop), the width of the slot the image will fill is 900px
                  '1100px', // default that is chosen when none of the media conditions are true: the width of the slot the image will fill is 1100px
                ]}
              />
            </div>
          </div>
        </MaxWidthContainer>
      </section>
      <section>
        <MaxWidthContainer>
          <div className="tech-stack-layout">
            <div className="tech-stack">
              <p className="heading">Technologies used</p>
              <div className="list">
                <Tech name="Remix" />
                <Tech name="TypeScript" />
                <Tech name="CSS" />
                <Tech name="Markdown" />
                <Tech name="Cloudinary" />
                <Tech name="Cloudflare Pages" />
              </div>
            </div>
          </div>
        </MaxWidthContainer>
      </section>
      <section>
        <MaxWidthContainer>
          <div className="analysis-section-layout">
            <div className="analysis-item">
              <div className="content">
                <FeatureIcon
                  color="var(--color-primary-background-muted)"
                  className="visually-align-left-6"
                >
                  <FeatureIcon>
                    <Target color="var(--color-primary-text)" />
                  </FeatureIcon>
                </FeatureIcon>
                <h2 className="title">Purpose &amp; Goal</h2>
                <p>
                  The project was created so that I have a place on the internet
                  where I can create content while retaining full control of the
                  platform on which it is authored.
                </p>
                <p>
                  The expected outcome was to build a fast, attractive website
                  with good SEO, with a focus on sharing code that I write to
                  solve my problems which could in turn help other developers to
                  solve theirs.
                </p>
                <p>
                  I wanted to author content in markdown but keep the files
                  separate from the source code. This separation of concerns
                  would make queries and modifications straightforward as the
                  data scales. The website <em>and</em> the data also had to be
                  delivered from the edge, so the experience is fast for all
                  users worldwide.
                </p>
              </div>
              <div className="content">
                <img
                  alt="placeholder"
                  src="https://via.placeholder.com/768x512?text=Img"
                  style={{
                    width: '768px',
                    height: '512px',
                    objectFit: 'cover',
                  }}
                />
              </div>
            </div>
            <div className="analysis-item">
              <div className="content">
                <img
                  alt="placeholder"
                  src="https://via.placeholder.com/768x512?text=Img"
                  style={{
                    width: '768px',
                    height: '512px',
                    objectFit: 'cover',
                  }}
                />
              </div>
              <div className="content">
                <FeatureIcon
                  color="var(--color-primary-background-muted)"
                  className="visually-align-left-6"
                >
                  <FeatureIcon>
                    <Eye color="var(--color-primary-text)" />
                  </FeatureIcon>
                </FeatureIcon>
                <h2 className="title">Spotlight</h2>
                <p>
                  The markdown is parsed into an HTML string from a GitHub repo
                  which contains only <code>.md</code> files, and is cached to
                  Cloudflare's CDN with SWR for 2 days and revalidation every 5
                  minutes. This is achieved with{' '}
                  <a href="https://github.com/jacob-ebey/github-md">
                    <code>github-md</code>
                  </a>{' '}
                  which uses the GitHub API and Cloudflare Workers under the
                  hood. The HTML string is then fetched by a Remix app deployed
                  to the same CDN, converted into React elements on the backend
                  with{' '}
                  <a href="https://github.com/remarkablemark/html-react-parser#readme">
                    <code>html-react-parser</code>,
                  </a>{' '}
                  before being server-side rendered by Remix.
                </p>
                <p>
                  One challenge I faced was how to display the code language
                  within the article code blocks. The only language identifier
                  in the HTML string provided by <code>github-md</code> is
                  within the Highlight.js class names{' '}
                  <a href="https://github.com/jacob-ebey/github-md/blob/main/src/index.ts#L394">
                    added to <code>&lt;code&gt;</code> elements
                  </a>
                  . Since <code>github-md</code> doesn't expose an API to
                  control its behaviour, I needed to extract the language from
                  those class names.
                </p>
                <p>
                  <code>html-react-parser</code> has a feature to replace
                  elements, and can convert DOM attributes to React props while
                  doing so. I looked for code DOM nodes which had a class name
                  starting with <code>hljs language-</code>, and if found,
                  converted the class attribute to a React prop, replaced the
                  code element with a custom React component, and passed along
                  the prop.
                </p>
                <p>
                  From there I used the JavaScript built-in slice method on the
                  destructured <code>className</code> prop value to grab the
                  language and display it in a <code>&lt;span&gt;</code> next to
                  the code element.
                </p>
              </div>
            </div>
            <div className="analysis-item">
              <div className="content">
                <FeatureIcon
                  color="var(--color-primary-background-muted)"
                  className="visually-align-left-6"
                >
                  <FeatureIcon>
                    <Users color="var(--color-primary-text)" />
                  </FeatureIcon>
                </FeatureIcon>
                <h2 className="title">Current Status</h2>
                <p>
                  The blog is currently live, and gets 16.5K total requests per
                  month, with 1.5K unique visitors. By far the biggest user base
                  is in the USA, around 6 times more than 2nd country on the
                  list which is Germany. This is closely followed by Singapore,
                  the UK and Australia.
                </p>
                <p>
                  My goal is to improve the quality and quantity of the content
                  I write, and I have a long list of new features that I intend
                  to add to the project over time. The biggest feature is to
                  have a Spanish language version of every post.
                </p>
              </div>
              <div className="content">
                <img
                  alt="placeholder"
                  src="https://via.placeholder.com/768x512?text=Img"
                  style={{
                    width: '768px',
                    height: '512px',
                    objectFit: 'cover',
                  }}
                />
              </div>
            </div>
            <div className="analysis-item">
              <div className="content">
                <img
                  alt="placeholder"
                  src="https://via.placeholder.com/768x512?text=Img"
                  style={{
                    width: '768px',
                    height: '512px',
                    objectFit: 'cover',
                  }}
                />
              </div>
              <div className="content">
                <FeatureIcon
                  color="var(--color-primary-background-muted)"
                  className="visually-align-left-6"
                >
                  <FeatureIcon>
                    <TrendingUp color="var(--color-primary-text)" />
                  </FeatureIcon>
                </FeatureIcon>
                <h2 className="title">Lessons Learned</h2>
                <p>
                  The choice to use <code>github-md</code> was a good one, and
                  definitely saved time compared to tackling the GitHub API and
                  Cloudflare Workers myself. But I would have liked some control
                  over the parsing of the markdown, especially having seen the
                  parts I wanted to hook into within the source code.
                </p>
                <p>
                  Remix was a joy to use, and the ethos of building upon web
                  standards and existing APIs resonates with me greatly. It
                  feels like a good fit for edge computing, with projects like
                  Cloudflare Workers and Deno using V8 isolates running at the
                  edge and incorporating modified browser APIs into their
                  codebase.
                </p>
                <p>
                  The project is fully accessible with a 100 score on
                  Lighthouse. However while testing keyboard navigation, I
                  noticed that code blocks with a scrollbar on the X axis were
                  not focusable in Chrome or Safari. Since the blog is highly
                  oriented towards sharing code, I chose to add{' '}
                  <code>tabIndex={0}</code> to all code block elements to
                  resolve the issue.
                </p>
                <p>
                  Building this project has uncovered a hunger to learn to code
                  for the backend, as I would have liked the confidence to fork{' '}
                  <code>github-md</code> and tweak it to my liking. And I was
                  reminded that Lighthouse cannot be solely relied upon for
                  a11y. It is important to test our websites and apps using
                  keyboard navigation and screen readers to uncover issues that
                  a11y tools might not identify.
                </p>
              </div>
            </div>
          </div>
        </MaxWidthContainer>
      </section>
    </main>
  );
}

export {links, meta, Blog as default};
