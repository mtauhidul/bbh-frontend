import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  IconButton,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useData } from '../../state/data';

const Members = () => {
  const { state, setData } = useData();
  const [numChildren, setNumChildren] = useState(
    sessionStorage.getItem('numChildren') || 0
  );
  const isSpouseChecked = sessionStorage.getItem('spouse') === 'true';

  const isChildrenChecked = sessionStorage.getItem('numChildren') > 0;

  const isDriverChecked = sessionStorage.getItem('driver') === 'true';

  const [totalMembers, setTotalMembers] = useState(
    sessionStorage.getItem('totalMembers') || 1
  );

  const handleAddChild = () => {
    setNumChildren(numChildren + 1);
    setTotalMembers(totalMembers + 1);
    sessionStorage.setItem('numChildren', numChildren + 1);

    sessionStorage.setItem('totalMembers', totalMembers + 1);
  };

  const handleRemoveChild = () => {
    if (numChildren > 1) {
      setNumChildren(numChildren - 1);
      setTotalMembers(totalMembers - 1);

      sessionStorage.setItem('numChildren', numChildren - 1);

      sessionStorage.setItem('totalMembers', totalMembers - 1);
    }
  };

  const handleSpouseCheck = (event) => {
    if (event.target.checked) {
      setTotalMembers(totalMembers + 1);
      sessionStorage.setItem('totalMembers', totalMembers + 1);
      sessionStorage.setItem('spouse', true);
    } else {
      setTotalMembers(totalMembers - 1);

      sessionStorage.setItem('totalMembers', totalMembers - 1);
      sessionStorage.setItem('spouse', false);
    }
  };

  const handleChildrenCheck = (event) => {
    if (event.target.checked) {
      setNumChildren(numChildren + 1);
      setTotalMembers(totalMembers + 1);
      sessionStorage.setItem('numChildren', numChildren + 1);

      sessionStorage.setItem('totalMembers', totalMembers + 1);
    } else {
      setTotalMembers(totalMembers - numChildren);
      setNumChildren(0);
      sessionStorage.setItem('numChildren', 0);

      sessionStorage.setItem('totalMembers', totalMembers - numChildren);
    }
  };

  const handleDriverCheck = (event) => {
    if (event.target.checked) {
      setTotalMembers(totalMembers + 1);
      sessionStorage.setItem('totalMembers', totalMembers + 1);
      sessionStorage.setItem('driver', true);
    } else {
      setTotalMembers(totalMembers - 1);

      sessionStorage.setItem('totalMembers', totalMembers - 1);
      sessionStorage.setItem('driver', false);
    }
  };

  useEffect(() => {
    setData({
      ...state,
      spouse: isSpouseChecked,
      children: isChildrenChecked,
      driver: isDriverChecked,
      numChildren,
      totalMembers,
    });
  }, [isSpouseChecked, isChildrenChecked, isDriverChecked, numChildren]);

  return (
    <div>
      <h2 style={{ color: '#AAA9AB' }}>Members Information</h2>
      <div>
        <FormGroup>
          <FormControlLabel
            sx={{ color: '#D1D0D2' }}
            control={
              <Checkbox
                sx={{ color: '#D1D0D2' }}
                onChange={handleSpouseCheck}
                checked={isSpouseChecked}
              />
            }
            label='Spouse'
          />
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <FormControlLabel
              sx={{ color: '#D1D0D2' }}
              control={
                <Checkbox
                  sx={{ color: '#D1D0D2' }}
                  onChange={handleChildrenCheck}
                  checked={isChildrenChecked}
                />
              }
              label='Children'
            />
            <IconButton
              sx={{ color: '#D1D0D2' }}
              aria-label='add'
              onClick={handleAddChild}
              disabled={!totalMembers || !numChildren}>
              <AddIcon />
            </IconButton>
            <p>
              <strong style={{ color: '#D1D0D2', margin: '0 0.7rem' }}>
                {numChildren}
              </strong>
            </p>
            <IconButton
              sx={{ color: '#D1D0D2' }}
              aria-label='remove'
              onClick={handleRemoveChild}
              disabled={!totalMembers || !numChildren}>
              <RemoveIcon />
            </IconButton>
          </div>
          <FormControlLabel
            sx={{ color: '#D1D0D2' }}
            control={
              <Checkbox
                sx={{ color: '#D1D0D2' }}
                onChange={handleDriverCheck}
                checked={isDriverChecked}
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
