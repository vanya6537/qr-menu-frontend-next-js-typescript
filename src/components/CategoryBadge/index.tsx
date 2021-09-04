import { Data } from '@/pages/api/getMenu';
import CategoryBadge from '@/components/CategoryBadge/CategoryBadge';

import styles from './CategoryBadge.module.css';

type Props = { menu: Data };

export default function BadgeList({ menu }: Props): JSX.Element {
  return (
    <>
      <div className={styles.badgeWrapper}>
        <ul className={styles.badgeList}>
          {menu.map(({ name: categoryName, id: categoryID }) => (
            <li className={styles.badge} key={`${categoryID}`}>
              <CategoryBadge id={categoryID} title={categoryName} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
