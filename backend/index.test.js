const request = require('supertest');
const app = require('./index');

describe('Document Verification API', () => {
  // Helper function to create a unique hash for each test
  const generateUniqueHash = () => `0x${Math.floor(Math.random() * 1e16).toString(16).padEnd(64, '0')}`;

  test('POST /store-hash - should store document hash', async () => {
    const uniqueHash = generateUniqueHash();
    const response = await request(app)
      .post('/store-hash')
      .send({ documentHash: uniqueHash });
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Document hash stored successfully');
  });

  test('POST /verify-hash - should verify stored document hash', async () => {
    const uniqueHash = generateUniqueHash();
    await request(app).post('/store-hash').send({ documentHash: uniqueHash }); // Store the hash first
    const response = await request(app)
      .post('/verify-hash')
      .send({ documentHash: uniqueHash });
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('isStored', true); // Expect the hash to be stored
  });

  test('POST /verify-hash - should return 400 for missing hash', async () => {
    const response = await request(app)
      .post('/verify-hash')
      .send({});
    expect(response.statusCode).toBe(400);
    expect(response.body).toEqual({ error: "documentHash is required" });
  });
});
