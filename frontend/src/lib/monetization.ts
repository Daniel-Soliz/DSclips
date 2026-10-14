export function parseFalseEnabled(value: string | undefined): boolean {
  return value?.trim().toLowerCase() === "false";
}

export const monetizationEnabled = false; // Personal self-hosted DSclips
