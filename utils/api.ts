export async function getVilles() {
  const res = await fetch(
    'https://geo.api.gouv.fr/departements/59/communes?fields=nom,population'
  );

  return res.json();
}