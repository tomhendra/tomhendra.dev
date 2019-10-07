import { graphql, useStaticQuery } from 'gatsby'

export function useProjects () {
  const data = useStaticQuery(graphql`
    query {
      projects: allSanityProject {
        edges {
          node {
            id
            title
            description
            techstack {
              title
              logo {
                asset {
                  fixed(width: 17) {
                    ...GatsbySanityImageFixed
                  }
                }
              }
            }
            repo
            url
            image {
              alt
              caption
              asset {
                fixed(width: 256) {
                  ...GatsbySanityImageFixed
                }
              }
            }
          }
        }
      }
    }
  `)

  return data.projects.edges.map(({ node }) => ({
    id: node.id,
    title: node.title,
    description: node.description,
    stack: node.techstack,
    repo: node.repo,
    url: node.url,
    image: node.image.asset.fixed,
    alt: node.image.alt,
    caption: node.image.caption
  }))
}
