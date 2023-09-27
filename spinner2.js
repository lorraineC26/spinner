const spinners = ['|  ', '/  ', '-  ', '\\  ', '|', '\n'];

let delay = 0;

for (const each of spinners) {
  setTimeout(() => {
    process.stdout.write('\r' + each);
  }, delay += 200);
}

