import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

import Logos from './header/Logos'
import Menu from './header/Menu'
import Burger from './header/Burger'
import MobileMenu from './header/MobileMenu'

const Wrapper = styled.header`
  position: relative;
  z-index: 100;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 75em;
  margin: 0 auto 5.5em;
  padding: 0 0.5em;
  background-color: ${(props) => props.theme.colors.background};

  ${(props) => props.theme.mq.medium} {
    position: fixed;
    top: 0;
    z-index: 120;
  }
`
export default function Header() {
  const data = useStaticQuery(
    graphql`
      query {
        applications: allMdx(
          sort: { fields: frontmatter___order }
          filter: { fileAbsolutePath: { regex: "/applications/" } }
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  )

  const [open, setOpen] = useState(false)
  const pathname =
    typeof window !== `undefined` ? window.location.pathname : null
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <Wrapper>
      <Logos />
      <Menu data={data} />
      <Burger open={open} setOpen={setOpen} />
      <MobileMenu data={data} open={open} setOpen={setOpen} />
    </Wrapper>
  )
}
