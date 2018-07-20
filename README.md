# Hyperledger Burrow

|[![GoDoc](https://godoc.org/github.com/burrow?status.png)](https://godoc.org/github.com/hyperledger/burrow) | Linux |
|---|-------|
| Master | [![Circle CI](https://circleci.com/gh/hyperledger/burrow/tree/master.svg?style=svg)](https://circleci.com/gh/hyperledger/burrow/tree/master) |
| Develop | [![Circle CI (develop)](https://circleci.com/gh/hyperledger/burrow/tree/develop.svg?style=svg)](https://circleci.com/gh/hyperledger/burrow/tree/develop) |

Hyperledger Burrow is a permissioned Ethereum smart-contract blockchain node. It executes Ethereum EVM smart contract code (usually written in [Solidity](https://solidity.readthedocs.io)) on a permissioned virtual machine. Burrow provides transaction finality and high transaction throughput on a proof-of-stake [Tendermint](https://tendermint.com) consensus engine.

![burrow logo](docs/images/burrow.png)

## What is Burrow

Hyperledger Burrow is a permissioned blockchain node that executes smart contract code following the Ethereum specification. Burrow is built for a multi-chain universe with application specific optimization in mind. Burrow as a node is constructed out of three main components: the consensus engine, the permissioned Ethereum virtual machine and the rpc gateway. More specifically Burrow consists of the following:

- **Consensus Engine:** Transactions are ordered and finalised with the Byzantine fault-tolerant Tendermint protocol.  The Tendermint protocol provides high transaction throughput over a set of known validators and prevents the blockchain from forking.
- **Application Blockchain Interface (ABCI):** The smart contract application interfaces with the consensus engine over the [ABCI](https://github.com/tendermint/tendermint/abci). The ABCI allows for the consensus engine to remain agnostic from the smart contract application.
- **Smart Contract Application:** Transactions are validated and applied to the application state in the order that the consensus engine has finalised them. The application state consists of all accounts, the validator set and the name registry. Accounts in Burrow have permissions and either contain smart contract code or correspond to a public-private key pair. A transaction that calls on the smart contract code in a given account will activate the execution of that account’s code in a permissioned virtual machine.
- **Permissioned Ethereum Virtual Machine:** This virtual machine is built to observe the Ethereum operation code specification and additionally asserts the correct permissions have been granted. Permissioning is enforced through secure native functions and underlies all smart contract code. An arbitrary but finite amount of gas is handed out for every execution to ensure a finite execution duration - “You don’t need money to play, when you have permission to play”.
- **Application Binary Interface (ABI):** Transactions need to be formulated in a binary format that can be processed by the blockchain node. Current tooling provides functionality to compile, deploy and link solidity smart contracts and formulate transactions to call smart contracts on the chain.
- **API Gateway:** Burrow exposes REST and JSON-RPC endpoints to interact with the blockchain network and the application state through broadcasting transactions, or querying the current state of the application. Websockets allow subscribing to events, which is particularly valuable as the consensus engine and smart contract application can give unambiguously finalised results to transactions within one blocktime of about one second.

## Project documentation and Roadmap

Project information generally updated on a quarterly basis can be found on the [Hyperledger Burrow Wiki](https://wiki.hyperledger.org/projects/burrow).

## Installation

- [Install go](https://golang.org/doc/install) version 1.10 or above and have `$GOPATH` set

```
go get github.com/hyperledger/burrow
cd github.com/hyperledger/burrow
make build
```

This will build the `burrow` and `burrow-client` binaries and put them in the `bin/` directory. They can be executed from there or put wherever is convenient.

You can also install `burrow` into `$GOPATH/bin` with `make install_db`,

## Usage

The end result will be a `burrow.toml` that will be read in from your current working directory when starting `burrow`.

### Configuration

#### Configure Burrow
The quick-and-dirty one-liner looks like:

```shell
# Read spec on stdin
burrow spec -p1 -f1 | burrow configure -s- > burrow.toml
```

which translates into:

```shell
# This is a place we can store config files and burrow's working directory '.burrow'
mkdir chain_dir && cd chain_dir
burrow spec --participant-accounts=1 --full-accounts=1 > genesis-spec.json
burrow configure --genesis-spec=genesis-spec.json > burrow.toml
```
#### Run Burrow
Once the `burrow.toml` has been created, we run:

```
# To select our validator address by index in the GenesisDoc
burrow serve --validator-index=0
# Or to select based on address directly (substituting the example address below with your validator's):
burrow serve --validator-address=BE584820DC904A55449D7EB0C97607B40224B96E
```

and the logs will start streaming through.

If you would like to reset your node, you can just delete its working directory with `rm -rf .burrow`. In the context of a
multi-node chain it will resync with peers, otherwise it will restart from height 0.

### Logging

Logging is highly configurable through the `burrow.toml` `[logging]` section. Each log line is a list of key-value pairs that flows from the root sink through possible child sinks. Each sink can have an output, a transform, and sinks that it outputs to. Below is a more involved example than the one appearing in the default generated config of what you can configure:

```toml
# This is a top level config section within the main Burrow config
[logging]
  # All log lines are sent to the root sink from all sources
  [logging.root_sink]
    # We define two child sinks that each receive all log lines
    [[logging.root_sink.sinks]]
      # We send all output to stderr
      [logging.root_sink.sinks.output]
        output_type = "stderr"

    [[logging.root_sink.sinks]]
      # But for the second sink we define a transform that filters log lines from Tendermint's p2p module
      [logging.root_sink.sinks.transform]
        transform_type = "filter"
        filter_mode = "exclude_when_all_match"

        [[logging.root_sink.sinks.transform.predicates]]
          key_regex = "module"
          value_regex = "p2p"

        [[logging.root_sink.sinks.transform.predicates]]
          key_regex = "captured_logging_source"
          value_regex = "tendermint_log15"

      # The child sinks of this filter transform sink are syslog and file and will omit log lines originating from p2p
      [[logging.root_sink.sinks.sinks]]
        [logging.root_sink.sinks.sinks.output]
          output_type = "syslog"
          url = ""
          tag = "Burrow-network"

      [[logging.root_sink.sinks.sinks]]
        [logging.root_sink.sinks.sinks.output]
          output_type = "file"
          path = "/var/log/burrow-network.log"
```

## Contribute

We welcome any and all contributions. Read the [contributing file](.github/CONTRIBUTING.md) for more information on making your first Pull Request to Burrow!

You can find us on:
- [Hyperledger Chat](https://chat.hyperledger.org)
- [Hyperledger Mailing List](https://lists.hyperledger.org/mailman/listinfo)
- [here on Github](https://github.com/hyperledger/burrow/issues)

## Future work

For some (slightly outdated) ideas on future work, see the [proposals document](./docs/PROPOSALS.md).

## License

[Apache 2.0](LICENSE.md)
