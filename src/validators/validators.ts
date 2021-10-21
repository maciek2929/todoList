export const isLengthValid = (randomString: string) => {
  if (randomString.length < 3) return 'is to short';
};

export const isEmailValid = (email: string): boolean => {
  const filter = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
  return String(email).search(filter) != -1;
};
