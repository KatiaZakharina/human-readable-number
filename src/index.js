module.exports = function toReadable(num) {
  const spelling = [
      'zero',
      'one',
      'two',
      'three',
      'four',
      'five',
      'six',
      'seven',
      'eight',
      'nine',
      'ten',
      'eleven',
      'twelve',
      'thirteen',
      'fourteen',
      'fifteen',
      'sixteen',
      'seventeen',
      'eighteen',
      'nineteen',
    ],
    prefix = ['', '', 'twen', 'thir', 'for', 'fif', 'six', 'seven', 'eigh', 'nine'];

  if (num < 20) {
    return spelling[num];
  } else if (num < 100) {
    return prefix[Math.floor(num / 10)] + 'ty' + (num % 10 ? ' ' + toReadable(num % 10) : '');
  } else {
    return (
      toReadable(Math.floor(num / 100)) +
      ' hundred' +
      (num % 100 ? ' ' + toReadable(num % 100) : '')
    );
  }
};
