const emojis = ['🍆', '🤠', '🥳', '🥸', '🙂', '😝', '🤑', '😎', '🤓', '🧐', '😺', '😸', '😹', '😻', '😼', '🙀', '😿', '😾', '😤', '😡', '😠', '🤬', '😈', '👿', '💀']

export const getEmoji = () => emojis[~~(Math.random() * emojis.length)]