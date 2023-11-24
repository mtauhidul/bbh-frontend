import CircularProgress from '@mui/material/CircularProgress';
import React, { useEffect, useState } from 'react';
import styles from './auctionItem.module.css';

const extractPhotoIdFromUrl = (url) => {
  const startIndex = url.indexOf('id=') + 3;
  return url.substring(startIndex);
};

const AuctionItem = ({ item }) => {
  const [isImageLoading, setImageLoading] = useState(true);
  const { name, batch, department, phone, category, type, photo } = item;

  const photoId = extractPhotoIdFromUrl(photo);
  const photoURL = `https://drive.google.com/uc?export=view&id=${photoId}`;

  const base_price = {
    A: 130000,
    B: 100000,
    C: 50000,
    D: 30000,
  }[type].toLocaleString('bn-BD', {
    style: 'currency',
    currency: 'BDT',
  });

  // Reset isImageLoading to true whenever photoURL changes
  useEffect(() => {
    setImageLoading(true);
  }, [photoURL]);

  useEffect(() => {
    const img = new Image();
    img.src = photoURL;
    img.onload = () => {
      setImageLoading(false);
    };

    // If the image is complete (i.e., it's loaded from the cache), immediately set isImageLoading to false
    if (img.complete) {
      setImageLoading(false);
    }

    return () => {
      img.onload = null;
    };
  }, [photoURL]);

  return (
    <div className={styles.auctionItem}>
      <div className={styles.auctionItem__img__container}>
        {isImageLoading ? (
          <CircularProgress
            sx={{
              color: '#fff',
              position: 'absolute',
              top: '50%',
              left: '50%',
              marginTop: '-12px',
              marginLeft: '-12px',
            }}
          />
        ) : (
          <img className={styles.auctionItem__img} src={photoURL} alt={name} />
        )}
      </div>
      <div className={styles.auctionItem__info}>
        <h2>{name}</h2>
        <h3>Batch: {batch}</h3>
        <h3>Department: {department}</h3>
        <h3>Phone: {phone}</h3>
        <br />
        <h3>Base Price: {base_price}</h3>
        <h3>Category: {category}</h3>
        <h3>
          Type:
          <span
            style={{
              fontWeight: 'bold',
              marginLeft: '10px',
              color: {
                A: 'red',
                B: 'blue',
                C: 'green',
                D: 'orange',
              }[type],
            }}>
            {type}
          </span>
        </h3>
      </div>
    </div>
  );
};

export default AuctionItem;
