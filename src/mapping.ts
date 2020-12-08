import { BigInt } from "@graphprotocol/graph-ts"
import {
  Amp,
  Approval,
  ApprovalByPartition,
  AuthorizedOperator,
  AuthorizedOperatorByPartition,
  ChangedPartition,
  CollateralManagerRegistered,
  Minted,
  OwnerUpdate,
  OwnershipTransferAuthorization,
  PartitionStrategySet,
  RevokedOperator,
  RevokedOperatorByPartition,
  Swap,
  Transfer,
  TransferByPartition
} from "../generated/Amp/Amp"

import {Transfer1,Approval1} from "../generated/schema"

//export function handleApproval(event: Approval): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  //let entity = ExampleEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  //if (entity == null) {
    //entity = new ExampleEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    //entity.count = BigInt.fromI32(0)
  //}

  // BigInt and BigDecimal math are supported
  //entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  //entity.owner = event.params.owner
  //entity.spender = event.params.spender

  // Entities can be written to the store with `.save()`
  //entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.allowance(...)
  // - contract.allowanceByPartition(...)
  // - contract.approve(...)
  // - contract.approveByPartition(...)
  // - contract.authorizedNewOwner(...)
  // - contract.balanceOf(...)
  // - contract.balanceOfByPartition(...)
  // - contract.canImplementInterfaceForAddress(...)
  // - contract.collateralManagers(...)
  // - contract.decimals(...)
  // - contract.decreaseAllowance(...)
  // - contract.decreaseAllowanceByPartition(...)
  // - contract.defaultPartition(...)
  // - contract.granularity(...)
  // - contract.increaseAllowance(...)
  // - contract.increaseAllowanceByPartition(...)
  // - contract.isCollateralManager(...)
  // - contract.isOperator(...)
  // - contract.isOperatorForCollateralManager(...)
  // - contract.isOperatorForPartition(...)
  // - contract.isPartitionStrategy(...)
  // - contract.name(...)
  // - contract.owner(...)
  // - contract.partitionStrategies(...)
  // - contract.partitionsOf(...)
  // - contract.swapToken(...)
  // - contract.swapTokenGraveyard(...)
  // - contract.symbol(...)
  // - contract.totalPartitions(...)
  // - contract.totalSupply(...)
  // - contract.totalSupplyByPartition(...)
  // - contract.transfer(...)
  // - contract.transferByPartition(...)
  // - contract.transferFrom(...)
//}

export function handleApprovalByPartition(event: ApprovalByPartition): void {}

export function handleAuthorizedOperator(event: AuthorizedOperator): void {}

export function handleAuthorizedOperatorByPartition(
  event: AuthorizedOperatorByPartition
): void {}

export function handleChangedPartition(event: ChangedPartition): void {}

export function handleCollateralManagerRegistered(
  event: CollateralManagerRegistered
): void {}

export function handleMinted(event: Minted): void {}

export function handleOwnerUpdate(event: OwnerUpdate): void {}

export function handleOwnershipTransferAuthorization(
  event: OwnershipTransferAuthorization
): void {}

export function handlePartitionStrategySet(event: PartitionStrategySet): void {}

export function handleRevokedOperator(event: RevokedOperator): void {}

export function handleRevokedOperatorByPartition(
  event: RevokedOperatorByPartition
): void {}

export function handleSwap(event: Swap): void {}

export function handleTransferByPartition(event: TransferByPartition): void {}

export function handleTransfer (event: Transfer): void{
  let transfer1 = new Transfer1(event.transaction.hash.toHex())
  transfer1.value =  event.params.value
  transfer1.from = event.params.from
  transfer1.to = event.params.to
  transfer1.value = event.transaction.value
  transfer1.timestamp = event.block.timestamp
  transfer1.save()
}

export function handleApproval (event: Approval): void{
  let approval1 = new Approval1(event.transaction.hash.toHex())
  approval1.value = event.params.value
  approval1.owner = event.params.owner
  approval1.spender = event.params.spender
  approval1.timestamp = event.block.timestamp
  approval1.save()

}