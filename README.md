# Census Agent - LiveKit AI Application

A comprehensive AI-powered census survey application built with LiveKit Agents, featuring voice communication between users and intelligent AI agents.

## Project Structure

```
census-agent/             # Main project directory
├── client/                # Frontend application (React + TypeScript)
│   ├── src/              # React components and styling
│   ├── public/           # Static assets
│   └── vite.config.ts    # Vite bundler configuration
├── server/                # Backend API server (Python/Flask)
│   ├── main.py           # Server entry point
│   ├── database.py       # Database configuration
│   ├── schemas.py        # Data schemas
│   ├── requirements.txt   # Python dependencies
│   ├── api/              # API routes
│   └── services/         # Business logic services
```

## Features

- **Voice-Based Survey**: Interactive census surveys conducted through voice communication
- **Real-time Communication**: WebRTC-based bidirectional communication
- **Progress Tracking**: Monitor survey completion status

## Getting Started

### Prerequisites

- Python 3.8+
- Node.js 16+
- LiveKit server (local or cloud instance)
- npm or yarn for package management

### Backend Server Setup

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Create and activate a Python virtual environment:
   ```bash
   python -m venv venv
   venv\Scripts\activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Start the backend server:
   ```bash
   python main.py
   ```

### Frontend Setup

1. Navigate to the client directory:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## Configuration

- **Backend API**: Database and API settings in `server/database.py` and `server/schemas.py`
- **Frontend**: Environment variables and Vite configuration in `client/vite.config.ts`

## API Endpoints

The backend server provides REST API endpoints for:
- User management
- Survey creation and retrieval
- Response tracking
- Progress monitoring

## Development

Contributions are welcome! Please follow the coding standards and test your changes before submitting.

## Troubleshooting

- **Connection Issues**: Verify LiveKit server is running and accessible
- **API Issues**: Ensure backend server is running on correct port
- **Frontend Blank**: Clear browser cache and rebuild frontend assets

## License

[Add your license information here]

## Support

For issues or questions, check the logs directory and review the main.py files for configuration details.
