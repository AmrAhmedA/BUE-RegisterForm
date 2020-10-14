import React from "react";
const BackDrop = () => {
  return (
    <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default BackDrop;
