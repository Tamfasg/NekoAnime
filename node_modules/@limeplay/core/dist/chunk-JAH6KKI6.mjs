// src/utils/get-duration.ts
function getDuration(player) {
  const seekRange = player.seekRange();
  return seekRange.end - seekRange.start;
}

export {
  getDuration
};
