import ts, { factory } from 'typescript';
import { ABI } from "../contracts/abi";
import { callerTypes, createCallerFunction } from './lib/caller';
import { declareContractType, generateContractObject } from './lib/contract';
import { generateDecodeObject } from './lib/decoder';
import {
  bytecodeName,
  deployedBytecodeName,
  generateDeployContractFunction,
  generateDeployFunction,
} from './lib/deployer';
import { generateEncodeObject } from './lib/encoder';
import { declareEvents, eventTypes } from './lib/events';
import { Provider } from './lib/provider';
import { getContractMethods } from './lib/solidity';
import { declareConstant, ExportToken, importBurrow, importReadable } from './lib/syntax';
import Func = ABI.Func;

export { decodeOutput, encodeInput, importLocalResolver, inputDescriptionFromFiles, tokenizeLinks } from '../contracts/compile';

export type Compiled = {
  name: string;
  abi: ABI.FunctionOrEvent[];
  bytecode: string;
  deployedBytecode: string;
  links: Array<string>;
};

const contractNameName = factory.createIdentifier('contactName');
const abiName = factory.createIdentifier('abi');

// Note: this is a very useful tool for discovering the correct Typescript factory API calls to produce a particular
//piece of syntax: https://ts-ast-viewer.com
export function newFile(contracts: Compiled[], burrowImportPath: string): ts.Node[] {
  const provider = new Provider();

  const contractNames = contracts.map((c) => factory.createIdentifier(c.name));
  return [
    ts.addSyntheticLeadingComment(
      importReadable(),
      ts.SyntaxKind.SingleLineCommentTrivia,
      'Code generated by solts. DO NOT EDIT.',
    ),
    importBurrow(burrowImportPath),
    provider.createInterface(),
    ...callerTypes,
    createCallerFunction(provider),
    ...contracts.map((contract) => {
      const methods = getContractMethods(contract.abi);

      const deploy = contract.abi.find((abi): abi is Func => abi.type === 'constructor');

      // No deploy function for interfaces
      const deployMembers = contract.bytecode
        ? [
            declareConstant(bytecodeName, factory.createStringLiteral(contract.bytecode, true), true),
            declareConstant(deployedBytecodeName, factory.createStringLiteral(contract.deployedBytecode, true), true),
            generateDeployFunction(deploy, contract.links, provider, abiName, contractNames),
            generateDeployContractFunction(deploy, contract.links, provider),
          ]
        : [];

      const events = methods.filter((a) => a.type === 'event');

      const eventMembers = events.length ? [...eventTypes(), declareEvents(events)] : [];

      const statements = [
        declareConstant(contractNameName, factory.createStringLiteral(contract.name), true),
        declareConstant(abiName, factory.createStringLiteral(JSON.stringify(contract.abi), true), true),
        ...deployMembers,
        ...eventMembers,
        declareContractType(),
        generateContractObject(contractNameName, methods, provider),
        generateEncodeObject(methods, provider, abiName),
        generateDecodeObject(methods, provider, abiName),
      ];
      return factory.createModuleDeclaration(
        undefined,
        [ExportToken],
        factory.createIdentifier(contract.name),
        factory.createModuleBlock(statements),
      );
    }),
  ];
}

export function printNodes(...nodes: ts.Node[]): string {
  const target = ts.createSourceFile('', '', ts.ScriptTarget.Latest, false, ts.ScriptKind.TS);
  const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });
  return nodes.map((node) => printer.printNode(ts.EmitHint.Unspecified, node, target)).join('\n');
}