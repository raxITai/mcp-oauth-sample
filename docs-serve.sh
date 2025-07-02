#!/bin/bash
# MkDocs development server script

set -e

echo "🚀 Setting up MkDocs for MCP OAuth Sample documentation..."

# Check if Python is installed
if ! command -v python3 &> /dev/null; then
    echo "❌ Python 3 is required but not installed."
    echo "Please install Python 3 and try again."
    exit 1
fi

# Check if pip is installed
if ! command -v pip &> /dev/null; then
    echo "❌ pip is required but not installed."
    echo "Please install pip and try again."
    exit 1
fi

# Create virtual environment if it doesn't exist
if [ ! -d "venv" ]; then
    echo "📦 Creating virtual environment..."
    python3 -m venv venv
fi

# Activate virtual environment
echo "🔄 Activating virtual environment..."
source venv/bin/activate

# Install/upgrade pip
echo "⬆️ Upgrading pip..."
pip install --upgrade pip

# Install dependencies
echo "📥 Installing MkDocs dependencies..."
pip install -r requirements.txt

# Check if mkdocs.yml exists
if [ ! -f "mkdocs.yml" ]; then
    echo "❌ mkdocs.yml not found in current directory."
    echo "Please run this script from the project root."
    exit 1
fi

echo "✅ Setup complete!"
echo ""
echo "🌐 Starting MkDocs development server..."
echo "📖 Documentation will be available at: http://127.0.0.1:8000"
echo "🔄 The server will auto-reload when you make changes to the docs."
echo "⏹️ Press Ctrl+C to stop the server."
echo ""

# Start the development server
mkdocs serve