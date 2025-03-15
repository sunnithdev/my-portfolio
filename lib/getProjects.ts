import { client } from "../sanity/lib/client";

export async function getProjects() {
  const query = `*[_type == "project"] {
    _id,
    title,
    description,
    "image": image.asset->url,
    technologies,
    link
  }`;

  const projects = await client.fetch(query);
  return projects;
}