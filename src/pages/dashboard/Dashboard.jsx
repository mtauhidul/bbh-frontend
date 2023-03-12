import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import { Button } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import * as React from 'react';
import DashboardHeader from './DashboardHeader';

function createData(name, batch, department, payment_status, details) {
  return { name, batch, department, payment_status, details };
}

const rows = [
  createData(
    'Aminul Islam',
    '31',
    'Computer Science and Engineering',
    'Paid',
    'Details'
  ),
  createData(
    'Aminul Islam',
    '31',
    'Computer Science and Engineering',
    'Paid',
    'Details'
  ),
  createData(
    'Aminul Islam',
    '31',
    'Computer Science and Engineering',
    'Paid',
    'Details'
  ),
  createData(
    'Aminul Islam',
    '31',
    'Computer Science and Engineering',
    'Unpaid',
    'Details'
  ),
  createData(
    'Aminul Islam',
    '31',
    'Computer Science and Engineering',
    'Paid',
    'Details'
  ),
  createData(
    'Aminul Islam',
    '31',
    'Computer Science and Engineering',
    'Unpaid',
    'Details'
  ),
];

export default function Dashboard() {
  return (
    <div
      style={{
        padding: '20px',
      }}>
      <TableContainer component={Paper}>
        <DashboardHeader />
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead
            sx={{
              '& th': {
                backgroundColor: '#3f51b5',
                color: 'white',
              },
            }}>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align='center'>Batch</TableCell>
              <TableCell align='center'>Department</TableCell>
              <TableCell align='left'>Payment Status</TableCell>
              <TableCell align='center'>Details</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component='th' scope='row'>
                  {row.name}
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: 700,
                  }}
                  align='center'>
                  {row.batch}
                </TableCell>
                <TableCell align='center'>{row.department}</TableCell>
                <TableCell
                  align='center'
                  sx={{
                    '& span': {
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px',
                    },
                  }}>
                  {row.payment_status === 'Paid' ? (
                    <span style={{ color: 'green', fontWeight: 700 }}>
                      <CheckCircleRoundedIcon /> {row.payment_status}
                    </span>
                  ) : (
                    <span style={{ color: 'red' }}>
                      <Button size='small' variant='contained'>
                        Pay now
                      </Button>
                    </span>
                  )}
                </TableCell>

                <TableCell align='center'>
                  <Button
                    sx={{
                      backgroundColor: '#3f51b5',
                      color: 'white',
                      '&:hover': {
                        backgroundColor: '#213CD5',
                        color: 'white',
                      },
                    }}
                    size='small'
                    variant='contained'>
                    View Details
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
