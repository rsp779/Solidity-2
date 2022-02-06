"user@user-PC MINGW32 ~/Desktop/ethereum/web
$ truffle migrate --network rinkeby
bigint: Failed to load bindings, pure JS will be used (try npm run rebuild?)
This version of µWS is not compatible with your Node.js build:

Error: Cannot find module './uws_win32_ia32_72.node'
Falling back to a NodeJS implementation; performance may be degraded.



Compiling your contracts...
===========================
> Compiling .\contracts\Migrations.sol
> Compiling .\contracts\demo.sol
> Artifacts written to C:\Users\user\Desktop\ethereum\web\build\contracts
> Compiled successfully using:
   - solc: 0.8.11+commit.d7f03943.Emscripten.clang



Starting migrations...
======================
> Network name:    'rinkeby'
> Network id:      4
> Block gas limit: 29999943 (0x1c9c347)


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   ⠋ Blocks: 0            Seconds: 0   > transaction hash:    0xc4b09f5a5d37b33b51f14a47bc2324c1b7e21e5f81c65270d0e4117ba386ae82
   ⠹ Blocks: 0            Seconds: 0undefined
   > Blocks: 0            Seconds: 4
   > contract address:    0x3130287645E6326C93de6DA5E6708Ed270b61d51
   > block number:        10123486
   > block timestamp:     1644174640
   > account:             0x8A90e3c0922a6c4F55Dd895ec868EC8f7938f77b
   > balance:             1.699353644996620296
   > gas used:            250142 (0x3d11e)
   > gas price:           2.500000012 gwei
   > value sent:          0 ETH
   > total cost:          0.000625355003001704 ETH

   Pausing for 2 confirmations...

   -------------------------------
   > confirmation number: 1 (block: 10123487)
   > confirmation number: 2 (block: 10123488)

   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:     0.000625355003001704 ETH


2_demo_migration.js
===================

   Deploying 'demo'
   ----------------
   ⠋ Blocks: 0            Seconds: 0   > transaction hash:    0xa2a58a6cc77698838ac60713efab4de2c124218842ff5696417eedfdb6015061
   ⠧ Blocks: 0            Seconds: 0undefined
   ⠧ Blocks: 0            Seconds: 4undefined
   > Blocks: 0            Seconds: 8
   > contract address:    0x7CC7C3A9B0079018b5ff0201E61Ba9d8d47De410
   > block number:        10123490
   > block timestamp:     1644174700
   > account:             0x8A90e3c0922a6c4F55Dd895ec868EC8f7938f77b
   > balance:             1.698924729994858723
   > gas used:            125653 (0x1ead5)
   > gas price:           2.50000001 gwei
   > value sent:          0 ETH
   > total cost:          0.00031413250125653 ETH

   Pausing for 2 confirmations...

   -------------------------------
   > confirmation number: 1 (block: 10123491)
   > confirmation number: 2 (block: 10123492)

   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:     0.00031413250125653 ETH

Summary
=======
> Total deployments:   2
> Final cost:          0.000939487504258234 ETH"