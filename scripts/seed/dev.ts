import db, { genId } from '../../src/modules/db';

const run = async () => {
  await db.post.createMany({
    data: [
      {
        id: genId(),
        slug: 'ultimate-node-stack',
        title: 'Ultimate Node Stack',
        publishedAt: new Date(),
      },
      {
        id: genId(),
        slug: 'draft-post',
        title: 'Draft Post',
      },
    ],
  });
};

// Auto run this module when called directly
if (require.main === module) {
  run().then(() => {
    console.log('Data seed complete');
    process.exit();
  });
}
