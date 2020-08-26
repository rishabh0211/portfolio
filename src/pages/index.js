import React from "react";
import { graphql } from "gatsby";
import { About, Contact, Hero, Jobs, Projects, Layout } from "../components";

const Home = ({data}) => {
  const {jobs, about, projects, logo} = data;
  return (
    <Layout logo={logo.nodes}>
      <Hero />
      <About about={about.nodes} />
      <Jobs jobs={jobs.nodes} />
      <Projects projects={projects.nodes} />
      <Contact/>
    </Layout>
  )
};

export default Home;

export const query = graphql`
  {
    about: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/about/"}}) {
      nodes {
        frontmatter {
          title
          skills
          avatar {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        html
      }
    }
    jobs: allMarkdownRemark(
        sort: {fields: frontmatter___date, order: DESC},
        filter: {fileAbsolutePath: {regex: "/jobs/"}}
    ) {
      nodes {
        frontmatter {
          title
          company
          location
          range
          url
        }
        internal {
          content
        }
        html
      }
    }
    projects: allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/featProjects/"}},
      sort: {fields: frontmatter___rank, order: ASC}
    ) {
      nodes {
        frontmatter {
          title
          tech
          url
          github
          image {
            childImageSharp {
              fluid(maxWidth: 700, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        html
      }
    }
    logo: allImageSharp(filter: {fluid: {src: {regex: "/logo/"}}}) {
      nodes {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
