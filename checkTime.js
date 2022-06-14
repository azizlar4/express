let day = new Date().getDay();
let hour = new Date().getHours();

function bydate(req, res, next) {
  if (hour > 9 && hour < 17 && day > 0 && day < 6) {
    next();
    
  } else {
    res.send(`<h1>we ain't working right now !!</h1>`);
    console.log("hour"+String(hour))
    console.log("day"+day)
  }
}
module.exports = bydate;
