import React from 'react'
import styled from 'styled-components'

import Button from 'src/components/base/Button'
import Title from './fancyLanding/Title'

const Wrapper = styled.div`
  position: relative;
  margin-bottom: 6rem;
  min-height: ${(props) => (props.square ? '24rem' : 'none')};

  ${(props) => props.theme.mq.medium} {
    min-height: ${(props) => (props.square ? '40vw' : 'none')};
  }
`
const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 24rem;
  height: 100%;
  background-color: ${(props) => props.theme.colors[props.color]};

  ${(props) => props.theme.mq.medium} {
    width: 40vw;
  }

  ${(props) => props.theme.mq.small} {
    width: calc(50vw - 0.5rem);
    height: calc(50vw - 0.5rem);
  }
`

const Flex = styled.div`
  display: flex;

  ${(props) => props.theme.mq.small} {
    flex-direction: column;
  }
`
const Subtitle = styled.div`
  position: relative;
  width: 24rem;
  margin-bottom: 1rem;
  padding: 0 1rem 0 2rem;
  font-size: 1.5em;
  font-weight: 700;
  text-align: right;
  color: ${(props) => props.theme.colors.background};

  ${(props) => props.theme.mq.medium} {
    width: 40vw;
    padding: 0 1rem 0;
  }

  ${(props) => props.theme.mq.small} {
    width: auto;
    margin-bottom: 1rem;
    padding: 0;
    font-size: 1.25rem;
    color: ${(props) => props.theme.colors.text};
    text-align: left;
  }
`
const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 30.5rem;
  margin: 0.25em 0 0 1rem;

  ${(props) => props.theme.mq.medium} {
    width: auto;
    margin: 0.25rem 1rem 0 1rem;
  }
  ${(props) => props.theme.mq.small} {
    align-items: inherit;
    margin: 0;
  }
`
const Text = styled.p`
  font-weight: 300;
`
const ButtonWrapper = styled.div`
  display: flex;
  ${(props) =>
    props.vertical &&
    `
    flex-direction: column;
    align-items: flex-start;
  `}
  margin: ${(props) => (props.vertical ? 0 : '0 -0.5rem')};

  > * {
    margin: ${(props) => (props.vertical ? '0 0 1rem' : '0 0.5rem')};
    
    &:last-child {
      margin-bottom: 0;
    }
  }

  ${(props) => props.theme.mq.medium} {
    flex-direction: column;
    align-items: flex-start;
    margin: 0;

    > * {
      margin: 0 0 1rem;
    }
  }
`
export default function FancyLanding(props) {
  return (
    <Wrapper square={props.square}>
      <Background color={props.color} />
      <Title color={props.color} title={props.title}>
        {props.title}
      </Title>
      <Flex>
        <Subtitle>{props.subtitle}</Subtitle>
        <Content>
          <Text>{props.text}</Text>
          {props.buttons && (
            <ButtonWrapper vertical={props.verticalButtons}>
              {props.buttons.map((button) => (
                <Button
                  key={button.label}
                  hollow
                  color={props.color}
                  to={button.to}
                  expand={props.verticalButtons}
                >
                  {button.label}
                </Button>
              ))}
            </ButtonWrapper>
          )}
        </Content>
      </Flex>
    </Wrapper>
  )
}
