import { permanentRedirect } from 'next/navigation';

const NotFound = () => permanentRedirect('/');

export default NotFound;
