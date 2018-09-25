import React from 'react';
import PropTypes from 'prop-types';

import Card from './Card';

export default function ProductCard({ wine }) {
  const rows = [
    {
      name: 'Origin',
      value: wine.origin
    },
    {
      name: 'Style',
      value: wine.style
    },
    {
      name: 'Sweetness',
      value: wine.sugar_content
    },
    {
      name: 'Release Date',
      value: wine.released_on
    },
    {
      name: 'Percent Sold',
      value: `${wine.sold_percent}%`
    },
    {
      name: 'Rating',
      value: wine.heat
    },
  ];

  const createTable = (rows) => {
    return rows.map((row, index) => {
      if (row.name === 'Rating') {
        return (
          <tr
            key={row.value}
            css={`
              font-weight: bold;
              background-color: ${(index + 2) % 2 === 0 ? '#f2f2f2' : 'White'};
            `}
          >
            <td>Rating</td>
            <td>{wine.heat}</td>
          </tr>
        );
      };
      return (
        <tr
          key={row.value}
          css={`
            background-color: ${index % 2 === 0 ? '#f2f2f2' : 'White'};
          `}
        >
          <td>{row.name}</td>
          <td>{row.value}</td>
        </tr>
      );
    });
  }

  return(
    <Card>
      <div css={`display: flex; width: 100%;`}>
        <div css={`
             width: 40%;
             overflow: hidden;
             margin: 0;`}>
          <img
            src={wine.image_url}
            css={`
              display: inline-block;
              width: 250%;
              margin-top: -20%;
              margin-left: -78%;
              margin-bottom: -20%;
            `}
          />
        </div>

        <div css={`width: 60%`}>
          <h1 css={`font-weight: bold; margin: 2px 0 6px; font-size: larger;`}>{wine.name}</h1>
          <div css={`font-style: oblique; margin: 0 0 6px; color: #ff0000;`}>{`${wine.varietal}`}</div>
          <small>{`—LCBO#: ${wine.id}`}</small>
          <div css={`margin: 6px 0; font-size: 28px; font-weight: 400;`}>
            {`$${wine.price_in_cents/100}`}
          </div>
          <div
            css={`
              margin: 12px 0 8px;
              padding: 6px 0;
              border-top: 1px solid #ccc;
              border-bottom: 1px solid #ccc;
            `}
          >
              Product Details
          </div>
          <table css={`width: 100%; border: none; padding: 3px;`}>
            <tbody css={`font-size: 13px;`}>
              {createTable(rows)}
              {wine.store_LAPI ? (
                <tr>
                  <td>Stock at {wine.store_LAPI[0].store_id}</td>
                  <td>~{wine.store_LAPI[0].quantity}</td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>
      </div>
    </Card>
  )
}

// Static type checking for props
ProductCard.propTypes = {
  wine: PropTypes.object.isRequired
}
