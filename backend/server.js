import express from 'express';
import {fileURLToPath} from 'url';
import path from 'path';
// import errorHandler from './middleware/error.js';

import postsRouter from './routes/posts.js';
import logger from './middleware/logger.js';
import errorHandler from './middleware/error.js';
import notFound from './middleware/notFound.js';



const port = process.env.PORT || 8080;

// 1. request from client
const app = express();


import cors from 'cors';
// CORS 설정
app.use(
  cors({
    origin: 'http://localhost:5173', // 허용할 프론트엔드 URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // 허용할 HTTP 메서드
    credentials: true, // 쿠키 등을 포함한 요청 허용 (필요 시)
  })
);

// 2. parsing data
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// 3. go through logger middleware
// 4. go next()
app.use(logger);

// 5. go throuh api
app.use('/api/posts', postsRouter);

// 6. 위에 해당되는 경로가 아닌경우
app.use(notFound);


// 7. error middleware
// 일반적으로 next()는 요청을 다음 미들웨어로 넘기는 역할을 하지만, 
// 에러 객체가 전달되면 Express는 이를 에러로 인식하고, 에러 처리 미들웨어로 바로 넘어갑
app.use(errorHandler);



app.listen(port, () => console.log(`Server is running on port ${port}`));