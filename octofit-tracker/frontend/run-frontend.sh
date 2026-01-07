#!/bin/bash
# Frontend Setup and Run Script for OctoFit Tracker

# Navigate to frontend directory
cd /workspaces/skills-build-applications-w-copilot-agent-mode/octofit-tracker/frontend

# Ensure all npm dependencies are installed
echo "Installing npm dependencies..."
npm install

# Set environment variable for the React app
# This should be set to your GitHub Codespace name
# For local development, it will fall back to http://localhost:8000
export REACT_APP_CODESPACE_NAME=${CODESPACE_NAME:-}

echo "Starting React development server..."
echo "Environment: REACT_APP_CODESPACE_NAME = $REACT_APP_CODESPACE_NAME"
echo "Open browser to http://localhost:3000"
echo ""
echo "Available routes:"
echo "  / - Home"
echo "  /users - Users listing"
echo "  /workouts - Workouts listing"
echo "  /activities - Activities listing"
echo "  /teams - Teams listing"
echo "  /leaderboard - Competitive leaderboard"
echo ""

# Start the React app
npm start
