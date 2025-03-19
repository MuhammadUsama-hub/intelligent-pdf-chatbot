export const chunkText = (
  text: string,
  maxChunkSize = 1500,
  minChunkSize = 500
): string[] => {
  const chunks: string[] = [];
  let currentChunk = "";

  const paragraphs = text
    .split("\n\n")
    .map((p) => p.trim())
    .filter((p) => p.length > 0);

  for (const paragraph of paragraphs) {
    if (currentChunk.length + paragraph.length + 2 <= maxChunkSize) {
      currentChunk += (currentChunk ? "\n\n" : "") + paragraph;
    } else {
      if (currentChunk.length >= minChunkSize) {
        chunks.push(currentChunk);
        currentChunk = paragraph; // Start new chunk
      } else {
        currentChunk += "\n\n" + paragraph;
      }
    }
  }

  if (currentChunk.length > 0) chunks.push(currentChunk);

  return chunks;
};
