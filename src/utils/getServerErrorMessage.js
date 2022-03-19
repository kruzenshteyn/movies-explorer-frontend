
export function getServerErrorMessage(err){
  switch(err){
    case 400: return 'Введены некорректные данные или email уже используется';
    case 401: return 'Нет доступа к запрашиваемому ресурсу';
    case 403: return 'Ошибка доступа';
    case 404: return 'Некорректный адрес (неработающая ссылка)';
    case 409: return 'Пользователь уже существует';
    case 500: return `Ошибка серевера ${err}`;
    default: return `Ошибка ${err}`
  }
}