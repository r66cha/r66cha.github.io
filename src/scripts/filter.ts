// Текстовый фильтр: кнопки внутри [data-filter="<id списка>"], элементы списка с data-tag.
// Строки [data-info-for="<id списка>"][data-info="<ключ>"] показываются только на своей вкладке.
document.querySelectorAll<HTMLElement>('[data-filter]').forEach((group) => {
  const id = group.dataset.filter ?? '';
  const list = document.getElementById(id);
  const infos = document.querySelectorAll<HTMLElement>(`[data-info-for="${id}"]`);

  group.addEventListener('click', (event) => {
    const button = (event.target as HTMLElement).closest('button');
    if (!button) return;

    group.querySelectorAll('button').forEach((b) => b.setAttribute('aria-pressed', String(b === button)));
    const key = button.dataset.key;
    if (list && key) list.dataset.active = key;
    list?.querySelectorAll<HTMLElement>('[data-tag]').forEach((item) => {
      item.hidden = key !== 'all' && item.dataset.tag !== key;
    });
    infos.forEach((info) => {
      info.hidden = info.dataset.info !== key;
    });
  });
});
