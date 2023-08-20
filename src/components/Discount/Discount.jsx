import { useState } from 'react';
// import { Link } from 'react-router-dom';

import * as AddYourReview from '../AddYourReview/AddYourReview';

import {
  Section,
  ModalSection,
  ModalContent,
  ModalClosed,
  Close,
  TextBox,
  Text,
  TextUp,
  BoxBtn,
  Btn,
  Email,
} from './Discount.styles';

export function Discount() {

  const [isOpenedForm, setIsOpenedForm] = useState(false);

  function handleToggleForm() {
    setIsOpenedForm(!isOpenedForm);
  }

  return (
    <>
      <ModalSection>
        <ModalContent>
          <Section>
            <ModalClosed>
              <a href='https://string-world.com'>
              {/* <Link to={'https://string-world.com'}> */}
                <Close />
              {/* </Link> */}
              </a>
            </ModalClosed>
            <TextBox>
              <Text>Thank you for your order!</Text>
              <TextUp>
                Our designer will contact you shortly to discuss and approve the
                layout for your unique string art portrait. If you have any
                questions, feel free to reach out to us at
                <Email onClick={handleToggleForm}>
                  designer@string-world.com.
                </Email>
                We can't wait to create a special piece of art for you!
              </TextUp>
              <TextUp>Best regards</TextUp>
            </TextBox>
            <BoxBtn>
              <Btn onClick={handleToggleForm}>contact us</Btn>
              <a href='https://string-world.com'>

                {/* <Link to={'https://string-world.com'}> */}
                  <Btn>home page</Btn>
                {/* </Link> */}
                </a>
            </BoxBtn>
          </Section>
        </ModalContent>
      </ModalSection>
      {isOpenedForm && <AddYourReview.AddYourReview handleToggleForm={handleToggleForm} />}
    </>
  );
}
