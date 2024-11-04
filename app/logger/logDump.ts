import { ConsoleTransportEntry } from "./index";

let entries: ConsoleTransportEntry[] = [];

export function add(entry: ConsoleTransportEntry) {
  entries.unshift(entry);
  entries = entries.slice(0, 500);
}

export function getEntries() {
  return entries;
}
