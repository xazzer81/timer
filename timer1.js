let args = process.argv.slice(2);
let intervals = [];

for (const arg of args){
  intervals.push(Number(arg)*1000);
}

intervals = intervals.sort();

for (const interval of intervals){
  if(interval > 0 && !isNaN(interval)){
    setTimeout(() => {
      console.log('.');
      process.stdout.write('\x07');
    }, interval);
  }
}