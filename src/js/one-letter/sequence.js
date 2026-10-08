// Design 04 · One Letter: the letters on the strand.
//
// The stretch the camera stops at is real. HBB is the reference transcript of the gene for the
// beta chain of haemoglobin (NCBI Reference Sequence NM_000518.5, 628 letters, written here as DNA).
// Its protein-coding part starts at the ATG; twenty letters in, the A of the codon GAG is the letter
// that is a T in sickle cell disease.
//
// The strand runs on before and after the gene, as DNA does. Those letters are filler, generated
// from a fixed seed so that every visit sees the same strand; they are not a real sequence.

export const HBB = [
  'ACATTTGCTTCTGACACAACTGTGTTCACTAGCAACCTCAAACAGACACCATGGTGCATCTGACTCCTGAGGAGAAGTCT',
  'GCCGTTACTGCCCTGTGGGGCAAGGTGAACGTGGATGAAGTTGGTGGTGAGGCCCTGGGCAGGCTGCTGGTGGTCTACCC',
  'TTGGACCCAGAGGTTCTTTGAGTCCTTTGGGGATCTGTCCACTCCTGATGCTGTTATGGGCAACCCTAAGGTGAAGGCTC',
  'ATGGCAAGAAAGTGCTCGGTGCCTTTAGTGATGGCCTGGCTCACCTGGACAACCTCAAGGGCACCTTTGCCACACTGAGT',
  'GAGCTGCACTGTGACAAGCTGCACGTGGATCCTGAGAACTTCAGGCTCCTGGGCAACGTGCTGGTCTGTGTGCTGGCCCA',
  'TCACTTTGGCAAAGAATTCACCCCACCAGTGCAGGCTGCCTATCAGAAAGTGGTGGCTGGTGTGGCTAATGCCCTGGCCC',
  'ACAAGTATCACTAAGCTCGCTTTCTTGCTGTCCAATTTCTATTAAAGGTTCCTTTGTTCCCTAAGTCCAACTACTAAACT',
  'GGGGGATATTATGAAGGGCCTTGAGCATCTGGATTCTGCCTAATAAAAAACATTTATTTTCATTGCAA',
].join('');

export const CODING_START = 50; // where the start codon ATG begins, counted within HBB
export const SITE_IN_HBB = CODING_START + 19; // the A that is a T in sickle cell disease

const LEAD = 250; // filler letters before the gene
const TAIL = 150; // and after it

export const PAIR = { A: 'T', T: 'A', G: 'C', C: 'G' };

function filler(count, seed) {
  let state = seed >>> 0;
  let letters = '';
  for (let i = 0; i < count; i += 1) {
    state = (Math.imul(state, 1664525) + 1013904223) >>> 0;
    letters += 'ACGT'[state >>> 30];
  }
  return letters;
}

export const STRAND = filler(LEAD, 11) + HBB + filler(TAIL, 29);
export const GENE_AT = LEAD; // index of the gene's first letter on the strand
export const START_AT = LEAD + CODING_START; // index of the A in ATG
export const SITE_AT = LEAD + SITE_IN_HBB; // index of the letter the story is about
