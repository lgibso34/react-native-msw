import {http, HttpResponse} from 'msw';
import {setupServer} from 'msw/native';

const handlers = [
  http.get('http://example.com/test', () => {
    return HttpResponse.json({
      test: 'hello world',
    });
  }),
];
export const server = setupServer(...handlers);
