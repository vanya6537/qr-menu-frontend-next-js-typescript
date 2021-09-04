import { Link } from 'react-scroll';

type CategoryBadgeProps = {
  id: string;
  title: string;
};

export default function CategoryBadge({
  id,
  title,
}: CategoryBadgeProps): JSX.Element {
  return (
    <Link to={id} smooth>
      {title}
    </Link>
  );
}
