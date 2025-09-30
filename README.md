##  Frontend Integration & Production Scaling

This Express.js backend provides REST APIs for authentication and CRUD operations consumed by the React frontend.

###  Integration
- Frontend sends requests via Axios to deployed API endpoints.
- JWT is used for secure authentication; token is passed in headers:

### 🌍 Deployment
- Hosted on Render
- Connected to MongoDB Atlas for data storage
- CORS enabled for frontend domain:
