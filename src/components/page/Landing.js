import React from 'react'
import styled from 'styled-components'

import ButtonLink from 'src/components/base/ButtonLink'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  max-width: 49rem;
  margin: 0 auto 6rem;
  padding-right: 6.25rem;

  &:before {
    content: '';
    width: 5.25rem;
    margin-right: 1rem;
    background-color: ${(props) =>
      props.color ||
      props.theme.colors[props.sector] ||
      props.theme.colors.main};
  }
`
const Content = styled.div`
  flex: 1;
`
const Title = styled.h1`
  color: ${(props) => props.color};
`
const Text = styled.p``
const ButtonWrapper = styled.div`
  display: flex;
  margin: 0 -0.5rem;

  a {
    margin: 0 0.5rem;
  }
`
export default function Landing(props) {
  console.log(props.frontmatter)
  return (
    <Wrapper color={props.frontmatter.color} sector={props.frontmatter.sector}>
      <Content>
        <Title color={props.frontmatter.color}>{props.frontmatter.title}</Title>
        <Text>{props.frontmatter.introduction}</Text>
        <ButtonWrapper>
          {props.frontmatter.buttons.map((button) => (
            <ButtonLink
              key={button.label}
              hollow
              color={
                props.frontmatter.color ||
                (props.frontmatter.sector === 'all'
                  ? 'main'
                  : props.frontmatter.sector)
              }
              to={button.link}
            >
              {button.label}
            </ButtonLink>
          ))}
        </ButtonWrapper>
      </Content>
    </Wrapper>
  )
}