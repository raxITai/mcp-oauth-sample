#!/bin/bash
# Test MkDocs configuration

set -e

echo "🧪 Testing MkDocs configuration..."

# Check if Python is available
if ! command -v python3 &> /dev/null; then
    echo "❌ Python 3 is required"
    exit 1
fi

# Create a temporary virtual environment
echo "📦 Creating temporary virtual environment..."
python3 -m venv test-venv
source test-venv/bin/activate

# Install requirements
echo "📥 Installing requirements..."
pip install --upgrade pip
pip install -r requirements.txt

# Test MkDocs configuration
echo "🔍 Validating MkDocs configuration..."
python -c "import yaml; yaml.safe_load(open('mkdocs.yml'))" && echo "✓ mkdocs.yml is valid YAML"

# Test build
echo "🏗️ Testing documentation build..."
mkdocs build --clean --strict

echo "✅ All tests passed!"
echo "📁 Built documentation is in the 'site' directory"

# Cleanup
echo "🧹 Cleaning up..."
deactivate
rm -rf test-venv

echo "🎉 Documentation is ready for deployment!"