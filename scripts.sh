#!/bin/bash
set -eEuo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

cleanup() {
  set +e  # don’t let errors inside cleanup trigger the trap again
  echo ""
  echo "❌ ERROR: The command \"$BASH_COMMAND\" failed."
  echo "⚠️ DEV ENV? Ensure venv is 'activated' --> source .venv/bin/activate"
  echo "⚠️ Cleaning up infrastructure..."
  cd "${ROOT_DIR}" || true
  docker compose down || true
}

trap cleanup ERR

docker compose up -d
echo "✅ Dev Container start at http://localhost:5173"