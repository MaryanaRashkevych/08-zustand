 import css from './not-found.module.css'
import Link from 'next/link';

const NotFound = () => {
  return (
    <div>
      <h1 className={css.title}>404 - Page not found</h1>
<p className={css.description}>Sorry, the page you are looking for does not exist. <Link href="/">  Go back home</Link></p>
     </div>
  );
};

export default NotFound;

