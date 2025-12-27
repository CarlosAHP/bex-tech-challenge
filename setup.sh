#!/bin/bash

echo "🚀 Setting up Real Estate Dashboard..."

# Check Node.js
if ! command -v node &> /dev/null
then
    echo "❌ Node.js could not be found. Please install Node.js."
    exit 1
fi

echo "📦 Installing dependencies..."
npm install

echo "✅ Setup complete!"
echo "👉 Run 'npm run dev' to start the server."
