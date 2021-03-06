import React from 'react'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

import Web from 'src/components/layout/Web'
import Section from 'src/components/layout/Section'
import Block from 'src/components/layout/Block'
import Button from 'src/components/base/Button'
import FancyLanding from 'src/components/page/FancyLanding'
import Applications from 'src/components/Applications'
import Users from 'src/components/sector/Users'
import Contact from 'src/components/Contact'

export default function Transport(props) {
  return (
    <Web
      title={'Transport'}
      image={props.data.metaimage.childImageSharp.resize}
      description={`Des données ouvertes pour une mobilité moins émettrice en CO2`}
    >
      <FancyLanding
        color='transport'
        title='Transport'
        subtitle={`Des données ouvertes pour une mobilité moins émettrice en CO2`}
        text={`Utilisez des données ouvertes pour comparer les principaux modes de transport et encourager une mobilité moins émettrice de CO2 !`}
        buttons={[
          {
            label: `Voir la documentation`,
            to: `https://datagir.gitbook.io/documentation/atelier-re-utilisateurs-transport`,
          },
          { label: `Voir les simulateurs`, to: `#applications` },
        ]}
      />
      <Section>
        <Block>
          <Block.Image>
            <Img
              fluid={props.data.image1.childrenImageSharp[0].fluid}
              alt={props.title}
            />
          </Block.Image>
          <Block.Content color={'transport'}>
            <Block.Title>
              Intégrez Mon Impact Transport directement sur votre site
            </Block.Title>
            <Block.Text>
              Intégrez ce simulateur chez vous, par exemple rendre un article de
              blog plus intéractif pour le lecteur.
            </Block.Text>
            <Block.Buttons>
              <Button
                to='/apps/mon-impact-transport'
                hollow
                color={'transport'}
              >
                Découvrir Mon Impact Transport
              </Button>
            </Block.Buttons>
          </Block.Content>
        </Block>
        <Block left>
          <Block.Image>
            <Img
              fluid={props.data.image2.childrenImageSharp[0].fluid}
              alt={props.title}
            />
          </Block.Image>
          <Block.Content left color={'transport'}>
            <Block.Title>Un guide pour les développeurs</Block.Title>
            <Block.Text>
              Format CSV, API, retrouvez toutes les informations techniques sur
              les méthodes d’intégrations dans notre documentation.
            </Block.Text>
            <Block.Buttons>
              <Button
                to='https://datagir.gitbook.io/documentation/atelier-re-utilisateurs-transport'
                hollow
                color={'transport'}
              >
                Voir la documentation
              </Button>
            </Block.Buttons>
          </Block.Content>
        </Block>
      </Section>
      <Applications sector='transport' />
      <Users sector='transport' />
      <Contact sector='transport' />
    </Web>
  )
}
export const pageQuery = graphql`
  query transportPage {
    image1: file(relativePath: { eq: "transport1.jpg" }) {
      childrenImageSharp {
        fluid(maxWidth: 684, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image2: file(relativePath: { eq: "transport2.jpg" }) {
      childrenImageSharp {
        fluid(maxWidth: 684, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    metaimage: file(relativePath: { eq: "transport.jpg" }) {
      childImageSharp {
        resize(width: 1200) {
          src
          height
          width
        }
      }
    }
  }
`
