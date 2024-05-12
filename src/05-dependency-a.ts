import { PostService } from './05-dependency-b';
import {
  JsonDatabaseService,
  LocalDataBaseService,
  WebApiPostService,
} from './05-dependency-c';

// Main

// const jsonDatabaseService = new JsonDatabaseService();
// const localDataBaseService = new LocalDataBaseService();
const provider = new WebApiPostService();

const postService = new PostService(provider);

const posts = await postService.getPosts();

console.log({ posts });
