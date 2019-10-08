import React from 'react';
import MediaQuery from 'react-responsive';
import { Card, Skeleton } from 'antd';
import { Loading } from './styles';

export default function loading(props){
  return(
    <>
      <MediaQuery minDeviceWidth={1100}>
        <Loading>
          <Card
              style={{ 
                border: 'none',
                boxShadow: '0px 5px 18px -7px rgba(0,0,0,0.22)',
                width: 330
                }}
            >
              <Skeleton loading={props.loading} avatar active></Skeleton>
            </Card>

            <Card
              style={{ 
                border: 'none', 
                boxShadow: '0px 5px 18px -7px rgba(0,0,0,0.22)',
                width: 330
                }}
            >
              <Skeleton loading={props.loading} avatar active></Skeleton>
            </Card>

            <Card
              style={{ 
                border: 'none',
                boxShadow: '0px 5px 18px -7px rgba(0,0,0,0.22)',
                width: 320
                }}
            >
              <Skeleton loading={props.loading} avatar active></Skeleton>
            </Card>
            <Card
              style={{ 
                border: 'none',
                boxShadow: '0px 5px 18px -7px rgba(0,0,0,0.22)',
                width: 320
                }}
            >
              <Skeleton loading={props.loading} avatar active></Skeleton>
            </Card>

            <Card
              style={{ 
                border: 'none',
                boxShadow: '0px 5px 18px -7px rgba(0,0,0,0.22)',
                width: 320
                }}
            >
              <Skeleton loading={props.loading} avatar active></Skeleton>
            </Card>

            <Card
              style={{ 
                border: 'none',
                boxShadow: '0px 5px 18px -7px rgba(0,0,0,0.22)',
                width: 320
                }}
            >
              <Skeleton loading={props.loading} avatar active></Skeleton>
            </Card>         
        </Loading>
      </MediaQuery>
      <MediaQuery maxDeviceWidth={1100}>
        <Loading>
          <Card
              style={{ 
                border: 'none',
                boxShadow: '0px 5px 18px -7px rgba(0,0,0,0.22)',
                width: 330
                }}
            >
              <Skeleton loading={props.loading} avatar active></Skeleton>
            </Card>

            <Card
              style={{ 
                border: 'none', 
                boxShadow: '0px 5px 18px -7px rgba(0,0,0,0.22)',
                width: 330
                }}
            >
              <Skeleton loading={props.loading} avatar active></Skeleton>
            </Card>

            <Card
              style={{ 
                border: 'none',
                boxShadow: '0px 5px 18px -7px rgba(0,0,0,0.22)',
                width: 320
                }}
            >
              <Skeleton loading={props.loading} avatar active></Skeleton>
            </Card>
            <Card
              style={{ 
                border: 'none',
                boxShadow: '0px 5px 18px -7px rgba(0,0,0,0.22)',
                width: 320
                }}
            >
              <Skeleton loading={props.loading} avatar active></Skeleton>
            </Card>

            <Card
              style={{ 
                border: 'none',
                boxShadow: '0px 5px 18px -7px rgba(0,0,0,0.22)',
                width: 320
                }}
            >
              <Skeleton loading={props.loading} avatar active></Skeleton>
            </Card>

            <Card
              style={{ 
                border: 'none',
                boxShadow: '0px 5px 18px -7px rgba(0,0,0,0.22)',
                width: 320
                }}
            >
              <Skeleton loading={props.loading} avatar active></Skeleton>
            </Card>         
        </Loading>
      </MediaQuery>
      <MediaQuery maxDeviceWidth={700}>
        <Loading>
          <Card
            style={{ 
              border: 'none',
              boxShadow: '0px 5px 18px -7px rgba(0,0,0,0.22)',
              }}
          >
            <Skeleton loading={props.loading} avatar active></Skeleton>
          </Card>

          <Card
            style={{ 
              border: 'none',
              boxShadow: '0px 5px 18px -7px rgba(0,0,0,0.22)',
              }}
          >
            <Skeleton loading={props.loading} avatar active></Skeleton>
          </Card>

          <Card
            style={{ 
              border: 'none',
              boxShadow: '0px 5px 18px -7px rgba(0,0,0,0.22)',
              }}
          >
            <Skeleton loading={props.loading} avatar active></Skeleton>
          </Card>
        </Loading>
      </MediaQuery>
    </>
  );
}