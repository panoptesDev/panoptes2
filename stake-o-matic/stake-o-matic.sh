#!/usr/bin/env bash
#
# Downloads and runs the latest stake-o-matic binary
#

solana_version=edge
curl -sSf https://raw.githubusercontent.com/solana-labs/solana/v1.0.0/install/panoptes-install-init.sh \
    | sh -s - $solana_version \
        --no-modify-path \
        --data-dir ./panoptes-install \
        --config ./panoptes-install/config.yml

export PATH="$PWD/panoptes-install/releases/$solana_version/solana-release/bin/:$PATH"

set -x
exec panoptes-stake-o-matic "$@"
