import path from 'path';

export const CONFIGS = {
  MAIN_HTML:
    process.env.NODE_ENV === 'development'
      ? path.join(__dirname, '../', 'main.html')
      : path.join(__dirname, '../', 'src', 'main.html'),
};
