export const isPalindrome = (word: string): boolean => {
  return word === word.split('').reverse().join('');
};
