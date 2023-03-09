import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  IconButton,
} from '@mui/material';
import React from 'react';

const Members = () => {
  return (
    <div>
      <h2
        style={{
          color: '#AAA9AB',
        }}>
        Members Information
      </h2>
      <div>
        <FormGroup>
          <FormControlLabel
            sx={{
              color: '#D1D0D2',
            }}
            control={
              <Checkbox
                sx={{
                  color: '#D1D0D2',
                }}
                defaultChecked
              />
            }
            label='Spouse'
          />
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}>
            <FormControlLabel
              sx={{
                color: '#D1D0D2',
              }}
              control={
                <Checkbox
                  sx={{
                    color: '#D1D0D2',
                  }}
                  defaultChecked
                />
              }
              label='Children'
            />
            <IconButton
              sx={{
                color: '#D1D0D2',
              }}
              aria-label='delete'>
              <AddIcon />
            </IconButton>
            <p>
              <strong
                style={{
                  color: '#D1D0D2',
                  margin: '0 0.7rem 0 0.7rem',
                }}>
                1
              </strong>
            </p>
            <IconButton
              sx={{
                color: '#D1D0D2',
              }}
              aria-label='delete'>
              <RemoveIcon />
            </IconButton>
          </div>
          <FormControlLabel
            sx={{
              color: '#D1D0D2',
            }}
            control={
              <Checkbox
                sx={{
                  color: '#D1D0D2',
                }}
                defaultChecked
              />
            }
            label='Driver'
          />
        </FormGroup>
      </div>
    </div>
  );
};

export default Members;
