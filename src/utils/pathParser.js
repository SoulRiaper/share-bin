/**
 * Разбирает хеш-путь по заданному шаблону.
 * 
 * @param {string} path - Путь (например, "#/edit/some-id").
 * @param {string} pattern - Шаблон (например, "/:mode/:id").
 * @returns {Object} - Объект с параметрами (например, { mode: "edit", id: "some-id" }).
 */
function parsePath(path, pattern) {
  const pathParts = path.replace(/^#/, '').split('/').filter(Boolean);
  const patternParts = pattern.split('/').filter(Boolean);

  if (pathParts.length !== patternParts.length) {
    console.log(path, pattern);
    console.warn('Количество сегментов пути и шаблона не совпадает!');
    return null;
  }

  const result = {};
  for (let i = 0; i < patternParts.length; i++) {
    if (patternParts[i].startsWith(':')) {
    const paramName = patternParts[i].slice(1);
    result[paramName] = pathParts[i];
    } else if (patternParts[i] !== pathParts[i]) {
    console.warn(`Несоответствие в сегменте ${i}: ожидалось "${patternParts[i]}", получено "${pathParts[i]}"`);
    return null;
    }
  }
  return result;
}

export default parsePath