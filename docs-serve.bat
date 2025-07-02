@echo off
REM MkDocs development server script for Windows

echo 🚀 Setting up MkDocs for MCP OAuth Sample documentation...

REM Check if Python is installed
python --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Python is required but not installed.
    echo Please install Python and try again.
    pause
    exit /b 1
)

REM Check if pip is installed
pip --version >nul 2>&1
if errorlevel 1 (
    echo ❌ pip is required but not installed.
    echo Please install pip and try again.
    pause
    exit /b 1
)

REM Create virtual environment if it doesn't exist
if not exist "venv" (
    echo 📦 Creating virtual environment...
    python -m venv venv
)

REM Activate virtual environment
echo 🔄 Activating virtual environment...
call venv\Scripts\activate.bat

REM Install/upgrade pip
echo ⬆️ Upgrading pip...
python -m pip install --upgrade pip

REM Install dependencies
echo 📥 Installing MkDocs dependencies...
pip install -r requirements.txt

REM Check if mkdocs.yml exists
if not exist "mkdocs.yml" (
    echo ❌ mkdocs.yml not found in current directory.
    echo Please run this script from the project root.
    pause
    exit /b 1
)

echo ✅ Setup complete!
echo.
echo 🌐 Starting MkDocs development server...
echo 📖 Documentation will be available at: http://127.0.0.1:8000
echo 🔄 The server will auto-reload when you make changes to the docs.
echo ⏹️ Press Ctrl+C to stop the server.
echo.

REM Start the development server
mkdocs serve

pause