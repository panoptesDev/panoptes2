import React from "react";
import {
  TransactionInstruction,
  SystemProgram,
  SignatureResult,
  SystemInstruction,
} from "@solana/web3.js";
import { lamportsToSafeString } from "utils";
import { InstructionCard } from "../InstructionCard";
import { UnknownDetailsCard } from "../UnknownDetailsCard";
import { Address } from "components/common/Address";

export function CreateDetailsCard(props: {
  ix: TransactionInstruction;
  index: number;
  result: SignatureResult;
}) {
  const { ix, index, result } = props;

  let params;
  try {
    params = SystemInstruction.decodeCreateAccount(ix);
  } catch (err) {
    console.error(err);
    return <UnknownDetailsCard {...props} />;
  }

  return (
    <InstructionCard
      ix={ix}
      index={index}
      result={result}
      title="Create Account"
    >
      <tr>
        <td>Program</td>
        <td className="text-lg-right">
          <Address pubkey={SystemProgram.programId} alignRight link />
        </td>
      </tr>

      <tr>
        <td>From Address</td>
        <td className="text-lg-right">
          <Address pubkey={params.fromPubkey} alignRight link />
        </td>
      </tr>

      <tr>
        <td>New Address</td>
        <td className="text-lg-right">
          <Address pubkey={params.newAccountPubkey} alignRight link />
        </td>
      </tr>

      <tr>
        <td>Transfer Amount (PANO)</td>
        <td className="text-lg-right">
          {lamportsToSafeString(params.lamports)}
        </td>
      </tr>

      <tr>
        <td>Allocated Space (Bytes)</td>
        <td className="text-lg-right">{params.space}</td>
      </tr>

      <tr>
        <td>Assigned Owner</td>
        <td className="text-lg-right">
          <Address pubkey={params.programId} alignRight link />
        </td>
      </tr>
    </InstructionCard>
  );
}
