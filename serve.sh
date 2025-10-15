#!/bin/bash

# 🚀 Demosayfa Development Server
# Bu script projenizi local'de test etmenizi sağlar

echo "🚀 Starting Development Server..."
echo ""
echo "📦 Current directory: $(pwd)"
echo "📁 Files:"
ls -lh *.html *.css *.js 2>/dev/null
echo ""
echo "🌐 Server starting on http://localhost:8000"
echo "Press Ctrl+C to stop"
echo ""

# Python 3 ile simple HTTP server başlat
python3 -m http.server 8000
