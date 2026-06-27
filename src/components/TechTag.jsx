import { useTheme } from '../context/ThemeContext';
import { getTechTagColor } from '../lib/techColors';

const TechTag = ({ name, variant = 'default' }) => {
  const { isDark } = useTheme();
  const colors = getTechTagColor(name, isDark);

  const baseClasses = variant === 'pill'
    ? 'text-xs font-medium px-3 py-1.5 rounded-full border transition-all duration-200 cursor-default'
    : 'tech-tag';

  return (
    <span
      className={baseClasses}
      style={{
        color: colors.text,
        backgroundColor: colors.bg,
        borderColor: colors.border,
      }}
    >
      {name}
    </span>
  );
};

export default TechTag;
