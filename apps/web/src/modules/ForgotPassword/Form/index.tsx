import { Button } from '@/components/Button';
import { KeyOutlined, SmsOutlined } from '@/components/Icons';
import { Input } from '@/components/Input';
import React from 'react';
import { useForm } from 'react-hook-form';

import { Container } from './styles';

export const Form: React.FC = () => {
  const { control, handleSubmit } = useForm<{
    email: string;
  }>();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <Container onSubmit={onSubmit}>
      <Input
        type="email"
        name="email"
        label={{ text: 'Email' }}
        description='No problem! We will send you a link to recover your password.'
        placeholder="Email" 
        control={control} 
        icon={<SmsOutlined />} 
      />
      <Button type="submit" text="RECEIVE RECOVERY EMAIL" />
    </Container>
  )
}