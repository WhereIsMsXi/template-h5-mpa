let count = 0;
export function startLoading() {
  // @ts-ignore
  showLoadingToast({
    message: '加载中...',
    forbidClick: true,
    duration: 0,
  });
}
function stopLoading() {
  // @ts-ignore
  closeToast();
}
export function addLoading() {
  if (count === 0) {
    startLoading();
  }
  count += 1;
}
export function subtractLoading() {
  if (count <= 0) return;
  count -= 1;
  if (count === 0) {
    stopLoading();
  }
}
