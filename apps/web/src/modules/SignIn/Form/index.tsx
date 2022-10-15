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

  return (
    <Container>
      <Input 
        type="email"
        name="email"
        label="Email" 
        placeholder="Email" 
        control={control} 
        icon={<SmsOutlined />} 
      />
      <Input 
        type="password" 
        name="password" 
        label="Password" 
        placeholder="Password"
        control={control}
        icon={<KeyOutlined />}
      />
    </Container>
  )
}