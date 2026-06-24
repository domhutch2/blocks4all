import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './browse.module.css';

type Procedure = {
  name: string;
  to: string;
};

type Region = {
  title: string;
  icon: string;
  to: string;
  procedures: Procedure[];
};

const regions: Region[] = [
  {
    title: 'Upper Limb',
    icon: '\u{1F4AA}',
    to: '/docs/category/upper-limb',
    procedures: [
      {name: 'Shoulder Arthroscopy', to: '/docs/upper-limb/shoulder-arthroscopy'},
      {name: 'Elbow Surgery', to: '/docs/upper-limb/elbow-surgery'},
      {name: 'ORIF Distal Radius', to: '/docs/upper-limb/distal-radius-orif'},
      {name: 'Carpal Tunnel Release', to: '/docs/upper-limb/carpal-tunnel-release'},
      {name: 'Hand & Plastics Trauma', to: '/docs/upper-limb/hand-trauma'},
      {name: 'Vascular Access (AV Fistula)', to: '/docs/upper-limb/vascular-access-surgery'},
    ],
  },
  {
    title: 'Lower Limb',
    icon: '\u{1F9B5}',
    to: '/docs/category/lower-limb',
    procedures: [
      {name: 'Total Knee Replacement', to: '/docs/lower-limb/total-knee-replacement'},
      {name: 'Hip Arthroplasty / NOF', to: '/docs/lower-limb/hip-arthroplasty'},
      {name: 'Ankle ORIF', to: '/docs/lower-limb/ankle-orif'},
      {name: 'Foot Surgery', to: '/docs/lower-limb/foot-surgery'},
      {name: 'Above Knee Amputation', to: '/docs/lower-limb/above-knee-amputation'},
      {name: 'Peripheral Vascular Surgery', to: '/docs/lower-limb/peripheral-vascular-surgery'},
    ],
  },
  {
    title: 'Trunk',
    icon: '\u{1FAC1}',
    to: '/docs/category/trunk',
    procedures: [
      {name: 'Laparotomy', to: '/docs/trunk/laparotomy'},
      {name: 'Mastectomy & Breast Surgery', to: '/docs/trunk/mastectomy'},
      {name: 'Rib Fractures', to: '/docs/trunk/rib-fractures'},
      {name: 'Inguinal Hernia Repair', to: '/docs/trunk/inguinal-hernia-repair'},
    ],
  },
  {
    title: 'Obstetrics',
    icon: '\u{1F930}',
    to: '/docs/category/obstetrics',
    procedures: [
      {name: 'Caesarean Section', to: '/docs/obstetrics/caesarean-section'},
    ],
  },
  {
    title: 'Head & Neck',
    icon: '\u{1F9E0}',
    to: '/docs/category/head--neck',
    procedures: [
      {name: 'Thyroidectomy', to: '/docs/head-and-neck/thyroidectomy'},
    ],
  },
];

function RegionCard({title, icon, to, procedures}: Region): ReactNode {
  return (
    <div className="col col--6" style={{marginBottom: '1.5rem'}}>
      <div className={styles.regionCard}>
        <Link to={to} className={styles.regionHeaderLink}>
          <div className={styles.regionHeader}>
            <span className={styles.regionIcon}>{icon}</span>
            <Heading as="h2" className={styles.regionTitle}>{title}</Heading>
          </div>
        </Link>
        <ul className={styles.blockList}>
          {procedures.map((proc, idx) => (
            <li key={idx}><Link to={proc.to} className={styles.procLink}>{proc.name}</Link></li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Browse(): ReactNode {
  return (
    <Layout
      title="Browse by Region"
      description="Find procedures by body region">
      <main className={styles.main}>
        <div className="container">
          <Heading as="h1" className={styles.pageTitle}>Browse by Region</Heading>
          <p className={styles.subtitle}>Select a procedure to see the recommended regional technique.</p>
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
