import { Button } from '@mui/material';
import React from 'react';
import auction_items from '../../assets/player_data.json';
import AuctionItem from '../../components/auctionItem/AuctionItem';
import Navbar from '../../components/navbar/Navbar';
import styles from './auction.module.css';

//   {
//     name: 'Shakib Al Hasan',
//     batch: '47',
//     department: 'Mathematics',
//     phone: '01700000000',
//     base_price: '৳ 2,00,00,000',
//     category: 'All-rounder',
//     type: 'A',
//     photo:
//       'https://www.cricbuzz.com/a/img/v1/192x192/i1/c170661/shakib-al-hasan.jpg',
//   },

//   {
//     name: 'Tamim Iqbal',
//     batch: '47',
//     department: 'Mathematics',
//     phone: '01700000000',
//     base_price: '৳ 1,50,00,000',
//     category: 'Batsman',
//     type: 'A',
//     photo:
//       'https://www.cricbuzz.com/a/img/v1/192x192/i1/c170666/tamim-iqbal.jpg',
//   },

//   {
//     name: 'Mushfiqur Rahim',
//     batch: '47',
//     department: 'Mathematics',
//     phone: '01700000000',
//     base_price: '৳ 1,00,00,000',
//     category: 'Batsman',
//     type: 'A',
//     photo:
//       'https://www.cricbuzz.com/a/img/v1/192x192/i1/c170662/mushfiqur-rahim.jpg',
//   },

//   {
//     name: 'Mahmudullah Riyad',
//     batch: '47',
//     department: 'Mathematics',
//     phone: '01700000000',
//     base_price: '৳ 1,00,00,000',
//     category: 'All-rounder',
//     type: 'A',
//     photo:
//       'https://www.cricbuzz.com/a/img/v1/192x192/i1/c170663/mahmudullah.jpg',
//   },

//   {
//     name: 'Mustafizur Rahman',
//     batch: '47',
//     department: 'Mathematics',
//     phone: '01700000000',
//     base_price: '৳ 1,00,00,000',
//     category: 'Bowler',
//     type: 'A',
//     photo:
//       'https://www.cricbuzz.com/a/img/v1/192x192/i1/c170664/mustafizur-rahman.jpg',
//   },

//   {
//     name: 'Mehidy Hasan Miraz',
//     batch: '47',
//     department: 'Mathematics',
//     phone: '01700000000',
//     base_price: '৳ 1,00,00,000',
//     category: 'All-rounder',
//     type: 'A',
//     photo:
//       'https://www.cricbuzz.com/a/img/v1/192x192/i1/c170665/mehidy-hasan.jpg',
//   },
// ];

const Auction = () => {
  const [auctionItem, setAuctionItem] = React.useState(auction_items[0]);

  const nextItem = () => {
    const index = auction_items.indexOf(auctionItem);
    if (index < auction_items.length - 1) {
      setAuctionItem(auction_items[index + 1]);
    } else {
      alert('This is the last player');
    }
  };

  const previousItem = () => {
    const index = auction_items.indexOf(auctionItem);
    if (index > 0) {
      setAuctionItem(auction_items[index - 1]);
    } else {
      alert('This is the first player');
    }
  };

  return (
    <div className={styles.auction}>
      <Navbar />
      <h1 className={styles.auction__title}>
        জয় বাংলা ক্রিকেট টুর্নামেন্ট - ২০২৩
      </h1>
      <br />
      <AuctionItem item={auctionItem} />
      <div className={styles.auction__bottom_nav}>
        <Button
          className={styles.auction__bottom_nav__button}
          onClick={nextItem}
          sx={{
            color: 'white',
            borderColor: 'white',
            width: '200px',
            height: '50px',
            fontSize: '18px',
            fontWeight: 'bold',
            '&:hover': {
              color: 'black',
              borderColor: 'black',
              backgroundColor: 'white',
            },
            position: 'absolute',
            bottom: '0',
            right: '0',
            margin: '20px',
          }}
          variant='contained'>
          Next
        </Button>
        <Button
          className={styles.auction__bottom_nav__button}
          onClick={previousItem}
          sx={{
            color: 'white',
            borderColor: 'white',
            width: '200px',
            height: '50px',
            fontSize: '18px',
            fontWeight: 'bold',
            '&:hover': {
              color: 'black',
              borderColor: 'black',
              backgroundColor: 'white',
            },
            position: 'absolute',
            bottom: '0',
            left: '0',
            margin: '20px',
          }}
          variant='contained'>
          Previous
        </Button>
      </div>
    </div>
  );
};

export default Auction;
