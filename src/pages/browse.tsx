import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './browse.module.css';

type Region = {
  title: string;
  icon: string;
  to: string;
  blocks: string[];
};

const regions: Region[] = [
  {
    title: 'Upper Limb',
    icon: '\u{1F4AA}',
    to: '/docs/category/upper-limb',
    blocks: [
      'Interscalene',
      'Supraclavicular',
      'Axillary',
      'Wrist blocks',
      'WALANT',
    ],
  },
  {
    title: 'Lower Limb',
    icon: '\u{1F9B5}',
    to: '/docs/category/lower-limb',
    blocks: [
      'Fascia iliaca / PENG',
      'Adductor canal',
      'iPACK',
      'Popliteal sciatic',
      'Saphenous',
      'Ankle block',
      'Sciatic catheter',
    ],
  },
  {
    title: 'Trunk',
    icon: '\u{1FAC1}',
    to: '/docs/category/trunk',
    blocks: [
      'Thoracic epidural',
      'Paravertebral',
      'PECS I & II',
      'Serratus anterior plane',
      'Erector spinae plane',
      'TAP',
      'Rectus sheath',
      'Quadratus lumborum',
    ],
  },
  {
    title: 'Head & Neck',
    icon: '\u{1F9E0}',
    to: '/docs/category/head--neck',
    blocks: [
      'Superficial cervical plexus',
    ],
  },
];

function RegionCard({title, icon, to, blocks}: Region): ReactNode {
  return (
    <div className="col col--6" style={{marginBottom: '1.5rem'}}>
      <Link to={to} className={styles.regionCard}>
        <div className={styles.regionHeader}>
          <span className={styles.regionIcon}>{icon}</span>
          <Heading as="h2" className={styles.regionTitle}>{title}</Heading>
        </div>
        <ul className={styles.blockList}>
          {blocks.map((block, idx) => (
            <li key={idx}>{block}</li>
          ))}
        </ul>
      </Link>
    </div>
  );
}

export default function Browse(): ReactNode {
  return (
    <Layout
      title="Browse by Region"
      description="Find blocks by body region">
      <main className={styles.main}>
        <div className="container">
          <Heading as="h1" className={styles.pageTitle}>Browse by Region</Heading>
          <p className={styles.subtitle}>Select a region to see all procedures and their recommended blocks.</p>
          <div className="row">
            {regions.map((region, idx) => (
              <RegionCard key={idx} {...region} />
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}
