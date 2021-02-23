import React from 'react'
import { Card, CardActions, CardHeader, IconButton, Avatar, Grid } from '@material-ui/core';
import { Today, PermIdentity, VideoCall } from '@material-ui/icons';
import { Link } from 'react-router-dom';

function DataProfissional(props) {
  return (
    props.data.map(data => {

      return (
        <Grid item xs={12} sm={3}>
          <Card key={data._id}>
            <CardHeader
              avatar={
                <Avatar c>
                  {data.firstName}
                </Avatar>
              }
              title={data.nome}
              subheader={data.especialidade}
            />
            <CardActions disableSpacing>
              <IconButton aria-label="Agenda">
                <Today />
              </IconButton>
              <IconButton aria-label="Detalhes">
                <Link to={`/detalhes/${data._id}`}><PermIdentity /></Link>

              </IconButton>
              <IconButton
                style={{ color: 'red' }}
                aria-label="Video"
              >
                <Link to={`/videochamada/${data._id}`}> <VideoCall /></Link>
              </IconButton>
            </CardActions>

          </Card>
        </Grid>

      )
    })
  )
}

export default DataProfissional
