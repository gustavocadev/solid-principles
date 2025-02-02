// Hay que agregar la dependencia de axios ```yarn add axios```

import type { HttpClient } from './02-open-close-c';

export class TodoService {
  constructor(private readonly http: HttpClient) {}
  async getTodoItems() {
    const { data } = await this.http.get(
      'https://jsonplaceholder.typicode.com/todos/'
    );
    return data;
  }
}

export class PostService {
  constructor(private readonly http: HttpClient) {}

  async getPosts() {
    const { data } = await this.http.get(
      'https://jsonplaceholder.typicode.com/posts'
    );
    return data;
  }
}

export class PhotosService {
  constructor(private readonly http: HttpClient) {}

  async getPhotos() {
    const { data } = await this.http.get(
      'https://jsonplaceholder.typicode.com/photos'
    );
    return data;
  }
}
