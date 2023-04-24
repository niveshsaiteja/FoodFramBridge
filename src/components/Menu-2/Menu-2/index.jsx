import React, { forwardRef } from 'react';
import MenuItem1 from '../Menu-2/MenuItem1';
import './styles.css';

const Menu1 = forwardRef(({ list }, ref) => (
  <main ref={ref}>
    {list.map((item) => (
      <MenuItem1 item={item} key={item.id} />
    ))}
  </main>
));

export default Menu1;
