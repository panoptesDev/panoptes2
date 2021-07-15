---
title: Connecting to a Cluster
---

See [Panoptes Clusters](../clusters.md) for general information about the
available clusters.

## Configure the command-line tool

You can check what cluster the Panoptes command-line tool (CLI) is currently targeting by
running the following command:

```bash
panoptes config get
```

Use `panoptes config set` command to target a particular cluster. After setting
a cluster target, any future subcommands will send/receive information from that
cluster.

For example to target the Devnet cluster, run:

```bash
panoptes config set --url https://devnet.panoptes.org
```

## Ensure Versions Match

Though not strictly necessary, the CLI will generally work best when its version
matches the software version running on the cluster. To get the locally-installed
CLI version, run:

```bash
panoptes --version
```

To get the cluster version, run:

```bash
panoptes cluster-version
```

Ensure the local CLI version is greater than or equal to the cluster version.
