import { useState } from 'react';
import axios from 'axios';

import {
  ModalSection,
  ModalContent,
  Section,
  // ModalBack,
  // Back,
  ModalClosed,
  Close,
  Text,
  Form,
  Input,
  Message,
  // IconPhoto,
  ButtonForm,
} from './AddYourReview.styles';

export function AddYourReview({ handleToggleForm }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    handleToggleForm();

    if (!name || !email || !message) {
    } else {
      axios
        .post('https://postapi.onrender.com/api/sendinfo', {
          name,
          email,
          message,
        })
        .then(res => console.log(res.data));
    }
  };

  return (
    <ModalSection>
      <ModalContent>
        <Section>
          <ModalClosed onClick={handleToggleForm}>
            <Close />
          </ModalClosed>

          <Text>Please add your review</Text>

          <Form onSubmit={handleSubmit}>
            <Input
              type="text"
              id="name"
              name="name"
              value={name}
              placeholder="Name"
              required
              onChange={e => setName(e.target.value)}
            />

            <Input
              type="email"
              id="email"
              name="Email"
              value={email}
              placeholder="Email"
              required
              onChange={e => setEmail(e.target.value)}
            />
            <Message
              onChange={e => setMessage(e.target.value)}
              value={message}
              name="textarea"
              id="textarea"
              required
              placeholder="Message"
            ></Message>

            <ButtonForm type="submit">send</ButtonForm>
          </Form>
        </Section>
      </ModalContent>
    </ModalSection>
  );
}
