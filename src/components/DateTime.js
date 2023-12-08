import React from 'react';
import CurrentDate from './CurrentDate';
import CurrentTime from './CurrentTime';

const DateTime = () => {
  return (
    <div className="date-time">
      <CurrentDate />
      <CurrentTime />
    </div>
  );
};

export default DateTime;
