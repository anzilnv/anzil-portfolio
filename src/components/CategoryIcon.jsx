import { Database, Monitor, Server, Wrench } from 'lucide-react';

const icons = {
  frontend: Monitor,
  backend: Server,
  database: Database,
  tools: Wrench,
};

/** Maps the `icon` keys used in src/data/portfolio.js to lucide icons. */
function CategoryIcon({ name, size = 22 }) {
  const Icon = icons[name] ?? Monitor;
  return <Icon size={size} aria-hidden="true" />;
}

export default CategoryIcon;
