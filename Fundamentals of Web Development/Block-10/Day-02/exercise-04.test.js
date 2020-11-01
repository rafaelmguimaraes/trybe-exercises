const getRepos = require('./exercise-04');

describe('Quando o repo existe', () => {
  test('Se os dois repositórios existem', async () => {
    const endpoint = 'https://api.github.com/users/tryber/repos';
    const repositorio = await getRepos(endpoint);
    expect(repositorio).toContain('covid-news-api');
    expect(repositorio).toContain('Curso-Trybe');
    expect(repositorio).not.toContain('sd-01-week4-5-project-todo-list');
    expect(repositorio).not.toContain('sd-01-week4-5-project-meme-generator');
  });
});