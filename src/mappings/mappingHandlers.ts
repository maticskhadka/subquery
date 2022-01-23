import {SubstrateEvent} from "@subql/types";
import {StakingReward} from "../types";



export async function handleStakingRewarded(event: any): Promise<void> {
const {event:{data:[account,newReward]}}=event;
const entity = new StakingReward(`${event.block.block.header.number}-${event.idx.toString()}`);
entity.account=account.toString();
entity.date=event.block.timestamp;
entity.blockHeight= event.block.block.header.number.toNumber();
await entity.save();
}




