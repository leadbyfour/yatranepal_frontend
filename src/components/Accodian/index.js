import Accordion from 'react-bootstrap/Accordion'
import './style.css'

function BasicExample() {
  return (
    <Accordion className="accordionss">
        <Accordion.Item eventKey="0">
        <Accordion.Header className="faq-point">
        What is Yatra Nepal Service center?
        </Accordion.Header>
        <Accordion.Body className='faq-description'>
        Yatra Nepal Service Centre is the multi-brand two-wheeler servicing center in Nepal.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header className="faq-point">
          Where is Yatra Nepal Located?
        </Accordion.Header>
        <Accordion.Body className='faq-description'>
        Yatra Nepal is Located on Basbari Road (In Front of British Gurkha College), Kathmandu.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>What are services avilable?</Accordion.Header>
        <Accordion.Body className='faq-description'>
        Yatra Nepal Provides:<br/>
Periodic Service<br/>
Minor Major Repairs<br/>
Accidental Repairs<br/>
Battery Service<br/>
Pickup & Drop<br/>
Breakdown Service<br/>
Value Added Service<br/>
Recondition<br/>
Denting and Painting<br/>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header> Is Door step service avilable?</Accordion.Header>
        <Accordion.Body className='faq-description'>
        Yes, We offer doorstep service around Kathmandu valley.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Is insurance service avilable?</Accordion.Header>
        <Accordion.Body className='faq-description'>
        Yes, We offer different insurance polices to meet your requirements.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}

export default BasicExample
