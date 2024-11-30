const baseUrl = 'http://localhost:8000/api/posts'; // 서버 주소 설정

// 1. GET 요청 (모든 게시물 조회)
const testGetAll = async () => {
  try {
    const response = await fetch(baseUrl); // fetch는 기본적으로 GET 요청
    const data = await response.json(); // JSON 응답 처리
    console.log('GET All Response:', data);
  } catch (error) {
    console.error('GET All Error:', error.message);
  }
};

// 2. GET 요청 (특정 ID 게시물 조회)
const testGetById = async (id) => {
  try {
    const response = await fetch(`${baseUrl}/${id}`);
    if (!response.ok) throw new Error(`Error: ${response.status}`); // 에러 처리
    const data = await response.json();
    console.log('GET By ID Response:', data);
  } catch (error) {
    console.error('GET By ID Error:', error.message);
  }
};

// 3. POST 요청 (새 게시물 생성)
const testPost = async () => {
  try {
    const newPost = { title: 'Test Post', content: 'This is a test.' };
    const response = await fetch(baseUrl, {
      method: 'POST', // HTTP 메소드 설정
      headers: { 'Content-Type': 'application/json' }, // 요청 헤더 설정
      body: JSON.stringify(newPost), // JSON 데이터로 변환하여 전송
    });
    if (!response.ok) throw new Error(`Error: ${response.status}`);
    const data = await response.json();
    console.log('POST Response:', data);
  } catch (error) {
    console.error('POST Error:', error.message);
  }
};

// 4. PUT 요청 (게시물 수정)
const testPut = async (id) => {
  try {
    const updatedPost = { title: 'Updated Title', content: 'Updated content.' };
    const response = await fetch(`${baseUrl}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedPost),
    });
    if (!response.ok) throw new Error(`Error: ${response.status}`);
    const data = await response.json();
    console.log('PUT Response:', data);
  } catch (error) {
    console.error('PUT Error:', error.message);
  }
};

// 5. DELETE 요청 (게시물 삭제)
const testDelete = async (id) => {
  try {
    const response = await fetch(`${baseUrl}/${id}`, { method: 'DELETE' });
    if (!response.ok) throw new Error(`Error: ${response.status}`);
    const data = await response.json();
    console.log('DELETE Response:', data);
  } catch (error) {
    console.error('DELETE Error:', error.message);
  }
};

// 테스트 실행
(async () => {
  await testGetAll();        // GET: 모든 게시물 조회
  await testGetById(1);      // GET: 특정 ID 게시물 조회 (ID 1)
  await testPost();          // POST: 새 게시물 생성
  await testPut(1);          // PUT: 특정 게시물(ID 1) 수정
  await testDelete(1);       // DELETE: 특정 게시물(ID 1) 삭제
})();
