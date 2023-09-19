import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';
import { User } from '../constants';

interface UserCardProps {
  name: string;
  email: string;
  phone: string;
}

export const UserCard: React.FC<UserCardProps> = ({ name, email, phone }) => {
  return (
    <Card className="w-full">
      <CardContent>
        <Typography color="text.secondary" gutterBottom>
          Пользователь
        </Typography>
        <Typography variant="h6" component="div">
          {name}
        </Typography>
        <Typography color="text.secondary">{email}</Typography>
        <Typography color="text.secondary">{phone}</Typography>
      </CardContent>
    </Card>
  );
};
