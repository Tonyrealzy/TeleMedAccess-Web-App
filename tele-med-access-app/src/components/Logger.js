const Logger = (error) => {
  if (process.env.NODE_ENV === "production") {
    console.log("Logger is running in production mode!");
    // analytics.disable();
  } else {
    console.log(error);
  }
};

export default Logger;
