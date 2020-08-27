export function video(model = {}) {
  return {
    id: model.id,
    iframe: model.iframe_url
  };
}
