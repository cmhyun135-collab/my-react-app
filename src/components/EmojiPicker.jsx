import './EmojiPicker.css';

const emojiData = [
  { char: '😊', color: '#FEF9E7' },
  { char: '😢', color: '#EBF5FB' },
  { char: '😡', color: '#FDEDEC' },
  { char: '😴', color: '#F0F3F4' },
  { char: '🤩', color: '#EAFAF1' },
];

function EmojiPicker({ selectedEmoji, onSelect }) {
  const getBackgroundColor = () => {
    return selectedEmoji ? selectedEmoji.color : '#FFFFFF';
  };

  return (
    <div className="emoji-picker-container">
      <div className="emoji-list">
        {emojiData.map((emoji) => (
          <span
            key={emoji.char}
            className={`emoji-item ${selectedEmoji?.char === emoji.char ? 'selected' : ''}`}
            onClick={() => onSelect(emoji)}
          >
            {emoji.char}
          </span>
        ))}
      </div>

      <div 
        className="status-card" 
        style={{ backgroundColor: getBackgroundColor() }}
      >
        {selectedEmoji ? (
          <>
            <span className="current-emoji">{selectedEmoji.char}</span>
            <p className="status-text">지금 이런 기분이에요</p>
          </>
        ) : (
          <p className="placeholder-text">이모지를 선택해보세요!</p>
        )}
      </div>
    </div>
  );
}

export default EmojiPicker;
