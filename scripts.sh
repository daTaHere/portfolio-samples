#!/bin/bash
set -eEuo pipefail

echo "Select CMD:"
select ENV_SELECTION in "Start" "Shutdown"; do
  case $ENV_SELECTION in
    Start|Shutdown)
      COMMAND=$ENV_SELECTION
      break
      ;;
    *)
      echo "❌ Invalid selection. Please choose 1, 2, or 3."
      ;;
  esac
done


ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

cleanup() {
  set +e  # don’t let errors inside cleanup trigger the trap again
  echo ""
  echo "❌ ERROR: The command \"$BASH_COMMAND\" failed."
  cd "${ROOT_DIR}" || true
  docker compose down --rmi all -v --remove-orphans || true
}

trap cleanup ERR

if [[ $COMMAND == "Start" ]]; then
  docker compose up --build --force-recreate -d
  echo "✅ Dev Container start at --->  http://localhost:5173"
  
else
  docker compose down --rmi all -v --remove-orphans
  echo "❌ Dev container down"
  fi