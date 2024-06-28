const Logger = (error) => {
  if (process.env.NODE_ENV === "production") {
    console.log("Logger is running in production mode; check sever logs!");
  } else {
    console.log(error);
  }
};

export default Logger;
