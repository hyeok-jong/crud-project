import colors from 'colors';


const requestColors = {
  GET: 'green',
  POST: 'yellow',
  PUT: 'blue',
  DELETE: 'red'
}


const logger = (req, res, next) => {
  const color = requestColors[req.method] || 'white';

  console.log(
    colors[color](`${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`)
  );

  next();
}

export default logger;
