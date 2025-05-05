import React from 'react';

const Spinner = () => {
    return (
      <div className="flex h-screen items-center-safe justify-center-safe">
        <span className="loading loading-xl loading-spinner"></span>
      </div>
    );
};

export default Spinner;