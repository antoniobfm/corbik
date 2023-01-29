import { Button } from '@/components/Button';
import { KeyOutlined, SmsOutlined } from '@/components/Icons';
import { Input } from '@/components/Input';
import { Lock, Sms } from 'iconsax-react';
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
        description="Use your best email, it will be useful when you need to recover your password 😌."
        placeholder="Email" 
        control={control} 
        icon={<SmsOutlined />} 
      />
      <Button type="submit" text="CONTINUE" />
    </Container>
  )
}