#!/bin/bash

# Portfolio Deployment Script
# This script builds and prepares the portfolio for deployment

echo "🚀 Starting portfolio deployment process..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ Node.js and npm are installed"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo "✅ Dependencies installed successfully"

# Build the project
echo "🔨 Building the project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed"
    exit 1
fi

echo "✅ Build completed successfully"

# Check if build output exists
if [ ! -d "out" ]; then
    echo "❌ Build output directory 'out' not found"
    exit 1
fi

echo "✅ Build output ready in 'out' directory"

echo ""
echo "🎉 Deployment preparation complete!"
echo ""
echo "Next steps:"
echo "1. Upload the 'out' directory to your hosting service"
echo "2. Or deploy to Vercel by running: npx vercel --prod"
echo "3. Or deploy to Netlify by dragging the 'out' folder to netlify.com/drop"
echo ""
echo "Your portfolio is ready to go live! 🌟"