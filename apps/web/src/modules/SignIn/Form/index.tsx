import { Button } from '@/components/Button';
import { KeyOutlined, SmsOutlined } from '@/components/Icons';
import { Input } from '@/components/Input';
import React from 'react';
import { useForm } from 'react-hook-form';

import { Container } from './styles';

export const Form: React.FC = () => {
  const { control, handleSubmit } = useForm<{
    email: string;
    password: string;
  }>();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <Container onSubmit={onSubmit}>
      <Input 
        type="email"
        name="email"
        label={{ text: 'Email address' }}
        placeholder="Email" 
        control={control} 
        icon={<SmsOutlined />} 
      />
      <Input 
        type="password" 
        name="password" 
        label={{ text: 'Password' }}
        placeholder="Password"
        control={control}
        icon={<KeyOutlined />}
      />
      <Button type="submit" text="SIGN IN" />
    </Container>
  )
}