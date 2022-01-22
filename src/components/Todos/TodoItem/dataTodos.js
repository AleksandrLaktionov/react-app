export default async function getTodos(url) {
  try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('Запрос не прошёл')
      const result = await response.json()
      return result
  }
  catch (e) {
      console.log('Ошибка:', e.message)
  }
}