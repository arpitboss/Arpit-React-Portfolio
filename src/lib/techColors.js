// Tech tag color palette - each technology gets a unique, softened color scheme
// Designed to be subtle and elegant, not harsh or saturated
// Format: { light: { text, bg, border }, dark: { text, bg, border } }

const techColors = {
  // JavaScript ecosystem
  'Node.js':      { light: { text: '#4D7C5E', bg: '#F0F7F2', border: '#D4E8DA' }, dark: { text: '#7EAE8E', bg: '#1A2B20', border: '#2A3D30' } },
  'Express.js':   { light: { text: '#6B7280', bg: '#F5F5F6', border: '#E2E3E6' }, dark: { text: '#9CA3AF', bg: '#1E2028', border: '#2E3038' } },
  'Next.js':      { light: { text: '#52525B', bg: '#F5F5F6', border: '#E0E0E3' }, dark: { text: '#A1A1AA', bg: '#1E1E22', border: '#2E2E34' } },
  'TypeScript':   { light: { text: '#5B7BB5', bg: '#EFF4FB', border: '#D4E0F0' }, dark: { text: '#8AAAD4', bg: '#1A2234', border: '#263248' } },
  'JavaScript':   { light: { text: '#A08535', bg: '#FBF7EE', border: '#EEE5CC' }, dark: { text: '#C4A84F', bg: '#252018', border: '#3A3020' } },
  'React':        { light: { text: '#4E8D9E', bg: '#EEF7FA', border: '#D0E8EE' }, dark: { text: '#79B5C8', bg: '#182830', border: '#243840' } },

  // Backend/API
  'REST APIs':    { light: { text: '#8B6DB5', bg: '#F4F0FA', border: '#DED4ED' }, dark: { text: '#A88CCF', bg: '#221C30', border: '#332A45' } },
  'REST API':     { light: { text: '#8B6DB5', bg: '#F4F0FA', border: '#DED4ED' }, dark: { text: '#A88CCF', bg: '#221C30', border: '#332A45' } },
  'ASP.NET':      { light: { text: '#8068A8', bg: '#F3F0F8', border: '#DDD6EC' }, dark: { text: '#A08CCB', bg: '#201C2E', border: '#302A42' } },
  'Socket.io':    { light: { text: '#5A6577', bg: '#F2F4F6', border: '#DDE1E6' }, dark: { text: '#8A95A8', bg: '#1C2028', border: '#2A2E38' } },

  // Database
  'MongoDB':      { light: { text: '#4D7C5E', bg: '#F0F7F2', border: '#D4E8DA' }, dark: { text: '#7EAE8E', bg: '#1A2B20', border: '#2A3D30' } },
  'Firebase':     { light: { text: '#B88A55', bg: '#FBF5ED', border: '#EEE0CC' }, dark: { text: '#CDA06A', bg: '#28201A', border: '#3A3025' } },
  'Hive':         { light: { text: '#A08535', bg: '#FAF6ED', border: '#ECE2CA' }, dark: { text: '#C0A04A', bg: '#252018', border: '#383020' } },

  // Mobile
  'Flutter':      { light: { text: '#5B8DB5', bg: '#EFF5FB', border: '#D2E2F0' }, dark: { text: '#82ACD4', bg: '#1A2434', border: '#263448' } },
  'Dart':         { light: { text: '#4E8D9E', bg: '#EEF7FA', border: '#D0E8EE' }, dark: { text: '#79B5C8', bg: '#182830', border: '#243840' } },
  'Provider':     { light: { text: '#6B6DAF', bg: '#F0F0F8', border: '#D8D8EC' }, dark: { text: '#9090CC', bg: '#1E1E30', border: '#2E2E44' } },
  'Bloc':         { light: { text: '#8068A8', bg: '#F4F1FA', border: '#DED6ED' }, dark: { text: '#A08CCB', bg: '#221C30', border: '#322A45' } },

  // DevOps / Tools
  'Docker':       { light: { text: '#5B7BB5', bg: '#EFF4FB', border: '#D4E0F0' }, dark: { text: '#8AAAD4', bg: '#1A2234', border: '#263248' } },
  'RabbitMQ':     { light: { text: '#B88A55', bg: '#FBF5ED', border: '#EEE0CC' }, dark: { text: '#CDA06A', bg: '#28201A', border: '#3A3025' } },
  'Gemini API':   { light: { text: '#5B7BB5', bg: '#F0F4FA', border: '#D6E2F0' }, dark: { text: '#8AAAD4', bg: '#1A2234', border: '#263248' } },
};

// Fallback for any tech not in the map
const fallback = {
  light: { text: '#7A7F88', bg: '#F6F6F7', border: '#E6E7EA' },
  dark:  { text: '#8A8F98', bg: '#1C1E24', border: '#2A2D35' },
};

export const getTechTagColor = (tech, isDark = false) => {
  const colors = techColors[tech] || fallback;
  return isDark ? colors.dark : colors.light;
};

export default techColors;
