export function resolvePath(path) {
  const link = document.createElement("a");
  link.href = path;
  return link.href;
}
