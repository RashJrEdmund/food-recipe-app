import { SESSIONSTORAGE } from './storage';

// this stores an array of searched id's to sessionstorage, helps when i want to rerender
export const createSearchIdList = (foodData) => {
  const searchIdList = foodData.map(({ id }) => id);
  SESSIONSTORAGE.save('searchIdList', searchIdList);
};

// CONVERTING IMAGE TO BASE 64. HAVEN'T USED IT
export const convertBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      resolve(fileReader.result);
    };

    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};

export const customLogger = (data, options) => {
  const { clear, log } = console;

  if (options && options.clearConsole) clear();

  if (typeof data === 'string') return log({ data });
  return log(data);
};
