export default async function handler(req, res) {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ error: "Missing 'title'" });
  }

  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

  return res.status(200).json({ slug });
}
