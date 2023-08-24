export const formatDate = (createdAt) => {
  const day = createdAt.split('-').pop().split('T').shift();
  const month = createdAt.split('-')[1];
  const year = createdAt.split('-')[0];

  return `${day}-${month}-${year}`;
};

export const test = 'some export';
