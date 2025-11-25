export function buildNestedComments(comments) {
  const map = {};
  const roots = [];

  // prepare mapping
  comments.forEach((c) => {
    c.replies = [];
    map[c.id] = c;
  });

  // build tree
  comments.forEach((c) => {
    if (c.parent_id) {
      map[c.parent_id]?.replies.push(c);
    } else {
      roots.push(c);
    }
  });

  return roots;
}
