import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';
import { User } from '../constants';

interface UserCardProps {
  user: User;
}

export const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <Card className="w-full">
      <CardContent>
        <Typography color="text.secondary" gutterBottom>
          Пользователь
        </Typography>
        <Typography variant="h6" component="div">
          {user.name}
        </Typography>
        <Typography color="text.secondary">{user.email}</Typography>
        <Typography color="text.secondary">{user.phone}</Typography>
      </CardContent>
    </Card>
  );
};
