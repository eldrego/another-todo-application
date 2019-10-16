const titleMapper = (url) => {
  switch (url) {
  case '/':
    return 'Little MarkMade Apps';

  case '/newsapp':
    return 'News Headlines';

  case '/todoapp':
    return 'My Todo';

  default:
    break;
  }
};

export default titleMapper;
