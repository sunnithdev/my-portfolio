// scripts/importProjects.ts
import { createClient } from '@sanity/client';
import { allProjects } from '../constants/all-projects'; // Adjust the path to your data

const client = createClient({
  projectId: '49q96tdt', // Replace with your Sanity project ID
  dataset: 'projects', // Replace with your dataset name
  token: 'sknjRYhD4sAyUu565DoIWKFi0SYQiWvHr7VJ4Q0Vj7aK7ZI8cV55KmJtfkh8RVDYtR3zISLoiFCF28GTUWE0Jcv8dBif1anvYvurZa1PMG43VifHd2xJCtP6bgPF9ojNHdcDD36Ml3LmAMO2xbynxLzMQYI1YDpffawIwNNNPxdQ8EHNM98D', // Replace with your Sanity token
  useCdn: false, // Ensure fresh data
});

async function importProjects() {
  try {
    for (const project of allProjects) {
      const doc = {
        _type: 'project',
        title: project.title,
        description: project.description,
        technologies: project.technologies,
        link: project.link,
      };

      await client.create(doc);
    }
  } catch (error) {
    // Error handling without logging
  }
}

importProjects();