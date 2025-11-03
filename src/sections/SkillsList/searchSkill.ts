function normalizeString(str: string): string {
  return (
    str
      // case insensitivity
      .toLowerCase()
      // diacritic insensitivity
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      // normalize spaces, hyphens, underscores
      .replace(/[-_\s]+/g, ' ')
  );
}

export function searchSkill (searchInput: string, contentArray: string[][]) {
  const normalizedInput = normalizeString(searchInput);

  return contentArray.filter(synonyms => {
    const unitedSynonyms = synonyms.reduce((arr: string, synonym) => arr.concat(' ', synonym), '');
    const normalizedUnitedSynonyms = normalizeString(unitedSynonyms);
    if (normalizedUnitedSynonyms.includes(normalizedInput)) return true;

    return false;
  }).map((item) => item[0]);
}