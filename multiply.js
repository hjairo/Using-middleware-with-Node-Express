// uses bodyParser middleware to call the number property (the value for name in the form template in index.pug). Form values arrive to the app as strings, so to turn that into a number, parseFloat() is used
module.exports = (config) => {
  return (req, res, next) => {
    // the if statement below makes sure that when the number property is undefined (starting the page), it'll continue on with the rest of the function 
    if (req.body.number === undefined) {
      return next();
    }
    const num = parseFloat(req.body.number);
    if (isNaN(num)) {
      const err = new Error('Submitted value is not a number');
      return next(err); // if multiple next(), using 'return' makes sure the app stops here
    }
    const result = num * config.by;
    req.multiplied = result; // Creates a 'multiplied' property on the request object and stores the result there
    next();
  }
};