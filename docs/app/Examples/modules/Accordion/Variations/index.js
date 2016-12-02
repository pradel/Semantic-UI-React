import React from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const AccordionTypesExamples = () => (
  <ExampleSection title='Variations'>
    <ComponentExample
      title='Fluid'
      description='An accordion can take up the width of its container.'
      examplePath='modules/Accordion/Variations/AccordionExampleFluid'
    />
    <ComponentExample
      title='Inverted'
      description='An accordion can be formatted to appear on dark backgrounds.'
      examplePath='modules/Accordion/Variations/AccordionExampleInverted'
    />
    <ComponentExample
      title='Exclusive'
      description='An accordion can have multiple panels open at the same time'
      examplePath='modules/Accordion/Variations/AccordionExampleExclusive'
    />
  </ExampleSection>
)

export default AccordionTypesExamples
