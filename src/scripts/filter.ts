// Текстовый фильтр: кнопки внутри [data-filter="<id списка>"], элементы списка с data-tag.
document.querySelectorAll<HTMLElement>('[data-filter]').forEach((group) => {
  const list = document.getElementById(group.dataset.filter ?? '');
  if (!list) return;

  group.addEventListener('click', (event) => {
    const button = (event.target as HTMLElement).closest('button');
    if (!button) return;

    group.querySelectorAll('button').forEach((b) => b.setAttribute('aria-pressed', String(b === button)));
    const key = button.dataset.key;
    list.querySelectorAll<HTMLElement>('[data-tag]').forEach((item) => {
      item.hidden = key !== 'all' && item.dataset.tag !== key;
    });
  });
});
