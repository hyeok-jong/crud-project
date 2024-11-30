

# Source Code for Create, Read, Update, and Delete (CRUD) Project

## 1. Frontend  
### 1.1 Basic HTML, CSS, and JavaScript  
- HTML: For basic structure.  
- CSS: For styling.  
- JavaScript: For reactive styling and DOM management.  

### 1.2 React.js  
- A JavaScript library for building web pages.  
- Component-based architecture.  
- Re-renders only the changed components.  

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" 
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion" 

nvm install 22
npm create vite@latest
npm run dev
npm run build
```

### 1.3 React Router  
- For managing multiple pages.  
```bash
npm install react-router-dom
```

### 1.4 React - Redux (Toolkit)  
- Manages global state shared between components.  
```bash
npm install @reduxjs/toolkit react-redux
```

---

## 2. Backend  
The main objective of the backend is to handle API requests.

### 2.1 Express.js  
- Lightweight web framework.  
- Used to define the app and API routes.  
```bash
npm install nodemon express colors cors
```

Set up `package.json` as follows (type and scripts):  
```json
{
  // "name": "backend",
  // "version": "1.0.0",
  // "main": "index.js",
  "type": "module",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon --env-file=.env server.js"
  },
  // "author": "",
  // "license": "ISC",
  // "description": "",
  // "dependencies": {
  //   "colors": "^1.4.0",
  //   "cors": "^2.8.5",
  //   "express": "^4.21.1",
  //   "nodemon": "^3.1.7"
  // }
}
```
```bash
npm run dev
```

---

## 3. What Can Be Practiced in This Project  

### 3.1 JavaScript  
- Check out `frontend/src/pages/Todo/Todo.jsx` for examples of using `localStorage`.  

### 3.2 React  
- Check out `frontend/src/pages/Clocks/ClockCurrentTime/ClockCurrentTime.jsx` for examples of using `useState`.  
- Check out `frontend/src/pages/Clocks/ClockStopwatch/ClockStopwatchUseRef.jsx` for examples of using `useRef`.  
- Check out `frontend/src/pages/Clocks/ClockCountDown/ClockCountDown.jsx` for examples of using `useState`.  
- Check out `frontend/src/pages/Board/Board.jsx` for examples of using `properties`.  
- All components use `useEffect` to run functions after re-rendering.  

### 3.3 React Router  
- Check out `frontend/src/index.jsx` for examples of using `BrowserRouter`.  
- Check out `frontend/pages/Clocks/ClocksRoutes.jsx` and `frontend/pages/Clocks/ClocksList.jsx` for examples of setting up sub-pages as routes and components.  
- Check out `frontend/pages/APIs/APIsRoutes.jsx` and `frontend/pages/APIs/APIsList.jsx` for examples of setting up sub-pages as routes and components.  

### 3.4 React-Redux (Toolkit)  
- Check out `frontend/src/index.jsx` for examples of using `Provider`.  
- Check out `frontend/src/store` for examples of setting up `store` and `slice`.  
- Check out `frontend/src/pages/Clocks/ClockStopwatch/ClockStopwatch.jsx` for examples of using `useDispatch` and `useSelector`.  
- Check out `frontend/src/pages/Todo/Todo.jsx` for examples of using `useDispatch` and `useSelector`.  
- Check out `frontend/src/pages/Main/Main.jsx` to see how `useSelector` retrieves `todoList` generated on a sub-page.  

### 3.5 API Calls  
- Check out `frontend/src/pages/APIs/APICatPromise/index.jsx` for examples of using `fetch` and promises in the old style with `then`.  
- Check out `frontend/src/pages/APIs/APICatPromise/index.jsx` for examples of using `fetch`, `async`, and `await` with modern `try` and `catch`.  

### 3.6 Building an API with Express and Call on React.  
- CRUD project.  
- Check out `backend/server.js` to see how to set up an Express app with `cors`.  
- The request flow is as follows:
  1. A client (frontend) makes a request.  
  2. The data is parsed.  
  3. The request goes through the logger middleware for logging.  
  4. The request moves to the next middleware.  
  5. The request is routed to APIs.  
  6. If the requested URL does not exist, the errorHandler middleware is triggered.  
- Check out `backend/routes/posts.js` to see how to set up Express Router.  
- Check out `backend/controllers/postControllers.js` for examples of setting up APIs for CRUD methods.  
- Check out `backend/middleware/` for examples of creating middleware.  
- Check out `backend/test.js` for debugging examples or use Postman.  `node test.js`.  
- Check out `frontend/src/pages/Board/Board.jsx` to see how to all custom APIs.  
- Here, when clicking the add, delete, refresh, or edit button, the data will first be sent to the API. After the API processes the request and sends back the updated data, the state will be updated accordingly, and then the updated state will change the store(redux).  
- All data manipulation is handled strictly by the backend to ensure consistency and reliability.  