import React from 'react'

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';

export default function NotFound() {

  return (
      <Container style={{margin: '10px'}}>
        <Card variant="outlined">
            <CardContent>
                <Typography>
                Page Not Found 
                </Typography>
            </CardContent>
        </Card>
      </Container>
    
  );
}

